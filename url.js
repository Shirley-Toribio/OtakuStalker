var gay=$("input").val;
var request="http://localhost:5000/screenname/api/v1.0/analysis/"+gay;
var img_add="http://localhost:5000/screenname/api/v1.0/analysis/"+gay+ "wordcloud";
function wlw(){
  fetch(request)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      var mch=myJson[0]["mostCommonHashtags"];
      var pf=myJson[0]["problematicFactor"];
      var retweet=myJson[0]["totalRetweets"];
      var frequency=myJson[0]["tweetFrequency"];
      document.getElementById('hashtags').innerHTML="Most Used Hashtags: "+mch;
      document.getElementById('problematic').innerHTML="Problematic Factor from 0-1: "+pf;
      document.getElementById('rate').innerHTML="Average Number of Hours Between Tweets: "+frequency;
      document.getElementById('retweets').innerHTML="Total Number of Retweets: "+retweet;
      document.getElementById("in").style.margin.bottom="0px";
      console.log(myJson);

    });
  }
  // function fetchim(img_address){
  //     fetch(img_address).then(function(response){
  //         if (response.ok){
  //             response.blob().then(function(blob){
  //                 var image_URL = URL.createObjectURL(blob);
  //                 // var image = document.getElementById("textblob");
  //                 // image.src = image_URL;
  //                 document.getElementById('textblob').src=image_URL;
  //             });
  //         } else {
  //             alert(response.statusText);
  //         }
  //     });
  // }
  function daddio(){
    wlw();
    // fetchim(img_add);
  }
