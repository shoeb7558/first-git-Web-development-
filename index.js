const btn = document.querySelector('.btn');
btn.addEventListener('click', e => {
    e.preventDefault();
    const myForm = document.getElementById('my-form');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name.trim() === '' || email.trim() === '') {
        alert('Please enter both name and email');
        return;
    }

    // Create an object to store user data
    const userData = {
        name: name,
        email: email
    };

    // Convert the object to a JSON string and store it in local storage
    localStorage.setItem('userData', JSON.stringify(userData));

    myForm.reset();

    // Change the background and class of the form
    document.getElementById('my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
});
