import math
N = 5
t1 = "ojala", 470, 60 
t2 = "berry", 470, 10 
t3 = "vespress", 460, 55
t4 = "merlin", 55, 460
t5 = "comics", 55, 460

nombres = [t1[0], t3[0], t4[0], t5[0]]
precios = [t1[1], t3[1], t4[1], t5[1]]
distancias = [t1[2], t3[2], t4[2], t5[2]]

def cafes(nombres, precios, distancias):
    min1 = math.inf
    indice = 0
    for i in range(len(nombres)):
        best = precios[i] * distancias[i]
        if best < min1:
            indice = i
            min1 = best
            nom = nombres[i]
        elif best == min1:
            if precios[indice] > precios[i]:
                nom = nombres[i]
                indice = i
            elif precios[indice] < precios[i]:
                nom = nombres[indice]
            elif precios[indice] == precios[i]:
                nom = nombres[indice]
    return nom

cafes(nombres, precios, distancias)