$(document).ready(function() {
    var randomNumber = "";
    var emeraldBlue = "";
    var emeraldGreen = "";
    var emeraldPurple = "";
    var emeraldRed = "";
    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    $("#numberWins").text("Wins " + wins);
    $("#numberLosses").text("Losses " + losses);
   
    var newGame = function() {
        randomNumber = Math.floor(Math.random() * 101) + 19;
        $('#computerRandom').text(randomNumber);


        emeraldBlue = Math.floor(Math.random() * 9) + 1;
        emeraldGreen = Math.floor(Math.random() * 9) + 1;
        emeraldPurple = Math.floor(Math.random() * 9) + 1;
        emeraldRed = Math.floor(Math.random() * 9) + 1;
        userTotal = 0;
    }

    newGame();

    $(".blue-crystal").on("click", function() {
        userTotal = userTotal + emeraldBlue;
        $("#userTotal").text(userTotal);
            if (userTotal === randomNumber) {
                wins++;
                $("#WonLost").text("YOU WIN!!");
                newGame();
            } else if (userTotal > randomNumber) {
                losses++;
                $('#WonLost').text("YOU LOSE!!");
                newGame();
            }
    });
    $(".green-crystal").on("click", function() {
        userTotal = userTotal + emeraldGreen;
        $("#userTotal").text(userTotal);
            if (userTotal === randomNumber) {
                wins++;
                $("#WonLost").text("YOU WIN!!");
                newGame();
            } else if (userTotal > randomNumber) {
                losses++;
                $('#WonLost').text("YOU LOSE!!");
                newGame();
            }
    });
    $(".purple-crystal").on("click", function() {
        userTotal = userTotal + emeraldPurple;
        $("#userTotal").text(userTotal);
            if (userTotal === randomNumber) {
                wins++;
                $("#WonLost").text("YOU WIN!!");
                newGame();
            } else if (userTotal > randomNumber) {
                losses++;
                $('#WonLost').text("YOU LOSE!!");
                newGame();
            }
    });
    $(".red-crystal").on("click", function() {
        userTotal = userTotal + emeraldRed;
        $("#userTotal").text(userTotal);
            if (userTotal === randomNumber) {
                wins++;
                $("#WonLost").text("YOU WIN!!");
                newGame();
            } else if (userTotal > randomNumber) {
                losses++;
                $('#WonLost').text("YOU LOSE!!");
                newGame();
            }
    });

});