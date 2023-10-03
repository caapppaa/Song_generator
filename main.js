// 2D Array, trying to make this work with a JSON file Instead

const songs = [
["Hotel California", "Eagles", "JIDdI-AtK-Q"], 
["Sultans of Swing", "Dire Straits", "ULxsTuG8ghw"],
["Sweet Child o Mine", "Guns N Roses", "iWxMMWOmkNQ"],
["Creep", "Radiohead", "0-IAFa5Hz8M"],
["Everlong", "Foo Fighters", "8SdCgWgP_TI"],
["Stairway to Heaven", "Led Zeppelin", "iGleR_5yiaE"],
["Nothing Else Matters", "Metallica", "7silbMA9UME"],
["Wish you Were Here", "Pink Floyd", "IzxMeQgtyYE"],
["Under The Bridge", "Red Hot Chili Peppers", "RJlQ9WOYrwA"],
["Crazy Train", "Ozzy Osbourne", "61YCfNHZuHE"],
["Sweet Home Alabama", "Lynyrd Skynyrd", "FOh9-f_o_MM"]
];

let songPart = ["chorus", "intro", "solo", "verse"];

function Generate() {
    var x = document.getElementById("divForPlayer");
    x.style.display = "block";
    // Random int for song
    let i = Math.floor(Math.random() * songs.length);;
    //Randon int for song part
    let j = Math.floor(Math.random() * songPart.length);
    let phrase = 1; // Math.floor(Math.random() * 5);
    // troubleshooting if the if statement block fails
    let data = "initialisation Error";
    // for some reason if you try to use a 2D array in the Data line it just prints the whole array so I'm initialising them here
    let iSong = songs[i][0];
    let iArtist = songs[i][1];
    
    // Selects a Phrase Based on Random INT, all say the sane thing. Just makes it more Lively
    if (phrase === 1) {
        data = (`Today you will be learning the ${songPart[j]} of the song <span style="color: red">${iSong}</span> by ${iArtist}`);
    }
    else if (phrase === 2) {
        data = (`Today you play the ${songPart[j]} of <span style="color: red">${iSong}</span> by the legendary ${iArtist}`);
    }
    else if (phrase === 3) {
        data = (`<span style="color: red">${iSong}</span> is the song that will the learn the ${songPart[j]} from, if you don't know, it's by ${iArtist}`);
    }
    else if (phrase === 4) {
        data = (`Please learn the ${songPart[j]}  in <span style="color: red">${iSong}</span> by the ${iArtist}`);
    }
    else {
        data = (`Today you commit to learning the ENTIRE ${songPart[j]} in <span style="color: red">${iSong}</span> by ${iArtist}`);
    }   
  
      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: songs[i][2],
          playerVars: {
            'playsinline': 1
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.stopVideo();
      }

         // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        
      }
      function stopVideo() {
        player.stopVideo();
      }

      
    // Prints the phrase by accessig PrintHere DOM element
     document.getElementById("printSong").innerHTML = data;

      // calls the youtube player API if there is a value with the video ID
      onYouTubeIframeAPIReady();
        

}

function createList() {
  // Prints the phrase by accessig PrintHere DOM element
  let i = 0;
  let data = '';
  while (songs.length > i) {
    data += `${songs[i][0]}, `;
    i++
  }
  
  document.getElementById("printSongList").innerHTML = data;
}

