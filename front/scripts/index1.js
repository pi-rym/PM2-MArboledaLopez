document.getElementById('clearBtn').addEventListener('click', clearForm);

function clearForm() {
    const inputFields = document.querySelectorAll('#forminfo input');
    inputFields.forEach(input => {
        input.value = '';
    });
}

function submitForm() {
    const inputFields = document.querySelectorAll('#forminfo input');
    let isFormValid = true;

    inputFields.forEach(input => {
        if (input.value.trim() === '') {
            isFormValid = false;
        }
    });

    if (!isFormValid) {
        alert('Recuerda llenar todos los datos :D');
        return;
    }

    const formData = {
        title: document.getElementById('title').value,
        year: document.getElementById('year').value,
        director: document.getElementById('director').value,
        duration: document.getElementById('duration').value,
        genre: document.getElementById('genre').value,
        rate: document.getElementById('rate').value,
        poster: document.getElementById('poster').value
    };

    axios.post('http://localhost:3000/Movies', formData)
            .then(res => {
                console.log('Pelicula creada correctamente.', res.data);
            })
            .catch(error => {
                console.log(error);
            });
}

document.getElementById('submitBtn').addEventListener('click', submitForm);
