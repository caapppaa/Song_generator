<!DOCTYPE html>
<html>
<head>
<?php include 'header.php';?>
    </head>
    
    <div class="topnav">
        <a href="index.php">Pick a Song</a>
        <a href="allSongs.php">All Songs</a>
        <a href="addSong.php">Add a Song!</a>
        <a style="float: right" class="active" href="about.php">About...</a>
    </div>

<body>
    <h1>About...</h1>
    <div class="greyDiv">
    <p>Here is a simple program I developed for a codecademy course, it is designed to show my understanding of CSS, JSON, Javascript and HMTL. The below headers explain what each page does and what skills they implement.</p><br>

    <h2>Pick a song!</h2>
    <p>This is designed to randomly pick a song along with a specific part for the user to learn. This song generator implements a 2D array that contains the name of the song, it's artist and a youtube ID so that it can load the appropriate Video Tutorial. This segments into the next section, there is a youtube API that loads a tutorial video based on the randomly generated song. There is a final array that is simply to randomly iterate betweenn a verse, chorus, intro or solo.</p> <br>

    <h2>All Songs</h2>
    <p>All Songs is a simple JavaScript while loop that iterates through the entire array and then displays all of the names in a formatted paragraph. Future iterations of this are planned to display the album artwork and allow sorting by name and artist in alphabetical order</p><br>

    <h2>Add a song!</h2>
    <p>Add a song is not yet implemented but is designed to add your own song to the array</p><br>
    </div>
</body>


<?php include 'footer.php';?>

</html>