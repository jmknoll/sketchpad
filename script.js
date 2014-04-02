$(document).ready(function(){

	$("button").click(function() { 
		 var grid_size = prompt("Please enter a number between 1 and 100");
		 buildGrid(grid_size);
		});


	var buildGrid = function(num){

		$(".box").width(960/num);
		$(".box").height(960/num);
	
		
		for (x=0; x<num*num; x++){
			$("#grid_container").append("<div class='box'></div>");	
			}
/*		for (x=0;x<num; x++){
			$(".span").clone().appendTo("#grid_container");
			}
		
		*/
		//add the change color effect on hover//
		}
	
});