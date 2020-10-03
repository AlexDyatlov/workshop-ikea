import { getData } from './getData.js'
import generateSubCatalog from './generateSubCatalog.js';

export const catalog = () => {
    const updateSubCatalog = generateSubCatalog();
    const btnBurger = document.querySelector('.btn-burger');
    const catalog = document.querySelector('.catalog');
    const subCatalog = document.querySelector('.subcatalog');
    const subCatalogHeader = document.querySelector('.subcatalog-header');
    const btnReturn = document.querySelector('.btn-return');
    const overlay = document.createElement('div');
    
    overlay.classList.add('overlay');
    document.body.insertAdjacentElement('beforeend', overlay);
    
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
    
    // отркываем сабменю (работа с объектом события)
    const handlerCatalog = e => {
      e.preventDefault();
      const target = e.target;
      const itemList = target.closest('.catalog-list__item');
      if (itemList) {
          getData.subCatalog(target.textContent, (data) => {

            updateSubCatalog(target.textContent, data)
            subCatalog.classList.add('subopen');

          })
      };

      if (e.target.closest('.btn-close')) {
        closeMenu();
      }
    };
    // отркываем сабменю (работа с объектом события)
    
    // закрываем сабменю
    const closeSubMenu = () => {
      subCatalog.classList.remove('subopen');
    }
    // закрываем сабменю
    
    
    
    // вызов функций
    btnBurger.addEventListener('click', openMenu);
    overlay.addEventListener('click', closeMenu);
    catalog.addEventListener('click', handlerCatalog);
    subCatalog.addEventListener('click', e => {
      const btnReturn = e.target.closest('.btn-return');

      if (btnBurger) closeSubMenu();
    })
    // вызов функций
    
    
    // закрытие меню по клавише 
    document.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        closeMenu();
      };
    })
    // закрытие меню по клавише 
};
