let map;
let marker;
let modalMap;
let modalMapMarker;

const burger = document.querySelector("#checkbox3")
const headerMobile = document.querySelector(".header-mobile")

/* Slick slider
================*/

$('.tariffs__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: $('.slider__control-prev'),
  nextArrow: $('.slider__control-next'),
  responsive: [
    {
      breakpoint: 1199.98,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ],
});


/* Validated Bootstrap
======================*/

(function () {
  'use strict'

  let forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()



/* Google Maps Init
======================*/

function initMap() {
  modalMap = new google.maps.Map(document.getElementById("map-modal"), {
    center: { lat: 53.3109102, lng: 50.3010293 },
    zoom: 8,
  });
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 53.3109102, lng: 50.3010293 },
    zoom: 8,
  });
}


/* DaData input form
======================*/

$(".address").suggestions({
    token: "794f0264202ebca665c9083fb1839485ce7cd0d0",
    type: "ADDRESS",

    onSelect: function(suggestion) {
        map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: Number(suggestion.data.geo_lat), lng: Number(suggestion.data.geo_lon) },
          zoom: 18,
        });
        marker = new google.maps.Marker({
          position: {lat: Number(suggestion.data.geo_lat), lng: Number(suggestion.data.geo_lon)},
          map: map,
        });

    }
});

/* DaData input modal
======================*/

$(".modal-address").suggestions({
    token: "794f0264202ebca665c9083fb1839485ce7cd0d0",
    type: "ADDRESS",

    onSelect: function(suggestion) {
        modalMap = new google.maps.Map(document.getElementById("map-modal"), {
          center: { lat: Number(suggestion.data.geo_lat), lng: Number(suggestion.data.geo_lon) },
          zoom: 18,
        });
        modalMapMarker = new google.maps.Marker({
          position: {lat: Number(suggestion.data.geo_lat), lng: Number(suggestion.data.geo_lon)},
          map: modalMap,
        });

    }
});


/* Anchor
=========*/

$('a[href^="#"]').click(function(){
  let fixed_offset = 100;
  let anchor = $(this).attr('href');
  $('html, body').animate({
  scrollTop:  $(anchor).offset().top - fixed_offset
  }, 200);
});

/* Burger
=========*/

burger.addEventListener("click", () =>{
  headerMobile.classList.toggle("header-mobile_active");
})
