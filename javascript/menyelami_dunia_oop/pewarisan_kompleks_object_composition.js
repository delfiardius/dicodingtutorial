
/**Namun, cara tersebut tidak efektif karena ketika kita mengubah 
 * implementasi salah satu method, kita perlu untuk mengubahnya di dua 
 * tempat. Katakanlah, kita mengubah method canAttack(), kita perlu untuk
 * mengubahnya di SubClass Monster dan Warrior. Lantas, apa solusinya? 
 * Solusinya adalah mengubah pewarisan menjadi object composition. */

/**Object Compostion 
 * 
 * Object composition dapat menjadi solusi untuk masalah pewarisan yang 
 * kompleks seperti di kasus polymorphism. Jika sebelumnya, pewarisan 
 * menggunakan pendekatan peran atau identitas dalam menstrukturkan kode, 
 * yakni Monster, Wizard, Warrior, dan Guardian. Ketika menggunakan 
 * object composition, pendekatan yang digunakan adalah berbasis 
 * kemampuan, bukanlah peran atau identitas. 
 * */

/**Kode distrukturkan berdasarkan kemampuan, apakah ia bisa menyerang, 
 * bertahan atau mengeluarkan sihir seperti berikut ini. */

class Character {
  constructor(name, health, position) {
    this.name = name;
    this.health = health;
    this.position = position;
  }
 
  canMove() {
    console.log(`${this.name} moves to another position!`);
  }
}
 
function canAttack(character) {
  return {
    attack: () => {
      console.log(`${character.name} attacks with a weapon!`);
    }
  };
}
 
function canDefend(character) {
  return {
    defend: () => {
      console.log(`${character.name} defends with a shield!`);
    }
  };
}
 
function canCastSpell(character) {
  return {
    castSpell: () => {
      console.log(`${character.name} casts a spell!`);
    }
  };
}
 
function createMonster(name) {
  const character = new Character(name, 100, 0);
  return Object.assign(character, canAttack(character));
}
 
function createGuardian(name) {
  const character = new Character(name, 100, 0);
  return Object.assign(character, canDefend(character));
}
 
function createWizard(name) {
  const character = new Character(name, 100, 0);
  return Object.assign(character, canCastSpell(character));
}
 
function createWarrior(name) {
  const character = new Character(name, 100, 0);
  return Object.assign(character, canAttack(character), canDefend(character));
}
 
const monster = createMonster('Monster');
monster.canMove();
monster.attack();
 
const guardian = createGuardian('Guardian');
guardian.canMove();
guardian.defend();
 
const wizard = createWizard('Wizard');
wizard.canMove();
wizard.castSpell();
 
const warrior = createWarrior('Warrior');
warrior.canMove();
warrior.attack();
warrior.defend();