
$(() => {


  $.ajax({

    url: "https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/breweries/?key=87b934b40ebd6d2f774995a2551013d1",
    type: "GET",
    dataType: "json",

      }).then((data) =>{


             //modal
            const $div = $("<div>").addClass("profile").attr("id", "openModal").text("name")
            .appendTo($(".breweries")).on("click", event => {
              $(event.currentTarget)($modal).show()

            })
            console.log(data);

            //const $breweries = $("#breweries").html(data.name)

            const $modal = $("<div>").text("hello world").appendTo($(".profile"))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

            //const $modal = $("<div>").attr("id", data.name).addClass("modal").appendTo($("#container"));

            //const $textbox = $("<div>").attr("id", "modal-textbox").appendTo($(modal));


            //const $breweriesDiv =$("<div>").addClass("breweries")


            //brew squares profiles
            // const $h3 = $("<h3>").text(data.name).appendTo($("body"));
            //
            // const $img = $("<img>").addClass("photo").attr("src", squareMedium).appendTo($("div"));
            //
            //
            // //const $textbox = $("<div>").attr("id", "modal-textbox").appendTo($modal);
            //
            // const $close = $("<p>").addClass("modalClose").text("X").appendTo($("textbox")).on("click", event =>{
            //   $($modal).css("display", "none")
            // })
            //
            // const $brewInfo = $("<div>").addClass("brewInfo").appendTo($("textbox"))
            //
            // //img check src
            // const $icon =$("<img>").addClass("icon").attr("src", icon)
            //
            // //name of brewery
            // const $name = $("<div>").addClass("name").html("<h2>" + breweries.name + "</h2>").appendTo($("info"))
            //
            // // all info of breweries
            // const $allInfo = $("<div>").addClass("allInfo").appendTo($("textbox"))
            //
            // //established
            // const $established =$("<div>").html("<h4>established</h4> <p>" + breweries.established + "<p>").addClass("established").appendTo($("allInfo"))
            //
            // //description
            // const $description =$("<div>").html("<h4>description</h4> <p>" + breweries["description-srting"] + "<p>").addClass("description").appendTo($("allInfo"))
            //
            // const $region =$("<div>").html("<h4>region</h4> <p>" + breweries.region + "<p>").addClass("region").appendTo($(allInfo))
            //
            // //website
            // const $website =$("<div>").html("<h4>website</h4> <p>" + breweries.website + "<p>").addClass("website").appendTo($(allInfo))
            //
            //

            },(error)=>{
               console.log("bad request");
  })


});
