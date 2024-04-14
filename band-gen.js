function showInputForm() {
    document.getElementById("inputForm").style.display = "block";
}

function showMessage() {
    document.getElementById("bandName").innerText = "It's okay! Let's try later.";
    document.getElementById("bandName").style.display = "block";
    document.getElementById("inputForm").style.display = "none";
}

document.getElementById("inputForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var city = document.getElementById("city").value;
    var pet = document.getElementById("pet").value;
    var bandName = city + " " + pet;
    document.getElementById("bandName").innerText = "Hey! Check this out! This would be your Band Name: " + bandName;
    document.getElementById("bandName").style.display = "block";
    document.getElementById("inputForm").style.display = "none";
});
