var express = require('express');
var router = express.Router();
const contact = require("../businessLogic/contact")

/* GET contact listing. */
router.get('/', function(req, res, next) {
    contact.getContacts(req, res);
});

//Get single contact
router.get('/:id', function(req, res, next) {
    contact.getContactById(req, res);
});

//Update contact
router.put('/:id', function(req, res, next) {
    contact.updateContact(req, res);
});

router.delete('/:id', function(req, res, next) {
    contact.deleteContact(req, res);
});

//create contact
router.post('/', function(req, res, next) {
    contact.createContact(req, res);
});
module.exports = router;