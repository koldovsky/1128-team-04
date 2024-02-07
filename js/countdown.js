function startCountdown() {
    var countdownInterval = setInterval(function() {
        var days = document.getElementById("days-value").textContent;
        var hours = document.getElementById("hours-value").textContent;
        var minutes = document.getElementById("minutes-value").textContent;
        var seconds = document.getElementById("seconds-value").textContent;

        seconds--;

        if (seconds < 0) {
            seconds = 59;
            minutes--;

            if (minutes < 0) {
                minutes = 59;
                hours--;

                if (hours < 0) {
                    hours = 23;
                    days--;

                    if (days < 0) {
                        clearInterval(countdownInterval);
                        return;
                    }
                }
            }
        }

        document.getElementById("days-value").textContent = formatTime(days);
        document.getElementById("hours-value").textContent = formatTime(hours);
        document.getElementById("minutes-value").textContent = formatTime(minutes);
        document.getElementById("seconds-value").textContent = formatTime(seconds);
    }, 1000);
}

function formatTime(time) {
    return (time < 10) ? '0' + time : time;
}

startCountdown();