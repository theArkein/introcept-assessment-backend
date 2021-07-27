import * as fs from 'fs';
import * as csvjson from 'csvjson';

export const save = (
    filepath: string,
    data: object
): object => {
    try {

        // if file doesn't exists create file and write column values
        if (!fs.existsSync(filepath)) {
            let columnNames = JSON.stringify(Object.keys(data)).slice(1, -1);
            fs.writeFileSync(`${filepath}`, columnNames,)
        }
        // write column values
        let columnValues = JSON.stringify(Object.values(data)).slice(1, -1);
        fs.writeFileSync(`${filepath}`, `\n${columnValues}`, { flag: 'a' })
        return {
            data,
            error: null
        }
    } catch (error) {
        return {
            data: null,
            error: true,
            message: error.message || "Something went wrong"
        }
    }
}

export const read = (
    filepath: string
): object => {
    try {
        // if file doesn't exists return
        if (!fs.existsSync(filepath)) {
            return {
                data: null,
                error: true,
                message: "filepath doesn't exists"
            }
        }

        // read csv data from file and convert to json
        let dataString = fs.readFileSync(filepath, {}).toString();
        let data = csvjson.toObject(dataString, {
            delimiter: ',',
            quote: '"'
        });
        return {
            data,
            error: null,
        }

    } catch (error) {
        console.log(error)
        return {
            data: null,
            error: true,
            message: error.message || "Something went wrong"
        }
    }
}

