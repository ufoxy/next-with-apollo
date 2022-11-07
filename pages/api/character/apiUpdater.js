// Atualiza Database com a API pública do Rick and Morty.

const axios = require("axios");

async function makeRequest() {
  const characters = [];

  const config = {
    method: "get",
    url: "https://rickandmortyapi.com/api/character",
  };

  let res = await axios(config);

    // console.log(...res.data.results)

      for (var i = 1; i <= res.data.info.pages; i++) {
      console.log(i);

      const config = {
          method: "get",
          url: `https://rickandmortyapi.com/api/character?page=${i}`,
        };

        let res = await axios(config);

        characters.push(...res.data.results.map(e => e.name))
        // characters.push(...res.data.results)
  }

  return characters;
}

async function res() {
  const response = await makeRequest();
  console.log(response);
}

res();

// async function makeFor() {
//   for await (num of makeRequest()) {
//     console.log(num);
//   }
// }

// makeFor();
