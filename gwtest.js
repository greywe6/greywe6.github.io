$(document).ready(function(){
        var value = parseInt($('.info__rate span').html());
      
        if (value >= 7.0){
           $('.info__rate span').css("color","red");
        }
      });
         
