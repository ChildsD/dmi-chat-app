// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#BE3E1D');
Titanium.include('login.js');
Titanium.include('chat-screen.js');


if(Titanium.Platform.osname == "android")
{
	loadingIndicator.hide();
	// alert("android!");
}
win1.open();