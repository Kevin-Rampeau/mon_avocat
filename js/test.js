/**********************************
******************MAP**************
**********************************/



var map = function(){
	
  var myLatLng = {lat: 48.554773, lng: 7.745011};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Cabinet PwC Société d\'Avocats Strasbourg'
  });
	

}
map(); 