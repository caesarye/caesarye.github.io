function replaceName() {
    var myNewName = window.prompt('Type your name!');
    document.getElementById('user-name').innerHTML = myNewName;
  }
  document.onclick = replaceName;

function makePost(text) {
  var outterDiv = document.createElement("div");
  outterDiv.className = "col offset-l3 l6 offset-m2 m8 s12"
  var cardDiv = document.createElement("div");
  cardDiv.className = "card";
  var cardContentDiv = document.createElement("div");
  cardContentDiv.className = "card-content";
  var textNode = document.createTextNode(text);
  cardContentDiv.appendChild(textNode);
  cardDiv.appendChild(cardContentDiv);
  outterDiv.appendChild(cardDiv);
  return outterDiv
}

$(document).ready(function () {
  $(".button-collapse").sideNav();

  $("#makePostButton").click(function () {
    var newText = $(".materialize-textarea").val();
    if(!newText) return;
 	$(".materialize-textarea").val("");
    var newPost = makePost(newText);
    var postRow = document.getElementById("post-row")
    postRow.insertBefore(newPost,postRow.firstChild);
  });

});

<!-- document.getElementsByClassName("")--> <!-- returns a list -->
