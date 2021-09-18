// arguments object - no longer bound with arrow functions

const add = (a , b) => {
    // console.log(arguments)
    return a + b;
};
console.log(add(55,1,100));

// this keyword - no longer bound

const user = {
    name : 'Andrew',
    cities : ['Philadelphia', 'New York' , 'Doblin'],
    printPlaceLived () {
        // this.cities.forEach( (city) => {
        //     console.log(this.name + ' has lived in ' + city)
        // });
        return this.cities.map((city) => this.name + ' has lived in ' + city );
    }
}

console.log(user.printPlaceLived());

const multiplier = {
    numbers : [10,20,30,40,50],
    multiplyby : 5,
    multiply () {
        return this.numbers.map ( (number) => number * this.multiplyby )
    },
}
console.log(multiplier.multiply())