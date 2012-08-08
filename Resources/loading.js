//***---------------------       Loading Window      ---------------------***

var loadingIndicator = Titanium.UI.createActivityIndicator({
	width:200,
	height:100,
	message: 'Loading...',
	color: '#FFFFFF'
});

var tempWin = Titanium.UI.createWindow({
	// backgroundColor: "#BE3E1D"
});
tempWin.add(loadingIndicator);
loadingIndicator.show();

// var loadingView = Titanium.UI.createView({
	// height: "100%",
	// width:"100%",
	// backgroundColor: "#000",
// });