var name_validation = false;
var email_validation = false;
var password_validation = false;

var age_validation = false;




//name must be two words
function validateName(){
    var name = document.getElementById("input_name").value;

    var flag = false;
    if(name.length > 2) {
        for(var i = 0; i<name.length-2; i++) {
            if(isNaN(name[i]) && name[i+1] == ' ' && isNaN(name[i+2])) {
                flag = true;
                break;
            }
        }
        if(flag == false) {
            name_validation = false
        } else {
            name_validation = true
        }
    } else {
        name_validation = false;
    }
    if(name_validation == false) {
        document.getElementById("toast").innerHTML = "Name must consists of 2 words";
    }
    // if(name_validation == true) {
    //     document.getElementById("name_status").innerHTML = " ";
    // }    
}




//must have @ and ends with .com
function validateEmail(){
    var email = document.getElementById("input_email").value;

    var flag1 = false;
    var flag2 = false;

    for(var i = 0; i<email.length-3; i++) {
        if(email[i] == '@') {
            flag1 = true;
            break;
        }

    }
    
    if(email[email.length-4] == '.' && email[email.length-3] == 'c' && 
    email[email.length-2] == 'o' && email[email.length-1] == 'm') {
        flag2 = true;
    }
    
    if(flag1 == false || flag2 == false) {
        email_validation = false;
    } else if (flag1 == true && flag2 == true){
        email_validation = true;
    }
    
    if(email_validation == false) {
        document.getElementById("toast").innerHTML = "Invalid email!";
    }
    // if(email_validation == true) {
    //     document.getElementById("email_status").innerHTML = " ";
    // }    
}


// harus alphanumeric
function validatePass(){
    var password = document.getElementById("input_password").value;
    var flag = false;
    var flagNum = false;
    var flagChar = false;
    
    for(var i = 0; i<password.length; i++) {
        if(!isNaN(password[i])) {
            flagChar = true;
        } else {
            flagNum = true;
        }
    }

    if(flagChar == true && flagNum == true) {
        flag = true;
    }

    if(flag == true && password.length >= 8) {
        password_validation = true;
    } else {

        if(password.length <= 8) {
            document.getElementById("toast").innerHTML = "Password must have 8 characters or more";
        }
        else if(!flag) {
            document.getElementById("toast").innerHTML = "Password must be alphanumeric"; 
        }
        password_validation = false;
    }


    // if(password_validation == true) {
    //     document.getElementById("password_status").innerHTML = " ";
    // }    
}











function validateDOB() {
    var dob_txt = document.getElementById("input_dob").value;
    
    
    // var flag = true;
    // dd-mm-yyyy
    if(dob_txt.length != 10) {
        document.getElementById("toast").innerHTML = "Date must be DD-MM-YYYY";
    } else {
        var dobArray = dob_txt.split('-');
        if(dobArray.length != 3) {
            document.getElementById("toast").innerHTML = "Date must be DD-MM-YYYY";
        } else {
            var number = 0;

            for(var i = 0; i<3; i++) {
                if(isNaN(dobArray[i]) == false) {
                    number++;
                }
            }
            if(number == 3) {
                var date = parseInt(dobArray[0]);
                var month = parseInt(dobArray[1]);
                var year = parseInt(dobArray[2]);

                const d = new Date();
                var age = d.getFullYear() - year - 1;
                if(d.getMonth() + 1 > month) {
                    age += 1;
                }
                else if(d.getMonth() + 1 == month) {
                    if(d.getDate() >= date) {
                        age += 1;
                    }
                }

                if(age < 17) {
                    document.getElementById("toast").innerHTML = "Must be 17 and above";
                } else {
                    // document.getElementById("dob_status").innerHTML = " ";
                    age_validation = true;
                }

                if(month > 12) {
                    document.getElementById("toast").innerHTML = "Incorrect date";
                }
                if(date > 31) {
                    document.getElementById("toast").innerHTML = "Incorrect date";
                }

            } else {
                document.getElementById("toast").innerHTML = "Date must be a number";
            }
        }
    }

}





function validateAll() {
    
    var password = document.getElementById("input_password").value;
    var age = document.getElementById("input_dob").value;
    var email = document.getElementById("input_email").value;
    var name = document.getElementById("input_name").value;
    var username = document.getElementById("input_username").value;

    validateName();
    validateEmail();
    validatePass();
    validateDOB();  


    if (password === null || password.trim() === "") {
        document.getElementById("toast").innerHTML = "Cannot be empty";
    } 
    if (name === null || name.trim() === "") {
        document.getElementById("toast").innerHTML = "Cannot be empty";
    } 
    if (username === null || username.trim() === "") {
        document.getElementById("toast").innerHTML = "Cannot be empty";
    } 
    if (age === null || age.trim() === "") {
        document.getElementById("toast").innerHTML = "Cannot be empty";
    } 
    if (email === null || email.trim() === "") {
        document.getElementById("toast").innerHTML = "Cannot be empty";
    } 

    
    var x = document.getElementById("toast");


    if(name_validation == true && email_validation == true && password_validation == true &&
        age_validation == true
    ) {

        alert("registration successfull");
        window.location.href = "loginPage.html";
    } else {

        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }


    let cookieUsername = 'username=' + username +';'; 
    let cookieEmail = 'email=' + email +';'; 
    let cookieName = 'name=' + name +';'; 
    let cookiePass = 'password=' + password +';'; 
    let cookieAge = 'age=' + age +';'; 

    // document.cookie = 'firstName=josh; expires=' + new Date(9999, 0, 1).toUTCString
    document.cookie = cookieUsername + ' expires=' + new Date(9999, 0, 1).toUTCString
    document.cookie = cookieEmail + ' expires=' + new Date(9999, 0, 1).toUTCString
    document.cookie = cookieName + ' expires=' + new Date(9999, 0, 1).toUTCString
    document.cookie = cookiePass + ' expires=' + new Date(9999, 0, 1).toUTCString
    document.cookie = cookieAge + ' expires=' + new Date(9999, 0, 1).toUTCString
    console.log(document.cookie)
}