const test_img_el = document.createElement('img');

test_img_el.src = "./Crimson_Planet.png";
document.body.appendChild(test_img_el);


container = document.getElementById("container-for-templates");
temp = document.getElementById("test-template");

temp_clone = temp.content.cloneNode(true);

temp_clone.querySelector(".test").textContent = "Hello world";

img_el = temp_clone.querySelector(".image-div");
img_el.src = "./Crimson_Planet.png";

name_el = temp_clone.querySelector(".name");
name_el.textContent = "Crimson Planet";

desk_el = temp_clone.querySelector(".desk");
desk_el.textContent = "A planet with a crimson hue, known for its unique atmosphere and mysterious landscapes.";

container.appendChild(temp_clone);
