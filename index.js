import { deepCopy } from './modules/utils/deepCopy.js';
import { pluck } from './modules/utils/pluck.js';
import { concat } from './modules/utils/concat.js';
import { frequenciesBy } from './modules/utils/frequenciesBy.js';
import { groupBy } from './modules/utils/groupBy.js';
import { update } from './modules/utils/update.js';
import { nestedUpdate } from './modules/utils/nestedUpdate.js';
import { arrRmv } from './modules/utils/arrRmv.js';
import { objectSet1 } from './modules/utils/objectSet.js';

const main = () => {
  // deepCopy() test
  // const data1 = {
  //   a: '1',
  //   b: [1,2,3,4,5,6],
  //   c: {
  //     d: {
  //       e: 'max',
  //     },
  //   },
  //   f: 'falcon',
  //   g: [
  //     {
  //       h: {
  //         i: 'iron maiden',
  //       },
  //     },
  //     {
  //       j: ['Jeep', 'Dodge', 'RAM', 'Ford', 'Chevrolet'],
  //     },
  //   ],
  // };
  // const newData1 = JSON.parse(JSON.stringify(data1));
  // const newData2 = deepCopy(data1);
  // console.log(newData1);
  // console.log(newData2);
  // console.log(newData2.g);

  // test concat()
  // const arrs = [[1], [2], [3,4,5], [6]];
  // const flat = concat(arrs);
  // console.log(flat);

  // test groupBy()
  // const groups = groupBy([1,2,3,4,5,6,7,8,9,10], (num) => num % 2 === 0);
  // console.log(groups);

  // test arrRmv()
  // const a = [1,2,3,4,5];
  // const newArrR = arrRmv(a, 0);
  // console.log(newArrR);


  ////////////////////////////////// MAIN "ONLINE STORE" EXAMPLE /////////////////////////////////////////////

  // Shopping data

  const products = [
    {
      id: 1,
      name: 'T-shirt',
      quantity: 5,
      type: 'clothes',
    },
    {
      id: 2,
      name: 'guitar',
      quantity: 1,
      type: 'music',
    },
    {
      id: 3,
      name: 'smartphone',
      quantity: 0,
      type: 'electronics',
    },
    {
      id: 4,
      name: 'St. Anger cassette',
      quantity: 3,
      type: 'music',
    }
  ];
  
  const cart = {
    shirt: {
      name: 'shirt',
      price: 15,
      options: {
        color: 'blue',
        size: 3,
      },
      quantity: 1,
    },
  };

  // Features

  const addItem = (cart,item) => {
    return objectSet1(cart, item.name, item);
  };

  const removeItemByName = (cart, name) => {
    return objectDel(cart, name);
  };

  const priceLookup = () => {
    return Math.floor(Math.random() * 100);
  }

  const setFieldByName = (cart, name, field, value) => {
    const item = cart[name];
    const newItem  = objectSet1(item, field, value);
    const newCart = objectSet1(cart, name, newItem);
    return newCart;
  }

  const addOne = (cart, item) => {
    if (!cart[item]) {
      return addItem(cart, { name: item, quantity: 1, price: priceLookup() });
    } else {
      const quantity = cart[item].quantity || 1;
      return setFieldByName(cart, item, 'quantity', quantity + 1);
    }
  };

  const removeOne = (cart, item) => {
    if (!cart[item]) return cart;
    else {
      const quantity = cart[item].quantity || 1;
      if (quantity === 1) {
        return removeItemByName(cart, item);
      } else {
        return setFieldByName(cart, item, 'quantity', quantity - 1);
      }
    }
  };
    
  // Working
  const itemOps = [
    ['add', 'shoes'],
    ['remove', 'shirt'],
    ['add', 'pants'],
    ['add', 'T-shirt'],
    ['add', 'sunglasses'],
  ];


  const shoppingCart = itemOps.reduce((cart, itemOp) => {
    const op = itemOp.at(0);
    const item = itemOp.at(1);

    if (op === 'add') return addOne(cart, item);
    if (op === 'remove') return removeOne(cart, item);
  }, {});

  const itemsAdded = Object.keys(cart);
  console.log('items added to cart: ', itemsAdded);
  console.log(shoppingCart);
  console.log('items added to cart: ', Object.keys(shoppingCart));

  // Tests
  const names = pluck(products, 'name');
  // console.log(names);

  const total = frequenciesBy(products, (p) => p.type);
  // console.log(total['music']);

  products[3] = update(products[3], 'quantity', (value) => value += 7);
  // console.log(products);

  // const cartTest = nestedUpdate(cart, ['shirt', 'options', 'size'], (value) => {
  //   return 1000;
  // });
  // console.log(cartTest);
};
main();