// Javascript for the slider

var pictures = ["one.jpg", "two.jpg","three.jpg", "four.jpg"];
var currentStatus = {
	picture: "",
	slideNumber: 0
};

setInterval(changeSlider, 3000);

function changeSlider(){
	var slideView = document.getElementById("slide");
	var picturesLength = pictures.length;
	if(currentStatus.slideNumber >= (picturesLength-1)){
		currentStatus.slideNumber = 0;
	}
	else{
		currentStatus.slideNumber += 1;
	}
    slide.style.backgroundImage = "url('images/"+pictures[currentStatus.slideNumber]+"')";   

}

