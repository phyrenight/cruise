// Javascript for the slider

var pictures = ["one.jpg", "two.jpg","three.jpg", "four.jpg"];
var currentStatus = {
	picture: "",
	slideNumber: 0
};

//setInterval(changeSlider, 3000);

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

var leftArrow = document.getElementById("left");
leftArrow.onclick = previousSlide;
var rightArrow = document.getElementById("right");
rightArrow.onclick = nextSlide;

function nextSlide(){
	var picturesLength = pictures.length;
    if(currentStatus.slideNumber >= (picturesLength-1)){
    	currentStatus.slideNumber = 0;
    }
    else{
    	currentStatus.slideNumber += 1;
    }
    slide.style.backgroundImage = "url('images/"+pictures[currentStatus.slideNumber]+"')";
}

function previousSlide(){
	var picturesLength = pictures.length;
	if(currentStatus.slideNumber == 0){
		currentStatus.slideNumber = (pictures.length-1);
	}
	else{
		currentStatus.slideNumber -= 1;
	}
	slide.style.backgroundImage = "url('images/"+pictures[currentStatus.slideNumber]+"')";
}