db.createCollection('Tecahers');

db.Teachers.insertMany([{
    name:'Kartik' , subject : 'Web Development',
    company: {
        name:'coding blocks',
        country: 'India',
        address:"47 Nishant Kunj , Pitampura , Delhi-110034"
    }
},
{
     name:'' , subject : 'Web Development',
    company: {
        name:'coding blocks',
        country: 'India',
        address:"47 Nishant Kunj , Pitampura , Delhi-110034"
},
}])
db.teachers.find({name:'monu'}).company // doesnt work 

db.teachers.find({name:'monu'}).toArray(); // print all the information related monu 

db.teachers.find({name:'monu'}).toArray()[0].company; // this will print the value