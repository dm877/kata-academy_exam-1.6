import { typeListWrapper, typesData, makeTypeItem } from "./types";

function showMoreInit() {
  let showMore = document.querySelector('.types__show-more');
  let addicionalTypeItems = [];

  document.querySelector('.type-list').classList.remove('swiper');

  showMore.addEventListener('click', function () {
    if (showMore.textContent === 'Показать все') {
      for (let i = typeListWrapper.children.length - 1; i < typesData.length; i++) {
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
