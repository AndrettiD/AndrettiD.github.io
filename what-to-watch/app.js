$(() => {
  // event handler
   $("form").on("submit",(event)=>{
     //event.preventDefault();

     const userInput = $("#userInput").val(); // .val grab of input

     $.ajax({ //object is the url
       url: `https://www.omdbapi.com/?apikey=53aa2cd6&t=${userInput}`,
     }).then(   //a method that takes two arguments/ promisce
       (data) => {  // var() with 2 arguments
          // handler for success
         console.log(data);
         let title = data.Title;
         $("#title").html(title);
           //console.log(title);// rmbr API use.Capital letter after data .html(data.Title)    open in moudal
         $("#year").html(data.Year)//.appendTo($("#modal-textbox"));
         $("#rated").html(data.Rated);
         $("#genre").html(data.Genre);
       },
       (error) => {
          // handler for errors
          console.log(error);
          //console.log(`${error.statusText.ToUpperCase()} :bad request, check url`);

  });

 });
///modal////

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
setTimeout(openModal, 500);



});
