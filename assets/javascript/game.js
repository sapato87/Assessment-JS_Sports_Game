// get elements for team 1 and assign them to variables
// team 1 shots taken goals and the shoot button
// add evenlistener for the button
// shoot taken increase with button click
// goals sometimes increase based on random outcome
let teamoneShootButton = document.querySelector("#teamone-shoot-button")
let teamoneNumshots = document.querySelector("#teamone-numshots")
let teamoneNumgoals = document.querySelector("#teamone-numgoals")
teamoneShootButton.addEventListener("click", function () {
    console.log("teamone shoot button");
    let newShottotal = Number(teamoneNumshots.innerHTML) + 1;
    teamoneNumshots.innerHTML = newShottotal;
    // console.log(Math.random())
    if (Math.random() < 0.5) {
        // score a goal when it's <.5
        console.log("goal score")
        let newgoals = Number(teamoneNumgoals.innerHTML) + 1;
        teamoneNumgoals.innerHTML = newgoals;
    }
})
let teamtwoShootButton = document.querySelector("#teamtwo-shoot-button")
let teamtwoNumshots = document.querySelector("#teamtwo-numshots")
let teamtwoNumgoals = document.querySelector("#teamtwo-numgoals")
teamtwoShootButton.addEventListener("click", function () {
    console.log("teamtwo shoot button");
    let newShottotal = Number(teamtwoNumshots.innerHTML) + 1;
    teamtwoNumshots.innerHTML = newShottotal;
    if (Math.random() < 0.5) {
        console.log("goal score")
        let newgoals = Number(teamtwoNumgoals.innerHTML) + 1;
        teamtwoNumgoals.innerHTML = newgoals;
    }
})
let numResets = document.querySelector("#num-resets")
let resetButton = document.querySelector("#reset-button")
resetButton.addEventListener("click", function () {
    console.log("reset button")
    teamoneNumshots.innerHTML = 0;
    teamoneNumgoals.innerHTML = 0;
    teamtwoNumshots.innerHTML = 0;
    teamtwoNumgoals.innerHTML = 0;
    let newresetNum = Number(numResets.innerHTML) + 1;
    numResets.innerHTML = newresetNum;
})