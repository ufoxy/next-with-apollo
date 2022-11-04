const characterResolvers = {
    Query: {
        users: (root, args, { dataSources }) => dataSources.CharactersAPI.getCharacters(),
        user: (root, { id }, { dataSources }) => dataSources.CharactersAPI.getCharacterById(id)
    }

}

export default characterResolvers