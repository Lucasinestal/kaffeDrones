const bcrypt = require('bcryptjs');
const db = require("../database");


createAccount = (user) => {
    return new Promise ((resolve, reject) => {
        const hash = bcrypt.hashSync(user.password, 10)
        user.password = hash;
        db.users.insert(user, function (err, docs){
            if(err){
                reject(err)
            } else{
                resolve(docs)
            }
        })
    })
}


module.exports = {createAccount}