const userResolvers = {
  Query: {
    characters: (root, args, { dataSources }) => dataSources.CharactersAPI.getCharacters(),
    character: (root, { id }, { dataSources }) => dataSources.CharactersAPI.getCharacterById(id)
  }
}

module.exports = userResolvers