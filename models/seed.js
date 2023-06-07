const mongoose = require("./connection");
const Request = require('./request')

mongoose.connection.on("open", () => {
  const starterDonations = [
    {
      fullName: "Charlie",
      email: "charlie123@gmail.com",
      phoneNumber: "123-456-7890",
      fromState: "Hawaii",
      fromCity: "Oahu",
      address: "123 Test Street",
      deviceType: "laptop",
      isPC: true,
      modelType: "HP Pavilion Plus",
      quantityToDonate: 1,
      isPickup: true,
      donateDate: "2023-05-27T00:00:00.000Z"
    },
    {
      fullName: "Annie",
      email: "annie123@hotmail.com",
      phoneNumber: "123-456-7890",
      fromState: "New York",
      fromCity: "Brooklyn",
      address: "666 Test Street",
      deviceType: "desktop",
      isPC: true,
      modelType: "Dell 5000",
      quantityToDonate: 1,
      isPickup: true,
      donateDate: "2023-06-01T00:00:00.000Z"
    },
    {
      fullName: "Nancy",
      email: "nancy123@company.com",
      phoneNumber: "555-888-6666",
      fromState: "Texas",
      fromCity: "Austin",
      address: "123 Test Drive",
      deviceType: "tablet",
      isPC: false,
      modelType: "iPad Pro 2nd Gen",
      quantityToDonate: 1,
      isPickup: false,
      donateDate: "2023-05-23T00:00:00.000Z"
    }
  ]
  Event.deleteMany({}, (err, data) => {
    Event.create(starterDonations, (err, donations) => {
      console.log("created + " + donations);

      mongoose.connection.close();
    });
  });
});