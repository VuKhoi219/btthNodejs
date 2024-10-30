const mongoose = require("mongoose");

const treeShopSchema = new mongoose.Schema({
    treename : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    image : String,
})
const  TreeShop = mongoose.model("TreeShop", treeShopSchema);
module.exports = TreeShop;
