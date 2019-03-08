
// reference college API
//var url = 'https://api.collegefootballdata.com/rankings?year=2018&week=12&seasonType=regular'


var season_year = '2018';
var ncaafb_season_week = '12';
var season_type = 'regular';

var url = "https://api.collegefootballdata.com/rankings?"+"year="+season_year+"&week="+ncaafb_season_week+"&seasonType="+season_type;
console.log(url);

//save a refrence to 1st item in ordered list
var rankings = document.getElementById('team-1');
var data;

// fetch rankings data that we need
fetch(url)
.then(function(jsonresponse) {
    return jsonresponse.json();
})
.then(function (data) {
    console.log(JSON.stringify(data));
})
console.log(data);

//replace the ordered list with json data
rankings = JSON.parse('{ "poll":"AP Top 25", "rank":1}');