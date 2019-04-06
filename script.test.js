const lib = require('./script');
const fetch = require('node-fetch');
dbMock = [
  'dog.com',
  'chees.com',
  'dsiney.com',
  'cat.com',
  'category.com'
];

it('this expect hello!', ()=>{
  const hello = 'hello'
  const hell = hello
  const hel = hell
  const he = hel
  expect(he).toBe('hello')
}) 

it('this is a search google', () =>{
  // 2 test in 1 function
  expect(lib.googleSearch('testtest',dbMock))
    .toEqual([])
  expect(lib.googleSearch('cat',dbMock))
    .toEqual(['cat.com','category.com'])
})

it('this shuld return length of 3', () =>{
  // 2 test in 1 function
  expect(lib.googleSearch('testtest',dbMock))
    .toEqual([])
  expect(lib.googleSearch('.com',dbMock).length)
    .toEqual(3)
})
 

it('this call swapi for persons', (done) =>{
  expect.assertions(1)
  lib.getPeople(fetch).then(data =>{
    expect(data.count).toEqual(87)
    done();
  })
})

it('this call swapi for persons with a promise', (done) =>{
  expect.assertions(2)
  lib.getPeoplePromise(fetch).then(data =>{
    // console.log(data.results)
    expect(data.count).toEqual(87)
    expect(data.results.length).toBeGreaterThan(5)
    done();
  })
})

// mocks data
it('getPeople return counts and result', ()=>{
  // jest.fn() is a jest function
  const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
    json: () => Promise.resolve({
      count: 87,
      results: [1,2,3,4,5]
    })
  }))
  expect.assertions(2)
  return lib.getPeoplePromise(mockFetch).then(data =>{
    expect(mockFetch.mock.calls.length).toBe(1)
    expect(mockFetch).toBeCalledWith('https://swapi.co/api/people/')
  })
})