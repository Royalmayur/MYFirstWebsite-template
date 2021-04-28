

// hamburger menu
hame = () => {
    let ok = document.getElementById("menu");
    let change = document.querySelector(".ham");
    if (ok.style.display == "block") {
        ok.style.display = "none";
        change.classList.remove('open')

    }
    else {
        ok.style.display = "block";
        change.classList.add('open')

    }
}
function bodyt() {
    let ok1 = document.getElementById("menu");
    let change1 = document.querySelector(".ham");
    if (ok1.style.display == "block") {
        ok1.style.display = "none";
        change1.classList.remove('open');
    }
}
function clock1() {
    // clock.html
    setInterval(clock, 1000);
    function clock() {
        let time = new Date();
        let hour = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
        let extension = "AM";
        if (hour > 12) {
            hour -= 12;
            extension = "PM";
        }
        if (hour == 0) {
            hour = 12;
            extension = "PM";
        }
        if (hour < 10) {
            hour = "0" + hour;
        }
        if (min < 10) {
            min = "0" + min;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }
        let cutime = hour + ":" + min + ":" + sec + extension;
        document.getElementById("stclock").innerHTML = cutime;
    }
    clock();
}

// the validation scripts 

function valid() {
    let i1 = "";
    i1 = document.forms["signup"]["email"].value;
    console.log(i1);
    let i4 = i1.lastIndexOf(".");
    console.log(i4)
    let i5 = i1.indexOf("@");
    console.log(i5);
    let i2 = document.forms["signup"]["password"].value;
    console.log(i2);
    let i3 = document.forms["signup"]["confirmpassword"].value;
    console.log(i3);
    console.log(i1.length);
    if (i1 == "" || i2 == "" || i3 == "") {
        alert("All Entries Must be filled");
        return false;
    }
    if (i2 != i3) {
        alert("Password and Confirm_Password Must be same");
        return false;
    }
    if (i2.length < 8) {
        alert("Password Must have 8 or Greater then 8 character");
        return false;
    }
    if ((i5 == (i1.length - 10)) || (i5 == (i1.length - 9))) {

        if ((i4 == i1.length - 4) || (i4 == i1.length - 3)) {
            return true;

        }
        else {
            alert("Please Enter valid Email");
            return false;
        }
    }
    else {
        alert("Please Enter valid Email");
        return false;
    }

}
function show1() {
    let s1 = document.forms["signup"]["password"].type;
    if (s1 == "password") {
        document.forms["signup"]["password"].type = "text";
        document.getElementById("sh1").innerHTML = '<i class="far fa-eye-slash"></i>';
    }
    else {
        document.forms["signup"]["password"].type = "password";
        document.getElementById("sh1").innerHTML = '<i class="far fa-eye"></i';
    }
}
function show2() {
    let s2 = document.forms["signup"]["confirmpassword"].type;
    if (s2 == "password") {
        document.forms["signup"]["confirmpassword"].type = "text";
        document.getElementById("sh2").innerHTML = '<i class="far fa-eye-slash"></i>';
    }
    else {
        document.forms["signup"]["confirmpassword"].type = "password";
        document.getElementById("sh2").innerHTML = '<i class="far fa-eye"></i';
    }

}