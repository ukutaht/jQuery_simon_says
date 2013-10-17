$(document).ready(function(){
//   $(document).on("click", "#get_color", function(){
//     $.post('/color', function(response){
//       $( "ul li:nth-child("+response.cell+")" ).css("background-color", response.color);
//     })
//   })

  $(document).on("click", "#get_color", function(){
    var cell = Math.floor(Math.random() * 9) + 1;
    var color= '#'+ Math.floor(Math.random()*16777215).toString(16);
    $( "ul li:nth-child("+cell+")" ).css("background-color", color);

  })
});
