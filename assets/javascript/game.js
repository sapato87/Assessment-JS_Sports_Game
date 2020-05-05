let incrementButton = document.querySelector("#increment");
let decrementButton = document.querySelector("#decrement");
let counter = document.querySelector("#counter");

incrementButton.addEventListener("click", function () {
    console.log("+ button clicked");
    let newCounterValue = Number(counter.innerHTML) + 1;
    incrementButton.addEventListener("click", function () {
        counter.innerHTML = newCounterValue;
        if (newCounterValue >= 10) {
            counter.styleMedia.color = "red";
        }
    })