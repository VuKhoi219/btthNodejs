const treeShopModel = require("../models/treeShop");

module.exports = {
    getTreeShop : async () => {
        return await treeShopModel.find();
    },
    createTree : async (data) => {
        const newTree = new treeShopModel(data);
        return await newTree.save();
    },
}