
$(() => {


  $.ajax({

    url: "https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/breweries/?key=87b934b40ebd6d2f774995a2551013d1",
    type: "GET",
    dataType: "json",

      }).then((data) =>{
             console.log(data);
            },(error)=>{
              console.log("bad request");

            // callback from api
            //new try
            // $("url").click(function(event){
            //   event.preventDefault();
            //   breweries.blur();
            //   $.get(breweries.herf, function(html){
            //     $(html).appendTo("body").modal();
            //   })
            // })

            // call from api
            //old one
      // }).then((breweries) => {
      //     const sliceArr  = $(breweries).slice(0, 18);
      //      console.log("sliceArr");
      //     for (let breweries of sliceArr){
      //     const $breweries = $(".breweries");


           //modal
          const $div = $("<div>").addClass("profile").attr("id", "openModal").appendTo($breweries).on("click", event => {
            $(event.currentTarget)($modal).show()

          })

          const $modal = $("<div>").attr("id", breweries.id).addClass("modal").css("display", "none").appendTo("body");

          const $textbox = $("<div>").attr("id", "modal-textbox").appendTo($modal);

          const $close = $("<p>").addClass("modalClose").text("X").appendTo($textbox).on("click", event =>{
            $($modal).css("display", "none")
          })

          const $brewInfo = $("<div>").addClass("brewInfo").appendTo($textbox)

          //img check src
          const $icon =$("<img>").addClass("icon").attr("src", breweries.icon_uri )

          //name of brewery
          const $name = $("<div>").addClass("name").html("<h2>" + breweries.name + "</h2>").appendTo($info)

          // all info of breweries
          const $allInfo = $("<div>").addClass("allInfo").appendTo(textbox)

          //established
          const $established =$("<div>").html("<h4>established</h4> <p>" + breweries.established + "<p>").addClass("established").appendTo($allInfo)

          //description
          const $description =$("<div>").html("<h4>description</h4> <p>" + breweries["description-srting"] + "<p>").addClass("description").appendTo($allInfo)

          const $region =$("<div>").html("<h4>region</h4> <p>" + breweries.region + "<p>").addClass("region").appendTo($allInfo)

          //website
          const $website =$("<div>").html("<h4>website</h4> <p>" + breweries.website + "<p>").addClass("website").appendTo($allInfo)

          //front Pictures
          const $h3 = $("<h4>").text(breweries.name).appendTo($div);

          const $img = $("<img>").addClass("photo").attr("src", breweries/img).appendTo($div);
   //}
  })


});
