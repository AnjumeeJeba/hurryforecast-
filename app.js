console.log("connected");

function current() {
    navigator.geolocation.getCurrentPosition(function (position) {
        const key = "6addec0c97041b39ff831fa892619441";
        const geo = `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude.toFixed(2)}&lon=${position.coords.longitude.toFixed(2)}&APPID=${key}&units=metric`;


        $.get(geo, function (data, status) {
            console.log(status);
            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var date = new Date();
            var dayName = days[date.getDay()];

            document.getElementById("temp").innerHTML = data.main.temp + " °C";
            document.getElementById("max").innerHTML = data.main.temp_max + " °C";
            document.getElementById("min").innerHTML = data.main.temp_min + " °C";
            document.getElementById("wdis").innerHTML = data.weather[0].description;
            document.getElementById("humidity").innerHTML = data.main.humidity;
            document.getElementById("pressure").innerHTML = data.main.pressure;
            document.getElementById("wind").innerHTML = data.wind.speed + " km/h";
            document.getElementById("lat").innerHTML = data.coord.lat + " °";
            document.getElementById("lon").innerHTML = data.coord.lon + " °";


            document.getElementById("place").innerHTML = data.name + ", " + data.sys.country;
            document.getElementById("date").innerHTML = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();


            document.getElementById("day").innerHTML = dayName;
        });
    });

}



function weather() {

    var input = document.getElementById('val').value;
    var city = input;
    const key = "6addec0c97041b39ff831fa892619441";
    const api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}&units=metric`;
    console.log(city);


    $.get(api, function (data, status) {
        console.log(status);


        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        var date = new Date();
        var dayName = days[date.getDay()];

        document.getElementById("temp").innerHTML = data.main.temp + " °C";
        document.getElementById("max").innerHTML = data.main.temp_max + " °C";
        document.getElementById("min").innerHTML = data.main.temp_min + " °C";
        document.getElementById("wdis").innerHTML = data.weather[0].description;
        document.getElementById("humidity").innerHTML = data.main.humidity;
        document.getElementById("pressure").innerHTML = data.main.pressure;
        document.getElementById("wind").innerHTML = data.wind.speed + " km/h";
        document.getElementById("lat").innerHTML = data.coord.lat + " °";
        document.getElementById("lon").innerHTML = data.coord.lon + " °";


        document.getElementById("place").innerHTML = data.name + ", " + data.sys.country;
        document.getElementById("date").innerHTML = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();


        document.getElementById("day").innerHTML = dayName;
    });
}



function news() {
    const key = "f65a7d45ae2944ab906576f99c86432b";
    var api = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${key}`;

    console.log(api);

    $.get(api, function (data, status) {
        console.log(status);

        for (let index = 0; index <= Object.keys(data.articles).length; index++) {

            var card = document.createElement('div');
            card.className = "card";

            var row = document.createElement('div');
            row.className = "row no-gutters";

            var col = document.createElement('div');
            col.className = "col-md-4";

            var img = document.createElement('img');
            img.src = data.articles[index].urlToImage;
            img.className = "card-img";

            // Card Body section

            var cardCol = document.createElement('div');
            cardCol.className = "col-md-8";

            var cardBody = document.createElement('div');
            cardBody.className = "card-body";

            var title = document.createElement('h3');
            title.className = "card-title";
            title.innerHTML = data.articles[index].title;

            var author = document.createElement('h5');
            author.className = "card-title";
            author.innerHTML = data.articles[index].author;

            var desc = document.createElement('p');
            desc.className = "card-text";
            desc.innerHTML = data.articles[index].description;

            var publish = document.createElement('small');
            publish.className = "text-muted";
            var date = new Date(data.articles[index].publishedAt);
            publish.innerHTML = innerHTML = 'Published : ' + date.getDate() + ' . ' + date.getMonth() + ' . ' + date.getFullYear() + "<br>";

            var button = document.createElement('button');
            button.className = "btn btn-outline-success";
            var url = document.createElement('a');
            url.href = data.articles[index].url;
            url.innerHTML = "Read more...";
            button.appendChild(url);

            // apprend section
            card.appendChild(row);
            row.appendChild(col);
            col.appendChild(img);
            row.appendChild(cardCol);
            cardCol.appendChild(cardBody);
            cardBody.appendChild(title);
            cardBody.appendChild(author);
            cardBody.appendChild(desc);
            cardBody.appendChild(publish);
            cardBody.appendChild(button);
            document.getElementById('info').appendChild(card);

        }

    });
}