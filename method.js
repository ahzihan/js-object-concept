const student = {
    id: 1010,
    name:'Rasel',
    major: 'Data Structure',
    dept: 'CSE',
    taka: 5000,
    bestfriend: {
        name: 'Arif Billah',
        major:'C++'
    },
    takeExam: function () {
        console.log(this.name,'Taking Exam')
    },
    treatDey: function (expense,boksis) {
        this.taka = this.taka - expense-boksis;
        return this.taka;
    }
}
student.takeExam();
const balance = student.treatDey( 500,50 );
console.log( balance );