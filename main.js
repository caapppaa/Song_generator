/* 2D array version with CSV Import*/


const songs = [
["Hotel California", "Eagles"], 
["Sultans of Swing", "Dire Straits"],
["Sweet Child o Mine", "Guns N Roses"],
["Creep", "Radiohead"],
["Everlong", "Foo Fighters"],
["Stairway to Heaven", "Led Zeppelin"],
["Nothing Else Matters", "Metallica"],
["Wish you Were Here", "Pink Floyd"],
["Under The Bridge", "Red Hot Chili Peppers"],
["Crazy Train", "Ozzy Osbourne"],
["Sweet Home Alabama", "Lynyrd Skynyrd"]
];



let songPart = ["chorus", "intro", "solo", "verse"];




function Generate() {
    let i = Math.floor(Math.random() * 12);;
    let j = Math.floor(Math.random() * 4);
    let phrase = 1; // Math.floor(Math.random() * 5);
    let data = "initialisation Error";
    let iSong = songs[i][0];
    let iArtist = songs[i][1];
    
    if (phrase === 1) {
        data = (`Today you will be learning the ${songPart[j]} of the song ${iSong} by ${iArtist}`);
    }
    else if (phrase === 2) {
        data = (`Today you play the ${songPart[j]} of ${iSong} by the legendary ${iArtist}`);
    }
    else if (phrase === 3) {
        data = (`${iSong} is the song that will the learn the ${songPart[j]} from, if you don't know, it's by ${iArtist}`);
    }
    else if (phrase === 4) {
        data = (`Please learn the ${songPart[j]} in ${iSong} by the ${iArtist}`);
    }
    else {
        data = (`Today you commit to learning the ENTIRE ${songPart[j]} in ${iSong} by ${iArtist}`);
    }
    
    document.getElementById("printHere").innerHTML = data;
}

