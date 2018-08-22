var images=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx3d083fukIsOx7IyA8HNVm1RMzwQgcvqBz-GiIfkdc8YuhU0d","https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-903ea3cb.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/16777216colors.png/220px-16777216colors.png"];
var index=0;

function gay(){
    for(index=0;index<images.length;index++){
        if (index===2){
            index=index-2;
            var img=images[index];
            document.getElementById("uwu").src= img;
        }
        else{
            var img=images[index];
            document.getElementById("uwu").src= img;
        }
    }    
}
 setInterval(gay(),4000);
