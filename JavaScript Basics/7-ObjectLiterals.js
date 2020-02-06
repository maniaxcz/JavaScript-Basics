const developer = {                                         // Object Creation
    name:'Manan Sharma',
    age:26,
    qualifications:['B.Tech','PG-DAC'],
    progLanguages:{
        CPP:'Intermediate',
        Java:'Intermediate',
        JavaScript:'Beginner',
        Python:'Noob'
    }
};
console.table(developer.progLanguages);


const subjects = [                                           // Array Of Object Literals
    {DataStructures:'Intermediate'},
    {Algorithms:'Beginner'},
    {OperatingSystems:'Intermediate'}
]

for (let index = 0; index < subjects.length; index++) {
    
    console.table(subjects[index]);
}