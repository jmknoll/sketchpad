$(document).ready(function(){
	makeSpans(16);
	makeBoxes(16);
});

function makeSpans(id){
	for (x=1; x<id; x++){
		$(".container").append("<div class="span"></div>");
	};
}

function makeBoxes(id){
	for (x=1; x<id; x++){
		$(".span").append("<div class="box"></div>");
	};
}
