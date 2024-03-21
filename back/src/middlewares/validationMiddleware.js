//middleware de validacion para extra credit

const validateData = (req, res, next) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;

    if (!title || !year || !director || !duration || !genre || !rate || !poster) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    if (isNaN(year) || year.toString().length !== 4) {
        return res.status(400).json({ error: 'Year must be a 4-digit number' });
    }

    if (!isValidUrl(poster)) {
        return res.status(400).json({ error: 'Poster must be a valid URL' });
    }

    next();
};

const isValidUrl = (url) => {
    const urlPattern = new RegExp('^(https?:\\/\\/)?' +
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + 
        '((\\d{1,3}\\.){3}\\d{1,3}))' + 
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + 
        '(\\?[;&a-z\\d%_.~+=-]*)?' + 
        '(\\#[-a-z\\d_]*)?$', 'i');

    return urlPattern.test(url);
};

const validateMovieData = (req, res, next) => {
    validateData(req, res, () => {
        next();
    });
};

module.exports = validateMovieData;
