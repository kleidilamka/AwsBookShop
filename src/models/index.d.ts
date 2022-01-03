import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type BookmarkProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CartProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class BookmarkProduct {
  readonly id: string;
  readonly userSub?: string;
  readonly quantity?: number;
  readonly option?: string;
  readonly Product?: Product;
  readonly isBookmarked?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly bookmarkProductProductId?: string;
  constructor(init: ModelInit<BookmarkProduct, BookmarkProductMetaData>);
  static copyOf(source: BookmarkProduct, mutator: (draft: MutableModel<BookmarkProduct, BookmarkProductMetaData>) => MutableModel<BookmarkProduct, BookmarkProductMetaData> | void): BookmarkProduct;
}

export declare class Product {
  readonly id: string;
  readonly title?: string;
  readonly description?: string;
  readonly Category?: Category;
  readonly image?: string;
  readonly author?: string;
  readonly avgRating?: number;
  readonly ratings?: number;
  readonly countInStock?: number;
  readonly price?: number;
  readonly oldPrice?: number;
  readonly inBookmarks?: boolean;
  readonly inCart?: boolean;
  readonly Comments?: (Comment | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly productCategoryId?: string;
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

export declare class Category {
  readonly id: string;
  readonly title?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Category, CategoryMetaData>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category, CategoryMetaData>) => MutableModel<Category, CategoryMetaData> | void): Category;
}

export declare class Comment {
  readonly id: string;
  readonly comment?: string;
  readonly likes?: number;
  readonly dislikes?: number;
  readonly productID?: string;
  readonly userID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Comment, CommentMetaData>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}

export declare class CartProduct {
  readonly id: string;
  readonly userSub?: string;
  readonly quantity?: number;
  readonly option?: string;
  readonly Product?: Product;
  readonly inCart?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly cartProductProductId?: string;
  constructor(init: ModelInit<CartProduct, CartProductMetaData>);
  static copyOf(source: CartProduct, mutator: (draft: MutableModel<CartProduct, CartProductMetaData>) => MutableModel<CartProduct, CartProductMetaData> | void): CartProduct;
}

export declare class User {
  readonly id: string;
  readonly Comments?: (Comment | null)[];
  readonly username?: string;
  readonly email?: string;
  readonly image?: string;
  readonly sub?: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly phoneNumber?: string;
  readonly address?: string;
  readonly city?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class OrderProduct {
  readonly id: string;
  readonly quantity?: string;
  readonly option?: string;
  readonly Order?: Order;
  readonly Product?: Product;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  readonly orderProductOrderId?: string;
  readonly orderProductProductId?: string;
  constructor(init: ModelInit<OrderProduct, OrderProductMetaData>);
  static copyOf(source: OrderProduct, mutator: (draft: MutableModel<OrderProduct, OrderProductMetaData>) => MutableModel<OrderProduct, OrderProductMetaData> | void): OrderProduct;
}

export declare class Order {
  readonly id: string;
  readonly userSub?: string;
  readonly fullName?: string;
  readonly phoneNumber?: string;
  readonly country?: string;
  readonly city?: string;
  readonly address?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Order, OrderMetaData>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}