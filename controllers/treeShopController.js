const treeShopService = require("../services/treeShopService");

module.exports = {
    getTreeShop: async (req, res) => {
        const treeShop = await treeShopService.getTreeShop();
        console.log(treeShop);
        res.render("treeShop", { treeShop });
    },
    createTree: async (req, res) => {
        const data = req.body;
        await treeShopService.createTree(data);
        const treeShop = await treeShopService.getTreeShop();
        console.log(treeShop);
        res.render("treeShop", { treeShop });
    },
    reset : async (req, res) => {
        req.body = {};
        // const  data = req.body;
        res.send("Reset successfully");
    }
}