

function myFun() {
    let correct_way = /^[A-Za-z]+$/;
    let a = document.getElementById("username").value;

    if (a == "") {
        document.getElementById("Message").innerHTML = "** Please fill username";
        return false;

    }
    if (a.length < 3) {
        document.getElementById("Message").innerHTML = "** username must be 3 character";
        return false;
    }
    if (a.length > 20) {
        document.getElementById("Message").innerHTML = "** username must be less than 20 character";
        return false;
    }

    if (a.match(correct_way))
        true;
    else {
        document.getElementById("Message").innerHTML = "**only alphabets are allowed";
        return false;
    }
}