import { deepCopy } from './modules/utils/deepCopy.js';
import { pluck } from './modules/utils/pluck.js';
import { concat } from './modules/utils/concat.js';
import { frequenciesBy } from './modules/utils/frequenciesBy.js';
import { groupBy } from './modules/utils/groupBy.js';
import { update } from './modules/utils/update.js';
import { nestedUpdate } from './modules/utils/nestedUpdate.js';
import { arrRmv } from './modules/utils/arrRmv.js';

const main = () => {
  const data1 = {
    a: '1',
    b: [1,2,3,4,5,6],
    c: {
      d: {
        e: 'max',
      },
    },
    f: 'falcon',
    g: [
      {
        h: {
          i: 'iron maiden',
        },
      },
      {
        j: ['Jeep', 'Dodge', 'RAM', 'Ford', 'Chevrolet'],
      },
    ],
  };
  const newData1 = JSON.parse(JSON.stringify(data1));
  const newData2 = deepCopy(data1);
  // console.log(newData1);
  // console.log(newData2);
  // console.log(newData2.g);

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
  const names = pluck(products, 'name');
  // console.log(names);
  
  const arrs = [[1], [2], [3,4,5], [6]];
  const flat = concat(arrs);
  // console.log(flat);

  const total = frequenciesBy(products, (p) => p.type);
  // console.log(total['music']);

  const groups = groupBy([1,2,3,4,5,6,7,8,9,10], (num) => num % 2 === 0);
  // console.log(groups);

  products[3] = update(products[3], 'quantity', (value) => value += 7);
  // console.log(products);

  const cart = {
    shirt: {
      name: 'shirt',
      price: 15,
      options: {
        color: 'blue',
        size: 3,
      },
    },
  };
  const test = nestedUpdate(cart, ['shirt', 'options', 'size'], (value) => {
    return 1000;
  });
  // console.log(test);

  const a = [1,2,3,4,5];
  const newArrR = arrRmv(a, 0);
  console.log(newArrR);
};
main();