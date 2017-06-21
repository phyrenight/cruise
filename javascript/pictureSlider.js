// Javascript for the slider

var pictures = ["a", "b","c", "d"];
var currentStatus = {
	picture: "",
	slideNumber: 0
};

//setInterval(changeSlider, 1000);

function changeSlider(){
	currentStatus.slideNumber += 1
	var picturesLength = pictures.length;
	if(currentStatus.slideNumber >= picturesLength){
		currentStatus.slideNumber = 0;
	}
    console.log(pictures[currentStatus.slideNumber])    

}