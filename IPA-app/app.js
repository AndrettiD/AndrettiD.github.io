//BrewrieDB
//"https:sandbox-api.brewerydb.com/v2{endpoint}/GETkey=87b934b40ebd6d2f774995a2551013d1"

$(() => {

  $(document).ready(function() {
      $.ajax({
          url:'https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beers/?key=87b934b40ebd6d2f774995a2551013d1',

      }).then(
         (data)=>{
           

           console.log(data);
    },
    ()=>{
        console.log("bad request");
    }
      );
  })
})
