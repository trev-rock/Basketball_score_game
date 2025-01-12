let homeScoreValue = 0;
let guestScoreValue = 0;
let homeScore = document.getElementById('homeScore');
let guestScore = document.getElementById('guestScore');

function home_1() {
    homeScoreValue += 1
    homeScore.textContent = homeScoreValue
}

function home_2() {
    homeScoreValue += 2
    homeScore.textContent = homeScoreValue
}

function home_3() {
    homeScoreValue += 3
    homeScore.textContent = homeScoreValue
}

function guest_1() {
    guestScoreValue += 1
    guestScore.textContent = guestScoreValue
}

function guest_2() {
    guestScoreValue += 2
    guestScore.textContent = guestScoreValue
}

function guest_3() {
    guestScoreValue += 3
    guestScore.textContent = guestScoreValue
}
