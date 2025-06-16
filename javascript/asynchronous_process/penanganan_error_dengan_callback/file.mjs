import { readFile } from 'fs';

readFile('./javascript/asynchronous_process/penanganan_error_dengan_callback/sample.txt', (error, data) => {
    if (error) {
        console.log(error);
        return;
    }

    const greeting = data.toString()
    .replace('%name%', 'Dicoding')
    .replace('%your_name%', 'JavaScript');

    console.log(greeting);
})