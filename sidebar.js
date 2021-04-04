const sidebarCloseButton = document.getElementById("sidebarCloseButton");
console.log(sidebarCloseButton);
var isSidebarOpen = false;
closeSidebar()
sidebarCloseButton.addEventListener("click", () => {
  handleSideBar();
});

function handleSideBar() {
  handleActive();
  if (isSidebarOpen == true) closeSidebar();
  else openSideBar();
}

function closeSidebar() {
  isSidebarOpen = false;
  sidebarCloseButton.style.transform = "rotate(180deg)";

  const sidebar = document.getElementById("sidebar");
  sidebar.style.width = "55px";
  sidebar.style.boxShadow = "none";
  const sidebarItemsName = document.getElementsByClassName("sidebar_item_name");
  for (var i = 0; i < sidebarItemsName.length; i++) {
    sidebarItemsName[i].style.opacity = "0";
    sidebarItemsName[i].style.display = "none";
  }
}

function openSideBar() {
  sidebarCloseButton.style.transform = "rotate(0deg)";
  isSidebarOpen = true;

  const sidebar = document.getElementById("sidebar");
  sidebar.style.width = "300px";
  sidebar.style.boxShadow = "1px 1px 10px var(--primaryText)";
  const sidebarItemsName = document.getElementsByClassName("sidebar_item_name");
  for (var i = 0; i < sidebarItemsName.length; i++) {
    sidebarItemsName[i].style.display = "block";
  }
  const timeOut = setTimeout(() => {
    for (var i = 0; i < sidebarItemsName.length; i++) {
      sidebarItemsName[i].style.opacity = "1";
    }
    clearTimeout(timeOut);
  }, 200);
}

function handleActive() {
  // const description = document.getElementsByTagName("meta")[0];
  // const activeSidebarItem = document.getElementById(description.content);
  // activeSidebarItem.className += " active";
}
