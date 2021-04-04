const rideButton = document.getElementById("rideButton");
const source = document.getElementById("src");
const cycleAnimation = document.getElementById("cycleAnimation");
const rightMain = document.getElementById("rightMain");
const leftMain = document.getElementById("leftMain");
rideButton.addEventListener("click", () => {
  const cycle = document.getElementById("cycleAnimation");
  console.log(cycle);
  cycle.play();
  cycle.style.left = window.innerWidth - 300 + "px";
});
function selectDst(elem) {
  source.value = elem.innerText;
}

rideButton.addEventListener("click", () => {
  if (source.value.length === 0) {
    alert("Please enter some source.");
  } else {
    rightMain.style.opacity = "0";

    setTimeout(() => {
      rightMain.style.width = "0px";
      leftMain.style.width = "90%";
      cycleAnimation.play();
    }, 1000);
    const timeOut = setTimeout(() => {
      window.location.href = `search.html?search=${source.value}`;
    }, 3000);
  }
});
