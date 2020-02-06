var hero = 'Batman';
var realName = 'Bruce Wayne';
var created = 1939;
var city = 'Gotham City';
var vehicles = ['Batmobile','Batcar','Batcopter'];

var fullInfo = `

<h1 align="center">Template Literals</h1>
<hr>
    <ul>
        <li>Superhero : ${hero}</li>
        <li>Real : ${realName}</li>
        <li>Created : ${created}</li>
        <li>City : ${city}</li>
    </ul>
`

document.body.innerHTML = fullInfo;
