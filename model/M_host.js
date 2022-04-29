const mongodb = require('mongodb')
const getDb = require("../util/database").getDb;


const createPlace = async (data) => {
  //img, location, title, description, price, long,lat
  const db = getDb();
  const result = await db.collection("searchResult").insertOne(data);
  const result1 = await db.collection("places").insertOne(data);
  return result;
};

const editPlace = async (data) => {
  const { id, title, description,price, location } = { ...data };
  const db = getDb();
  const result = await db.collection("places").updateOne(
    { _id: new mongodb.ObjectId(id)},
    {
      $set: {
        title: title,
        description: description,
        Price: price,
        location: location
      },
    }
  );

  return result
};

const fetchSinglePlace = async(id) =>{
    const db = getDb();
    const result = await db.collection("places").find({_id : new mongodb.ObjectId(id)}).next()
    .then(place=>{
        console.log(place)
        return place
    })
    .catch(err=>{
        console.log(place)
    })
    return result
}

const fetchPlaceList = async(email) =>{
    //suppose we get the email from token and then query data base using that token
    const db = getDb();
    const email = email
    const result = await db.collection("places")
    .find({bookedBy: email }).toArray()
    return result
}


exports.createPlace = createPlace;
exports.editPlace = editPlace
exports.fetchSinglePlace = fetchSinglePlace
exports.fetchPlaceList = fetchPlaceList
