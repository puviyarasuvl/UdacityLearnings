import express from 'express';
import { promises as fsPromise, readFile } from 'fs';
import csvtojson from 'csvtojson';

const convert = express.Router();

const readCSV = async () => {
    try {
        const csvFile = await fsPromise.readFile('users.csv', 'utf-8');

        console.log(csvFile);

        const jsonFile = await csvtojson().fromFile('users.csv');

        jsonFile.forEach((element) => {
            if (element.phone === '') {
                element.phone = 'missing data';
            }
        });

        console.log(jsonFile);

        fsPromise.writeFile('users.json', JSON.stringify(jsonFile));
    } catch (err) {
        console.log(err);
    }
};

convert.get('/', (req, res) => {
    res.send('convert.ts');

    readCSV();
});

export default convert;
