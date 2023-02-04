function validate() {
    let username = document.getElementById('typeEmailX').value;
    let password = document.getElementById('typePasswordX').value;

    if ((username === 'jdngai' || username === "jdngai") && password === 'password')
    {
        location.assign('../index.html');
    }
    else
    {
        alert('Incorrect AndrewID or Password')
    }
}