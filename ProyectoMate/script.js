const ejeCeroPlugin = {
  id: "ejeCero",
  afterDraw(chart) {
    const { ctx, chartArea, scales } = chart;

    ctx.save();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";

    // Línea horizontal en y = 0
    const y0 = scales.y.getPixelForValue(0);
    if (y0 >= chartArea.top && y0 <= chartArea.bottom) {
      ctx.beginPath();
      ctx.moveTo(chartArea.left, y0);
      ctx.lineTo(chartArea.right, y0);
      ctx.stroke();
    }

    // Línea vertical en x = 0 (sólo si X es numérico, no categorías)
    if (scales.x?.type !== "category") {
      const x0 = scales.x.getPixelForValue(0);
      if (x0 >= chartArea.left && x0 <= chartArea.right) {
        ctx.beginPath();
        ctx.moveTo(x0, chartArea.top);
        ctx.lineTo(x0, chartArea.bottom);
        ctx.stroke();
      }
    }

    ctx.restore();
  }
};
let button = document.getElementById("meme")
let form = document.getElementById("form")
let input_inicio = document.getElementById("inicio")
let input_final = document.getElementById("final")
let divisiones = document.getElementById("puntos")
let select = document.getElementById("selector")
let color = document.getElementById("color")
let periodo = document.getElementById("b")
let b = null
let angulo_de_fase = document.getElementById("c")
let c = null
let termino_independiente = document.getElementById("d")
let d = null
let pi = Math.PI
let funcionelegida = "sin"
let eje_x = []
let graficar = false
let ecuacion = document.getElementById("ecuacion")
console.log(eje_x);

let text_cant_pt = document.getElementById("dots");
divisiones.addEventListener("input", () => {
    cantidad_puntos = parseInt(divisiones.value);
    text_cant_pt.textContent = `${cantidad_puntos}`;
    crear_grafico();
});

function mostrarImagen() {
    let img = document.getElementById("imagen")
    img.style.display = "block";
}
    


let text_cant_a = document.getElementById("cant");
let cant_a = document.getElementById("a")
let a = 1
cant_a.addEventListener("input", () => {
    a = parseInt(cant_a.value);
    text_cant_a.textContent = `${a}`;
    crear_grafico();
});

input_inicio.addEventListener("input", () => crear_grafico())
input_final.addEventListener("input", () => crear_grafico())
periodo.addEventListener("input", () => crear_grafico())
angulo_de_fase.addEventListener("input", () => crear_grafico())
termino_independiente.addEventListener("input", () => crear_grafico())
color.addEventListener("input", () => crear_grafico())

function miFuncion1(x, tipo, b, c, d) {

    if (tipo === "sin") {
        funcionelegida = "sin"
        return a * (Math.sin((b * x) + c)) + d
    } else if (tipo === "cos") {
        funcionelegida = "cos"
        return a * (Math.cos((b * x) + c)) + d
    } else if (tipo === "tan") {
        funcionelegida = "tan"
        if (Math.abs(Math.cos(i)) < 0.1) {
            tg_data.push(null);  // omite
        } else {
            tg_data.push(Math.tan(i));
        }
        return a * (Math.tan((b * x) + c)) + d
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    crear_grafico()
})

const crear_grafico = () => {

    if (window.miFuncion) {
        window.miFuncion.destroy()
    }
    //agarro los input
    let puntos = parseInt(divisiones.value)
    let inicio = parseFloat((parseFloat(input_inicio.value) * pi).toFixed(2));
    let final = parseFloat((parseFloat(input_final.value) * pi).toFixed(2));

    //Cada cuanto va un punto
    let valor = (final - inicio) / (puntos - 1)

    //Genero los puntos
    eje_x = [inicio]
    console.log(eje_x);
    for (let i = 1; i < puntos; i++) {
        let punto = inicio + (i * valor)
        punto = parseFloat(punto.toFixed(2))
        eje_x.push(punto)
    }
    console.log(eje_x);
    b = parseFloat(parseFloat(periodo.value).toFixed(2))
    c = parseFloat(parseFloat(angulo_de_fase.value) * pi.toFixed(2))
    d = parseFloat(parseFloat(termino_independiente.value).toFixed(2))
    let color = document.getElementById("color").value
    let eje_y = eje_x.map(x => miFuncion1(x, select.value, b, c, d))
    let grafica = `f(x)=${cant_a.value}${funcionelegida}(${b}x+${c})+${d}`
    ecuacion.textContent = grafica

    //Graficar funcion
    const data = {
        type: 'line',
        data: {
            labels: eje_x,
            datasets: [{
                label: `${grafica}`,
                data: eje_y,
                fill: true,
                borderColor: color,
                borderWidth: 2,
                tension: 0.2,
            }]
        },
        options: {
            scales: {
                x: {
                    ticks: {
                        color: "rgb(29,215,91)",   // Color de los números del eje X
                        font: {
                            size: 14,     // Tamaño de fuente
                            weight: "bold"
                        }
                    },
                    grid: {
                        color: (canva) => canva.tick.value === 0 ? "black" : "rgba(0,0,0,0.2)", // Línea X en 0 negra
                        lineWidth: (canva) => canva.tick.value === 0 ? 2 : 1
                    },
                    border: {
                        color: "rgba(0,0,0,0.2)",  // Color de la línea del eje X
                        width: 2
                    }
                },
                y: {
                    ticks: {
                        color: "rgb(29,215,91)", // Color de los números del eje Y
                        font: {
                            size: 14
                        }
                    },
                    grid: {
                        color: (canva) => {
                        const v = canva.tick?.value;
                        return (typeof v === "number" && Math.abs(v) <= 0.02) ? "black" : "rgba(0,0,0,0.2)";
                        },
                        lineWidth: (ctx) => {
                        const v = ctx.tick?.value;
                        return (typeof v === "number" && Math.abs(v) <= 0.02) ? 2 : 1;
                    }
                }
            }
        }
    },
    plugins: [ejeCeroPlugin]
    };
    const canva = document.getElementById("grafico").getContext("2d")
    window.miFuncion = new Chart(canva, data)
}