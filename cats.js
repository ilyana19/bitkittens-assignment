document.addEventListener("DOMContentLoaded", function() {
  $(".summon-cats").click(function(){
    $.ajax({
      url: "http://bitkittens.herokuapp.com/cats.json",
      method: "GET",
      data: {number: 3},
      dataType: "json"
    }).done(function(responseData) {
      var cats = responseData.cats;
      var catContainer = document.querySelectorAll(".cat-box");

      for (var i = 0; i < cats.length; i++) {
        var imageContainer = document.createElement("div");
        var image = document.createElement("img");
        image.src = cats[i].photo;
        image.alt = "Photo of " + cats[i].name;
        imageContainer.appendChild(image);

        catContainer[i].innerHTML = imageContainer.innerHTML;
      }
    });
  });
});