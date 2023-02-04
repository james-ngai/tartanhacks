function validate() {
    let username = document.getElementById('typeEmailX').value;
    let password = document.getElementById('typePasswordX').value;

    if (username === 'jamesngai' && password === 'password')
    {
        location.assign('../index.html');
    }
    else
    {
        alert('Incorrect AndrewID or Password')
    }
}