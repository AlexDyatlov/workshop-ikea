import { getData } from './getData.js'

const cartList = [
  {
    id: 'idd053',
    count: 3
  },
  {
    id: 'idd024',
    count: 1
  },
  {
    id: 'idd064',
    count: 4
  }
];

export const loadData = () => {

  if (location.hash) {
    getData.item(location.hash.substring(1), (data) => console.log(data));
  }

  if (location.pathname.includes('cart')) {
    getData.cart(cartList, (data) => console.log(data));
  }

  // getData.catalog((data) => console.log(data));
  // getData.subCatalog("Декор", (data) => console.log(data));

};
