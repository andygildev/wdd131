
document.getElementById("year").textContent = new Date().getFullYear();



document.getElementById("lastModified").textContent = document.lastModified;


const temperature = 30;      
const windSpeed = 10;        


function calculateWindChill(t, s) {
    return (
        13.12 +
        0.6215 * t -
        11.37 * Math.pow(s, 0.16) +
        0.3965 * t * Math.pow(s, 0.16)
    ).toFixed(1);
}


const canCalculate =
    temperature <= 10 && windSpeed > 4.8;


const output = document.getElementById("windchill");

if (canCalculate) {
    output.textContent = calculateWindChill(temperature, windSpeed) + " °C";
} else {
    output.textContent = "N/A";
}
