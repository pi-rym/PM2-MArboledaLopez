const testController = (req, res)=>{
    res.status(200).send("Estamos recibiendo la solicitud");
};

module.exports={
    testController,
};