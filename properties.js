const mobile = {
    color: 'nevyblue', ram: '4gb', rom: '128gb', price: 17000
};
//Get all properties name
const keys = Object.keys( mobile );
// console.log( keys );

//Get all properties value
const values = Object.values( mobile );
// console.log( values );

const pairs = Object.entries( mobile );
// console.log( pairs );

Object.freeze( mobile );

// Object.seal( mobile );
mobile.price = 17300;
// console.log( mobile );

delete mobile.rom;
console.log( mobile );