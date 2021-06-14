import Product from '../index';
// eslint-disable-next-line
export default [
  {
    component: Product,
    layout: 'public',
    path: '/:id?/:merchantCode?',
  },
];
