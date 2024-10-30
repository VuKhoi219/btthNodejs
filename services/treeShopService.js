const treeShopRepository = require("../repositorys/treeShopRrepository");

module.exports = {
    getTreeShop: async () => {
        const treeShop = await treeShopRepository.getTreeShop();
        return treeShop;
    },
    createTree: async (data) => {
        await treeShopRepository.createTree(data);
    }
}