fetch('https://meme-api.herokuapp.com/gimme')
.then(response => response.json())
.then(data => {
 console.log(data) // Prints result from `response.json()` in getRequest
})
.catch(error => console.error(error))