function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log("hello");
        }
    }
}

function Circle(radius){
    this.radius = radius;
    this.draw() = function(){
        console.log(draw)
    }
}



const myCircle = createCircle(1)
console.log("hey")

const myclass = {
    name : "Xavier",
    age: 23, 
    height: 3,
    play(){
        console.log(this.age);
    }
}


function sum() {
    let total = 0; 
    for(let xav of arguments)
        total += xav;
    return total;
}

console.log(sum(10,23,21,34,21,10,1000))