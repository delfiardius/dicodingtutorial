import { name, favoriteFood as food, sayHello } from "./modul_export_variabel.mjs";

/**Menggunakan keyword * */
import * as user from "./modul_export_variabel.mjs";

console.log(`Username: ${name}`);
console.log(`Favorite foods: ${food}`);
sayHello(name);

console.log(`\nUsername: ${user.name}`);
console.log(`Favorite food: ${user.favoriteFood}`);
user.sayHello(user.name);