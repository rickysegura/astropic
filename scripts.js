
const renderHTML = (data) => {
    document.getElementById("photo").src = data.url;
    document.getElementById("photoTitle").innerText = data.title;
    document.getElementById("photoExplan").innerText = data.explanation;
    document.getElementById("photoCopy").innerText = "Copyright @" + data.copyright;
}

// Button functionality with API request
document.getElementById("btn").addEventListener("click", () => {
    let searchDate = document.getElementById("date").value;

    const req = new XMLHttpRequest();
    req.open('GET', 'https://api.nasa.gov/planetary/apod?date=' + searchDate + '&api_key=lo79vEBzZlz6rej2JXaBUoDyGvlOwHFrdP4h4GAr');
    
    req.onload = () => {
        const data = JSON.parse(req.responseText);
        renderHTML(data);
        document.getElementById("photo").style.display = "inline-block";
        console.log(data);
        console.log(searchDate);
    }

    req.send();
});