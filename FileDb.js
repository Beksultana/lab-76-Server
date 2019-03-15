const fs = require('fs');
const nanoid = require('nanoid');

const fileName = './messagesDb.json';

let data = [];

module.exports = {
    init() {
        try {
            const fileContents = fs.readFileSync(fileName);
            data =JSON.parse(fileContents)
        }catch (e) {
            data = [];
        }
    },
    getItems() {
        return data;
    },
    addItem(item) {
        const date = new Date().toUTCString();
        const id = nanoid();
        item.id = id;
        item.date = date;
        data.push(item);
        this.save();
    },
    save() {
        fs.writeFileSync(fileName, JSON.stringify(data, null, 2))
    }
};