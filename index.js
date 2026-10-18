import fs from "fs/promises";

async function readJsonFile(filepath) {
    try {

        // using fs.readFile() to read the json file
        // it takes filepath and an encoding paramter (utf8) 
        // encoding paramter will ensure the data returned to us arrives as a standard string
        const rawData = await fs.readFile(filepath , 'utf8');

        // Validating the returned string is a valid JSON or not
        const contentsOfFile = JSON.parse(rawData); 

        // to format JSON.
        const  result = JSON.stringify(contentsOfFile , null , 2);

        console.log(result); // printing the formatted json to the console
    } catch (error) {

        console.log(`error is : ` , error.name); // name of the error
        console.log(`message : ` , error.message); // error message
        console.log(`cause : ` , error.cause); // cause of the error
    }
}

const cliArguments = process.argv; 

const noOfArguments = cliArguments.length;

try {
    if(noOfArguments <= 2) {
        throw new Error("error: please provide a JSON file path")
    }
} catch (error) {
    console.log(error);
}

let filepath = process.argv[2];

filepath = "./" + filepath;

readJsonFile(filepath);