const express = require("express")
const router = new express.Router()
const MensRanking = require("../models/mens")

const createData =  async (req, res) => {
    try {
        const addingMensRecords = new MensRanking(req.body)
        console.log(req.body)
        const insertMens = await addingMensRecords.save();
        res.status(201).send(insertMens) //201 is created


    } catch (e) {
        res.status(400).send(e) //400 is bad Request
        
    }
}

const getData =  async (req, res) => {
    try {
        const getMens = await MensRanking.find({}).sort({ "ranking": 1 }) //this returns a promise to handle that we use await 
        res.send(getMens)

    } catch (e) {
        res.status(400).send(e) //400 is bad Request
    }
}

const getdataById =  async (req, res) => {
    try {
        const _id = req.params.id;
        const getMen = await MensRanking.findById({ _id }) //this returns a promise to handle that we use await 
        res.send(getMen)

    } catch (e) {
        res.status(400).send(e) //400 is bad Request
    }
}

const updateData = async (req, res) => {
    try {
        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndUpdate(_id, req.body, { new: true }) //this returns a promise to handle that we use await 
        res.send(getMen)                                                  //true here

    } catch (e) {
        res.status(500).send(e) //500 is server related error
    }
}

const deleteData =  async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteMen = await MensRanking.findByIdAndDelete(_id) //this returns a promise to handle that we use await 
        res.send(deleteMen)                                                  //true here

    } catch (e) {
        res.status(500).send(e) //500 is server related error
    }
}


module.exports = {
    createData,
    getData,
    getdataById,
    updateData,
    deleteData

}