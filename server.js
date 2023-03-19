function login() {
    uname = document.getElementById('name').value;
    password = document.getElementById('password').value;
    if (uname == "" || password == "") {
        alert('❌ Please Fill Username or Password!')
    }
    else {
        
    if (uname == "Ritika" && password == "nisilowtohigh#@z") {
        localStorage.setItem('premium','yes')
    }
        localStorage.setItem('name',uname)
        localStorage.setItem('password',password)
        localStorage.setItem('logged','yes')
        window.location.replace('homepage.html')
    }
}
if (localStorage.getItem('logged')=='yes') {
    window.location.replace('homepage.html')
}
