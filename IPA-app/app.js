
    // class selector
    document.querySelector(".newRandomBeerButton");
    // id selector
    document.querySelector("#randomBeer");

// reverance to button
    const  newRandomBeerButton = document.querySelector("#randomBeer");
          newRandomBeerButton.addEventListener("click", getBeer);

          //button function
    function getBeer(){
     console.log("get beer button wad clicked");
    }

  const endpoint ='https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beers/random/?key=87b934b40ebd6d2f774995a2551013d1',
                type: "GET",
                dataType: "json"

























// $(() => {
//       $.ajax({
//           url:'https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/beers/random/?key=87b934b40ebd6d2f774995a2551013d1',
//           type: "GET",
//           dataType: "json"
//       }).then(
//          (data) =>{
//
//            console.log(data);
//           },
//           (error)=>{
//             console.log("bad request");
//           })
//
//
//
//
//     // })
//     // })
//
// })
