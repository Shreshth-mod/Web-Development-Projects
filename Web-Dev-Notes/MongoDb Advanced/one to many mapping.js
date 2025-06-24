// db.teachers.updateMany({} , {$unset :{productID:1}}) 
// By above function i can delete only product id from the database

db.teachers.updateOne(
    {
        _id : ObjectId("756744764545354364fes"),
    },
    {
        $set:{
            prouductIDs:[
                ObjectId("3462986438478328746"),
                ObjectId("3462986438478328747"),
               
               
            ] 
        }
    }
)

db.teachers.aggregate({
    $lookup:{
        from:'products',
        localField:"productIds",
        foreignField:'_id',
        as:"ProductDetails"
    }
})