//middleware de validacion para extra credit

const validateData = (req, res, next) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;

    if (!title || !year || !director || !duration || !genre || !rate || !poster) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    if (isNaN(year) || year.toString().length !== 4) {
        return res.status(400).json({ error: 'Year must be a 4-digit number' });
    }

    next();
};

const validateMovieData = (req, res, next) => {
    validateData(req, res, () => {
        next();
    });
};

module.exports = validateMovieData;
