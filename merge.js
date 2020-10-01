const fs = require('fs');

const gameTagsPl = require('./tags-with-id-pl.json')
const gameTagsEng = require('./tags-with-id-eng.json');

const newTags = gameTagsEng.map(tag => {
    const polishTag = gameTagsPl.find(plTag => plTag.dataId === tag.dataId);
    return {
        id: tag.id,
        text: {
            pl: polishTag.value,
            en: tag.value,
        }
    }
});

const json = JSON.stringify(newTags);

fs.writeFile('merged-tags.json', json, 'utf8', () => {
    console.log('I think everything went fine?');
});
