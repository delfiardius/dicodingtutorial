export default function myFunction() {
    console.log('Ini adalah function export default.');
}

export function myFunction2() {
    console.log('Ini adalah function export dengan named import.');
}

const name = 'Delfi';
const email = 'delfi@gmail.com';
const age = '26';

export {name, email, age};