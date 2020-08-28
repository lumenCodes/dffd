class Car {
    constructor (model,color) {
    this.model = model;
    this.color = color;
    }

    introduction () {
        console.log(`This is a ${this.color } ${this.model} car `)
    }
}

module.exports = Car;