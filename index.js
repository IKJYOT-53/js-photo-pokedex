const body = document.body
const div = document.createElement('div')

//li.innerText = "meow"
// div.append(li)
// body.append(div)
// const students = [
//     {name: "mark" , marks:"100"},
//     {name: "daniel" , marks:"10"},
//     {name: "johnson" , marks:"50"}
// ]
// students.map(student =>{
//     const li = document.createElement('li')
//     li.innerText = student.name
//     div.append(li)
//     body.append(div)
// })

// const getPokemons = async () => {
//   const response = await fetch(" https://pokeapi.co/api/v2/pokemon")
//   const pokemons = await response.json()
//   return  pokemons
// // }
// let pokemons=[]
// const response=getPokemons()
// let pokemons=[]
// const response =fetch(" https://pokeapi.co/api/v2/pokemon").then(res => {
//     return res.json()
// }).then(data =>{
//     pokemons=data.results
// })
// pokemons.forEach(pokemon => {
//     console.log(pokemon.name)
// })

const getImages = async (Url) => {
    const response = await fetch(Url)
    const jres = await response.json()
    
    const image = document.createElement('IMG')
    image.src = jres.sprites.other.dream_world.front_default
    div.append(image)
    body.append(div)


}

let Url='https://pokeapi.co/api/v2/pokemon'
const getPokemons = async (Url) => {
  const response = await fetch(Url)
  const jres = await response.json()
  await jres.results.forEach(pokemon => {
      const list = document.createElement('li')
      list.innerText = pokemon.name
      getImages(pokemon.url)
      //div.append(list)
      //body.append(div)
  })
  getPokemons(jres.next)
}
getPokemons(Url)

// console.log(pokemons)
// pokemons.forEach(pokemon => {
//     console.log(pokemon.name)
//     // const list = document.createElement('li')
//     // list.innerText=pokemon.name
//     // div.append(list)
//     // body.append(div)
// })