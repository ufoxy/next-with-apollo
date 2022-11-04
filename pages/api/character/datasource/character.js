import { RESTDataSource } from '@apollo/datasource-rest';

export default class CharactersAPI extends RESTDataSource {
  constructor(){
    super()
    this.baseURL = 'https://rickandmortyapi.com/api'
  }

  async getCharacters() {
    const characters = await this.get('/character')
    console.log(characters)
    return characters.map(async chc => {
      const character = chc.results
      return ({
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species,
      type: character.type,
      gender: character.gender,
      origin: {
        name: character.origin.name,
        url: character.origin.url
      },
      location: {
        name: character.location.name,
        url: character.location.url
      },
      image: character.image,
      episode: character.episode,
      url: character.url,
      created: character.created
    })})
  }

  async getCharacterById(id) {
    const character = await this.get(`/character/${id}`)
    return character
  }

}