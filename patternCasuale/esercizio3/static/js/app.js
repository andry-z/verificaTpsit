function setup(){
    createCanvas(400, 400)
}

let x = 20
let y = 20
let d = 40

let slider = document.querySelector("[name=dimensione]")

slider.addEventListener("input", function(e){
    d = parseInt(slider.value)
    background(255, 255, 255)
    x = 20
    y = 20
})

function draw(){
    let r = random()
    if(r > 0.5){
        fill(0, 0, 0)
        noStroke()
        square(x-d/2, y-d/2, d)
        fill(255, 255, 255)
        circle(x, y, d/2)
    }else{
        fill(255, 255, 255)
        noStroke()
        square(x-d/2, y-d/2, d)
        fill(0, 0, 0)
        circle(x, y, d/2)
    }
    x = x + d
    if(x>400){
        x=d/2
        y=y+d
    }
}