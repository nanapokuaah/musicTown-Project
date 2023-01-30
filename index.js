//Build a nav bar
// Need to fetch info from db.json
//search bar 
console.log("hey")
function playSongs(){
    fetch("http://localhost:3000/music")
    .then(response =>response.json())
    .then(music => {
    music.forEach(music=> renderOneMusic(music))
   music(music[0]) 
})
}





