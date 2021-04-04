const details = document.getElementById("details");

const data = location.href
  .split("=")[1]
  .replaceAll("%22", "")
  .replaceAll("{", "")
  .replaceAll("}", "")
  .replaceAll("cycleImage:", "")
  .replaceAll("source:", "")
  .replaceAll("fare:", "")
  .replaceAll("type:", "")
  .replaceAll("avHours:", "")
  .split(",");
details.innerHTML = `<div class="card_items">
<img src="${data[0]}" alt="">
<div class="card_info">
    <h4 style="color: gray;">Source <span style="color: #4627cd;">${
      data[1]
    }</span>
    </h4>
    <h4 style="color: gray;">Fare <span style="color: #4627cd;">Rs. ${
      data[2]
    }/hr.</span>
    </h4>
    <h4 style="color: gray;">Duration <span style="color: #4627cd;">${
      data[3]
    } hr</span>
    </h4>
    <h4 style="color: gray;">Type <span style="color: #4627cd;">${
      data[4] === "male" ? "Gents" : "Ladies"
    }</span>
    </h4>
</div>
</div>`;
