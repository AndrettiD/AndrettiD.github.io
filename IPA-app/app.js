
$(() => {

      $.ajax({
          url:"https://api.punkapi.com/v2/beers/random",

      }).then(
         (data) =>{
           console.log(name);
          },
          
          (error)=>{
            console.log("bad request");
          })

    })
