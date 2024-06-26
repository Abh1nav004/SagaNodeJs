const Address = require('../models/address');

// function that add new address in database;
async function handleAddAddress(req, res) {
    const { fullName, fullAddress, phoneNumber } = req.body;
    const pincode = parseInt(req.body.pincode);
    await Address.create({
        fullName,
        fullAddress,
        phoneNumber,
        pincode,
        addressOwner: req.user._id,
    });
    return res.redirect('/address');
}

module.exports = {
    handleAddAddress,
}