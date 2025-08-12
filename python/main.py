import random
# # problema 1
# w = 100
# se_puede = False

# if w % 2 == 0:
#     if w >= 6:
#         se_puede = True
#     else:
#         se_puede = False
# else:
#     se_puede = False

# print(se_puede)


# #problema 2: sos mayor de edad

# edad = 19

# if edad >= 18 :
#     print("Sos re chad")
# else:
#     print("Sos re pichón")

# #problema 3: n positivo o negativo
# n = 0

# if n > 0:
#     print("Es positivo")
# elif n < 0:
#     print("Es negativo")
# else:
#     print("Es Cero")

# #problema 4: Par o impar y múltiplo de 5
# num = 17

# if num % 2 == 0:
#     if num % 5 == 0:
#         print("Es par y multiplo de 5")
#     else:
#         print("Es par pero no multiplo de 5")
# elif num % 5 == 0:
#     print("No es par pero si multiplo de 5")
# else:
#     print("No es ni par ni multiplo de 5")

# #problema 5: Contraseña
# pw = "python123"
# input = "python123"

# if input == pw:
#     print("Correcto")
# else :
#     print("Incorrecto")

# #problema 6: Des, a probado (excelentemente)
# alumnos = [
#     {"nombre": "Lucía", "apellido": "Gómez", "edad": 17, "nota": 8},
#     {"nombre": "Mateo", "apellido": "Pérez", "edad": 19, "nota": 5},
#     {"nombre": "Juana", "apellido": "López", "edad": 16, "nota": 10},
#     {"nombre": "Sofía", "apellido": "Rodríguez", "edad": 20, "nota": 3},
#     {"nombre": "Tomás", "apellido": "Fernández", "edad": 18, "nota": 6},
#     {"nombre": "Martina", "apellido": "Ramírez", "edad": 15, "nota": 9}
# ]

# for a in alumnos:
#     if a["nota"] < 7:
#         print(a["nombre"], a["apellido"], "esta desaprobado")
#     elif a["nota"] > 8:
#         print(a["nombre"], a["apellido"], "esta aprobado excelentemente")
#     else:
#         print(a["nombre"], a["apellido"], "esta aprobado")

# #problema 7: Piedra, papel o tijera
elecciones = ["piedra", "papel", "tijera"]
e = random.choice(elecciones)
usuario = "papel"

#Usuario: Piedra
if usuario == "piedra" and e == "papel":
    print("Perdiste")
elif usuario == "piedra" and e == "tijera":
    print("Ganaste")
elif usuario == "piedra" and e == "piedra":
    print("Empate")
#Usuario: Tijera
elif usuario == "tijera" and e == "tijera":
    print("Empate")
elif usuario == "tijera" and e == "papel":
    print("Ganaste")
elif usuario == "tijera" and e == "piedra":
    print("Perdiste")
#Usuario: Papel
elif usuario == "papel" and e == "piedra":
    print("Ganaste")
elif usuario == "papel" and e == "papel":
    print("Empate")
elif usuario == "papel" and e == "tijera":
    print("Perdiste")

