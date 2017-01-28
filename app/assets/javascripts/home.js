$(document).ready(function() {
  if (document.getElementById("dd-button")) {
  	document.getElementById("dd-button").addEventListener("click", ddClicked);
  	window.onclick = function(event) {
  		if (!event.target.matches('#dd-button')) {
  			document.getElementById("dd-menu").classList.remove("dd-show");
  		}
  	}

  	function ddClicked() {
  		console.log("dd clicked");
  		document.getElementById('dd-menu').classList.add("dd-show");
  	}
  }
});
