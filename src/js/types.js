export let typesData = [
  {title: 'Ремонт смартфонов', link: 'https://www.youtube.com/watch?v=E4WlUXrJgy4'},
  {title: 'Ремонт электромобилей', link: 'https://www.youtube.com/watch?v=E4WlUXrJgy4'},
  {title: 'Ремонт переферии', link: 'https://www.youtube.com/watch?v=E4WlUXrJgy4'},
  {title: 'Ремонт чехлов', link: 'https://www.youtube.com/watch?v=E4WlUXrJgy4'},
  {title: 'Ремонт ремонта', link: 'https://www.youtube.com/watch?v=E4WlUXrJgy4'},
]

function typesSwiperInit() {
    new Swiper('.type-list', {
        direction: 'horizontal',
        clickable: true,
        spaceBetween: 20,
        slidesPerView: 1,
        slidesPerGroup: 1,
        
        width: 224,
        height: 160,

        pagination: {
          el: '.type-list__pagination',
        },
        observer: true,
    });
}

let typeItemTemplate = document.querySelector('.type-item-template').content;
let typeListWrapper = document.querySelector('.type-list__wrapper');

function makeTypeItem(typeData) {
    let typeItem = typeItemTemplate.cloneNode(true).querySelector('.type-item');
    let typeItemButton = typeItem.querySelector('.arrow-button');
    typeItemButton.href = typeData.link;
    
    let typeItemTitle = typeItem.querySelector('.type-item__title');
    typeItemTitle.textContent = typeData.title;
    typeListWrapper.appendChild(typeItem);
    return typeItem;
}

function showMoreInit(mod) {
  let showMore = document.querySelector('.types__show-more');
  let addicionalTypeItems = [];
  
  if(mod === 1) {
    let lastTypeItem = document.querySelector('.type-item:last-child');
    addicionalTypeItems.push(lastTypeItem);
    
    let typeItemButton = lastTypeItem.querySelector('.arrow-button');
    let typeItemTitle = lastTypeItem.querySelector('.type-item__title');
    typesData.unshift({title: typeItemTitle.textContent, link: typeItemButton.href});
    lastTypeItem.remove();
  }

  showMore.addEventListener('click', function () {
      if (showMore.textContent === 'Показать все') {
          for (let i = 0; i < typesData.length; i++) {
              addicionalTypeItems.push(makeTypeItem(typesData[i]));
          }
          showMore.textContent = 'Скрыть';
        }
        else {
          while (addicionalTypeItems.length > 0) {
            addicionalTypeItems.pop().remove();
          }
          showMore.textContent = 'Показать все';
        }
      });
}

export {typesSwiperInit, showMoreInit}