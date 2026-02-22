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
        // Получаем первопроходца
        level_verifier = "Нет данных";
        for (i = 0; i < players.length; i++){ // Проходимся по каждому игроку
            for (j = 0; j < players[i].verified.length; j++) // И по каждому уровню, который он прошёл
            {
                if (players[i].verified[j] == level.name) // Если уровень совпал с нашим
                {
                    level_verifier = players[i].name; // Записываем имя первопроходца
                    break; // Выходим из цикла, так как первопроходец найден
                }
            }
        }


        let s = "Первопроходец: " + level_verifier;

        level_victors = [];

        for (i = 0; i < players.length; i++){ // Проходимся по каждому игроку
            for (j = 0; j < players[i].completed.length; j++){
                if (players[i].completed[j] == level.name) // Если уровень совпал с нашим
                {
                    level_victors.push(players[i].name);
                }

            } // И по каждому уровню, который он прошёл
        }



        if (level_victors.length > 0) {
            s += "\n\nОстальные: " + level_victors.join(", ");
        }
        desk_el.textContent = s;

        container.appendChild(temp_clone);

    });

})




