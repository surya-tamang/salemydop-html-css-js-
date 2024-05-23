let header = document.querySelector('header');

window.addEventListener('scroll', () => {
  scrollY > 50 ? header.classList.add('bgChange') : header.classList.remove('bgChange');
})

/************************************************
***************** swiper scripting *****************
**************************************************/

document.addEventListener('DOMContentLoaded', function () {
  var Accessories = [
    { image: '/images/earRing.jpg', name: 'Ear Ring - White', discountPrice: 'Rs 150', originalPrice: 'Rs 250' },
    { image: '/images/earRing.jpg', name: 'Ear Ring - White', discountPrice: 'Rs 150', originalPrice: 'Rs 250' },
    { image: '/images/earRing.jpg', name: 'Ear Ring - White', discountPrice: 'Rs 150', originalPrice: 'Rs 250' },
    { image: '/images/earRing.jpg', name: 'Ear Ring - White', discountPrice: 'Rs 150', originalPrice: 'Rs 250' },
    { image: '/images/earRing.jpg', name: 'Ear Ring - White', discountPrice: 'Rs 150', originalPrice: 'Rs 250' },
    { image: '/images/earRing.jpg', name: 'Ear Ring - White', discountPrice: 'Rs 150', originalPrice: 'Rs 250' },
    { image: '/images/earRing.jpg', name: 'Ear Ring - White', discountPrice: 'Rs 150', originalPrice: 'Rs 250' },
    { image: '/images/earRing.jpg', name: 'Ear Ring - White', discountPrice: 'Rs 150', originalPrice: 'Rs 250' },
    { image: '/images/earRing.jpg', name: 'Ear Ring - White', discountPrice: 'Rs 150', originalPrice: 'Rs 250' }
  ];
  var Fashion = [
    { image: '/images/cloth.jpg', name: 'Black crop-tops', discountPrice: 'Rs 1500', originalPrice: 'Rs 2000' },
    { image: '/images/cloth.jpg', name: 'Black crop-tops', discountPrice: 'Rs 1500', originalPrice: 'Rs 2000' },
    { image: '/images/cloth.jpg', name: 'Black crop-tops', discountPrice: 'Rs 1500', originalPrice: 'Rs 2000' },
    { image: '/images/cloth.jpg', name: 'Black crop-tops', discountPrice: 'Rs 1500', originalPrice: 'Rs 2000' },
    { image: '/images/cloth.jpg', name: 'Black crop-tops', discountPrice: 'Rs 1500', originalPrice: 'Rs 2000' },
    { image: '/images/cloth.jpg', name: 'Black crop-tops', discountPrice: 'Rs 1500', originalPrice: 'Rs 2000' },
    { image: '/images/cloth.jpg', name: 'Black crop-tops', discountPrice: 'Rs 1500', originalPrice: 'Rs 2000' },
    { image: '/images/cloth.jpg', name: 'Black crop-tops', discountPrice: 'Rs 1500', originalPrice: 'Rs 2000' },
    { image: '/images/cloth.jpg', name: 'Black crop-tops', discountPrice: 'Rs 1500', originalPrice: 'Rs 2000' }
  ];

  var Appliance = [
    { image: '/images/ac.jpg', name: 'Ac - Konka', discountPrice: 'Rs 20000' },
    { image: '/images/ac.jpg', name: 'Ac - Konka', discountPrice: 'Rs 20000' },
    { image: '/images/ac.jpg', name: 'Ac - Konka', discountPrice: 'Rs 20000' },
    { image: '/images/ac.jpg', name: 'Ac - Konka', discountPrice: 'Rs 20000' },
    { image: '/images/ac.jpg', name: 'Ac - Konka', discountPrice: 'Rs 20000' },
    { image: '/images/ac.jpg', name: 'Ac - Konka', discountPrice: 'Rs 20000' },
    { image: '/images/ac.jpg', name: 'Ac - Konka', originalPrice: 'Rs 20000' },
    { image: '/images/ac.jpg', name: 'Ac - Konka', discountPrice: 'Rs 20000' },
    { image: '/images/ac.jpg', name: 'Ac - Konka', discountPrice: 'Rs 20000' }
  ]

  var Brand = [
    { image: '/images/lotus.png', name: 'Lotus' },
    { image: '/images/lotus.png', name: 'Lotus' },
    { image: '/images/lotus.png', name: 'Lotus' },
    { image: '/images/lotus.png', name: 'Lotus' },
    { image: '/images/lotus.png', name: 'Lotus' },
    { image: '/images/lotus.png', name: 'Lotus' },
    { image: '/images/lotus.png', name: 'Lotus' },
    { image: '/images/lotus.png', name: 'Lotus' },
    { image: '/images/lotus.png', name: 'Lotus' }
  ]

  var accessoriesWrapper = document.getElementById('accessories-wrapper');
  var fashionWrapper = document.getElementById('fashion-wrapper');
  var applianceWrapper = document.getElementById('appliance-wrapper');
  var brandWrapper = document.getElementById('brand-wrapper');

  var generateSlides = function (data, wrapper) {
    var slidesHtml = '';

    data.forEach(function (slide) {
      slidesHtml += `
                <div class="swiper-slide">
                    <img src="${slide.image}" alt="${slide.name}">
                    <div class="description">
                        <h4>${slide.name}</h4>`;

      if (slide.discountPrice) {
        slidesHtml += `
                                  <div class="price">
                                      <p class="discount">${slide.discountPrice}</p>
                                      ${slide.originalPrice ? `<p class="original"><del>${slide.originalPrice}</del></p>` : ''}
                                  </div>`;
      } else if (slide.originalPrice) {
        slidesHtml += `
                                  <div class="price">
                                      <p class="original">${slide.originalPrice}</p>
                                  </div>`;
      }

      slidesHtml += `
                    </div>
                </div>`;
    });

    wrapper.innerHTML = slidesHtml;
  };

  generateSlides(Accessories, accessoriesWrapper);
  generateSlides(Fashion, fashionWrapper);
  generateSlides(Appliance, applianceWrapper);
  generateSlides(Brand, brandWrapper);

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 7000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@1.0": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.6": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.8": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.9": {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
    loop: true
  });
});


/************************************************
***************** hamburger scripting *****************
**************************************************/

let openBtn = document.querySelector('#menu');
let closeBtn = document.querySelector('#close');

let navBar = document.querySelector('nav');

openBtn.addEventListener('click', () => {
  navBar.style.right = "0";
  closeBtn.style.display = "block";
  openBtn.style.display = "none"
})
closeBtn.addEventListener('click', () => {
  navBar.style.right = "-100%";
  closeBtn.style.display = "none";
  openBtn.style.display = "block"
})