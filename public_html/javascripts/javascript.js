/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var sieze_map = $('#container-map').width();

$('#map').css('padding-top', sieze_map / 2);

var head = document.getElementsByTagName('head').item(0);
var script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBBdrasUiH2lwav6s5-kIJky-sqMmwmFNg&callback=initMap');
head.appendChild(script);

var map;
var myLatLng = {lat: 52.299177, lng: 21.033627};
var infoWindow;
function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 16
    });



    infoWindow = new google.maps.InfoWindow;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            //       alert(pos);
//            console.log(pos);
//            new google.maps.Marker({
//                animation: google.maps.Animation.BOUNCE,
//                position: pos,
//                map: map,
//                title: 'Tu jestes!'
//            })


            var directionsService = new google.maps.DirectionsService;
            var directionsDisplay = new google.maps.DirectionsRenderer;
            directionsDisplay.setMap(map);


//            alert(markerOptions);
//            directionsDisplay.setOptions({markerOptions : marker_opt});

            http://www.w3resource.com/API/google-maps/google-maps-class-propertes-controls.php
                    https://developers.google.com/maps/documentation/javascript/3.exp/reference

                    myLatlng = new google.maps.LatLng(52.299033, 21.033647);
            myLatlng1 = new google.maps.LatLng(pos);

            directionsService.route({
                origin: myLatlng,
                destination: myLatlng1,
                travelMode: 'DRIVING'
            }, function (response, status) {
                //alert(status);
                if (status === 'OK') {
                    directionsDisplay.setDirections(response);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
        });
    }



    new google.maps.Marker({
        animation: google.maps.Animation.BOUNCE,
        position: myLatLng,
        map: map,
        title: 'Akademia plywania!'
    });
}

class handleDiv {
    constructor() {
        this.table = new Array();
    }

    getData(val) {
        return this.table[val];
    }
    setData(val) {
        this.table.push(val)
    }
    getSize() {
        return this.table.length;
    }
}
$(document).ready(function () {

    var handle = new handleDiv();

    $('.for-each').each(function (element) {
        handle.setData({height: $(this).height(),
            offset: $(this).offset(),
            element: this
        })
    })

    $(window).scroll(function (a) {
        var position = $($(document)).scrollTop() + 100;
        console.log(position);
        for (var i = 0; i < handle.getSize(); i++) {

            //   console.log($(handle.getData(handle.getSize())).offset.top -50 +" "+ position);    

//                 if( $(document).height()-20 === position ) {alert('so'); break};   

            console.log($(document).height());

            if (position >= handle.getData(i).offset.top - 50 && position < handle.getData(i).offset.top + handle.getData(i).height - 50) {



                $(handle.getData(i)).addClass('tests');
                console.log('position ' + i);
//                alert(handle.getData(handle.getSize()-1).offset.top)
            }
        }
    })

    $('#home-nav').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#home-div").offset().top - 100
        }, 500);
    });

    $('#owners-nav').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#owners-div").offset().top - 120
        }, 500);
    });

    $('#coatch-nav').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#coatch-div").offset().top + 30
        }, 500);

    });

    $('#plannig-nav').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#plannig-div").offset().top - 110
        }, 500);
    });

    $('#regulamin-nav').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#regulamin-div").offset().top - 30
        }, 500);
    });


    $('#contact-nav').click(function (e) {
        e.preventDefault();
        $('#contact-div').dialog(
            
          {minWidth: 600}
        );
    });



})

