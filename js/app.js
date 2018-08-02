let minName;
const pokemonContainer = $("#poke-container");
let zeros = "00";
let zero = "0";
for(var i = 1; i < 760; i++) {
    
    if(i < 10) {
        let picture = $(`<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${zeros}${i}.png">`);
        // console.log(picture);
        pokemonContainer.append(picture);
    }else if(i <= 99) {
        let picture = $(`<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${zero}${i}.png">`);
        // console.log(picture);
        pokemonContainer.append(picture); 
    } else {
        let picture = $(`<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${i}.png">`);
        // console.log(picture);
        pokemonContainer.append(picture); 
    }

}

    $('#pokeBtn').click(function (e) {
        e.preventDefault();
        const pokemonName = $('#pokeName').val();
        minName = pokemonName.toLowerCase();
        getPokemon();
    })
    
    function getPokemon() {
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${minName}`,
            type: 'GET',
            datatype: 'json',
            crossDomain: true
        }).done(response).fail(error);
    }
    
        function response(data) {
            console.log(data);
            const name = data.name;
            console.log(name);

            const url = data.sprites.front_default;
            console.log(url);
            const image = "<img src='" + url + "'/>";

            const type = data.types[0].type.name;
            console.log(type);

            const abilities = data.abilities[0].ability.name;
            console.log(abilities);

            const abilitiesTwo = data.abilities[1].ability.name;
            console.log(abilitiesTwo);

            const speed = data.stats[0].stat.name + ': ' + data.stats[0].base_stat;
            console.log(speed);
            
            const specialDefense = data.stats[1].stat.name + ': ' + data.stats[1].base_stat;
            console.log(specialDefense);
            
            const specialAttack = data.stats[2].stat.name + ': ' + data.stats[2].base_stat;
            console.log(specialAttack);
            
            const defense = data.stats[3].stat.name + ': ' + data.stats[3].base_stat;
            console.log(defense);
            
            const attack = data.stats[4].stat.name + ': ' + data.stats[4].base_stat;
            console.log(attack);
            
            const hp = data.stats[5].stat.name + ': ' + data.stats[5].base_stat;
            console.log(hp);

            const weight = data.weight;
        console.log(weight / 10 + "kg");

        const height = data.height;
        console.log(height / 10 + "m");

        const identificador = data.id;
        console.log(identificador);

            
        let $pname = $('<p/>').addClass('infoPoke').text(name);
        let $ptype = $('<p/>').addClass('infoPoke').text(type);
        let $pabilities = $('<p/>').addClass('infoPoke').text(abilities);
        let $pabilities2 = $('<p/>').addClass('infoPoke').text(abilitiesTwo);
        let $pspeed = $('<p/>').addClass('infoPoke').text(speed);
        let $pspecialDefense = $('<p/>').addClass('infoPoke').text(specialDefense);
        let $pspecialAttack = $('<p/>').addClass('infoPoke').text(specialAttack);
        let $pdefense = $('<p/>').addClass('infoPoke').text(defense);
        let $pattack = $('<p/>').addClass('infoPoke').text(attack);
        let $php = $('<p/>').addClass('infoPoke').text(hp);
        let $pweight = $('<p/>').addClass('infoPoke').text(weight);
        let $pheight = $('<p/>').addClass('infoPoke').text(height);
        let $pidentificador = $('<p/>').addClass('infoPoke').text(identificador);
        

       const pokemonContainer = $("#poke-container");
        pokemonContainer.append(image, $pname,$ptype,$pabilities,$pabilities2,$pspeed,$pspecialDefense,
                                $pspecialAttack,$pdefense ,$pattack,$php,$pweight,$pheight,$pidentificador);
        }
    
        function error() {
            console.log('error');
        }