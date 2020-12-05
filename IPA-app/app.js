$(() => {
  //        $("form").on("submit",(event) => {
  //          const userInput =
  //
  // $(document).ready(function() {


      $.ajax({
          url:'https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beer/random/?key=87b934b40ebd6d2f774995a2551013d1',
          type: "GET",
          dataType: "json"
      }).then(
         (data) =>{

           console.log(data);
          },
          (error)=>{
            console.log("bad request");
          })




    // })
    // })

})
