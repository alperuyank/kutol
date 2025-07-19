window.addEventListener('load', function () {

  const menuTriggers = document.querySelectorAll('#mainmenu .menu-item-has-children > span');

  menuTriggers.forEach(span => {
    span.addEventListener('click', function (e) {
      e.preventDefault();

      this.classList.toggle('active');
      
      const subMenu = this.nextElementSibling;
      if (subMenu && subMenu.tagName === 'UL') {

        if (subMenu.style.maxHeight) {
          subMenu.style.maxHeight = null;
        } else {
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
      }
    });
  });

  const header = document.querySelector('header.header-mobile');
  
  window.addEventListener('scroll', function () {
    let navbar = document.getElementById('navbarCustom');
    if (!navbar) return;

    let menuItems = navbar.getElementsByClassName('menu-item');
    let btnMain = document.querySelectorAll('.btn-main');
    let hamburger = document.querySelector('#menu-btn');
    let primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();

    if (window.scrollY > 50) {
      if(header) header.classList.add('header-light'); 

      navbar.style.backgroundColor = 'white';
      for (let item of menuItems) { item.style.color = primaryColor; }

      btnMain.forEach(function (button) {
        button.style.backgroundColor = 'white';
        button.style.color = primaryColor;
        button.style.border = '1px solid ' + primaryColor;
        button.onmouseover = function () { this.style.backgroundColor = primaryColor; this.style.color = 'white';};
        button.onmouseout = function () { this.style.backgroundColor = 'white'; this.style.color = primaryColor; };
      });

      if (hamburger) {
        hamburger.style.color = primaryColor;
        hamburger.onmouseover = function () { this.style.color = 'white'; this.style.backgroundColor = primaryColor; this.style.borderRadius = '50%'; };
        hamburger.onmouseout = function () { this.style.color = primaryColor; this.style.backgroundColor = 'transparent'; this.style.borderRadius = '0'; };
      }

    } else {
      if(header) header.classList.remove('header-light'); 
      
      navbar.style.backgroundColor = primaryColor;

      for (let item of menuItems) {
        const isAltMenuItem = item.closest('li')?.closest('li');
        
        if (isAltMenuItem) {
          if (item.tagName === 'A') {
            item.style.color = '';
          } else {
            item.style.color = 'white';
          }
        } else {
          item.style.color = 'white';
        }
      }

      btnMain.forEach(function (button) {
        button.style.backgroundColor = primaryColor;
        button.style.color = 'white';
        button.style.border = 'none';
        button.onmouseover = function () { this.style.backgroundColor = 'white'; this.style.color = primaryColor; };
        button.onmouseout = function () { this.style.backgroundColor = primaryColor; this.style.color = 'white'; };
      });

      if (hamburger) {
        hamburger.style.color = 'white';
        hamburger.onmouseover = function () { this.style.color = primaryColor; this.style.backgroundColor = 'white'; this.style.borderRadius = '50%'; };
        hamburger.onmouseout = function () { this.style.color = 'white'; this.style.backgroundColor = 'transparent'; this.style.borderRadius = '0'; };
      }
    }
  });

});

const products = [
  // Box kategorisi - 30 ürün
  {
    id: 1,
    category: 'box',
    image: 'kutol-box.png',
    alt: 'Ofset Baskılı Kutu 1',
    title: 'Ofset Baskılı Kutu 1',
  },
  {
    id: 2,
    category: 'box',
    image: 'kutol-box-2.png',
    alt: 'Ofset Baskılı Kutu 2',
    title: 'Ofset Baskılı Kutu 2',
  },
  {
    id: 3,
    category: 'box',
    image: 'kutol-box-3.png',
    alt: 'Ofset Baskılı Kutu 3',
    title: 'Ofset Baskılı Kutu 3',
  },
  {
    id: 4,
    category: 'box',
    image: 'kutol-box-4.png',
    alt: 'Ofset Baskılı Kutu 4',
    title: 'Ofset Baskılı Kutu 4',
  },
  {
    id: 5,
    category: 'box',
    image: 'kutol-box-5.png',
    alt: 'Ofset Baskılı Kutu 5',
    title: 'Ofset Baskılı Kutu 5',
  },
  {
    id: 6,
    category: 'box',
    image: 'kutol-box-6.png',
    alt: 'Ofset Baskılı Kutu 6',
    title: 'Ofset Baskılı Kutu 6',
  },
  {
    id: 7,
    category: 'box',
    image: 'kutol-box-7.png',
    alt: 'Ofset Baskılı Kutu 7',
    title: 'Ofset Baskılı Kutu 7',
  },
  {
    id: 8,
    category: 'box',
    image: 'kutol-box-8.png',
    alt: 'Ofset Baskılı Kutu 8',
    title: 'Ofset Baskılı Kutu 8',
  },
  {
    id: 9,
    category: 'box',
    image: 'kutol-box-9.png',
    alt: 'Ofset Baskılı Kutu 9',
    title: 'Ofset Baskılı Kutu 9',
  },
  {
    id: 10,
    category: 'box',
    image: 'kutol-box-10.png',
    alt: 'Ofset Baskılı Kutu 10',
    title: 'Ofset Baskılı Kutu 10',
  },
  {
    id: 11,
    category: 'box',
    image: 'kutol-box-11.png',
    alt: 'Ofset Baskılı Kutu 11',
    title: 'Ofset Baskılı Kutu 11',
  },
  {
    id: 12,
    category: 'box',
    image: 'kutol-box-12.png',
    alt: 'Ofset Baskılı Kutu 12',
    title: 'Ofset Baskılı Kutu 12',
  },
  {
    id: 13,
    category: 'box',
    image: 'kutol-box-13.png',
    alt: 'Ofset Baskılı Kutu 13',
    title: 'Ofset Baskılı Kutu 13',
  },
  {
    id: 14,
    category: 'box',
    image: 'kutol-box-14.png',
    alt: 'Ofset Baskılı Kutu 14',
    title: 'Ofset Baskılı Kutu 14',
  },
  {
    id: 15,
    category: 'box',
    image: 'kutol-box-15.png',
    alt: 'Ofset Baskılı Kutu 15',
    title: 'Ofset Baskılı Kutu 15',
  },
  {
    id: 16,
    category: 'box',
    image: 'kutol-box-16.png',
    alt: 'Ofset Baskılı Kutu 16',
    title: 'Ofset Baskılı Kutu 16',
  },
  {
    id: 17,
    category: 'box',
    image: 'kutol-box-17.png',
    alt: 'Ofset Baskılı Kutu 17',
    title: 'Ofset Baskılı Kutu 17',
  },
  {
    id: 18,
    category: 'box',
    image: 'kutol-box-18.png',
    alt: 'Ofset Baskılı Kutu 18',
    title: 'Ofset Baskılı Kutu 18',
  },
  {
    id: 19,
    category: 'box',
    image: 'kutol-box-19.png',
    alt: 'Ofset Baskılı Kutu 19',
    title: 'Ofset Baskılı Kutu 19',
  },
  {
    id: 20,
    category: 'box',
    image: 'kutol-box-20.png',
    alt: 'Ofset Baskılı Kutu 20',
    title: 'Ofset Baskılı Kutu 20',
  },
  {
    id: 21,
    category: 'box',
    image: 'kutol-box-21.png',
    alt: 'Ofset Baskılı Kutu 21',
    title: 'Ofset Baskılı Kutu 21',
  },
  {
    id: 22,
    category: 'box',
    image: 'kutol-box-22.png',
    alt: 'Ofset Baskılı Kutu 22',
    title: 'Ofset Baskılı Kutu 22',
  },
  {
    id: 23,
    category: 'box',
    image: 'kutol-box-23.png',
    alt: 'Ofset Baskılı Kutu 23',
    title: 'Ofset Baskılı Kutu 23',
  },
  {
    id: 24,
    category: 'box',
    image: 'kutol-box-24.png',
    alt: 'Ofset Baskılı Kutu 24',
    title: 'Ofset Baskılı Kutu 24',
  },
  {
    id: 25,
    category: 'box',
    image: 'kutol-box-25.png',
    alt: 'Ofset Baskılı Kutu 25',
    title: 'Ofset Baskılı Kutu 25',
  },
  {
    id: 26,
    category: 'box',
    image: 'kutol-box-26.png',
    alt: 'Ofset Baskılı Kutu 26',
    title: 'Ofset Baskılı Kutu 26',
  },
  {
    id: 27,
    category: 'box',
    image: 'kutol-box-27.png',
    alt: 'Ofset Baskılı Kutu 27',
    title: 'Ofset Baskılı Kutu 27',
  },
  {
    id: 28,
    category: 'box',
    image: 'kutol-box-28.png',
    alt: 'Ofset Baskılı Kutu 28',
    title: 'Ofset Baskılı Kutu 28',
  },
  {
    id: 29,
    category: 'box',
    image: 'kutol-box-29.png',
    alt: 'Ofset Baskılı Kutu 29',
    title: 'Ofset Baskılı Kutu 29',
  },
  {
    id: 30,
    category: 'box',
    image: 'kutol-box-30.png',
    alt: 'Ofset Baskılı Kutu 30',
    title: 'Ofset Baskılı Kutu 30',
  },

  // Stand kategorisi - 15 ürün
  {
    id: 31,
    category: 'stand',
    image: 'kutol-stand.png',
    alt: 'Ofset Baskılı Karton Stand 1',
    title: 'Ofset Baskılı Karton Stand 1',
  },
  {
    id: 32,
    category: 'stand',
    image: 'kutol-stand-2.png',
    alt: 'Ofset Baskılı Karton Stand 2',
    title: 'Ofset Baskılı Karton Stand 2',
  },
  {
    id: 33,
    category: 'stand',
    image: 'kutol-stand-3.png',
    alt: 'Ofset Baskılı Karton Stand 3',
    title: 'Ofset Baskılı Karton Stand 3',
  },
  {
    id: 34,
    category: 'stand',
    image: 'kutol-stand-4.png',
    alt: 'Ofset Baskılı Karton Stand 4',
    title: 'Ofset Baskılı Karton Stand 4',
  },
  {
    id: 35,
    category: 'stand',
    image: 'kutol-stand-5.png',
    alt: 'Ofset Baskılı Karton Stand 5',
    title: 'Ofset Baskılı Karton Stand 5',
  },
  {
    id: 36,
    category: 'stand',
    image: 'kutol-stand-6.png',
    alt: 'Ofset Baskılı Karton Stand 6',
    title: 'Ofset Baskılı Karton Stand 6',
  },
  {
    id: 37,
    category: 'stand',
    image: 'kutol-stand-7.png',
    alt: 'Ofset Baskılı Karton Stand 7',
    title: 'Ofset Baskılı Karton Stand 7',
  },
  {
    id: 38,
    category: 'stand',
    image: 'kutol-stand-8.png',
    alt: 'Ofset Baskılı Karton Stand 8',
    title: 'Ofset Baskılı Karton Stand 8',
  },
  {
    id: 39,
    category: 'stand',
    image: 'kutol-stand-9.png',
    alt: 'Ofset Baskılı Karton Stand 9',
    title: 'Ofset Baskılı Karton Stand 9',
  },
  {
    id: 40,
    category: 'stand',
    image: 'kutol-stand-10.png',
    alt: 'Ofset Baskılı Karton Stand 10',
    title: 'Ofset Baskılı Karton Stand 10',
  },
  {
    id: 41,
    category: 'stand',
    image: 'kutol-stand-11.png',
    alt: 'Ofset Baskılı Karton Stand 11',
    title: 'Ofset Baskılı Karton Stand 11',
  },
  {
    id: 42,
    category: 'stand',
    image: 'kutol-stand-12.png',
    alt: 'Ofset Baskılı Karton Stand 12',
    title: 'Ofset Baskılı Karton Stand 12',
  },
  {
    id: 43,
    category: 'stand',
    image: 'kutol-stand-13.png',
    alt: 'Ofset Baskılı Karton Stand 13',
    title: 'Ofset Baskılı Karton Stand 13',
  },
  {
    id: 44,
    category: 'stand',
    image: 'kutol-stand-14.png',
    alt: 'Ofset Baskılı Karton Stand 14',
    title: 'Ofset Baskılı Karton Stand 14',
  },
  {
    id: 45,
    category: 'stand',
    image: 'kutol-stand-15.png',
    alt: 'Ofset Baskılı Karton Stand 15',
    title: 'Ofset Baskılı Karton Stand 15',
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  const filename = path.substring(path.lastIndexOf('/') + 1).split('.')[0]; 

  let category = '';
  if (filename === 'ofset-baskili-sivama-oluklu-mukavva-kutular') category = 'box';
  if (filename === 'ofset-baskili-sivama-oluklu-mukavva-standlar') category = 'stand';

  if (category) {
    renderProducts(category);
    updateSubheader(category);
  }
});


function renderProducts(category) {
  const container = document.getElementById('product-gallery');
  container.innerHTML = '';

  const filtered = products.filter((p) => p.category === category);

  filtered.forEach((p) => {
    const html = `
      <div class="col-lg-4 text-center product-img-wrapper">
        <a href="images/products/${p.image}" class="image-popup d-block hover" title="${p.title}">
          <div class="relative overflow-hidden rounded-10">
            <div class="absolute start-0 w-100 abs-middle fs-36 text-white text-center z-2">
              <h2 class="mb-0 hover-scale-in-3 font-bold" data-translate="product_view">İncele</h2>
            </div>
            <div class="absolute w-100 h-100 top-0 bg-dark hover-op-05"></div>
            <img src="images/products/${p.image}" class="img-fluid hover-scale-1-2" alt="${p.alt}" />
          </div>
        </a>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', html);
  });
}

const categoryInfo = {
  box: {
    title: 'Offset Baskılı Kutular',
    description:
      'Yüksek kaliteli ofset baskılı kutularımızla ürünlerinizi en iyi şekilde koruyup, markanızı yansıtıyoruz.',
  },
  stand: {
    title: 'Offset Baskılı Karton Standlar',
    description:
      'Dayanıklı ve estetik karton standlarımız ile ürün teşhirinizi güçlendiriyoruz.',
  },
};

function updateSubheader(category) {
  const titleEl = document.getElementById('category-title');
  const descEl = document.getElementById('category-description');

  if (categoryInfo[category]) {
    titleEl.textContent = categoryInfo[category].title;
    descEl.textContent = categoryInfo[category].description;
  } else {
    titleEl.textContent = 'Products';
    descEl.textContent = 'Explore our high quality products.';
  }
}
