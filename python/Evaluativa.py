# Generala

dados = [1,2,3,4,5]
def puntaje(dados):
    num = [0,0,0,0,0,0]
    cond_full = [False,False]
    suma_1 = 0
    suma_2 = 0
    suma_3 = 0
    suma_4 = 0
    suma_5 = 0
    suma_6 = 0
    escalera = 0
    full = 0
    poker = 0
    generala = 0
    # Puntos 1 al 6
    for i in dados:
        if(i==1):
            suma_1 += 1
        if(i==2):
            suma_2 += 2
        if(i==3):
            suma_3 += 3
        if(i==4):
            suma_4 += 4
        if(i==5):
            suma_5 += 5
        if(i==6):
            suma_6 += 6
    # Punto 10
    if(dados[0]==dados[1]==dados[2]==dados[3]==dados[4]):
        generala += 50
    # Punto 7
    if(dados[0]!=dados[1]!=dados[2]!=dados[3]!=dados[4]):
        if(dados[0]!=6 and dados[1]!=6 and dados[2]!=6 and dados[3]!=6 and dados[4]!=6):
            escalera += 20
    if(dados[0]!=dados[1]!=dados[2]!=dados[3]!=dados[4]):
        if(dados[0]!=1 and dados[1]!=1 and dados[2]!=1 and dados[3]!=1 and dados[4]!=1):
            escalera += 20
    if(dados[0]!=dados[1]!=dados[2]!=dados[3]!=dados[4]):
        if(dados[0]!=2 and dados[1]!=2 and dados[2]!=2 and dados[3]!=2 and dados[4]!=2):
            escalera += 20
    # Punto 8
    for i in dados:
        if i == 1:
            num[0]+=1
        if i == 2:
            num[1]+=1
        if i == 3:
            num[2]+=1
        if i == 4:
            num[3]+=1
        if i == 5:
            num[4]+=1
        if i == 6:
            num[5]+=1
    for n in num:
        if n == 3:
            cond_full[0] = True
        if n == 2:
            cond_full[1] = True
    if cond_full[0] and cond_full[1]:
        full += 30
    # Punto 9
    for n in num:
        if n == 4:
            poker += 40
    puntajes = [suma_1, suma_2, suma_3, suma_4, suma_5, suma_6, escalera, full, poker, generala]
    print(puntajes)

puntaje(dados)

# Microondas
a = [3,15,14,23,9,7]
f = [10,4,2,3,4,2]
p = [1,2,7,3,8,2]
Dist = 30
def thor(a,f,p,Dist):
    posibles = 0
    posicion = 0
    while posicion < len(a):
        al = a[posicion]
        fu = f[posicion]
        for pe in p:
            d = (al*fu)/pe
            if d >= Dist:
                posibles += 1
        posicion += 1
    print(posibles)

thor(a,f,p,Dist)
# Comodines
# grilla = []
# def comodines(grilla):


# comodines(grilla)
# Riesgo

grilla = [[1, 1], [100,200], [1, 3], [50,50], [1,5]]

