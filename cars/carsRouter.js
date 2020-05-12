const express = require('express')
const db = require('../data/dbConnect')
const router = express.Router()

router.use(express.json())
router.use(validatePostPut)

router.post('/', (req,res)=>{
    db('cars')
    .insert(req.body)
        .then(newID=>{
            res.status(200).json(newID)
        })
        .catch(err=>{
            res.status(500).json({
                message: 'trouble adding to the database',
                error: err
            })
        })
})

router.get('/', (req,res)=>{
    db('cars')
        .then(cars=>{
            if(cars){
                res.status(200).json(accounts)
            }else{
                res.status(404).json({
                    message: 'data not found'
                })
            }
        })
        .catch(err=>{
            res.status(500).json({
                message: 'trouble retrieving data',
                error: err
            })
        })
})

function validatePostPut(req, res,next){
    if(req.method === 'POST' || req.method === 'PUT'){
        if(!req.body.vin || !req.body.make || !req.body.model || !req.body.miles){
            res.status(400).json({
                message: 'please add valid values for vin, make, model, and miles'
            })
        }else{
            next()
        }
    }else{
        next()
    }
}

module.exports = router