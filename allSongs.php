<!DOCTYPE html>
<html>
<head>
<?php include 'header.php';?>
    </head>
    
    <div class="topnav">
        <a href="index.php">Pick a Song</a>
        <a class="active" href="allSongs.php">All Songs</a>
        <a href="addSong.php">Add a Song!</a>
        <a style="float: right" href="about.php">About...</a>
    </div>

<body>
    <h1>All Songs</h1>
    <div class="greyDiv">
    <div class="button-center">
    <button class="button" onclick="createList()">Click to view List!</button>
    </div>
    <p id="printSongList"></p>

</div>

</body>


<?php include 'footer.php';?>
</html>