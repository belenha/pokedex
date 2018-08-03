var minName;
var pokemonContainer = $("#poke-container");
var zeros = "00";
var zero = "0";

$('.modal').modal();

$.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/?limit=806`,
    type: 'GET',
    datatype: 'json',
    crossDomain: true
}).done(pokemon).fail(mistake);

function pokemon(data) {
    for (var i = 1; i < 807; i++) {         // se itera para obtener las imágenes de los pokemones y los nombres

        if (i < 10) {
            var picture = $(`<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${zeros}${i}.png">`);
            // console.log(picture);
            var paragraph = $('<p>').text(data.results[i - 1].name);
            pokemonContainer.append(picture, paragraph);
        } else if (i <= 99) {
            var picture = $(`<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${zero}${i}.png">`);
            // console.log(picture);
            var paragraph = $('<p>').text(data.results[i - 1].name);
            pokemonContainer.append(picture, paragraph);
        } else {
            var picture = $(`<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${i}.png">`);
            // console.log(picture);
            var paragraph = $('<p>').text(data.results[i - 1].name);
            pokemonContainer.append(picture);
        }
    }

}

function mistake() {
    console.log('error');

}

// Se le da la función al botón para que aparezca un modal con el pokemon buscado
$('#pokeBtn').click(function (e) {   
    e.preventDefault();
    var pokemonName = $('#pokeName').val();
    minName = pokemonName.toLowerCase();
    getPokemon();
})

// función para buscar pokemon por nombre
function getPokemon() {
    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${minName}`,
        type: 'GET',
        datatype: 'json',
        crossDomain: true
    }).done(response).fail(error);
}

// Se obtienen los datos del pokemon
function response(data) {
    // console.log(data);
    var name = data.name;
    // console.log(name);

    var url = data.sprites.front_default;
    // console.log(url);
    var image = "<img src='" + url + "'/>";

    var type = 'Type: ' + data.types[0].type.name;
    // console.log(type);

    var abilities = 'Ability: ' + data.abilities[0].ability.name;
    // console.log(abilities);

    var abilities2 = 'Ability 2: ' + data.abilities[1].ability.name;
    // console.log(abilities2);

    var speed = data.stats[0].stat.name + ': ' + data.stats[0].base_stat;
    // console.log(speed);

    var specialDefense = data.stats[1].stat.name + ': ' + data.stats[1].base_stat;
    // console.log(specialDefense);

    var specialAttack = data.stats[2].stat.name + ': ' + data.stats[2].base_stat;
    // console.log(specialAttack);

    var defense = data.stats[3].stat.name + ': ' + data.stats[3].base_stat;
    // console.log(defense);

    var attack = data.stats[4].stat.name + ': ' + data.stats[4].base_stat;
    // console.log(attack);

    var hp = data.stats[5].stat.name + ': ' + data.stats[5].base_stat;
    // console.log(hp);

    var weight = 'weight: ' + data.weight/10 + 'kg';
    // console.log(weight / 10 + "kg");

    var height = 'height: ' +  data.height;
    // console.log(height / 10 + "m");

    var identificador = 'Id: ' + data.id;
    // console.log(identificador);


    var $pname = $('<p/>').addClass('infoPoke').text(name);
    var $ptype = $('<p/>').addClass('infoPoke').text(type);
    var $pabilities = $('<p/>').addClass('infoPoke').text(abilities);
    var $pabilities2 = $('<p/>').addClass('infoPoke').text(abilities2);
    var $pspeed = $('<p/>').addClass('infoPoke').text(speed);
    var $pspecialDefense = $('<p/>').addClass('infoPoke').text(specialDefense);
    var $pspecialAttack = $('<p/>').addClass('infoPoke').text(specialAttack);
    var $pdefense = $('<p/>').addClass('infoPoke').text(defense);
    var $pattack = $('<p/>').addClass('infoPoke').text(attack);
    var $php = $('<p/>').addClass('infoPoke').text(hp);
    var $pweight = $('<p/>').addClass('infoPoke').text(weight);
    var $pheight = $('<p/>').addClass('infoPoke').text(height);
    var $pidentificator = $('<p/>').addClass('infoPoke').text(identificador);


    // Datos para el modal
    $("#namePok").html($pname);
    $("#image").html(image);
    $("#type").html($ptype);
    $("#ability1").html($pabilities);
    $("#ability2").html($pabilities2);
    $("#speed").html($pspeed);
    $("#specialDefend").html($pspecialDefense);
    $("#specialAttack").html($pspecialAttack);
    $("#attack").html($pattack);
    $("#defense").html($pdefense);
    $("#hp").html($php);
    $("#weight").html($pweight);
    $("#height").html($pheight);
    $("#identificator").html($pidentificator);

    //    var pokemonContainer = $("#poke-container");
    //     pokemonContainer.append(image, $pname,$ptype,$pabilities,$pabilities2,$pspeed,$pspecialDefense,
    //                             $pspecialAttack,$pdefense ,$pattack,$php,$pweight,$pheight,$pidentificador);
}

function error() {
    console.log('error');
}