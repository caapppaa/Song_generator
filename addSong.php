<!DOCTYPE html>
<html>
<head>
<?php include 'header.php';?>
    <style>
     
        </style>
    </head>
    
    <div class="topnav">
        <a href="index.php">Pick a Song</a>
        <a href="allSongs.php">All Songs</a>
        <a class="active" href="addSong.php">Add a Song!</a>
        <a style="float: right" href="about.php">About...</a>
    </div>

<body>
    <h1>Add your own song to the mix! </h1>
    <div class="greyDiv">
    <form>
        <label id="songName">Song Name: </label>
        <input type="text" id="songName" required> <br> <br>
        <label id="songArtist">Song Artist: </label>
        <input type="text" id="songArtist" required> <br><br>
        <label id="ytID">Youtube ID: </label>
        <input type="text" id="ytID" required> <br> <br>

        <input type="submit" value="Submit">
        

    </form>
</div>
</body>

<?php include 'footer.php';?>

</html>