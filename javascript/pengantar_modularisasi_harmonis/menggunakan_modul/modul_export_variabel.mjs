/**Export variabel */
/*export*/ const name = 'Delfi';
/*export*/ const favoriteFood = ['pizza', 'pasta', 'sushi'];

/**Export function */
/*export*/ function sayHello(name) {
    console.log(`Hy, ${name}`);
}

/**Agar tidak perlu menulis kata kunci export di setiap nilai yang
 * ingin diekspor, Anda dapat mengekspor di akhir berkas seperti berikut.
 */

export {name, favoriteFood, sayHello};