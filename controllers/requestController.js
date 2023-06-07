const express = require("express")
const Request = require("../models/request")

const router = express.Router()

// Index Route
router.get("/", async (req, res) => {
    try{
        res.json(await Request.find({}))
    } catch(error){
        console.log(error);
        res.status(400).json(error)
    }
})

// Delete Route
router.delete("/:id", async (req, res) => {
    try{
        res.json(await Request.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

// Update Route
router.put("/:id", async (req, res) => {
    try {
        res.json(
            await Request.findByIdAndUpdate(req.params.id, req.body, {new: true})
        )
    } catch (error) {
        res.status(400).json(error)
    }
})

// Create Route
router.post("/", async (req, res) => {
    try {
        res.json(await Request.create(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
})

// Show Route
router.get("/:id", async (req, res) => {
    try {
        res.json(await Request.findById(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router