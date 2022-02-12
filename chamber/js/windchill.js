let temp = parseFloat(document.querySelector("#temp").textContent);
let speed = parseFloat(document.querySelector("#speed").textContent);
let windChill = "";
if (temp <= 50 && speed > 3) {
  windChill = WCF(temp, speed);
  
}
else {
  windChill = "N/A";
}
document.querySelector("#windChill").innerHTML = windChill;

function WCF(temp, speed) {
  let value = Math.round(
    35.74 + .6215 * temp - 35.75 * Math.pow(speed, .16) + .4275 * temp * Math.pow(speed, .16));
  return value;

}
