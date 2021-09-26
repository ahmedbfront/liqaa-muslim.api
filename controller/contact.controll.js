const Contact = require("../model/contact.model");

module.exports = {
  getAllMessages: async (req, res) => {
    try {
      const result = await Contact.find({}, { __v: 0 });
      res.json(result);
    } catch (err) {
      res.json(err.message);
    }
  },

  getOneMessage: async (req, res) => {
    try {
      const result = await Contact.findById(req.params.id);
      res.json(result);
    } catch (err) {
      res.json(err.message);
    }
  },

  addNewMessage: async (req, res) => {
    try {
      const message = await new Contact({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message,
      }).save();
      res.json({
        msg: "sent successfully"
      });
    } catch (err) {
      res.json({
        err: "Fields can't be left blank"
      });
    }
  },

  updateMessage: async (req, res) => {
    try {
      const result = await Contact.updateOne(
        { _id: req.params.id, },
        {
          $set: {
            seen: req.body.seen
          },
        }
      );
      res.json("The product has been modified successfully");
    } catch (err) {
      res.json(err.message);
    }
  },

  deleteMessage: async (req, res) => {
    try {
      const result = await Contact.findByIdAndDelete({ _id: req.params.id });
      res.json("The product has been removed successfully");
    } catch (err) {
      res.json(err.message);
    }
  },
};
