const express = require('express')
const { default: mongoose } = require('mongoose')


const addressSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true,
        minLength :15,
    },
    street: String

})

const menSchema = new mongoose.Schema({
    ranking: {
        type: Number,
        required: true,
        unique: true,
        validate(value) {
            if (value < 0) {
                throw new Error("Ranking should not be negative")
            }
        },
        /*  validate: {
             validator: function (value) {
                 return value.length < 0
             },
             message: "Ranking should not be negative"
         } */
    },
    name: {
        type: String,
        required: true,
        trim: true,
        unique: [true, "Name already exists"],
        // we want our names to be at least five characters long, we can create a function below
        /*   Validate: {
              validator: function (v) {
                  if (v && v.length >= 5) {
                      return true;
                  }
                  return false;
              }
          }, */
        //if there are white space before or after the name it will trim that
        minlength: [10, "name can't be shorter 7 characters"],
        maxlength: [25, "name can't be longer than 25 characters"],



    },
    dob: {
        type: Date,
        required: [true, 'DOB is required'],
        trim: true
    },
    country: {
        type: String,
        required: [true, "Country is required"],
        trim: true
    },
    score: {
        type: Number,
        required: [true, "score is required"],
        trim: true
    },
    event: {
        type: String,
        default: "100m"
    },

})

// const addressSchema = new mongoose.Schema({
//     address: {
//         city: String,
//         street: String,
//         required: true
//     }

// })

//we are creating a collection here
const MensRanking = new mongoose.model("MensRanking", menSchema)

module.exports =
    MensRanking

