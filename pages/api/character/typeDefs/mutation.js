const { gql } = require("apollo-server");
const mutation = gql`
   type Mutation {
      createCharacter(character: CharacterInput): Character
      updateCharacter(id: String, character: CharacterInput): Character
      deleteCharacter(id: String): Character
   }
   
   input CharacterInput {
    name: String
      status: String
      species: String
      type: String
      gender: String
      origin: OriginInput
      location: LocationInput
      image: String
      episode: [String]
      url: String
      created: DateTime
   }

   input OriginInput {
    name: String
    url: String
  }

  input LocationInput {
    name: String
    url: String
  }

`;
module.exports = mutation;