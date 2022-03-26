
//1.using object literal
const student = { name: 'Alamin', job: 'web developer' };
//2.constructor
const person = new Object();
//3.
// const human = Object.create( null ); //null
const human = Object.create( student );

//4.class
class People{
    constructor ( name,age ) {
        this.name = name;
        this.age = age;
    }
}
const data=new People('Man',12)
console.log( data );

//5.function
function Man( name ) {
    this.name = name;
}
const man = new Man( 'Rofique' );
console.log( man );