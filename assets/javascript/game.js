// Global Variables
var wins = 0;
var losses = 0;
var totalScore = 0;
var gameScore = 0;

var totalScoreRange = range(19, 120);
var iconScoreRange = range(1, 12);

function getRandomIconScore() {
	return Math.random() * (12 - 1) + 1;
}

function getRandomGameScore() {
	return Math.random() * (120 - 19) + 19;
}

function updateGameScore() {
	$("#display-game-score").html(gameScore);
}

function updateTotalScore() {
	$("#display-total-score").html(totalScore);
}

function checkForWin() {
	if (gameScore == totalScore)
		wins = wins + 1;
		$("#display-wins").html("Wins: " + wins);
}

function checkForLoss() {
	if (gameScore > totalScore)
		losses = losses + 1;
		$("#display-losses").html("Losses: " + losses);
}

$(document).ready(function() {
	getRandomGameScore();
	var starIcon = getRandomIconScore();
	var flagIcon = getRandomIconScore();
	var hourglassIcon = getRandomIconScore();
	var musicIcon = getRandomIconScore();

	$("#star-icon").on("click", function() {
		totalScore = totalScore + starIcon;
	})

	$("#flag-icon").on("click", function() {
		totalScore = totalScore + flagIcon;
	})

	$("#hourglass-icon").on("click", function() {
		totalScore = totalScore + hourglassIcon;
	})

	$(#"music-icon").on("click", function() {
		totalScore = totalScore + musicIcon;
	})
};

updateGameScore();
updateTotalScore();
checkForWin();
checkForLoss();

