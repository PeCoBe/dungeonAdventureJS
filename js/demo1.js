/***
*Prueba demo 1
***/

var mapaDemo = new Map();
mapaDemo.name = "Mapa demo";

var sala1 = new Room();
var sala2 = new Room();
var sala3 = new Room();
var sala4 = new Room();

var espadaSol = new Weapon();

var minotauro1 = new Enemy();
var minotauro2 = new Enemy();

espadaSol.init("Espada Solar", 30, 20, 5, 2000);

minotauro1.init("Minotaruo Rojo", 2, 50, 20, 10, 0, 10);
minotauro2.init("Minotauro Azul", 2, 60, 25, 15, 0, 15);

mapaDemo.start = sala1;
mapaDemo.end = sala4;

sala1.name = "Primer Sala";
sala1.description = "Sala 1. Primer cuarto al calabozo Demo. Aqui se te proporcionara una espada.";
sala1.east = sala2;
sala1.itemCheck = espadaSol;

sala2.name = "Segunda Sala";
sala2.description = "Sala 2. Cuidado con los minotauros.";
sala2.north = sala3;
sala2.west = sala1;
sala2.enemy = minotauro1;

sala3.name = "Tercer Sala";
sala3.description = "Sala 3. Cuidado con los minotauros.";
sala3.south = sala2;
sala3.west = sala4;
sala3.enemy = minotauro2;

sala4.name = "Sala Final";
sala4.description = "Ultima sala. Felicidades por sobrevivir al calabozo Demo";
sala4.east = sala3;

var jugador = new Player();
jugador.init('Pedro', 1, 50, 20, 10, 50, 50);

jugador.position = mapaDemo.start;

/***********
***********/





