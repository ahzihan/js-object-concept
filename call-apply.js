const student = {
    id: 1010,
    name: 'Rasel',
    major: 'Data Structure',
    dept: 'CSE',
    taka: 5000,
    treatDey: function ( expense ,treat) {
        this.taka = this.taka - expense-treat;
        console.log( this );
        return this.taka;
    }
};
const heroAlom = {
    id: 102,
    name: 'Hero Alom',
    taka: 6000,
}
const normalHero = {
    id: 103,
    name: 'Hero Kalam',
    taka: 4000,
}

//bind
student.treatDey( 600 );
const heroTreatdey = student.treatDey.bind( heroAlom );
heroTreatdey(400);
const normalTreatdey = student.treatDey.bind( normalHero );
normalTreatdey( 800 );

//call
student.treatDey.call( heroAlom, 600,100);
student.treatDey.call( normalHero, 400,50 );

//Apply
student.treatDey.apply( heroAlom, [ 700, 100 ] );
student.treatDey.apply( normalHero, [ 500, 100 ] );