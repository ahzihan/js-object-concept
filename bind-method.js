const student = {
    id: 1010,
    name: 'Rasel',
    major: 'Data Structure',
    dept: 'CSE',
    taka: 5000,
    treatDey: function ( expense ) {
        this.taka = this.taka - expense;
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
student.treatDey( 600 );
const heroTreatdey = student.treatDey.bind( heroAlom );
heroTreatdey(400);
const normalTreatdey = student.treatDey.bind( normalHero );
normalTreatdey( 800 );