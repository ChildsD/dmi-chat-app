// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#A60400');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//***---------------------       WINDOW 1       ---------------------***

//
// create controls tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1' //I REMOVED THE COMMA!
    // backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    title:'Tab 1',
    window:win1
});

//-----CREATE TITLE VIEW-----
var titleView = Titanium.UI.createView({
	top: 50,
	width: "auto",
	height: "150",
	backgroundColor: "#FF0700"
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

var enterUser = Titanium.UI.createTextField({
	hintText: "username",
	left: 20,
	width: 70,
	backgroundColor: "#FFF",
	autocapitalization: false,
	autocorrect: false
});

var enterCode = Titanium.UI.createTextField({
	hintText: "password",
	right: 20,
	width: 70,
	backgroundColor: "#FFF",
	autocapitalization: false,
	autocorrect: false
});

var getStarted = Titanium.UI.createButton({
	bottom: 25,
	width: "auto",
	textAlign: "center",
	title: "Get started!"
})

var about = Titanium.UI.createButton({
	bottom: 5,
	width: "auto",
	textAlign: "center",
	title: "About"
})

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'Chatty Cathy (main app title screen)',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	top: 0,
	width:'auto'
});

getStarted.addEventListener("touchend", function(e){
	if(enterUser.value != "" && enterCode.value != "")
	{
		tabGroup.setActiveTab(1);
	}
	
	else
	{
		alert("Please enter a username and password. Username = " + enterUser.value + "");
	}
});


titleView.add(enterUser);
titleView.add(enterCode);
titleView.add(getStarted);
titleView.add(about);
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

win1.add(contactButton);
win1.add(settingsButton);
win1.add(label1);
win1.add(titleView);

//***---------------------       WINDOW 2       ---------------------***

var tableView = Titanium.UI.createTableView()

var webView = Titanium.UI.createWebView({
	top: 0,
	left: 0,
	url: "http://quiet-journey-1236.herokuapp.com/",
	visible: true
});
//
// create base UI tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    // icon:'KS_nav_views.png',
    title:'Tab 2',
    window:win2
});




win2.add(webView);

//Listen for prompt from index.html asking for creation of room key
Titanium.App.addEventListener('app:codePrompt1', function(e) {
	
	webView.evalJS("'mobileCode = " + enterCode.value + ";'");
	// webView.evalJS(mobileUser = "" + enterUser.value + "");
});

webView.addEventListener('load', function(e) {
	alert("webview load event heard: " + enterUser.value);
	webView.evalJS("setCreds('" + enterCode.value + "','" + enterUser.value + "');");
	// var chatLog = webView.evalJS("document.getElementById('post-screen').childNodes;");
	// alert("first chat should is: " + chatLog[1].nodeValue);
});

Titanium.App.addEventListener('addRow', function(e){
	Ti.API.info('here is a message from the webview : '+e.name);
	alert("marker");
	alert("test: chat shoule be: " + e.name);
	//Now create the table row to append to our app
	// var row = Titanium.UI.createTableViewRow({
		// title: "tempTitle",
		// height: auto
	// });
	// tableView.appendRow(row);
});

// win2.add(tableView);
//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
