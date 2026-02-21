document.addEventListener("DOMContentLoaded", () => {
    console.log("Контейнер:", document.getElementById("templates-container"));
    console.log("Шаблон:", document.getElementById("item-template"));

    container = document.getElementById("templates-container");
    temp = document.getElementById("item-template");

    let special_levels = []


    const pageName = window.location.pathname.split("/").pop().replace(".html", "");

    if (pageName == "index"){
        special_levels = levels.slice(0, 50)
    }
    else if (pageName == "Extended"){
        special_levels = levels.slice(50, 100)
    }
    else if (pageName == "beyond"){
        special_levels = levels.slice(100, 150)
    }

    special_levels.slice(0, 50).forEach(level => {  
    temp_clone = temp.content.cloneNode(true);

        img_el = temp_clone.querySelector(".item-image");
        temp_image = document.createElement('img');
        temp_image.src = "./images/" + level.name + ".png";
        img_el.appendChild(temp_image);

        name_el = temp_clone.querySelector(".item-title");
        name_el.textContent = "№" + (levels.indexOf(level) + 1) + " - " + level.name;

        desk_el = temp_clone.querySelector(".item-level-victors");
        let s = "Первопроходец: " + level.verifer;
        if (level.victors != "") {
            s += "\n\nОстальные: " + level.victors;
        }
        desk_el.textContent = s;

        container.appendChild(temp_clone);

    });

})




