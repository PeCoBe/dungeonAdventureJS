Definición de clases para el juego
==================================

#Propiedades

##Jugador
+ Nombre
+ Categoria
+ Nivel
+ Experiencia
+ Posición
+ Vida
+ Hambre
+ Sed
+ Fuerza
+ Velocidad
+ Golpe Crítico
+ Tiene Arma
+ Arma
+ Tiene Armadura
+ Armadura
+ Items
+ Esta vivo

##Enemigo
+ Nombre
+ Categoria
+ Nivel
+ Vida
+ Fuerza
+ Velocidad
+ Golpe Crítico
+ Experiencia que da
+ Esta vivo

##Mapa
+ Nombre
+ Inicio
+ Final

##Sala
+ Nombre
+ Norte
+ Sur
+ Este
+ Oeste
+ Descripción
+ Enemigo
+ Item para Checar

##Arma
+ Nombre
+ Fuerza
+ Velocidad
+ Golpe Crítico
+ Precio

##Armadura
+ Nombre
+ Vida
+ Fuerza
+ Velocidad
+ Precio

##Comida
+ Nombre
+ Hambre
+ Sed
+ Precio

#Métodos

##Jugador
+ init
+ set/get Nombre
+ set/get Nivel
+ set/get Experiencia
+ set/get Posición
+ set/get Vida
+ set/get Hambre
+ set/get Sed
+ set/get Fuerza
+ set/get Velocidad
+ set/get Golpe Crítico
+ set/get Tiene Arma
+ set/get Arma
+ set/get Tiene Armadura
+ set/get Armadura
+ set/get Items
+ Checar
+ Añadir item
+ Inventario
+ Asignar Arma
+ Quitar Arma
+ Asignar Armadura
+ Quitar Armadura
+ Comer
+ Beber
+ Gastar energia
+ Recibir dańo
+ Morir
+ Mover
+ Ganar experiencia

##Enemigo
+ init
+ set/get Nombre
+ set/get Clase
+ set/get Nivel
+ set/get Vida
+ set/get Fuerza
+ set/get Velocidad
+ set/get Golpe Crítico
+ set/get Experiencia que da
+ Atacar
+ Recibir dańo
+ Morir

##Mapa
+ set/get Nombre
+ set/get Inicio
+ set/get Final

##Sala
+ set/get Nombre
+ set/get Norte
+ set/get Sur
+ set/get Este
+ set/get Oeste
+ set/get Descripción
+ set/get Enemigo
+ set/get Item para Checar
+ Ańadir enemigo
+ Quitar enemigo
+ Ańadir Item
+ Quitar Item
+ Ver descripción

##Arma
+ set/get Nombre
+ set/get Fuerza
+ set/get Velocidad
+ set/get Golpe Crítico
+ set/get Valor

##Armadura
+ set/get Nombre
+ set/get Vida
+ set/get Fuerza
+ set/get Velocidad
+ set/get Valor

##Comida
+ set/get Nombre
+ set/get Hambre
+ set/get Sed
+ set/get Valor

#Superclases

##Ser
+ Jugador
+ Enemigo

##Equipo
+ Arma
+ Armadura
+ Comida