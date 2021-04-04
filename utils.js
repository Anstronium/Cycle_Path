function showCustomAlert(message, duration) {
  const customAlert = document.createElement("div");
  customAlert.className = "alert warning page_top";
  customAlert.innerText = message;

  document.body.appendChild(customAlert);
  const timeOut = setTimeout(() => {
    customAlert.remove();
    clearTimeout(timeOut);
  }, duration);
}
