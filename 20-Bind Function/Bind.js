var processResponse = function(xhr){
 
 if(xhr.readyState===4){
  document.getElementById('display').innerHTML = xhr.responseText;
  }
 
}




var fetch = function(){
 var xhr = new XMLHttpRequest();
 
 // xhr.onreadystatechange = processResponse;
 
 xhr.onreadystatechange = processResponse.bind(null, xhr);
   // or 
 
 xhr.onreadystatechange = function(){
  processResponse(xhr);
 }
 
 xhr.open('GET', '/');
 xhr.send();
 
}


