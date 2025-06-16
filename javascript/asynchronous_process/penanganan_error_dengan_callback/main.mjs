import { makeCoffee, sendCoffee } from "./coffee.mjs";

const order = 'Kopi Espresso';
console.log(`Saya memesan ${order} di kafe.`);

makeCoffee(order, (makeCoffeeError, makeCoffeeData) => {
    if (makeCoffeeError) {
        /**Do Something with error */
        console.error(makeCoffeeError);
        return;
    }
    
    sendCoffee(makeCoffeeData, (sendCoffeeError, sendCoffeeData) => {
        if (sendCoffeeError) {
            /**Do Something with error */
            console.error(sendCoffeeError);
            return;
        }
        console.log(`Pramusaji memberikan ${sendCoffeeData} pesanan.`);
        console.log(`Saya mendapatkan ${sendCoffeeData} dan menghabiskannya`);
    })
});