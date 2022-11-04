const { RESTDataSource } = require('apollo-datasource-rest')

class CharacterAPI extends RESTDataSource {
  constructor(){
    super()
    this.baseURL = 'https://rickandmortyapi.com/api'
  }

  async getCharacters() {
    const character = await this.get('/character').then(e => e.results)
    return character.map(async character => ({
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
    }))
  }

  async getCharacterById(id) {
    const character = await this.get(`/character/${id}`)
    return character
  }
}

module.exports = CharacterAPI