async function catchMelon(){ 
    try{
        const response = await fetch('melon.jpeg'); //await the result of fetch and store variable
        const blob = await response.blob();   
        document.querySelector("#melon").src = URL.createObjectURL(blob); //put into format using URL 
        document.querySelector("#melon").style.width = "400px";
    } 
    catch(error){
        console.error("ERROR: " +error);
    }
}  
catchMelon().then(console.log("Image uploaded"));

//WITHOUT AWAIT AND ASYNC
// console.log("Fetching image of melon"); 
// fetch('melon.jpeg').then(response=>{  //grab image as a promise, use .then to handle the response
//     console.log(response); 
//     return response.blob(); //object that wraps up response and keeps it safe and ready to use whenever you need it/like another promise  
// }).then(blob=>{
//     console.log(blob); 
//     document.querySelector("#melon").src = URL.createObjectURL(blob); //put into format using URL 
//     document.querySelector("#melon").style.width = "400px";
// }).catch(error=>{console.error(error);}); //chaining promises and error catching 

//RECAP .then().catch() work like this, if the method completes successfully it would run the function in then(), however, if it doesnt, it will run catch
