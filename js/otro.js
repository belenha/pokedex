var minName;
var pokemonContainer = $("#pokemons");
var zeros = "00";
var zero = "0";

$.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/?limit=806`,
    type: 'GET',
    datatype: 'json',
    crossDomain: true
}).done(pokemon).fail(mistake);


function pokemon(data) {
    for (var i = 1; i < 806; i++) {
        if (i < 10) {
            var picture = $(`<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${zeros}${i}.png">`);
            var paragraph = $('<p>').text(data.results[i - 1].name);
            pokemonContainer.append(picture, paragraph);
        } else if (i <= 99) {
            var picture = $(`<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${zero}${i}.png">`);
            //console.log(picture);
            var paragraph = $('<p>').text(data.results[i - 1].name);
            pokemonContainer.append(picture, paragraph);
        } else {
            var picture = $(`<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${i}.png">`);
            // console.log(picture);
            var paragraph = $('<p>').text(data.results[i - 1].name);
            pokemonContainer.append(picture, paragraph);
        }
    }
}


function mistake() {
    console.log("Error");
}




$('#search-poke').click(function (e) {
    e.preventDefault();
    var pokemonName = $('#poke-text').val();
    minName = pokemonName.toLowerCase();
    getPokemon();

    $('#exampleModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })
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
    var name = data.name;
    console.log(name);

    var url = data.sprites.front_default;
    console.log(url);
    var image = "<img src='" + url + "'/>";

    var type = data.types[0].type.name;
    console.log(type);

    var abilities = data.abilities[0].ability.name;
    console.log(abilities);

    var abilitiesTwo = data.abilities[1].ability.name;
    console.log(abilitiesTwo);

    var speed = data.stats[0].stat.name + ': ' + data.stats[0].base_stat;
    console.log(speed);

    var specialDefense = data.stats[1].stat.name + ': ' + data.stats[1].base_stat;
    console.log(specialDefense);

    var specialAttack = data.stats[2].stat.name + ': ' + data.stats[2].base_stat;
    console.log(specialAttack);

    var defense = data.stats[3].stat.name + ': ' + data.stats[3].base_stat;
    console.log(defense);

    var attack = data.stats[4].stat.name + ': ' + data.stats[4].base_stat;
    console.log(attack);

    var hp = data.stats[5].stat.name + ': ' + data.stats[5].base_stat;
    console.log(hp);

    var weight = data.weight;
    console.log(weight / 10 + "kg");

    var height = data.height;
    console.log(height / 10 + "m");

    var identificador = data.id;
    console.log(identificador);


    var $pname = $('<p/>').addClass('infoPoke').text(name);
    var $ptype = $('<p/>').addClass('infoPoke').text(type);
    var $pabilities = $('<p/>').addClass('infoPoke').text(abilities);
    var $pabilities2 = $('<p/>').addClass('infoPoke').text(abilitiesTwo);
    var $pspeed = $('<p/>').addClass('infoPoke').text(speed);
    var $pspecialDefense = $('<p/>').addClass('infoPoke').text(specialDefense);
    var $pspecialAttack = $('<p/>').addClass('infoPoke').text(specialAttack);
    var $pdefense = $('<p/>').addClass('infoPoke').text(defense);
    var $pattack = $('<p/>').addClass('infoPoke').text(attack);
    var $php = $('<p/>').addClass('infoPoke').text(hp);
    var $pweight = $('<p/>').addClass('infoPoke').text(weight);
    var $pheight = $('<p/>').addClass('infoPoke').text(height);
    var $pidentificador = $('<p/>').addClass('infoPoke').text(identificador);


    var pokemonContainer = $("#profile-pokemon");
    pokemonContainer.append(image, $pname, $ptype, $pabilities, $pabilities2, $pspeed, $pspecialDefense,
        $pspecialAttack, $pdefense, $pattack, $php, $pweight, $pheight, $pidentificador);
}

function error() {
    console.log('error');
}