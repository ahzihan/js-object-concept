/*

for(let i=0;i<10;i++){}
for(const num of numbers){}
for(const num in students){}

*/
const mobile = {
    color: 'nevyblue', ram: '4gb', rom: '128gb', price: 17000
};

for ( const prop in mobile ) {
    // console.log(prop, mobile[prop] );
}

const keys = Object.keys( mobile );
// console.log( keys );
for ( const prop of keys ) {
    // console.log(prop, mobile[prop] );
}

//advance
const entries = Object.entries( mobile );
// console.log( entries );
for ( const [ key, value ] of Object.entries( mobile ) ) {
    console.log( key, value );
}