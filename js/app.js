$('form').on('submit',function(e){
    e.preventDefault();

    var types = $('input[type=text]').val().replace(' ', '');
    types = types.split(',');
    console.log(types);
    var trainerTypes = types.map(function(type){
        return $.ajax({
            url:'https://pokeapi.co/api/v2/type/' + type,
            dataType:'json',
            method: 'GET'
        });
    });
//    console.log(trainerTypes);

    $.when.apply(null, trainerTypes)
        .then(function(){
            var pokemonTypes = Array.prototype.slice.call(arguments);
        })
});

function getDoubleDmgTypes(pokemonTypes){
    pokemonTypes = pokemonTypes.map(function(types){
        return types[0].damage_relations.double_damage_from;
    });
    pokemonTypes = flatten(pokemonTypes);

    var damageTypes = pokemonTypes.map(function(type){
        return $.ajax({
            url:type.url,
            dataType: 'json',
            method: 'GET'
        });
    });
}

function flatten(arrayToFlaten){
    return arrayToFlaten.reduce(function(a,b){
        return a.concat(b);
    },[]);
}