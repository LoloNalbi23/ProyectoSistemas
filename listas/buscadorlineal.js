
function linealsearch(list,n) {
    for(let pos = 0;pos < list.lenght;pos++){
        if(list[pos] == n){
            console.log("si está, en la posición" + pos);
            return true;
            
        }
        console.log("si");
    } return false
}

let list = [8,3,5,6,2,4,7,6,9,25,43,66,1,73];
console.log(linealsearch(list,1));