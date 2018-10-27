const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const garam = process.env.RAHASIA

module.exports = {
    encode : (password)=>{
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
        return hash
    },

    decode : (oldpass, newpass)=>{
        return bcrypt.compareSync(newpass, oldpass); 
        
    },

    jEncode : (object)=>{
        return jwt.sign(object ,garam);
    },

    jDecode: (token) =>{
        return jwt.verify(token, garam)
    }

}