const multer = require("multer");

// module.exports.fileUpload = async (req, res, next) => {
//   try {
//     const file = req.file;
//     console.log(file);
//     return res.json({ file: `${req.get("host")}/${file.path}` });
//   } catch (error) {
//     return res.json({ error: error.message });
//   }
// };

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    const extension = file.mimetype.split("/")[1];
    cb(null, file.fieldname + "-" + Date.now() + "." + extension);
  },
});

module.exports.upload = multer({ storage: storage });
