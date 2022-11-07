const Character = require("../models/Character");

const userResolvers = {
  Query: {
    characters: async () => {
      return await Character.find({});
   },
    character: async (_, { id }) => {
      return await Character.findById(id);
   }
  },
  Mutation: {
    async createCharacter(_, { character }) {
       const newCharacter = await new Character(character);
       return newCharacter.save();
    },
    async updateCharacter(_, { id, character }) {
       return await Character.findByIdAndUpdate(id, character, {
          new: true,
          useFindAndModify: false,
       });
    },
    async deleteCharacter(_, { id }) {
       return await Character.findByIdAndRemove(id, {
          useFindAndModify: false,
       });
    },
 },
}

module.exports = userResolvers