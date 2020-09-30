// part 1
const btnBurger = document.querySelector('.btn-burger');
const catalog = document.querySelector('.catalog');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.btn-close');
const subCatalog = document.querySelector('.subcatalog');
const subCatalogHeader = document.querySelector('.subcatalog-header');
const btnReturn = document.querySelector('.btn-return');


// отркываем меню
const openMenu = () => {
  catalog.classList.add('open');
  overlay.classList.add('active');
}
// отркываем меню

// закрываем меню
const closeMenu = () => {
  catalog.classList.remove('open');
  overlay.classList.remove('active');
  closeSubMenu();
}
// закрываем меню

// отркываем сабменю (работа с объектом сабытия)
const opneSubMenu = e => {
  e.preventDefault();
  const itemList = e.target.closest('.catalog-list__item');
  if (itemList) {
      subCatalogHeader.innerHTML = itemList.innerHTML;
    subCatalog.classList.add('subopen');
  }
};
// отркываем сабменю (работа с объектом сабытия)

// закрываем сабменю
const closeSubMenu = () => {
  subCatalog.classList.remove('subopen');
}
// закрываем сабменю



// вызов функций
btnBurger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
catalog.addEventListener('click', opneSubMenu);
btnReturn.addEventListener('click', closeSubMenu);
// вызов функций


// закрытие меню по клавише 
document.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    closeMenu();
  };
})
// закрытие меню по клавише 