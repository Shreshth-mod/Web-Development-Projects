 db.createCollection("actors")
 db.actors.insertMany([
    {name: 'Sheldon Cooper'},
    { name:'Penny'}
 ])


 db.createCollection("movies")
db.movies.insertMany([
    {name:'The Big Bang Theory'},{
        name:"Young Sheldon"
    }
])


db.createCollection('actors_movies');

actorId:  ObjectId('685a5724fce57de0c7748a5f'), ObjectId('685a5724fce57de0c7748a60');
movieId:  ObjectId('685a572bfce57de0c7748a61'), ObjectId('685a572bfce57de0c7748a62');

db.actors_movies.insertMany([
    {
        actorId: ObjectId('685a5724fce57de0c7748a5f'),
        movieId: ObjectId('685a572bfce57de0c7748a61')
    },
    {
         actorId: ObjectId('685a5724fce57de0c7748a5f'),
        movieId: ObjectId('685a572bfce57de0c7748a62')
    },
    {
         actorId: ObjectId('685a5724fce57de0c7748a60'),
        movieId: ObjectId('685a572bfce57de0c7748a61')
    }
])
db.actors_movies.aggregate([
  {
    $lookup: {
      from: "actors",
      localField: "actorId",
      foreignField: "_id",
      as: "actorsInfo"
    }
  },
  {
    $lookup: {
      from: "movies",
      localField: "movieId",
      foreignField: "_id",
      as: "moviesInfo"
    }
  }
])
