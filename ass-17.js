const time = document.getElementById("time");
const date = document.getElementById("date");
const name = document.getElementById("name");
const greeting = document.getElementById("greeting");

name.addEventListener("keypress", setname);
name.addEventListener("blur", setname);

function showtime() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let todaydate = today.toDateString();

    const ampm = hour > 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    time.innerHTML = `${addzero(hour)}<span>:</span>${addzero(min)}<span>:</span>${addzero(sec)} ${ampm}`
    date.innerHTML = `${todaydate}`;
    setTimeout(showtime, 1000);
}

function addzero(n) {
    return ((parseInt(n, 10) < 10 ? '0' : '') + n);
}

function setgreeting() {
    let today = new Date();
    let hour = today.getHours();
    if (hour < 12) {
        document.body.style.backgroundImage = 'url("images/morning.jpg")';
        greeting.innerHTML = 'Good Morning';
    } else if (hour < 18) {
        document.body.style.backgroundImage = 'url("images/e2.jpg")';
        greeting.innerHTML = 'Good Afternoon';
    } else {
        document.body.style.backgroundImage = 'url("images/n1.jpg")';
        greeting.innerHTML = 'Good Evening';
    }
}

function getname() {
    if (localStorage.getItem("mydata") === null) {
        name.innerHTML = "[Enter Name]";
    } else {
        name.innerHTML = localStorage.getItem('mydata');
    }
}

function setname(e) {
    if (e.type === "keypress") {
        if (e.keyCode == 13) {
            localStorage.setItem('mydata', e.target.innerHTML);
            name.blur();
        }
    } else {
        localStorage.setItem('mydata', e.target.innerHTML);
    }
}


getname();
showtime();
setgreeting();