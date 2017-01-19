
function decrement() {
    var val = document.getElementById('time').value;
    val = parseInt(val) - 1;
    if (val < 1) {
        val = 1;
        document.getElementById('time').value = val;

    }
    document.getElementById('time').value = val;
    document.getElementById('time').innerHTML = val;
}

function increment() {
    var val = document.getElementById('time').value;
    val = parseInt(val) + 1;
    if (val > 99) {
        val = 99;
        document.getElementById('time').value = val;

    }
    document.getElementById('time').value = val;
    document.getElementById('time').innerHTML = val;
}

var interval;

function startTimer() {
    var val = document.getElementById('time').value;
    draw(val);
}

function resetTimer() {
    $("#container").empty();
    clearInterval(interval);
}

function draw(value) {
    resetTimer();
    var mins = value;
    if (value < 1) {
        document.getElementById('time').value = 1;
        mins = 1;
        draw(mins);
    }
    else if (value > 99) {
        mins = 99;
        document.getElementById('time').value = 99;
        draw(mins);
    } else {
        console.log(mins);
        var secs = 59;
        interval = setInterval(function () {

            if (secs < 0) {
                secs = 59;
            }
            if (secs == 59) {
                mins--;
            }
            if (mins > 9 && secs > 9) {
                circle.setText(mins + " : " + secs);
            }
            else if (mins > 9 && secs < 10) {
                circle.setText(mins + " : 0" + secs);
            }
            else if (mins < 10 && secs > 10) {
                circle.setText("0" + mins + " : " + secs);
            } else {
                circle.setText("0" + mins + " : 0" + secs);
            }


            secs--;



            if (mins === -1) {
                resetTimer();
            }
        }, 1000);

        var circle = new ProgressBar.Circle('#container', {
            color: '#E74C3C',
            strokeWidth: 20,
            trailWidth: 20,
            trailColor: '#ECF0F1',
            duration: value * 1000 * 60
        });



        circle.animate(1.0);  // Number from 0.0 to 1.0,
    }

}
