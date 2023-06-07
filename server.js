// ----------------------------
// Import Dependencies---------
// ----------------------------
require("dotenv").config()
const { DATABASE_URL, PORT } = process.env
const express = require("express")
const mongoose = require("./models/connection")
const cors = require("cors")
const morgan = require("morgan")
const app = express() // Create Express App Object
const DonationRouter = require("./controllers/donationController")
const RequestRouter = require("./controllers/requestController")

// ----------------------------
// Middleware------------------
// ----------------------------
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

// ----------------------------
// Routers----------------------
// ----------------------------)
app.use("/donations", DonationRouter)
app.use("/requests", RequestRouter)


// ----------------------------
// Turn on Server--------------
// ----------------------------
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})