const express = require('express');
const router = express.Router();
const userRoute = require('./userRoute/main.js')

router.use('/users',userRoute)
router.use('/products',productRoute)

module.exports = router;