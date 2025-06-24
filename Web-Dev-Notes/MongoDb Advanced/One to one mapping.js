// store data via embedded document 
db.teachers.updateOne(
    {
        _id: ObjectId('649234347234732984f5'),
    },
    {
        $set:{
            laptop:{
                name:'mackbook pro ', features: "Touchpad", price: 100000
            }
        }
    }
)

db.teachers.updateOne(
    {
        _id: ObjectId('649234347234732984f5'),
    },
    {
        $set:{
            productId: ObjectId("6782436246329673467f6")
        }
    }
)



db.teachers.updateOne(
    {
        _id: ObjectId('649234347234732985f6'),
    },
    {
        $set:{
            productId: ObjectId("6782436246329673465f9")
        }
    }
)

db.teachers.aggregate({      //  The $lookup stage in MongoDB’s aggregate() method is used to perform a join between two collections 
        $lookup:{
            from :'products',
            localField:'productID',
            foreignField:'_id',
            as: 'productDetails'
        }
})   

