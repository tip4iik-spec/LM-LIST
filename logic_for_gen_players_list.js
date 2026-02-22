document.addEventListener("DOMContentLoaded", () => {
    console.log("Контейнер:", document.getElementById("templates-container"));
    console.log("Шаблон:", document.getElementById("player-template"));

    container = document.getElementById("templates-container");
    temp = document.getElementById("player-template");

    const pageName = window.location.pathname.split("/").pop().replace(".html", "");

    if (pageName == "players_list_by_two_hardests"){
        // players_list_by_two_hardests - топ, основанный на среднем арифметическом топа 2 хардестов игрока
        // Для начала получим массив: [{"player" : ... , "levels": [{"level": ... , "pos": ...}]}]
        // При этом пусть в levels все уровни будут рассротированны по сложности
        let players_and_their_complete_levels = []
        // Пройдемся по каждому игроку
        for (player_i = 0; player_i < players.length ; player_i++){
            let temp_player_levels = []
            // И по каждому уровню, который игрок прошел
            let all_player_completed_levels = players[player_i].completed.concat(players[player_i].verified)
            for (player_level_i = 0; player_level_i < all_player_completed_levels.length ; player_level_i++){
                // Перебрав все уровни топа, найдем сложность каждого пройденного уровня
                for (level_in_list_i = 0; level_in_list_i < levels.length ;level_in_list_i++){
                    if (levels[level_in_list_i].name == all_player_completed_levels[player_level_i]){
                        temp_player_levels.push({"level": levels[level_in_list_i].name, "pos": level_in_list_i+1})
                    }
                }
            }

            temp_player_levels.sort((a, b) => a.pos - b.pos); // Теперь получен levels для players_and_their_complete_levels, сортированный по сложности уровней

            players_and_their_complete_levels.push({"name": players[player_i].name, levels: temp_player_levels})
            // Добавляем игрока в итоговый массив, и переходим к следующему
        }
        // Здесь у нас есть готовый players_and_their_complete_levels

        // Расчитаем среднее арифметическое топа 2 хардестов для каждого игрока:

        for (i = 0; i < players_and_their_complete_levels.length ; i++){
            if (players_and_their_complete_levels[i].levels.length > 1){
                players_and_their_complete_levels[i].SA = (players_and_their_complete_levels[i].levels[0].pos + players_and_their_complete_levels[i].levels[1].pos) / 2
            }
            else{
                players_and_their_complete_levels[i].SA = (players_and_their_complete_levels[i].levels[0].pos + levels.length + 1) / 2
            }
        }
        // Абсолютно все равно на то, кто будет выше/ниже при одинаковом SA

        players_and_their_complete_levels.sort((a,b) => a.SA - b.SA)


        // Получим пройденные из main, extended и beyond листов уровни:
        for (i = 0; i < players_and_their_complete_levels.length; i++){
            for (j = 0; j < players_and_their_complete_levels[i].levels.length; j++){
                players_and_their_complete_levels[i].main ??= []
                players_and_their_complete_levels[i].extended ??= []
                players_and_their_complete_levels[i].beyond ??= []
                
                let currentLevel = players_and_their_complete_levels[i].levels[j];

                if (currentLevel.pos <= 50){
                    players_and_their_complete_levels[i].main.push(currentLevel.level) 
                }
                else if (currentLevel.pos <= 100){
                    players_and_their_complete_levels[i].extended.push(currentLevel.level) 
                }
                else if (currentLevel.pos <= 150){
                    players_and_their_complete_levels[i].beyond.push(currentLevel.level) 
                }
            }
        }
        
        players_and_their_complete_levels.forEach(player =>{
            let temp_clone = temp.content.cloneNode(true);
            let player_name_el = temp_clone.querySelector(".player-name");
            player_name_el.textContent = player.name + " - " + player.SA
            player_name_el.id = player.name

            let player_hardest_el = temp_clone.querySelector(".player-hardest-level");
            player_hardest_el.textContent = player.levels[0].level

            let player_main_levels_el = temp_clone.querySelector(".player-main-list-completed-levels");
            let player_extended_levels_el = temp_clone.querySelector(".player-extended-list-completed-levels");
            let player_beyond_levels_el = temp_clone.querySelector(".player-beyond-list-completed-levels");
            if (player.main.length > 0){
            player_main_levels_el.textContent = player.main.join(", ")
            }
            if (player.extended.length > 0){
            player_extended_levels_el.textContent = player.extended.join(", ")
            }
            if (player.beyond.length > 0){
                player_beyond_levels_el.textContent = player.beyond.join(", ")
            }
            let more_info_div_el = temp_clone.querySelector(".more-info-about-player");
            more_info_div_el.id = player.name + "-info"
            container.appendChild(temp_clone)
        })
    }



    // В конце концов, добавим показ дополнительной информации
    // Сначала напишем машину состояний
    player_states = []
    players.forEach(player => {
        player_states.push({"player": player.name, "state": "none"})
    }) // state означает значение атрибута display

    clicable_name_els = document.querySelectorAll(".player-name");
    clicable_name_els.forEach(i => {
        i.addEventListener("click", () => {
            let player_name = i.id // Мы выдавали каждому нику id ника ранее
            let state = ""
            let j = 0
            for (;j < player_states.length ; j++){
                if (player_name == player_states[j].player){
                    state = player_states[j].state
                    break;
                }
            }
            let more_info_div_el = document.getElementById(player_name + "-info")
            if (state == "none"){
                more_info_div_el.style.display = "flex"
                player_states[j].state = "flex"
            }
            else{
                more_info_div_el.style.display = "none"
                player_states[j].state = "none"
            }

        })
    })
});
