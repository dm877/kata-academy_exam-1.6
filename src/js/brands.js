let brandsData = [
    { title: 'Lenovo', link: '#', imageUrl: './img/brands/lenovo.svg'},
    { title: 'Sony', link: '#', imageUrl: './img/brands/sony.svg'},
    { title: 'Apple', link: '#', imageUrl: './img/brands/apple.svg'},
    { title: 'Acer', link: '#', imageUrl: './img/brands/acer.svg'},
    { title: 'ViewSonic', link: '#', imageUrl: './img/brands/view-sonic.svg'},
    { title: 'HP', link: '#', imageUrl: './img/brands/hp.svg'},
    { title: 'Samsung', link: '#', imageUrl: './img/brands/samsung.svg'},
    { title: 'Bosch', link: '#', imageUrl: './img/brands/bosch.svg'},
    { title: 'Xiaomi', link: '#', imageUrl: './img/brands/xiaomi.svg'},
    { title: 'Nokia', link: '#', imageUrl: './img/brands/nokia.svg'},
    { title: 'Huawei', link: '#', imageUrl: './img/brands/huawei.svg'}
];

let brandItemTemplate = document.querySelector('.brand-item-template').content;
let brandListWrapper = document.querySelector('.brand-list__wrapper');


function mobileMod(brandItemCount) {
    new Swiper('.brand-list', {
    direction: 'horizontal',
    clickable: true,
    spaceBetween: 20,
    slidesPerView: 1,
    slidesPerGroup: 1,
    width: 224,

    pagination: {
      el: '.brand-list__pagination',
    },
    observer: true,
    });

    for (let i = 0; i < brandItemCount; i++) {
        makeBrandItem(brandsData[i], true);
    }    
}

function desktopMod(brandItemCount) {
    let showMore = document.querySelector('.brands__show-more');
    let additionalBrandItems = [];
    
    document.querySelector('.brand-list').classList.remove('swiper');

    showMore.addEventListener('click', function () {
        if (showMore.textContent === 'Показать все') {
            for (let i = brandListWrapper.children.length - 1; i < brandsData.length; i++) {
                additionalBrandItems.push(makeBrandItem(brandsData[i]));
            }
            showMore.textContent = 'Скрыть';
        }
        else {
            while (additionalBrandItems.length > 0) {
                additionalBrandItems.pop().remove();
            }
            showMore.textContent = 'Показать все';
        }
    });
    for (let i = 0; i < brandItemCount; i++) {
        makeBrandItem(brandsData[i], false);
    }
}

function makeBrandItem(brandData, isMobile) {
    let brandItem = brandItemTemplate.cloneNode(true).querySelector('.brand-item');
    let brandItemLogo = brandItem.querySelector('.brand-item__logo');
    brandItemLogo.src = brandData.imageUrl;
    brandItemLogo.alt = brandData.title;

    let brandItemButton = brandItem.querySelector('.arrow-button');
    brandItemButton.href = brandData.link;

    if(isMobile) {
        console.log(brandItem);
        brandListWrapper.appendChild(brandItem);
    }
    else {
        brandListWrapper.appendChild(brandItem);
    }
    return brandItem;
}

function renderBrands(mod) {
    if (mod === 1) { //desktop
        desktopMod(6);
    } else if (mod === 2) { //large desktop
        desktopMod(8);
    } else { //mobile
        mobileMod(9);
    }
}

export {renderBrands};