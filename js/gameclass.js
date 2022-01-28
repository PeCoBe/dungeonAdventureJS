/**
*GameMaster para el juego GameBrowser
*Fecha de creación: 22/07/2015
*Pedro Cortina Bernal / Cikmeister
**/

/****
*enums
****/

var Direction = {
	NORTH: "north",
	SOUTH: "south",
	EAST: "east",
	WEST: "west"
};

/****
*end enums
****/


/****
*Ser - superclass
****/
function Ser() {
	var name = '';
	Object.defineProperty(this, 'name', {
		get: function() {
			//console.log('get');
			return name;
		},
		set: function(value) {
			//console.log('set');
			name = value;
		}
	});			
	
	var category = '';
	Object.defineProperty(this, 'category', {
		get: function() {
			//console.log('get');
			return category;
		},
		set: function(value) {
			//console.log('set');
			category = value;
		}
	});
	
	var level = 0;
	Object.defineProperty(this, 'level', {
		get: function() {
			//console.log('get');
			return level;
		},
		set: function(value) {
			//console.log('set');
			level = value;
		}
	});	
	
	var health = 0;
	Object.defineProperty(this, 'health', {
		get: function() {
			//console.log('get');
			return health;
		},
		set: function(value) {
			//console.log('set');
			health = value;
		}
	});
	
	var strength = 0;
	Object.defineProperty(this, 'strength', {
		get: function() {
			//console.log('get');
			return strength;
		},
		set: function(value) {
			//console.log('set');
			strength = value;
		}
	});
	
	var speed = 0;
	Object.defineProperty(this, 'speed', {
		get: function() {
			//console.log('get');
			return speed;
		},
		set: function(value) {
			//console.log('set');
			speed = value;
		}
	});
	
	var crithit = 0;
	Object.defineProperty(this, 'crithit', {
		get: function() {
			//console.log('get');
			return crithit;
		},
		set: function(value) {
			//console.log('set');
			crithit = value;
		}
	});
	
	var position = null;
	Object.defineProperty(this, 'position', {
		get: function() {
			//console.log('get');
			return position;
		},
		set: function(value) {
			//console.log('set');
			position = value;
		}
	});
	
	var alive = false;
	Object.defineProperty(this, 'alive', {
		get: function() {
			//console.log('get');
			return alive;
		},
		set: function(value) {
			//console.log('set');
			alive = value;
		}
	});
}

//Methods
Ser.prototype.getDamage = function (damage) {
	this.health -= damage;
	console.info(this.name + ' take damage');
};

Ser.prototype.die = function () {
	if (this.health <= 0) {
		this.alive = false;
		console.info('It has died');
	}
};

Ser.prototype.init = function() {
	console.info("Ser inicializado");
};

/****
*end superclass
****/

/****
*Equipo - superclass
****/
function Equip() {
	var name = '';
	Object.defineProperty(this, 'name', {
		get: function() {
			//console.log('get');
			return name;
		},
		set: function(value) {
			//console.log('set');
			name = value;
		}
	});
	
	var price = 0;
	Object.defineProperty(this, 'price', {
		get: function() {
			//console.log('get');
			return price;
		},
		set: function(value) {
			//console.log('set');
			price = value;
		}
	});
}

//Methods
Equip.prototype.init = function() {
	console.info("Equipo inicializado");
};

/****
*end superclass
****/

/***
*Player - subclass Ser
***/

//Designar el prototipo de Player como un Ser, para que tenga sus metodos y propiedades
Player.prototype = Object.create(Ser.prototype);
Player.prototype.constructor = Player;

function Player() {
	var experience = 0;
	Object.defineProperty(this, 'experience', {
		get: function() {
			//console.log('get');
			return experience;
		},
		set: function(value) {
			//console.log('set');
			experience = value;
		}
	});
	
	var hunger = 0; //Max 100
	Object.defineProperty(this, 'hunger', {
		get: function() {
			//console.log('get');
			return hunger;
		},
		set: function(value) {
			//console.log('set');
			hunger = value;
		}
	});
	
	var thirst = 0; //Max 100
	Object.defineProperty(this, 'thirst', {
		get: function() {
			//console.log('get');
			return thirst;
		},
		set: function(value) {
			//console.log('set');
			thirst = value;
		}
	});
	
	var hasWeapon = false;
	Object.defineProperty(this, 'hasWeapon', {
		get: function() {
			//console.log('get');
			return hasWeapon;
		},
		set: function(value) {
			//console.log('set');
			hasWeapon = value;
		}
	});
	
	var weapon = null;
	Object.defineProperty(this, 'weapon', {
		get: function() {
			//console.log('get');
			return weapon;
		},
		set: function(value) {
			//console.log('set');
			weapon = value;
		}
	});
	
	var hasArmor = false;
	Object.defineProperty(this, 'hasArmor', {
		get: function() {
			//console.log('get');
			return hasArmor;
		},
		set: function(value) {
			//console.log('set');
			hasArmor = value;
		}
	});
	
	var armor = null;
	Object.defineProperty(this, 'armor', {
		get: function() {
			//console.log('get');
			return armor;
		},
		set: function(value) {
			//console.log('set');
			armor = value;
		}
	});
	
	var items = new Array();
	Object.defineProperty(this, 'items', {
		get: function() {
			//console.log('get');
			return items;
		},
		set: function(value) {
			//console.log('set');
			items = value;
		}
	});
	
	//Llamar constructor de la superclase
	Ser.call(this);	
}

//Methods
Player.prototype.init = function(name, level, health, strength, speed, hunger, thirst) {
	this.name = name;
	this.level = level;
	this.health = health;
	this.strength = strength;
	this.speed = speed;
	this.hunger = hunger;
	this.thirst = thirst;
	
	this.alive = true;
};

Player.prototype.check = function() {
	var room = this.position;	
	if(room.itemCheck != null) {
		this.addItem(room.itemCheck);
		room.itemCheck = null;
		console.info("New item add to inventory");
	} else {
		console.info("Nothing found in room");
	}
};

Player.prototype.addItem = function(item) {
	this.items.push(item);
	
	console.info("Item add");
};

Player.prototype.inventory = function() {
	var i = 0;
	for(i = 0; i < this.items.length; i++) {
		console.info("Item: " + this.items[i].name);
	}
	
};

Player.prototype.move = function(direction) {
	switch(direction) {
		case Direction.NORTH: 
							if(this.position.north != null) {
								this.position = this.position.north;
								console.info("Player move to north");
							} else {
								console.info("Not room in that direction");
							}
							break;
		case Direction.SOUTH:
							if(this.position.south != null) {
								this.position = this.position.south;
								console.info("Player move to south");
							} else {
								console.info("Not room in that direction");
							}
							break;
		case Direction.EAST:	
							if(this.position.east != null) {
								this.position = this.position.east;
								console.info("Player move to east");
							} else {
								console.info("Not room in that direction");
							}
							break;
		case Direction.WEST: 
							if(this.position.west != null) {
								this.position = this.position.west;
								console.info("Player move to west");
							} else {
								console.info("Not room in that direction");
							}
							break;
		default:
							console.info(direction + " no es una dirección valida.");
							break;
	}
		
};

Player.prototype.eat = function(foodValue) {
	this.hunger += foodValue;
	if(this.hunger >= 100) {
		this.hunger = 100;
	}
	
	console.info("Player eated");
};

Player.prototype.drink = function(drinkValue) {
	this.thirst += drinkValue;
	if(this.thirst >= 100) {
		this.hunger = 100;
	}
	
	console.info("Player drank");
};

Player.prototype.wasteEnergy = function(hungerValue, thirstValue) {
	this.hunger -= hungerValue;
	this.thirst -= thirstValue;
	
	if(this.hunger <= 0 || this.thirst <= 0) { 
		this.die();
	}
	
	console.info("Player waste energy");
};

Player.prototype.gainExperience = function(experience) {
	this.experience += experience;
	if(this.experience >= (this.level * 50)) {
		this.gainLevel();
	}
	
	console.info("Player gain experience");
};

Player.prototype.gainLevel = function() {
		this.level = Math.floor(this.experience/(this.level * 50));
		
		console.info("Player gain level");
};

Player.prototype.changeName = function() {
	this.name = prompt('Ingrese nuevo nombre', '');
	
	console.info("Nuevo nombre: " + this.name);
}

Player.prototype.info = function() {
	console.info("Nombre: " + this.name);
	console.info("Nivel: " + this.level);
	console.info("Experiencia: " + this.experience);
	console.info("Hambre: " + this.hunger);
	console.info("Sed: " + this.thirst);
	console.info("Actualmente en: " + this.position.name);
}

Player.prototype.stats = function() {
	console.info("Vida: " + this.health);
	console.info("Fuerza: " + this.strength);
	console.info("Velocidad: " + this.speed);
	console.info("Golpe Critico: " + this.crithit + "%");
}

Player.prototype.attack = function() {
	if(this.alive) {
		//jugador esta vivo
		if(this.position.enemy != null) {
			//hay enemigo
			var enemy = this.position.enemy;
			if(enemy.alive) {
				//el enemigo esta vivo
				if(this.speed >= enemy.speed) {
					//jugador ataca primero
					console.log(this.name + ' ataco');
					enemy.getDamage(this.strength);
					enemy.die();
					enemy.attack(this);
				} else if(this.speed >= (enemy.speed*2)) {
					//jugador ataca doble
					console.log(this.name + ' ataco');
					enemy.getDamage(this.strength);
					enemy.die();
					console.log(this.name + ' ataco de nuevo');
					if(enemy.alive) return;
					enemy.getDamage(this.strength);
					enemy.die();
					enemy.attack(this);
				} else {
					//enemigo ataca primero
					enemy.attack(this);
					if(!this.alive) return;
					console.log(this.name + ' ataco');
					enemy.getDamage(this.strength);
					enemy.die();
				}
			} else {
				//el enemigo esta muerto
				console.log("Enemy is dead");
			}
		} else {
			//no hay enemigo
			console.log("Theres no enemy here.");
		}
	} else {
		//jugador esta muerto
		console.log("Jugador esta muerto no puede atacar");
	}
};

Player.prototype.equipItem = function(itemName) {
	var i = 0;
	for(i = 0; i < this.items.length; i++) {
		if(this.items[i].name == itemName) {
			//Found the item
			if(this.items[i].isEquipped) {
				console.log('Item already equiped');
			} else if(this.items[i] instanceof Weapon) {
				this.strength += this.items[i].strength;
				this.speed += this.items[i].speed;
				this.crithit += this.items[i].crithit;
				this.hasWeapon = true;
				this.weapon = this.items[i];
				console.log(this.items[i].name + ' is equipped');
				this.items[i].isEquipped = true;
			} else if(this.items[i] instanceof Armor) {
				this.health += this.items[i].health;
				this.strength += this.items[i].strength;
				this.speed += this.items[i].speed;
				this.hasArmor = true;
				this.armor = this.items[i];
				console.log(this.items[i].name + ' is equipped');
				this.items[i].isEquipped = true;
			} else {
				console.log('Cannot equip this item');
				return null;
			}
		} else {
			//Not item with that name;
			return null;
		}
	}
};

Player.prototype.unequipItem = function(itemType) {
	if(this.hasWeapon || this.hasArmor) {
		if(itemType == 'Weapon' && this.hasWeapon) {
			this.strength -= this.weapon.strength;
			this.speed -= this.weapon.speed;
			this.crithit -= this.weapon.crithit;
			this.hasWeapon = false;			
			console.log(this.weapon.name + ' is unequipped');
			this.weapon.isEquipped = false;
			this.weapon = null;
		} else if(itemType == 'Armor' && this.hasArmor) {
			this.health -= this.armor.health;
			this.strength -= this.armor.strength;
			this.speed -= this.armor.speed;
			this.hasArmor = false;
			console.log(this.armor.name + ' is unequipped');
			this.armor.isEquipped = false;
			this.armor = null;
		}
	} else {
		console.log("Player don't have any item equipped");
	}
};

Player.prototype.die = function() {
	if (this.health <= 0) {
		this.alive = false;
		console.info('It has died');
		console.info('Game Over');
		document.getElementById("controles").innerHTML = "GAME OVER";
	}
};
	
/***
*end subclass
***/

/***
*Enemy - subclass Ser
***/

//Designar el prototipo de Enemy como un Ser, para que tenga sus metodos y propiedades
Enemy.prototype = Object.create(Ser.prototype);
Enemy.prototype.constructor = Enemy;

function Enemy() {
	var experienceGiven = 0;
	Object.defineProperty(this, 'experienceGiven', {
		get: function() {
			//console.log('get');
			return experienceGiven;
		},
		set: function(value) {
			//console.log('set');
			experienceGiven = value;
		}
	});
	
	Ser.call(this);
}

//Methods
Enemy.prototype.init = function(name, level, health, strength, speed, crithit, experienceGiven) {
	this.name = name;
	this.level = level;
	this.health = health;
	this.strength = strength;
	this.speed = speed;
	this.crithit = crithit;
	this.experienceGiven = experienceGiven;
	
	this.alive = true;
};

Enemy.prototype.attack = function(player) {
	if(this.alive && player.alive) {		
		console.log(this.name + ' ataco');
		player.getDamage(this.strength);
		player.die();
	}
};

/***
*end subclass
***/

/***
*Arma - subclass Equip
***/
Weapon.prototype = Object.create(Equip.prototype);
Weapon.prototype.constructor = Weapon;

function Weapon() {
	var strength = 0;
	Object.defineProperty(this, 'strength', {
		get: function() {
			//console.log('get');
			return strength;
		},
		set: function(value) {
			//console.log('set');
			strength = value;
		}
	});
	
	var speed = 0;
	Object.defineProperty(this, 'speed', {
		get: function() {
			//console.log('get');
			return speed;
		},
		set: function(value) {
			//console.log('set');
			speed = value;
		}
	});
	
	var crithit = 0;
	Object.defineProperty(this, 'crithit', {
		get: function() {
			//console.log('get');
			return crithit;
		},
		set: function(value) {
			//console.log('set');
			crithit = value;
		}
	});
	
	var isEquipped = false;
	Object.defineProperty(this, 'isEquipped', {
		get: function() {
			//console.log('get');
			return isEquipped;
		},
		set: function(value) {
			//console.log('set');
			isEquipped = value;
		}
	});
	
	Equip.call(this);
}

//Methods
Weapon.prototype.init = function(name, strength, speed, crithit, price) {
	this.name = name;
	this.strength = strength;
	this.speed = speed;
	this.crithit = crithit;
	this.price = price;
};

/***
*end subclass
***/

/***
*Armadura - subclass Equip
***/
Armor.prototype = Object.create(Equip.prototype);
Armor.prototype.constructor = Armor;

function Armor() {
	var health = 0;
	Object.defineProperty(this, 'health', {
		get: function() {
			//console.log('get');
			return health;
		},
		set: function(value) {
			//console.log('set');
			health = value;
		}
	});
	
	var strength = 0;
	Object.defineProperty(this, 'strength', {
		get: function() {
			//console.log('get');
			return strength;
		},
		set: function(value) {
			//console.log('set');
			strength = value;
		}
	});
	
	var speed = 0;
	Object.defineProperty(this, 'speed', {
		get: function() {
			//console.log('get');
			return speed;
		},
		set: function(value) {
			//console.log('set');
			speed = value;
		}
	});
	
	var isEquipped = false;
	Object.defineProperty(this, 'isEquipped', {
		get: function() {
			//console.log('get');
			return isEquipped;
		},
		set: function(value) {
			//console.log('set');
			isEquipped = value;
		}
	});
	
	Equip.call(this);
}

//Methods
Armor.prototype.init = function(name, health, strength, speed, price) {
	this.name = name;
	this.health = health;
	this.strength = strength;
	this.speed = speed;
	this.price = price;
};

/***
*end subclass
***/

/***
*Comida - subclass Equip
***/
Food.prototype = Object.create(Equip.prototype);
Food.prototype.constructor = Food;

function Food() {
	var hunger = 0;
	Object.defineProperty(this, 'hunger', {
		get: function() {
			//console.log('get');
			return hunger;
		},
		set: function(value) {
			//console.log('set');
			hunger = value;
		}
	});
	
	var thirst = 0;
	Object.defineProperty(this, 'thirst', {
		get: function() {
			//console.log('get');
			return thirst;
		},
		set: function(value) {
			//console.log('set');
			thirst = value;
		}
	});
	
	Equip.call(this);
}

//Methods
Food.prototype.init = function(name, hunger, thirst, price) {
	this.name = name;
	this.hunger = hunger;
	this.thirst = thirst;
	this.price = price;
};

/***
*end subclass
***/

/***
*Mapa - class
***/
function Map() {
	var name = '';
	Object.defineProperty(this, 'name', {
		get: function() {
			//console.log('get');
			return name;
		},
		set: function(value) {
			//console.log('set');
			name = value;
		}
	});
	
	var start = null;
	Object.defineProperty(this, 'start', {
		get: function() {
			//console.log('get');
			return start;
		},
		set: function(value) {
			//console.log('set');
			start = value;
		}
	});
	
	var end = null;
	Object.defineProperty(this, 'end', {
		get: function() {
			//console.log('get');
			return end;
		},
		set: function(value) {
			//console.log('set');
			end = value;
		}
	});
}

/***
*end class
***/

/***
*Sala - class
***/
function Room() {
	var name = '';
	Object.defineProperty(this, 'name', {
		get: function(){
			//console.log('get');
			return name;
		},
		set: function(value) {
			//console.log('set');
			name = value;
		}
	});
	
	var description = '';
	Object.defineProperty(this, 'description', {
		get: function(){
			//console.log('get');
			return description;
		},
		set: function(value) {
			//console.log('set');
			description = value;
		}
	});
	
	var north = null;
	Object.defineProperty(this, 'north', {
		get: function(){
			//console.log('get');
			return north;
		},
		set: function(value) {
			//console.log('set');
			north = value;
		}
	});
		
	var south = null;
	Object.defineProperty(this, 'south', {
		get: function(){
			//console.log('get');
			return south;
		},
		set: function(value) {
			//console.log('set');
			south = value;
		}
	});
	
	var east = null;
	Object.defineProperty(this, 'east', {
		get: function(){
			//console.log('get');
			return east;
		},
		set: function(value) {
			//console.log('set');
			east = value;
		}
	});
	
	var west = null;
	Object.defineProperty(this, 'west', {
		get: function(){
			//console.log('get');
			return west;
		},
		set: function(value) {
			//console.log('set');
			west = value;
		}
	});
	
	var enemy = null;
	Object.defineProperty(this, 'enemy', {
		get: function(){
			//console.log('get');
			return enemy;
		},
		set: function(value) {
			//console.log('set');
			enemy = value;
		}
	});
	
	var itemCheck = null;
	Object.defineProperty(this, 'itemCheck', {
		get: function(){
			//console.log('get');
			return itemCheck;
		},
		set: function(value) {
			//console.log('set');
			itemCheck = value;
		}
	});
}

/***
*end class
***/

/****
*Metodos
****/
function print(message) {
	var outputDiv = document.getElementById("output");
	outputDiv.innerHTML = message;
}

