let Hpoints = document.getElementById("home-score")
let homePoints = 0
let Gpoints = document.getElementById("guest-score")
let guestPoints = 0

function Hplus1() {
    homePoints += 1
    Hpoints.innerText = homePoints
}

function Hplus2() {
    homePoints += 2
    Hpoints.innerText = homePoints
}

function Hplus3() {
    homePoints += 3
    Hpoints.innerText = homePoints
}

function Hreset() {
    homePoints = 0
    Hpoints.innerText = homePoints
}

function Gplus1() {
    guestPoints += 1
    Gpoints.innerText = guestPoints
}

function Gplus2() {
    guestPoints += 2
    Gpoints.innerText = guestPoints
}

function Gplus3() {
    guestPoints += 3
    Gpoints.innerText = guestPoints
}

function Greset() {
    guestPoints = 0
    Gpoints.innerText = guestPoints
}