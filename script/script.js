var img = [
    {"mood" : "gestrest"},
    {"mood" : "ontspannen"},
    {"mood" : "gelukkig"},
    {"mood" : "uitgeput"},
    {"mood" : "opgewonden"},
    {"mood" : "onverschillig"},
    {"mood" : "boos"},
    {"mood" : "depressief"},
    {"mood" : "verdrietig"}
];


(function($){   
   $('#slider').CircularSlider({ 
    min : 0, 
    max: 8, 
    value : 0,
    labelSuffix: "°",
    radius: 140,
    innerCircleRatio: 0.1,
    slide: function(ui, value){
        console.log(value)
        var element = document.getElementById('mood');
        var imgC = document.querySelector('img');
        imgC.src = './img/' + img[value].mood + '.png'; 
        element.innerHTML = 'Ik voel mij: ' + img[value].mood;
    }
});
})(jQuery)