const express = require("express");
const router = express.Router();
const User = require("../models/User.model");

router.get("/users", async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    } catch (e) {
        res.status(500).json({ message: `error occurred ${e}` });
    }
});

module.exports = router;
