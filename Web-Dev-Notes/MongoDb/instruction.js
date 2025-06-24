// there are two ways to insert into db using shell 

// 1 insertone 
// 2 insertmany 

let users = [ 
    {name:'Kartik' , subject:'Web Development' },
    {name:'raghav' , subject:'Python ' }

]
// db.createCollection(collection name);    
// db.teacher.innsertOne(value);
// db.teachers.find(); // to get all the data 
// mongodb uses bson which is binary json 
// it also give every data a unique object id 

// TO USE INSERTMANY we have to pass the array 
// db.teachers.insertMany([ 
//     {name:'Kartik' , subject:'Web Development' },
//     {name:'raghav' , subject:'Python ' }

// ])

db.teachers.find({
    name:'Kartik',
    subject:'Web Development'
})

db.products.find({
    name:'Lenevo',
    price:{
       $gt:25
    }
})

db.Characters.insertMany([
    {name:'Sherlock'},
    {name:'Marvel'},
    {name:'Disney'},
    {name:'Goku'},
    {name:'Itachi'},
    {name:'Vegeta'},
    {name:'Iron man '},
    {name:'hulk'},
    {name:'thor'},
    {name:'loki'},
    {name:'spider man'},
    {name:'captain america'},
    {name:'deadpool'},
    {name:'wolverine'},
    {name:'Thanos'},
    {name:'Doreamon'},
    {name:'Shinchan'},
    {name:'Black Widow'},
    {name:'Groot'},
    {name:'Rocketman'},
    {name:'Avenger'},


])

// on our screen the find is a cursor and i shows only 20 data entry 
// to get next 20 write it 

db.Characters.find().toArray()
db.Characters.find().array.forEach(character => {
    printjson(character);
});

db.Characters.find().toArray().forEach(character => {
    printjson(character);
});


// lets  update the price of a laptop to 120 
db.products.updateOne({
    feature:'Touchpad',
    },{
        $set:{price:120}
    }
)

db.products.updateMany(
    {
        name:{
        ne:'Laptop'
    }
} ,
    {
        $set:{
            price:99
        }
    }
)

// PAGINATION - means showing your data in segments or say if you have 20 enteries then you show only 4 enteries then you go to next page

db.Characters.find().limit(5);
db.Characters.find().skip(5).limit(5);
db.Characters.find().skip(10).limit(5); 


// to delete 
db.Characters.deleteOne({
    name:'goku',
})

db.Characters.deleteMany({})


