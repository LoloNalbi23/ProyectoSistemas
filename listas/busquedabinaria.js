let pos = 0
function binarysearch(datos,n){
    for(let i = math.floor(datos.lenght/2),j = datos.lenght;i < j, j > i;i++, j--){
        pos = (j/2)-1
        if(datos[pos] == n){
            console.log("Si lo encontre papi, esta en la posicion" + pos);
            return true;
            
        } else {
        if(datos[pos]< n){
        i = pos
        pos = (j -= i)/2
        } else {
        j = pos
        pos = (j -= i)/2
        }
        }
    } return false
}
let datos = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
console.log(binarysearch(datos,23))