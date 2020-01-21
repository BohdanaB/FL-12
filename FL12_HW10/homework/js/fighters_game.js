const is0 = 0;
const is101 = 101;
const is1 = 1;

function Fighter(object) {
    this.wins = is0;
    this.Losses = is0;
    let currHP = object.hp;
    this.getName = function() {
        return object.name;
    }
    this.getDamage = function() {
        return object.damage;
    }
    this.getStrength = function() {
        return object.strength;
    }
    this.getAgility = function() {
        return object.agility;
    }
    this.getHealth = function() {
        return currHP;
    }
    this.logCombatHistory = function() {
        console.log(`Name: ${object.name}, Wins: ${this.wins} Losses: ${this.Losses}`)
    }
    this.attack = function(defender) {
        let hit = Math.round(Math.random() * is101);
        if (hit > defender.getStrength() + defender.getAgility()) {
            console.log(`${object.name} makes ${object.damage} damage to ${defender.getName()}`);
            defender.dealDamage(object.damage);
        } else {
            console.log(`${object.name} attack missed`)
        }
    }
    this.heal = function(points) {
        if (points + currHP >= object.hp) {
            currHP = object.hp;
        } else {
            currHP += points;
        }
        return currHP;
    }
    this.dealDamage = function(minusPoints) {
        if (currHP - minusPoints < is0) {
            currHP = is0;
        } else {
            currHP -= minusPoints;
        }
        return currHP;
    }
    this.addWin = function() {
        this.wins += is1;
    }
    this.addLoss = function() {
        this.Losses += is1;
    }
}

function battle(myFighter, myFighter2) {
    if (myFighter.getHealth() === is0) {
        console.log(`${myFighter.getName()} is dead and can not fight. Game over!`)
    } else if (myFighter2.getHealth() === is0) {
        console.log(`${myFighter2.getName()} is dead and can not fight. Game over!`)
    } else {
         do {
            myFighter.attack(myFighter2);
            myFighter2.attack(myFighter);
            if (myFighter.getHealth() === is0) {
                console.log(`${myFighter2.getName()} has won!`);
                myFighter.addLoss();
                myFighter2.addWin();
            } else if (myFighter2.getHealth() === is0) {
                console.log(`${myFighter.getName()} has won!`);
                myFighter2.addLoss();
                myFighter.addWin();
            }
        } while (myFighter.getHealth() > is0 && myFighter2.getHealth() > is0);

    }
}

const myFighter = new Fighter({
    name: 'Maximus',
    damage: 25,
    hp: 100,
    strength: 20,
    agility: 20
});
const myFighter2 = new Fighter({
    name: 'Commodus',
    damage: 25,
    hp: 100,
    strength: 30,
    agility: 25
});

battle(myFighter, myFighter2);