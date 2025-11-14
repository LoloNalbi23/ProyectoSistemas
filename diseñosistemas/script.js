let form = document.getElementById("form")
let alumnos = []
let libros = [
    {name:"Libro 1", id: 0, estado:true}, //True es que esta disponible
    {name:"Libro 2", id: 1, estado:true},
    {name:"Libro 3", id: 2, estado:true},
    {name:"Libro 4", id: 3, estado:true},
]

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let name = document.getElementById("name").value
    let year = document.getElementById("year").value
    let book = document.getElementById("book").value
    let mail = document.getElementById("mail").value
    let a = {nombre:name, año:year, gmail:mail}
    alumnos.push(a)
    (libros.filter(l => l.name == book)).map(v => v.estado = !v.estado)
})
