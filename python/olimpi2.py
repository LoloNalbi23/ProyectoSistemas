# Ejericio 4 saltos
A = 1 
B = 2 
X1 = 10 
Y1 = 20 
X2 = 30 
Y2 = 40

def saltos(A, B, X1, Y1, X2, Y2):
    condiciones1 = [False,False]
    condiciones2 = [False,False]
    restax = X2 - X1
    restay = Y2 - Y1
    print(restax)
    print(restay)
    if restax%A == 0:
        print(restax%A)
        condiciones1[0] = True
    if restay%B == 0:
        print(restay%B)
        condiciones1[1] = True
    if restax%B == 0:
        print(restax%B)
        condiciones2[0] = True
    if restay%A == 0:
        print(restay%A)
        condiciones2[1] = True
    if condiciones1 == [True,True]:
        print(1)
        return 1
    if condiciones2 == [True,True]:
        print(1)
        return 1
    else:
        print(0)
        return 0
    
saltos(A,B,X1,Y1,X2,Y2)