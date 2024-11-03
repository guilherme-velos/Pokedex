const pokemon_name = document.querySelector('.pokemon_name');
const pokemon_number = document.querySelector('.pokemon_number');
const pokemon__image = document.querySelector('.pokemon__image');



const form = document.querySelector('.form');
const input_search = document.querySelector('.input_search');

const fetchpokemon = async (pokemon) => {
    const APIResponse = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    return data;
}

const Renderpokemon = async (pokemon) => {

  const data= await fetchpokemon(pokemon);

  pokemon_name.innerHTML = data.name;
  pokemon_number.innerHTML = data.id;
  pokemon__image.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

}
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
Renderpokemon(input_search.value);
input_search.value= '';
    

});

    
