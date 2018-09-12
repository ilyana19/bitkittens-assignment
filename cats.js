document.addEventListener("DOMContentLoaded", function() {
  $(".summon-cats").click(function(){
    $.ajax({
      url: "http://bitkittens.herokuapp.com/cats.json",
      method: "GET",
      data: {number: 6},
      dataType: "json"
    }).done(function(responseData) {
      var cats = responseData.cats;
      var main = document.querySelector("main");

      for (var i = 0; i < cats.length; i++) {
        var imageContainer = document.createElement("div");
        var image = document.createElement("img");
        image.src = cats[i].photo;
        image.alt = "Photo of " + cats[i].name;
        imageContainer.appendChild(image);

        var moreCats = document.createElement("div");
        moreCats.id = "cat" + (i+1);
        moreCats.className = "cat-box";

        moreCats.style.top = Math.floor(Math.random() * 600) + "px";
        moreCats.style.left = Math.floor(Math.random() * 800) + "px";

        main.appendChild(moreCats);
        moreCats.innerHTML = imageContainer.innerHTML;
      }
    });
  });
});