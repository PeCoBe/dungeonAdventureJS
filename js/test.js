/****
*Tests
****/

//Player
//init(name, level, health, strength, speed, hunger, thirst)
var jugador1 = new Player();
jugador1.init("Jose", 1, 70, 30, 30, 50, 50);
console.info(jugador1);

//Enemy
// init(name, level, health, strength, speed, crithit, experienceGiven)
var enemy1 = new Enemy();
enemy1.init("Fawaz", 1, 100, 40, 40, 20, 25);
console.info(enemy1);

//Weapon
// init(name, strength, speed, crithit, value)
var weapon1 = new Weapon();
weapon1.init("Espada de los 5 Soles", 20, 10, 10, 3000);
console.info(weapon1);

//Armor
//init(name, health, strength, speed, value)
var armor1 = new Armor();
armor1.init("Armadura Lunar", 70, 10, 10, 3000);
console.info(armor1);

//Food
//init(name, hunger, thirst, value)
var food1 = new Food();
food1.init("Pay de queso", 30, 0, 200);
console.info(food1);

var food2 = new Food();
food2.init("Pastel", 10, 10, 100);

//Map
var map1 = new Map();
map1.name = "Mapa demo";

//Room
var room1 = new Room();
room1.name = "sala demo 1";
room1.description = "Sala 1 demo, probando probando \n Probando segunda linea";
room1.enemy = enemy1;
room1.itemCheck = food2;

/****
*end tests
****/