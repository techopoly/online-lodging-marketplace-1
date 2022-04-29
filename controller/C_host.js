const M_host = require("../model/M_host");

const addPlace = async (req, res, next) => {
  console.log(req.body);
  const place = await M_host.createPlace(req.body);
  // insert data into database or business logic()
  res.status(200).json({
    data: place
  });
}

const editPlace = async(req, res, next) =>{
    console.log(req.body)
    const editedPlace = await M_host.editPlace(req.body)
    res.status(200).json({
        data: editedPlace
      });
}

const fetchSinglePlace = async (req, res, next)=>{
    console.log(req.body)
    const singlePlace = await M_host.fetchSinglePlace(req.body.id)
    res.status(200).json({
        data: singlePlace
      });
}

const fetchPlaceList = async (req, res, next)=>{
    console.log(req.body)
    email = req.body.email
    const placeList = await M_host.fetchPlaceList(email)
    res.status(200).json({
        data: placeList
      });
    }

exports.addPlace = addPlace;
exports.editPlace = editPlace
exports.fetchSinglePlace = fetchSinglePlace
exports.fetchPlaceList = fetchPlaceList