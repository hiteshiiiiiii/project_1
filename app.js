window.onload = () => {
    console.log("Page loaded and DOM fully loaded");

    document.querySelector('#calculate').onclick = calculate;
    document.querySelector('#reset').onclick = reset;
    document.querySelector('#stop').onclick = stop;
}

let interval;

function calculate() {
    console.log("Calculate button clicked");

    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;
    console.log("Date input:", date);
    console.log("Time input:", time);

    const endTime = new Date(date + " " + time);
    console.log("End time set to:", endTime);

    if (isNaN(endTime.getTime())) {
        console.error("Invalid date/time format");
        alert("Invalid date/time format. Please enter a valid date and time.");
        return;
    }

    clearInterval(interval); // Clear any existing intervals before starting a new one
    interval = setInterval(() => calculateTime(endTime), 1000);
}

function calculateTime(endTime) {
    const currentTime = new Date();
    console.log("Current time:", currentTime);

    const days = document.querySelector('#countdown-days');
    const hours = document.querySelector('#countdown-hours');
    const minutes = document.querySelector('#countdown-minutes');
    const seconds = document.querySelector('#countdown-seconds');

    if (!days || !hours || !minutes || !seconds) {
        console.error("Countdown elements not found");
        return;
    }

    if (endTime > currentTime) {
        const timeLeft = (endTime - currentTime) / 1000;

        console.log("Time left:", timeLeft);
        days.innerText = Math.floor(timeLeft / (24 * 60 * 60));
        hours.innerText = Math.floor((timeLeft / (60 * 60)) % 24);
        minutes.innerText = Math.floor((timeLeft / 60) % 60);
        seconds.innerText = Math.floor(timeLeft % 60);
    } else {
        console.log("Countdown finished");
        days.innerText = 0;
        hours.innerText = 0;
        minutes.innerText = 0;
        seconds.innerText = 0;
        alert("Countdown finished!");
        clearInterval(interval);
    }
}

function stop() {
    console.log("Stop button clicked");
    clearInterval(interval);
}

function reset() {
    console.log("Reset button clicked");
    clearInterval(interval);

    const days = document.querySelector('#countdown-days');
    const hours = document.querySelector('#countdown-hours');
    const minutes = document.querySelector('#countdown-minutes');
    const seconds = document.querySelector('#countdown-seconds');

    if (!days || !hours || !minutes || !seconds) {
        console.error("Countdown elements not found");
        return;
    }

    days.innerText = 0;
    hours.innerText = 0;
    minutes.innerText = 0;
    seconds.innerText = 0;
    document.querySelector("#date").value = "";
    document.querySelector("#time").value = "";
}
