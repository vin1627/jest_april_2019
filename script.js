const fetch = require('node-fetch');


const googleDatabase = [
  'cats.com',
  'souprecipes.com',
  'flowers.com',
  'animals.com',
  'catpictures.com',
  'catscute.com'
];

const lib = {}

lib.getPeople = fetch =>{
  return fetch('https://swapi.co/api/people/')
  .then(response =>
    response.json())
  .then(data =>{
    return {
      count: data.count,
      results: data.results
    }
  })
}
lib.getPeoplePromise = async (fetch) =>{
  const apiResult = await fetch('https://swapi.co/api/people/')
  const data = await apiResult.json();
  return {
    count: data.count,
    results: data.results
  }
}

lib.googleSearch = (searchInput ,db) =>{
  const matches = db.filter(website => {
    return website.includes(searchInput);
  })
  return matches.length > 3 ? matches.slice(0, 3) : matches;
} 

// const result = googleSearch('cat', googleDatabase );

// console.log(result);




module.exports = lib;
// alternative 
// module.exports = {
//   lib,
//   anothermethod
// }