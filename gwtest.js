(function () {
     ;[].forEach.call(document.querySelectorAll(".info__rate span"),function(elem){
    var arr={
        7.0:"blue",
        6.0:"green",
        5.0:"gold"
    }
    elem.style.backgroundColor=arr[elem.innerHTML.toLowerCase().trim()]
})
}();
