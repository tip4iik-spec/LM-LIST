console.log("Контейнер:", document.getElementById("templates-container"));
console.log("Шаблон:", document.getElementById("item-template"));

container = document.getElementById("templates-container");
temp = document.getElementById("item-template");

temp_clone = temp.content.cloneNode(true);

img_el = temp_clone.querySelector(".item-image");
temp_image = document.createElement('img');
temp_image.src = "./Crimson_Planet.png";
img_el.appendChild(temp_image);

name_el = temp_clone.querySelector(".item-title");
name_el.textContent = "Crimson Planet";

desk_el = temp_clone.querySelector(".item-description");
desk_el.textContent = "ХАХАХХАХА";

container.appendChild(temp_clone);
