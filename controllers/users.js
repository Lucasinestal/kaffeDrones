const model = require("../models/users");

createAccount = async (req,res) => {
    const user = {
        email: req.body.email,
        password: req.body.password,
    }
    const newUser = await model.createAccount(user);
    res.send(newUser);
}


module.exports = {createAccount}