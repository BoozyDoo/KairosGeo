/* Listen For Signal that Device is ready*/

function onLoadFunction()
{
	if (navigator.userAgent.match(/Android/)) 
	{
        document.addEventListener("deviceready", onDeviceReady, false);
	} 
	else 
	{
		console.log("onLoadFunction");
		onDeviceReady();
	}
}

/* Once the device is ready Get Devices Current Position */
	/* Pass through a time out parameter of  30 seconds */
	/* Listen For the Search Button to be clicked */
function onDeviceReady()
{
	console.log("onDeviceReady");
	document.getElementById("weatherSearchButton").addEventListener("click", handleSearch);
	document.getElementById("umbrellaButton").addEventListener("click", doUmbrellaQuery);
	document.getElementById("sunglassesButton").addEventListener("click", doSunglassesQuery);
	document.getElementById("city").addEventListener("focusin", searchFocus);
	var options = {enableHighAccuracy: false, timeout: 100000};
	navigator.geolocation.getCurrentPosition(onDeviceSuccess, onDeviceError, options);
}