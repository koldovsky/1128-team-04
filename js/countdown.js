function startCountdown() {
    var countdownElements = document.querySelectorAll('.countdown-item span.num-time');

    var countdownInterval = setInterval(function() {
        var days = parseInt(countdownElements[0].textContent);
        var hours = parseInt(countdownElements[1].textContent);
        var minutes = parseInt(countdownElements[2].textContent);
        var seconds = parseInt(countdownElements[3].textContent);

        if (seconds > 0) {
            seconds--;
        } else {
            seconds = 59;
            if (minutes > 0) {
                minutes--;
            } else {
                minutes = 59;
                if (hours > 0) {
                    hours--;
                } else {
                    hours = 23;
                    if (days > 0) {
                        days--;
                    } else {
                        clearInterval(countdownInterval);
                        return;
                    }
                }
            }
        }

        countdownElements[0].textContent = formatTime(days);
        countdownElements[1].textContent = formatTime(hours);
        countdownElements[2].textContent = formatTime(minutes);
        countdownElements[3].textContent = formatTime(seconds);
    }, 1000);
}

function formatTime(time) {
    return (time < 10) ? '0' + time : time;
}

window.onload = startCountdown;