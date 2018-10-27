const User = require ('../models/users')
const helper = require('../helpers/babu')

module.exports = {
    getAllUser : (req, res)=>{
        User.find()
        .then(data =>{
            res.status(200).json(data)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    getUser : (req, res)=>{
        User.findOne({
            _id : req.params.id
        })
        .then(user =>{
            res.status(200).json(user)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    createUser : (req, res) =>{
        User.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            role : req.body.role
        })
        .then(data =>{
            res.status(200).json(data)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    deleteUser : (req, res)=>{
        User.deleteOne({
            _id : req.params.id
        })
        .then(del =>{
            res.status(200).json(del)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    updateUser : (req, res) =>{
        User.updateOne({
            _id : req.params.id
        },{
            name : req.body.name,
            email : req.body.email,
            password :req.body.password,
            role : req.body.role
        })
        .then(data =>{
            res.status(201).json(data)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    updatePacth : (req, res) =>{
        User.updateOne({
            _id:  req.params.id
        },{
            password :req.body.password
        })
        .then(data =>{
            res.status(201).json(data)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    },

    doLogin : (req, res)=>{
        User.findOne({
            email : req.body.email
        })
        .then(data =>{
            let check = helper.decode(data.password, req.body.password)
            if(check ){
                let token = helper.jEncode({
                    _id : data._id,
                    name : data.email,
                    role : data.role
                })
                res.status(200).json({
                    message : `Berhasil Login`,
                    token : token
                })
            }
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    }





}