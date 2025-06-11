/**Syarat import
 * Harus meng-import function/method tersebut
 * Function/method tersebut sudah di-export
 */

/**Import default modul */
import myFunction from "./export.mjs";
import result from './export.mjs';

/**Menggunakan named import
 * Saat menggunakan named import, pastikan nama fungsi yang ingin diimpor sesuai.
*/
import { myFunction2 } from './export.mjs';

/**Ketika menggunakan maed import, selain memastikan nama function
 * sesuai, kita juga akan menuliskan nama function yang diimpor dalam
 * kurung kurawal {}. Selain itu, kita juga dapat mengimport lebih dari
 * satu function/method/variabel.
 */

import {name, email, age} from './export.mjs';

/**Cara lain menggunakan import yaitu dengan "import *" 
 * Import * dapat dilakukan ketika function/method/variabel yang ingin
 * kita impor dari modul yang sama sangat banyak.
*/

import * as myImport from './export.mjs';

/**as merupakan keyword untuk import alias. Import alias digunakan
 * untuk mengubah nama dari function/method/variabel yang berasal
 * dari modul lain menjadi nama yang kita inginkan. Tujuan dari 
 * import alias adalah mempermudah ketika kita memiliki nama function/
 * method/variable yang sama di beberapa modul.
 */

myFunction();
result();
myFunction2();

console.log(name);
console.log(email);
console.log(age);

console.log(myImport.name);
console.log(myImport.email);
console.log(myImport.age);

/**
 * Mengimport nilai dari default export tidak membuthkan kurung kurawal.
 * Secara teknis, kita bisa mengekspor lebih dari satu fungsi, metode, 
 * atau variabel, tetapi hal ini tidak disarankan ketika menggunakan 
 * export default. Sebaiknya, ketika menggunakan default export, satu
 * modul satu nilai. Di JS, satu modul hanya bisa memiliki satu default
 * export. Tujuan dari hal ini adalah agar struktur kode lebih jelas
 * dan memudahkan navigasi ketika ingin mencari suatu modul.
 */