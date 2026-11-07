
function turnOffAllLights() {
    document.getElementById("redLight").style.backgroundColor = "gray";
    document.getElementById("yellowLight").style.backgroundColor = "gray";
    document.getElementById("greenLight").style.backgroundColor = "gray";
}

function stopLight() {
    turnOffAllLights();

    document.getElementById("redLight").style.backgroundColor = "red";
    document.getElementById("message").textContent = "STOP! Red Light!";
    document.getElementById("message").style.color = "#FF1744";
}

function readyLight() {
    turnOffAllLights();

    document.getElementById("yellowLight").style.backgroundColor = "yellow";
    document.getElementById("message").textContent = "WAIT! Yellow Light!";
    document.getElementById("message").style.color = "#FFB300";
}

function goLight() {
    turnOffAllLights();

    document.getElementById("greenLight").style.backgroundColor = "green";
    document.getElementById("message").textContent = "GO! Green Light!";
    document.getElementById("message").style.color = "#00C853";
}

function resetLight() {
    turnOffAllLights();

    document.getElementById("message").textContent = "WAITING FOR INPUT...";
    document.getElementById("message").style.color = "#243B53";
}

document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    var driverName = document.getElementById("name").value;
    var vehicleType = document.getElementById("vehicleType").value;
    var destination = document.getElementById("destination").value;
    var purpose = document.getElementById("purpose").value;

    var result = document.getElementById("registrationResult");

    result.textContent =
        "Successfully Registered.\n\n" +
         "Driver's Name: " + driverName + "\n" +
        "Vehicle Type: " + vehicleType + "\n" +
        "Destination: " + destination + "\n" +
        "Purpose of Travel: " + purpose;
            result.style.display = "block";

});
