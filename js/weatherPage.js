function fixHeader() {
    var topFile = document.getElementById("topFile");
    var uiGrid = document.createElement("div");
    uiGrid.className = "ui grid";
    var grid = document.createElement("div");
    grid.className = "four wide column";
    var grid2 = document.createElement("div");
    grid2.className = "four wide column";
    grid2.style.marginLeft = '-0em';
    grid2.style.marginTop = '2em';
    var name = localStorage.passedUID;
    var divName = document.createElement("h1");
    divName.id = "weatherHeader";
    divName.innerHTML = "Welcome " + name;
    //<a href="/FinalProject/index.html"><div class="ui inverted green button">Log out</div> </a>
    var aDiv = document.createElement('a');
    aDiv.href = "/FinalProject/index.html";
    var logoutButton = document.createElement("div");
    logoutButton.className = "ui inverted green button";
    logoutButton.innerHTML = "Log out";
    logoutButton.style.fontSize = "large";
    aDiv.appendChild(logoutButton);
    grid.appendChild(divName);
    grid2.appendChild(aDiv);
    uiGrid.appendChild(grid);
    uiGrid.appendChild(grid2);
    topFile.appendChild(uiGrid);

}

function showRSS(woeid) {
    var arr = [ {key:"2357024", value:"Atlanta"},
                {key:"12590119", value:"Houston"},
                {key:"2459115", value:"New York"},
                {key:"2391279", value:"Denver"},
                {key:"2490383", value:"Seattle"},
                {key:"2458833", value:"New Orleans"}    ];
	if (woeid.length==0){
	  	document.getElementById("rssOutput").innerHTML="";
	  	return;
	}

	if (window.XMLHttpRequest){
	  	xmlhttp = new XMLHttpRequest();
	}
    var cityName;
    var div = document.getElementById("style");
    for (var i = 0; i < arr.length ; i++) {
        if (arr[i].key == woeid) {
            cityName = arr[i].value;
        }
    }
    var forecastDiv = document.getElementById("forecast");
    var uiGrid = document.createElement("div");
    uiGrid.className = "ui grid";

    forecastDiv.innerHTML = "";
    div.innerHTML = "City is: " + cityName ;
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
		    var jsonObj = JSON.parse(xmlhttp.responseText);
            fItem = jsonObj.query.results.channel.item;
		    forecast = jsonObj.query.results.channel.item.forecast;

		    for(i=0; i<forecast.length; i++){

                var obj = forecast[i];
                var text = obj.text;
                var date = obj.date;
                var high = obj.high;
                var low = obj.low;
                var day = obj.day;
                var dayIdx = i+1;

                var grid = document.createElement("div");
                grid.id = "forecast"+dayIdx;
                grid.className = "three wide column";

                var cardDiv = document.createElement('div');
                    cardDiv.className = 'ui card';
                    cardDiv.id = "day"+dayIdx;

                var imageclass = document.createElement('div');
                    imageclass.className = "image";

                var actualimg = document.createElement('img');
                    actualimg.id = "day"+dayIdx+"Img";

                if (text == "Sunny") {
                    actualimg.src = "http://a1.s6img.com/cdn/box_005/post_15/678398_16372521_lz.jpg";
                }
                else if (text == "Cloudy") {
                    actualimg.src = "http://cdn.pelfusion.com/wp-content/uploads/2009/07/treeinclouds.jpg";
                }
                else if (text == "Mostly Sunny") {
                    actualimg.src = "http://pugetsoundblogs.com/forecasting-kitsap/files/2009/05/sunnyskies.jpg";
                }
                else if (text == "Partly Cloudy" || text == "AM Clouds/PM Sun") {
                    actualimg.src = "http://cache.pakistantoday.com.pk/2012/07/cloudy.jpg";
                }
                else if (text == "Scattered Thunderstorms") {
                    actualimg.src = "http://www.gannett-cdn.com/king5/static/broadcast-web-static-120.0/images/weather/mostly-cloudy-t-storm-rain.png";
                }
                else if (text == "Thunderstorms" || text == "AM Thunderstorms") {
                    actualimg.src = "http://i.imwx.com/holidays/july4/thunderstorm-ga.jpg";
                }
                else if (text == "Showers" || text == "PM Showers") {
                    actualimg.src = "http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-weather-showers-scattered-day-icon.png";
                }
                else if (text == "Rain") {
                    actualimg.src = "http://upload.wikimedia.org/wikipedia/commons/c/c2/Snow_shower_on_Dartmoor.jpg";
                }
                else if (text == "Mostly Cloudy") {
                    actualimg.src = "http://icons.wunderground.com/data/wximagenew/d/DCMaki/5210.jpg";
                }
                else if (text == "Light Rain") {
                    actualimg.src = "http://www.kkradionetwork.com/app_images/weather_icons/light_rain.png";
                }
                else if (text == "Strong Storms") {
                    actualimg.src = "http://media.trb.com/media/photo/2011-03/247852680-31074814.jpg";
                }
                else if (text == "Heavy Thunderstorms") {
                    actualimg.src = "https://postmediawindsorstar.files.wordpress.com/2013/06/lightning.jpg?w=500";
                }
                actualimg.style.height = '30%';
                var contentDiv = document.createElement('div');
                    contentDiv.className = "content";
                var headerDiv = document.createElement('div');
                    headerDiv.id = "day"+dayIdx+"Title";
                    headerDiv.className = "header";
                    headerDiv.innerHTML = day + ": " + text;
                var metaDiv = document.createElement('div');
                    metaDiv.className = 'meta';
                var dateDiv = document.createElement('span');
                    dateDiv.innerHTML = date;
                var detailDiv = document.createElement('p');
                    detailDiv.innerHTML = "High: " + high + " Low: " + low;
                contentDiv.appendChild(headerDiv);
                imageclass.appendChild(actualimg);
                //imageclass.style.height = '90%';
                //imageclass.style.widows = '90%';
                metaDiv.appendChild(dateDiv);
                contentDiv.appendChild(metaDiv);
                contentDiv.appendChild(detailDiv);
                cardDiv.appendChild(imageclass);
                cardDiv.appendChild(contentDiv);
                //cardDiv.style.width = '90%';
                grid.appendChild(cardDiv);
                grid.style.width = '80%';
                uiGrid.appendChild(grid);
			}
            forecastDiv.appendChild(uiGrid);
		}
	};
	  
	xmlhttp.open("GET","php/weatherUpdate.php?woeid="+woeid,true);
	xmlhttp.send();
}
