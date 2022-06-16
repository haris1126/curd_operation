const express = require("express")

const router = new express.Router()
const MensRanking = require("../models/mens")
const { createData, getData, getdataById, updateData, deleteData } = require('../controller/mens')



router.route('/').get(getData).post(createData)
router.route('/:id').get(getdataById).patch(updateData).delete(deleteData)


/* // handle POST request 

router.post("/", createData)

// handle GET request 

router.get("/", getData)

// handle GET request of a particular individual 

router.get("/:id", getdataById)

// handle PATCH request 

router.patch("/:id", updateData)


// handle DELETE request of a particular individual 

router.delete("/:id", deleteData) */

module.exports = router
