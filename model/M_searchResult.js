const getDb = require("../util/database").getDb;

const storeClient = async (db) => {
  await db.collection("client").insertOne(this);
};

const getSearchResult = async () => {
  const db = getDb();

  let data = await db.collection("places").find().toArray();
  console.log(data);
  return data;
};

const insertSearchResult = async () => {
  const db = await getDb();
  data = [
    {
      img: "https://links.papareact.com/xqj",
      location: "Private room in center of London",
      title: "Stay at this spacious Edwardian House",
      description:
        "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
      star: 4.73,
      price: "£30 / night",
      total: "£117 total",
      long: -0.0022275,
      lat: 51.5421655,
    },
    {
      img: "https://links.papareact.com/hz2",
      location: "Private room in center of London",
      title: "Independant luxury studio apartment",
      description:
        "2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen",
      star: 4.3,
      price: "£40 / night",
      total: "£157 total",
      long: -0.095091,
      lat: 51.48695,
    },
    {
      img: "https://links.papareact.com/uz7",
      location: "Private room in center of London",
      title: "London Studio Apartments",
      description:
        "4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine",
      star: 3.8,
      price: "£35 / night",
      total: "£207 total",
      long: -0.135638,
      lat: 51.521916,
    },
    {
      img: "https://links.papareact.com/6as",
      location: "Private room in center of London",
      title: "30 mins to Oxford Street, Excel London",
      description:
        "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
      star: 4.1,
      price: "£55 / night",
      total: "£320 total",
      long: -0.069961,
      lat: 51.472618,
    },
    {
      img: "https://links.papareact.com/xhc",
      location: "Private room in center of London",
      title: "Spacious Peaceful Modern Bedroom",
      description:
        "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning",
      star: 5.0,
      price: "£60 / night",
      total: "£450 total",
      long: -0.08472,
      lat: 51.510794,
    },
    {
      img: "https://links.papareact.com/pro",
      location: "Private room in center of London",
      title: "The Blue Room In London",
      description:
        "2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine",
      star: 4.23,
      price: "£65 / night",
      total: "£480 total",
      long: -0.094116,
      lat: 51.51401,
    },
    {
      img: "https://links.papareact.com/8w2",
      location: "Private room in center of London",
      title: "5 Star Luxury Apartment",
      description:
        "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
      star: 3.85,
      price: "£90 / night",
      total: "£650 total",
      long: -0.109889,
      lat: 51.521245,
    },
  ];

  data2 = {
    place: "Secondary Unit",
    propertyType: "Serviced apartment",
    listingType: "A private room",
    location: {
      latitude: 23.78433474056456,
      longitude: 90.36918142592657,
    },
    address: {
      street: "123",
      aptSuite: "",
      city: "Acity",
      state: "London",
      zipCode: "1222",
      country: "United Kindom",
    },
    guests: 2,
    beds: 3,
    bathrooms: 4,
    imageUrls: [
      "https://firebasestorage.googleapis.com/v0/b/rent-space-f74e9.appspot.com/o/images%2F2.jpg8db7f3e1-c2f0-46ef-aa55-bdc7f62cec43?alt=media&token=c9df9426-730e-4939-9d04-2cc42063b09e",
    ],
    title: "A nice cozy place to spend time",
    amenitiesArray: ["", "Hot tub", "", "", "Fire pit", "", "", "", ""],
    guestFavoritesArray: [
      "",
      "",
      "",
      "",
      "Free parking on premises",
      "",
      "",
      "",
      "",
    ],
    safetyItemsArray: ["", "", "Carbon monoxide", "", ""],
    description:
      "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
    price: "1",
    hostedBy: "tasin@gmail.com",
  };

  const data3 = {
    place: "Unique Space",
    propertyType: "Vacation home",
    listingType: "A private room",
    location: {
      latitude: { $numberDouble: "23.769992659990976" },
      longitude: { $numberDouble: "90.36404710898364" },
    },
    address: {
      street: "fsdf",
      aptSuite: "",
      city: "dsaf",
      state: "",
      zipCode: "",
      country: "adsfsd",
    },
    guests: { $numberInt: "4" },
    beds: { $numberInt: "5" },
    bathrooms: { $numberInt: "2" },
    imageInfo: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/rent-space-f74e9.appspot.com/o/images%2FHomepolish-interior-design-40053-5b896fbbc9e77c0050236fde.jpg8fb9ec14-594f-45c5-a7a0-c2e11e576dc2?alt=media&token=8f26fa85-7ec4-4b43-996d-d1efe4badfd4",
        fileName:
          "images/Homepolish-interior-design-40053-5b896fbbc9e77c0050236fde.jpg8fb9ec14-594f-45c5-a7a0-c2e11e576dc2",
      },
    ],
    title: "dfasfasdf",
    amenitiesArray: "dfasfasdf",
    guestFavoritesArray: [
      "",
      "",
      "Kitchen",
      "",
      "",
      "Paid parking on premises",
      "",
      "",
      "",
    ],
    safetyItemsArray: ["", "First aid kit", "", "", ""],
    description: "dsfsdf sg dasfdf",
    price: "800",
    hostedBy: "ishmam@gmail.com",
    bookedBy: "tasin@gmail.com"
  };

  // db.collection("places").insertMany(data);
  db.collection("places").insertOne(data3);
};

exports.insertSearchResult = insertSearchResult;
exports.getSearchResult = getSearchResult;
