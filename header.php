<script src="main.js"></script>
<link rel=“icon” href=”favicon.ico” type=“image/x-icon”>
<link rel=“shortcut icon” href=“favicon.ico” type=“image/x-icon”>
<link rel="stylesheet" href="styles.css">
<title>Song generator</title>

<script>
     // This code loads the IFrame Player API code asynchronously. This is for youtube API
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
</script>

<style>
body {
  background-color: rgba(255, 255, 255, 0.649);
  color: black;
}

.dark-mode {
  background-color: black;
  color: white;
}

.head {
  background-color: #f9f9f9;
  text-align: center;
  overflow: hidden;
}

.head a {
  float: left;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}
</style>



<div class="head">
  <a>Song Generator</a>
  <a href="https://github.com/caapppaa"><img height="20px" width="20px" src="githubLogo.png"></a>
  <a><button onclick="darkMode()"><img height="10px" width="10px" src="darkMode.svg"></button></a>
</div>



<script> 
function darkMode() {
  var dark = document.body;
  dark.classList.toggle("dark-mode");

  var item = document.getElementById("greyDiv");
  if (item.style.backgroundColor === 'grey') {
    item.style.backgroundColor = '#f3f3f3';
  } else {
    item.style.backgroundColor = 'grey';
  }
 
  var mainBack = document.getElementById("html123");
  if (mainBack.style.backgroundColor === 'black') {
    mainBack.style.backgroundColor = 'white';
  } else {
    mainBack.style.backgroundColor = 'black';
  }
}
</script>