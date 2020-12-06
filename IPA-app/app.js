
$(() => {


  $.ajax({

    url: "https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/breweries/?key=87b934b40ebd6d2f774995a2551013d1",
    type: "GET",
    dataType: "json",

      }).then((breweries) => {
          const sliceArr = breweries.slice(0, 18);
           console.log("sliceArr");
          for (let breweries of sliceArr);
          const $breweries = $(".breweries");

           //modal
          const $div =$("<div>").addClass("profile").attr("ID", "openModal").appendTo($breweries).on("click", event => {
            $(event.currentTarget)$($modal).show()
          })

          const $modal = $("<div>").attr










        })








      // }).then(
      //
      //      (data) =>{
      //        console.log(data);
      //
      //       },
      //       (error)=>{
      //         console.log("bad request");
      //       });




      });









// unction(data){
//   const brewery_data = " ";
//   $.each(data, function(key, value){
//       brewery_data += "<tr>";
//       brewery_data += "<td>" +value.name+ "</td>";
//       brewery_data += "<td>" +value.description+ "</td>";
//       brewery_data += "<td>" +value.established+ "</td>";
//       brewery_data += "<td>" +value.img+ "</td>";
//       brewery_data += "<td>" +value.website+ "</td>";
//       brewery_data += "<td>" +value.region+ "</td>";
//       brewery_data += "</tr>"
//   });
//   $("#brewery_table").append(brewery_data);
// }
