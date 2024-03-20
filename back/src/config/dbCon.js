const mongoose = require ("mongoose");

const dbCon = async () => {
    await mongoose.connect(
        "mongodb+srv://lanhonguiper:Arbolmateo966!@m2project.zikef1i.mongodb.net/Movies"
    )
};

module.exports = dbCon;