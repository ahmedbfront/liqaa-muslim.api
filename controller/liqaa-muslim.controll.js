const cloud = require("../helpers/cloudinary");
const fs = require("fs");

const Liqaa = require("../model/liqaa-muslim.model");

module.exports = {
  getPost: async (req, res) => {
    try {
      const result = await Liqaa.find({},
        { __v: 0, comments: 0, content: 0 });
      res.json(result);
    } catch (err) {
      res.json(err.message);
    }
  },

  addPost: async (req, res) => {
    try {
      const pathImage = await cloud.uploads(req.files[0].path, "Liqaa");
      fs.unlinkSync(req.files[0].path);
      
      const post = await new Liqaa({
        title: req.body.title,
        image: pathImage.url,
        content: req.body.content,
        tag: req.body.tag,
        author: req.body.author,
      }).save();

      res.json(post);

    } catch (err) {
      res.json({
        msg: "Errrror",
        err: err.message
      });
    }
  },

  deletePost: async (req, res) => {
    try {
      const result = await Liqaa.findByIdAndDelete({ _id: req.params.id });
      res.json("The product has been removed successfully");
    } catch (err) {
      res.json(err.message);
    }
  },
};
