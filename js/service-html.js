// select first image using unique id
var basIm = document.getElementById('basic-image');

// add event listener to first image so that when it is clicked
basIm.addEventListener('click', function() {
    // make Ajax request to load HTML data for Don Quixote book
    makeRequest('data/basicpackage.html');
    
    // call function to lower opacities of all images
    deselectImgs();
    
    // change opacity of current image to 1 so it looks like it is selected
    this.style.opacity = "1";
}, false);


var premIm = document.getElementById('premium-image');

// add event listener to first image so that when it is clicked
premIm.addEventListener('click', function() {
    // make Ajax request to load HTML data for Don Quixote book
    makeRequest('data/premiumpackage.html');
    
    // call function to lower opacities of all images
    deselectImgs();
    
    // change opacity of current image to 1 so it looks like it is selected
    this.style.opacity = "1";
}, false);


// function that changes opacitiy of all images on the web page
function deselectImgs() {
    // get a Nodelist of all images on web page using <img> tag
    var imgs = document.getElementsByClassName('packageim');
    
    // loop through each item in the Nodelist to access each image
    for (var i = 0; i < imgs.length; i++) {
        // change opacity of current image to 0.5 so it looks like it is deselected 
        imgs[i].style.opacity = "0.5";
    }
}

// function that triggers your Ajax request to load the data from a given HTML file
function makeRequest(filePath) {
    // create XMLHttpRequest object
    var xhr = new XMLHttpRequest();
    
    // when response has loaded
    xhr.onload = function() {
        // conditional check will not work locally - only a server
		//     if the server status was ok
        if (xhr.status === 200) {
            // update the div to contain  new HTML that is retrieved
            document.getElementById("details").innerHTML = xhr.responseText;
        }
    }
    
    // prepare the request
    //   HTTP GET to send the request
    //   Path to HTML file
    //   true to specify that the request is asynchronous
    xhr.open("GET", filePath, true);
    
    // send the request
	//  null because there is no data to send
    xhr.send(null);
}