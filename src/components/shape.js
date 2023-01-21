// declare class

// export class using module.exports
class Shape {
    constructor(color) {
        this.color = "blue";
    }

    drawShape() {
        console.log("Drawing a shape");
    }

    calculateArea() {
        console.log("Calculating area of shape");
    }
}

module.exports = Shape;
