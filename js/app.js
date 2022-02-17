const countdown = () => {

    const countDate = new Date("July 10, 2021 00:00:00").getTime();
    const now = new Date().getTime();
    const remainingTime = countDate - now;

    /*=======Calculate time=========*/
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const displayDay = Math.floor( remainingTime / day);
    const displayHour = Math.floor((remainingTime % day) / hour);
    const displayMinute = Math.floor((remainingTime % hour) / minute);
    const displaySecond = Math.floor((remainingTime % minute) / second);

    /*========Update HTML and Display Time=======*/
    document.querySelector(".day").innerText = displayDay;
    document.querySelector(".hour").innerText = displayHour;
    document.querySelector(".minute").innerText = displayMinute;
    document.querySelector(".second").innerText = displaySecond;

}

setInterval(countdown,1000);