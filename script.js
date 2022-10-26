var menu_items = document.getElementById("menu_items");

menu_items.style.maxHeight = "0px";
function menu_toggle() {
  if (menu_items.style.maxHeight == "0px") {
    menu_items.style.maxHeight = "200px";
  } else {
    menu_items.style.maxHeight = "0px";
  }
}
