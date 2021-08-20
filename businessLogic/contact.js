const contact = require('../models/contact')
const model = require('../models/contact')

module.exports = {
    createContact: function(req, res) {
        let c = new contact(req.body);
        c.save().then(cnt => {
            res.status(201).json({ success: true, message: 'contact created successfully' })
        }).catch(err => {
            res.status(400).json({ success: false, message: err.message })

        })
    },
    getContacts: function(req, res) {

        contact.find((err, contacts) => {
            if (err) {
                res.status(400).json({ success: false, message: err.message })

            } else {
                res.status(200).json({ success: true, data: contacts })

            }
        })
    },
    getContactById: function(req, res) {

        contact.findById(req.params.id, (err, cntct) => {
            if (err) {
                res.status(400).json({ success: false, message: err.message })

            } else {
                res.status(200).json({ success: true, data: cntct })

            }
        })
    },
    updateContact: function(req, res) {

        contact.findById(req.params.id, (err, cntct) => {
            if (err) {
                res.status(400).json({ success: false, message: err.message })

            } else {
                cntct.name = req.body.name;
                cntct.phone_number = req.body.phone_number;
                cntct.save().then(c => {
                    res.status(200).json({ success: true, message: 'Updated successfully' })
                }).catch(err => {
                    res.status(400).json({ success: false, message: err.message })

                })

            }
        })
    },
    deleteContact: function(req, res) {
        contact.findByIdAndRemove({ _id: req.params.id }, (err, cnt) => {
            if (err) {
                res.status(400).json({ success: false, message: err.message })

            } else {
                res.status(200).json({ success: true, data: "deleted successfully" })

            }
        })
    }
}