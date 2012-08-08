//***---------------------       Login Window       ---------------------***

//
// create controls tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1'
    // navBarHidden: true
    // tabBarHidden: true
});

win1.addEventListener("open", function(e) {
	if(Titanium.Platform.osname == "android")
		loadingIndicator.hide();
	enterUser.focus();
});

//-----CREATE TITLE VIEW-----
var titleView = Titanium.UI.createView({
	top: 65,
	width: "80%",
	borderRadius: 8,
	borderWidth: 2,
	borderColor: "#6B2700",
	height: 150,
	backgroundColor: "#DA6A00"
});

var label1 = Titanium.UI.createLabel({
	top: 8,
	text: "DMI Chat",
	font: {fontSize: 36, fontFamily: 'Arial', fontWeight: 'bold'},
	color: "#fff"
});



var enterUser = Titanium.UI.createTextField({
	hintText: "Username",
	left: 20,
	width: 105,
	backgroundColor: "#FFF",
	// autocapitalization: false,
	autocorrect: false
});

var enterCode = Titanium.UI.createTextField({
	hintText: "Password",
	right: 20,
	width: 105,
	backgroundColor: "#FFF",
	// autocapitalization: false,
	autocorrect: false
});

enterUser.addEventListener("return", function(e) {
	enterCode.focus();
});

enterCode.addEventListener("return", function(e) {
	getStarted.fireEvent("click");
})

var getStarted = Titanium.UI.createButton({
	bottom: "7%",
	height: "20%",
	// left: 35,
	width: "auto",
	textAlign: "center",
	title: "Get started!"
})

var label2 = Titanium.UI.createLabel({
	color:'#FFF',
	text:'Please Log In',
	top: 20,
	font:{fontSize:20,fontFamily:'Arial Black'},
	textAlign:'center',
	width:'auto'
});

getStarted.addEventListener("click", function(e){
	if(enterUser.value != "" && enterCode.value != "")
	{
		webView.reload();
		win1.close();
		win2.open();
	}
	
	else
	{
		alert("Please enter a username and password.");
		if(enterUser.value == "")
			enterUser.focus();
		else
			enterCode.focus();
		if(Titanium.Platform.osname == "android")
			loadingIndicator.hide();
	}
});


titleView.add(enterUser);
titleView.add(enterCode);
titleView.add(getStarted);
titleView.add(label2);

var contactButton = Titanium.UI.createButton({
	left: 10,
	top: 10,
	title: "logout"
});

var settingsButton = Titanium.UI.createButton({
	right: 10,
	top: 10,
	// image: "/settingsIcon.png",
	title: "Settings"
})

// win1.add(contactButton);
// win1.add(settingsButton);
win1.add(label1);
win1.add(titleView);