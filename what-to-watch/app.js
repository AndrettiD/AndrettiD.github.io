$(() => {
  // event handler
   $("form").on("submit",(event)=>{
     event.preventDefault();

     const userInput = $("#userInput").val(); // .val grab of input

  $.ajax({ //object is the url
    url: `https://www.omdbapi.com/?apikey=53aa2cd6&t=${userInput}`,
     }).then(   //a method that takes two arguments/ promisce
       (data) => {  // var() with 2 arguments
          // handler for success


//movie & tv data to html
// ===============================
        let title = data.Title;
          $("#title").html(title);
           //API use.Capital letter after data
        let director = data.Director;
           $("#director").html(director);

        let actors = data.Actors;
           $("#actors").html(actors)

        let genre = data.Genre;
           $("#genre").html(genre);

        let year = data.Year;
           $("#year").html(year);

        let awards = data.Awards;
           $("#awards").html(awards);

        let rated = data.Rated
           $("#rated").html(rated);

        let type = data.Type
           $("#type").html(type);

        let runtime = data.Runtime
           $("#runtime").html(runtime);
            console.log(data);
       },
       (error) => {
          // handler for errors
          console.log(error);


  });

 });


///modal popup
//================
//Grabbing Elements
const $openBtn = $("#openModal");
const $modal = $("#modal");
const $closeBtn = $("#close");

//Event Handlers
const openModal = () => {
 $modal.css("display", "block");
}
const closeModal = () => {
 $modal.css("display", "none");
}
//Event Listeners
$openBtn.on("click", openModal);
$closeBtn.on('click', closeModal);

// time modal open auto
setTimeout(openModal, 200);



});
