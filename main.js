$('.tariffs__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: $('.slider__control-prev'),
  nextArrow: $('.slider__control-next'),
});



(function () {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

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
