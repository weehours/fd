
var loadpicarray;
var picloaded=0;
var mytoken="";
var musicsnd=null;

$(function(){
    InitLoader();
});


function InitLoader(){
    $("#loader").show();
    $("#loadnum").empty().append("");

    loadpicarray = document.getElementsByTagName("img");
    
    picloaded=0;
    for(var i=0;i<loadpicarray.length;i++){
        var img=new Image();
        img.onload=onPicLoaded;
        img.src=loadpicarray[i].src;
    }
}


function onPicLoaded(){
    picloaded++;
    /*var lstr=Math.ceil(100*picloaded/loadpicarray.length)+"%";
    $("#loadnum").empty().append(lstr);*/


    if(picloaded>=loadpicarray.length){
        $("#loadnum").empty().append("");
       
        $("#loader").fadeOut(1500, function(){
        	$(".p-ct").show();
        	$(".u-arrow").show();
        });
    }
}

