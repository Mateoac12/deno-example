const MAX_POKEMON = 151

export const getPokemon = async () => {
  const randomNumber = Math.ceil(Math.random() * (MAX_POKEMON - 1))
  const API_URL = 'https://pokeapi.co/api/v2/pokemon'

  const randomPokemon = await fetch(`${API_URL}/${randomNumber}`)
    .then((res) => res.json())
    .then((data) => {
      return data.name
    })

  return randomPokemon
}
