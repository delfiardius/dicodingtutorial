/**Pewarisan memungkinkan kita untuk mengurangi menulis kode secara 
 * berulang (tidak efektif). Namun, apakah pewarisan mampu untuk 
 * memecahkan masalah kode yang kompleks? Apakah pewarisan hanya mampu 
 * untuk kasus sesederhana sebelumnya?
*/

/**Misalnya, Anda sedang mengembangkan sebuah video game. Video game 
 * tersebut memiliki banyak karakter seperti monster, wizard dan guardian. 
 * Setiap karakter memiliki kemampuan yang sama yaitu bergerak. Selain 
 * itu, setiap karakter memiliki kemampuan yang unik pada dirinya seperti
 * menyerang, bertahan, dan mengeluarkan sihir. Jika skenario video game 
 * ini kita gambarkan dengan konsep OOP, karakter akan menjadi SuperClass, 
 * sedangkan monster, wizard, dan guardian akan menjadi SubClass seperti 
 * contoh berikut ini. */

class Character {
    constructor(name, health, position) {
        this.name = name;
        this.health = health;
        this.position = position;
    }

    // method
    canMove() {
        console.log(`${this.name} moves to ${this.position}`);
    }
}

class Monster extends Character {
    canAttack() {
        console.log(`${this.name} attacks with a weapon`);
    }
}

class Guardian extends Character {
    canDefend() {
        console.log(`${this.name} defends with a shield!`);
    }
}

class Wizard extends Character {
    canCastSpell() {
        console.log(`${this.name} casts a magic spell!`);
    }
}

/**Oke, tidak ada yang salah dengan implementasi kode tersebut kan? Nah, 
 * timbul masalah ketika kita ingin menambahkan satu karakter lagi, 
 * misalnya karakter warrior. Warrior adalah karakter yang memiliki 
 * kekuatan super, ia bisa menyerang, bertahan, dan bergerak. 
 * 
 * Bagaimana cara kita untuk membuat class Warrior? Anda mungkin menjawab 
 * dengan melakukan pewarisan dari SuperClass Character. Yup, hal itu 
 * benar karena memang itulah satu-satunya cara. */

class Warrior extends Character {
    canAttack() {
        console.log(`${this.name} attacks with a weapon`);
    }

    canDefend() {
        console.log(`${this.name} defends with a shield!`);
    }
}
