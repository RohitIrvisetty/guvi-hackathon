var input = document.getElementById("myInput").value;
 console.log(input);
// input.addEventListener("keyup", function(event) {
//   if (event.key === 'Enter') {
//    event.preventDefault();
//    document.getElementById("myBtn").click();
//    console.log("Inside Btn");

//   }
// });


function YoutubeFunction(){
    //window.preventDefault();
    // console.log("Inside YoutubeFunction");
    window.open(`https://www.youtube.com/results?search_query=+${input}`, '_blank');

}

function slider(){
    if(document.getElementsByClassName("sidebar")[0].style.display=="none"){
    document.getElementsByClassName("sidebar")[0].style.display="block";
    }
    else{
    document.getElementsByClassName("sidebar")[0].style.display="none";

    }

}