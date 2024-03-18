const testController = (req, res)=>{
    res.status(200).send("Estamos recibiendo la solicitud");
};
const moviesController = (req, res)=>{
    res.status(200).send("Los datos de las películas estarán disponibles próximamente :D");
};

module.exports={
    testController,
    moviesController,
};