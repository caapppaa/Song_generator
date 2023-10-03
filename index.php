<!DOCTYPE html>
<html>
<head>
<?php include 'header.php';?>
<script>
     // This code loads the IFrame Player API code asynchronously. This is for youtube API
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
</script>

<?php include 'footer.php';?>
</head>

<div class="topnav">
    <a class="active" href="index.php">Pick a Song</a>
    <a href="allSongs.php">All Songs</a>
    <a href="addSong.php">Add a Song!</a>
    <a style="float: right" href="about.php">About...</a>
</div>

<body>
    <h1>What Song Should I Learn Today?</h1>
    <div class="greyDiv">
    <h3>Click the Button Below to Generate a new Song!</h3>

    <div class="button-center">
    <button class="button" onclick="Generate()">Generate!</button>
    </div>
    
    <p id="printSong"></p>

    <!-- 1. The <iframe> (and video player) will replace this <div> tag. -->
    </div>
    <div class="divForPlayer" id="divForPlayer">
        <p id="player"></p>
   </body> 


</html>