const mongoose = require ("mongoose");

const dbCon = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://lanhonguiper:Arbolmateo966!@m2project.zikef1i.mongodb.net/Movies",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log("MongoDB connected successfully");
        return mongoose.connection;
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;
    }
};

module.exports = dbCon;