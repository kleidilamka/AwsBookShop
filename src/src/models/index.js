// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BookmarkProduct, Product, Category, Comment, User, CartProduct, OrderProduct, Order } = initSchema(schema);

export {
  BookmarkProduct,
  Product,
  Category,
  Comment,
  User,
  CartProduct,
  OrderProduct,
  Order
};