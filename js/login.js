function validate() {
    var password = document.getElementById("input_password").value;
    
    var email = document.getElementById("input_email").value;
    
    

}

function getCookie(name) {
    let cookieArr = document.cookie.split(";");
    for (let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        if (name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

function checkCredentials() {
    var email = document.getElementById("input_email").value;
    var password = document.getElementById("input_password").value;

    var storedEmail = getCookie("email");
    var storedPassword = getCookie("password");

    if (email === storedEmail && password === storedPassword) {
        alert("Credentials match!");
    } else {
        alert("Invalid credentials.");
    }
}