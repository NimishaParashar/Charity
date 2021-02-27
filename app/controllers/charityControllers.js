const { Charity } = require('../models/charity')

module.exports.create = function (req, res) {
    const body = req.body;
    const charity = new Charity(body);
    charity
        .save()
        .then(function (charity) {
            res.send(charity);
        })
        .catch(function (err) {
            res.send(err);
        });
};
module.exports.list = (req, res) => {
    Charity.find().then(function (charity) {
        res.json(charity)
        // console.log("show")
    }).catch(function (err) {
        res.json(err)
    })
}
