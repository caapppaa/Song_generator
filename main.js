
let songs = ["Hotel California", "Sultans of Swing", "Sweet Child o Mine", "Creep", "Everlong", "Stairway to Heaven", "Nothing Else Matters", "Wish you Were Here", "Under The Bridge", "Crazy Train", "Sweet Home Alabama"];
let artists = ["Eagles", "Dire Straits", "Guns N Roses", "Radiohead", "Foo Fighters", "Led Zeppelin", "Metallica", "Pink Floyd", "Red Hot Chili Peppers", "Ozzy Osbourne", "Lynyrd Skynyrd"];
let songPart = ["chorus", "intro", "solo", "verse"];


function Generate() {
    let i = Math.floor(Math.random() * 10);;
    let j = Math.floor(Math.random() * 3);
    let data = (`Today you will be learning the ${songPart[j]} of the song ${songs[i]} by the ${artists[i]}`);
    document.getElementById("printHere").innerHTML = data;
}

