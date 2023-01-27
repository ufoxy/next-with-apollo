const request = require("supertest");

it ('Deve informar a primeira página de personagens da lista', async () => {

    const resposta = await request(`https://rick-and-morty-backend.vercel.app/app`).get(`/characters/1`)

    expect(resposta.status).toBe(200)
    expect(resposta.body.characters).toHaveLength(9)
})

it ('Deve informar uma lista de 9 personagens aleatórios da API', async () => {

    const resposta = await request(`https://rick-and-morty-backend.vercel.app/app`).get(`/random/characters`)

    expect(resposta.status).toBe(200)
    expect(resposta.body.characters).toHaveLength(9)
})

it ('Deve informar uma personagem específico da API com o nome Rick Sanchez e com ID 1', async () => {

    const resposta = await request(`https://rick-and-morty-backend.vercel.app/app`).get(`/character/id/1`)

    expect(resposta.status).toBe(200)
    expect(resposta.body.character).toHaveLength(1)
    expect(...resposta.body.character.map(e => e.id)).toBe(1)
    expect(...resposta.body.character.map(e => e.name)).toMatch("Rick Sanchez")
})

it ('Deve informar uma lista de personagens específicos da API com o nome Rick Sanchez', async () => {

    const resposta = await request(`https://rick-and-morty-backend.vercel.app/app`).get(`/character/name/Rick%20Sanchez`)
    const arrayExpected = ["Rick Sanchez", "Rick Sanchez", "Rick Sanchez", "Rick Sanchez"]

    expect(resposta.status).toBe(200)
    expect(resposta.body.character).toHaveLength(4)
    expect(resposta.body.character.map(e => e.name)).toMatchObject(arrayExpected)
})