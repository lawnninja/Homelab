// function getBrowserWidth(){
//     if (window.innerWidth){
//         return window.innerWidth;}	
//     else if (document.documentElement && document.documentElement.clientWidth != 0){
//         return document.documentElement.clientWidth;	}
//     else if (document.body){return document.body.clientWidth;}		
//         return 0;
// }

// function dynamicLayout(){
// var browserWidth = getBrowserWidth();

// //Load Thin CSS Rules
// if (browserWidth < 900){
//     changeLayout("thin");
// }
// //Load Wide CSS Rules
// if ((browserWidth >= 900) && (browserWidth <= 1400)){
//     changeLayout("wide");
// }
// //Load Wider CSS Rules
// if (browserWidth > 1400){
//     changeLayout("wider");
// }
// }

// function changeLayout(description){
// var i, a;
// for(i=0; (a = document.getElementsByTagName("link")[i]); i++){
//    if(a.getAttribute("title") == description){a.disabled = false;}
//    else if(a.getAttribute("title") != "home"){a.disabled = true;}
// }
// }

// function addEvent( obj, type, fn ){ 
//    if (obj.addEventListener){ 
//       obj.addEventListener( type, fn, false );
//    }
//    else if (obj.attachEvent){ 
//       obj["e"+type+fn] = fn; 
//       obj[type+fn] = function(){ obj["e"+type+fn]( window.event ); } 
//       obj.attachEvent( "on"+type, obj[type+fn] ); 
//    } 
// } 

// //Run dynamicLayout function when page loads and when it resizes.
// addEvent(window, 'load', dynamicLayout);
// addEvent(window, 'resize', dynamicLayout);