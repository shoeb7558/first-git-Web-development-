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
    const user = {
        name: name,
        email: email
    };

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Add the new user to the array
    existingUsers.push(user);

    // Convert the object to a JSON string and store it in local storage
    localStorage.setItem('users', JSON.stringify(existingUsers));

    myForm.reset();

    // Change the background and class of the form
    document.getElementById('my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
});
