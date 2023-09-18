const rootApp = document.getElementById("root");
const button = document.createElement("button");
button.textContent = "ON";
button.id = "toggleButton";
rootApp.appendChild(button);

button.addEventListener("click", toggle);
let isOn = true;
function toggle() {
  isOn = !isOn;

  if (isOn) {
    button.textContent = "ON";
  } else {
    button.textContent = "OFF";
  }
}
