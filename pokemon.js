var pokemon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];


//BONUS:console log the reverse of the names of the pokemon whose only type is "poison"
function reverseString(str) {
    return str.split("").reverse().join("");
}

function reversePoison(arr) {
    var newString = "";
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newString = reverseString(arr[i]);
        newArr.push(newString);
    }
    return newArr;
}

//console log the names of the pokemon whose ONLY type is "poison"
function poison(){
    let poisonPokemon = []
    for (var i = 0; i < pokemon.length; i++){
        if(pokemon[i].types[0] == "poison" && pokemon[i].types[1] == null){
            poisonPokemon.push(pokemon[i].name);
        }
    }
    return poisonPokemon;
}

//console log the pokemon objects whose id is evenly divisible by 3
function divisible(){
    for(var i = 0; i < pokemon.length; i++){
        if(pokemon[i].id % 3 == 0){
            console.log(pokemon[i].name);
        }
    }
}

//console log the first type of all pokemon whose second type is "flying"
function flyer(){
    for(var i = 0; i < pokemon.length; i++){
        if(pokemon[i].types[1] == "flying"){
            console.log(pokemon[i].name);
        }
    }
}

//console log the pokemon objects that have more than one type
function dualType(){
    for (var i = 0; i < pokemon.length; i++){
        if(pokemon[i].types.length > 1){
            console.log(pokemon[i].name);
        }
    }
}


console.log(poison())
console.log("--------------")
divisible()
console.log("--------------")
flyer()
console.log("--------------")
dualType()
console.log("--------------")
console.log(reversePoison(poison()))