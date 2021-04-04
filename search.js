const data = [
  {
    cycleImage:
      "https://images-na.ssl-images-amazon.com/images/I/715wCxNPK4L._SX425_.jpg",
    source: "Kazipet",
    fare: 80,
    avHours: 1,
    type: "male",
  },
  {
    cycleImage:
      "https://images-na.ssl-images-amazon.com/images/I/715wCxNPK4L._SX425_.jpg",
    source: "PVR",
    fare: 45,
    avHours: 1.5,
    type: "female",
  },
  {
    cycleImage:
      "https://images-na.ssl-images-amazon.com/images/I/715wCxNPK4L._SX425_.jpg",
    source: "Warangal",
    fare: 80,
    avHours: 0.5,
    type: "male",
  },
  {
    cycleImage:
      "https://images-na.ssl-images-amazon.com/images/I/715wCxNPK4L._SX425_.jpg",
    source: "TV Tower",
    fare: 20,
    avHours: 1,
    type: "male",
  },
  {
    cycleImage:
      "https://images-na.ssl-images-amazon.com/images/I/715wCxNPK4L._SX425_.jpg",
    source: "Sundar Trunk",
    fare: 100,
    avHours: 2,
    type: "female",
  },
];

const cardContainer = document.getElementById("cardContainer");
const res = document.getElementById("res");
renderDom(data);
function renderDom(inputData) {
  let cardItems = "";
  for (let i = 0; i < inputData.length; i++) {
    const item = inputData[i];
    cardItems += `<div class="card_items">
          <img src="${item.cycleImage}" alt="">
          <div class="card_info">
              <h4 style="color: gray;">Source <span style="color: #4627cd;">${
                item.source
              }</span>
              </h4>
              <h4 style="color: gray;">Fare <span style="color: #4627cd;">Rs. ${
                item.fare
              }/hr.</span>
              </h4>
              <h4 style="color: gray;">Duration <span style="color: #4627cd;">${
                item.avHours
              } hr</span>
              </h4>
              <h4 style="color: gray;">Type <span style="color: #4627cd;">${
                item.type === "male" ? "Gents" : "Ladies"
              }</span>
              </h4>
          </div>
          <button class="rent_button" onclick='rentClick(this)' id=${JSON.stringify(
            item
          )}>Rent</button>
      </div>`;
  }
  cardContainer.innerHTML = cardItems;
  if (data.length !== inputData.length) {
    res.innerText = "Search Result: " + inputData.length;
  } else {
    res.innerText = "";
  }
}
const search = window.location.href.split("=")[1];
if (search !== null) {
  makeSearch(search);
}
const src = document.getElementById("src");
function makeSearch(input) {
  if (input == null || input == undefined) {
    return;
  }
  cardItems = "";
  if (input.length === 0) {
    renderDom(data);
  }
  let selectedData = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].source.toLowerCase().includes(input.toLowerCase())) {
      selectedData.push(data[i]);
    }
  }
  renderDom(selectedData);
}
src.addEventListener("input", (e) => {
  const input = e.target.value;
  makeSearch(input);
});

function rentClick(elem) {
  location.href = `info.html?info="${elem.id}"`;
}
