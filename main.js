
let songs = ["Hotel California", "Sultans of Swing", "Sweet Child o Mine", "Creep", "Everlong", "Stairway to Heaven", "Nothing Else Matters", "Wish you Were Here", "Under The Bridge", "Crazy Train", "Sweet Home Alabama"];
let artists = ["Eagles", "Dire Straits", "Guns N Roses", "Radiohead", "Foo Fighters", "Led Zeppelin", "Metallica", "Pink Floyd", "Red Hot Chili Peppers", "Ozzy Osbourne", "Lynyrd Skynyrd"];
let songPart = ["chorus", "intro", "solo", "verse"];


function Generate() {
    let i = Math.floor(Math.random() * 11);;
    let j = Math.floor(Math.random() * 4);
    let phrase = Math.floor(Math.random() * 4);
    let data = "initialisation Error";

    if (phrase === 1) {
        data = (`Today you will be learning the ${songPart[j]} of the song ${songs[i]} by ${artists[i]}`);
    }
    else if (phrase === 2) {
        data = (`Today you play the ${songPart[j]} of ${songs[i]} by the legendary ${artists[i]}`);
    }
    else if (phrase === 3) {
        data = (`${songs[i]} is the song that will the learn the ${songPart[j]} from, if you don't know, it's by ${artists[i]}`);
    }
    else if (phrase === 4) {
        data = (`Please learn the ${songPart[j]} in ${songs[i]} by the ${artists[i]}`);
    }
    else {
        data = (`Today you commit to learning the ENTIRE ${songPart[j]} in ${songs[i]} by ${artists[i]}`);
    }
    document.getElementById("printHere").innerHTML = data;
}

