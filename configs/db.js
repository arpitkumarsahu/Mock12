const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://arpitkumarsahu:arpit@cluster0.bsbym9t.mongodb.net/olx?retryWrites=true&w=majority"
);

module.exports = {
  connection,
};
