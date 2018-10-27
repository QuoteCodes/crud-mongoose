const helper = require('../helpers/babu')
const User = require('../models/users')

module.exports = {
    isLogin : (req, res, next) =>{
        let token = req.headers.token
        console.log('ini token', token);
        
        if(token){
            let cek =  helper.jDecode(token)
            User.findOne({
                _id : cek._id
            })
            .then(found =>{
                if(found){
                    req.decoded = cek
                    next()
                } else {
                    res.status(401).json(`Gak ada akses`)
                }
            })
            .catch(err=>{
                res.status(500).json(err)
            })
            
        }
    },

    isAdmin : (req, res, next)=>{
        if(req.decoded.role === 'admin'){
            next()
        }else{
            res.status(403).json(`forbidden boy`)
        }
    }
}