let scoreBoxes = document.getElementsByClassName("score-box")

let home = scoreBoxes[0]
let away = scoreBoxes[1]

let homeDigits = home.children
let awayDigits = away.children

// Define digits as constants
const digits = [
//   a, b, c, d, e, f, g
    //Zero
    [1, 1, 1, 1, 1, 1, 0],
    //One
    [0, 1, 1, 0, 0, 0, 0],
    //Two
    [1, 1, 0, 1, 1, 0, 1],
    //Three
    [1, 1, 1, 1, 0, 0, 1],
    //Four
    [0, 1, 1, 0, 0, 1, 1],
    //Five
    [1, 0, 1, 1, 0, 1, 1],
    //Six
    [1, 0, 1, 1, 1, 1, 1],
    //Seven
    [1, 1, 1, 0, 0, 0, 0],
    //Eight
    [1, 1, 1, 1, 1, 1, 1],
    //Nine
    [1, 1, 1, 1, 0, 1, 1]
]

function setNumber(digit, number){
    let segments = digit.children
    for(let i = 0; i < 7; i++){
        digits[number][i] == 0 ? segments[i].classList.remove("active") : segments[i].classList.add("active")
    }
}

function setScore(side, number){
    let formatted = ("000"+number).slice(-3)
    if(side == "home"){
        for(let i = 0; i<3; i++){
            setNumber(homeDigits[i], Number(formatted[i]))
        }
    } else if(side == "away"){
        for(let i = 0; i < 3; i++){
            setNumber(awayDigits[i], Number(formatted[i]))
        }
    }
}

function setHome(number){
    setScore("home", number)
}

function setAway(number){
    setScore("away", number)
}

let homeScore = 0
let awayScore = 0

function homeScorePoint(points){
    homeScore += points
    setHome(homeScore)
}

function awayScorePoint(points){
    awayScore += points
    setAway(awayScore)
}

homeScorePoint(0)
awayScorePoint(0)