
// reference college API
//var url = 'https://api.collegefootballdata.com/rankings?year=2018&week=12&seasonType=regular'


var season_year = '2018';
var ncaafb_season_week = '12';
var season_type = 'regular';

var url = "https://api.collegefootballdata.com/rankings?"+"year="+season_year+"&week="+ncaafb_season_week+"&seasonType="+season_type;
console.log(url);

//save a refrence to the ordered list
var rankings = document.querySelector('ol');
var data;

// fetch rankings data that we need
fetch(url)
.then(function(jsonresponse) {
    return jsonresponse.json();
})
.then(function (data) {
    display.innerText = data.value;
})
console.log(data);