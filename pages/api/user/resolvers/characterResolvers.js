const userResolvers = {
  Query: {
    users: (root, args, { dataSources }) => dataSources.usersAPI.getCharacters(),
    user: (root, { id }, { dataSources }) => dataSources.usersAPI.getCharacterById(id)
  }
}

module.exports = userResolvers