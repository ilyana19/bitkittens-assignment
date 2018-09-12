document.addEventListener("DOMContentLoaded", function() {
  // $.ajax({
  //   url: "https://bb-election-api.herokuapp.com/",
  //   method: "GET",
  //   data: {},
  //   dataType: "json"
  // }).done(function(responseData){
  //   var candidates = responseData.candidates;
  //   for (var i = 0; i < candidates.length; i++) {
  //     var li = $("<li>");
  //     li.html(candidates[i].name + ": " + candidates[i].votes + " votes");
  //
  //     $(".candidates").append(li);
  //   }
  // });

  $(".summon-cats").click(function(){
    $.ajax({
      url: "http://bitkittens.herokuapp.com/cats.json",
      method: "GET",
      dataType: "json"
    }).done(function(responseData) {
      var data = responseData.cats;
      var catContainer = document.querySelectorAll(".cat-box");

      for (var i = 0; i < data.length; i++) {
        var imageContainer = document.createElement("div");
        var image = document.createElement("img");
        image.src = data[i].photo;
        image.alt = "Photo of " + data[i].name;
        imageContainer.append(image);

        catContainer[i].innerHTML = imageContainer.innerHTML;
      }
    });
  });
});