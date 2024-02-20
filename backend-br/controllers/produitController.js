const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();

module.exports = {

    listProduits: async (req,res) =>{
        const produits = await prisma.produit.findMany();
        res.json(produits)

    } 
};