let canvasX = 500
let canvasY = 500

function setup(){
    createCanvas(canvasX, canvasY)
    background(0)
}

let x1 = 0
let y1 = 0
let x2 = 0
let y2 = 0
let incremento = 50

let slider = document.querySelector("[name=dimensione]")

slider.addEventListener("input", function(e){
    incremento = parseInt(slider.value)
    background(0)
    x1 = 0
    y1 = 0
    x2 = 0
    y2 = 0
})


function draw(){
    stroke(255, 255, 255)
    let r = random()
    if(r > 0.5){
        x2 = x1 + incremento
        y2 = y1 + incremento  
        x1 = x1 + 0 
        y1 = y2-incremento 
        line(x1, y1, x2, y2)
        y2 = y2 - incremento
    }else{
        x2 = x1 + incremento
        y1 = y2 + incremento 
        x1 = x1 + 0
        y2 = y1 - incremento 
        line(x1, y1, x2, y2) 
        y1 = y1 - incremento
    }

    x1 = x1 + incremento
    x2 = x2 + incremento

    if(x1 > 500 || x2 > 500){
        y1 = y1 + incremento
        y2 = y2 + incremento
        x1 = 0
        x2 = 0
    }
    
}