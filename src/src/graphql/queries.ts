/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncBookmarkProducts = /* GraphQL */ `
  query SyncBookmarkProducts(
    $filter: ModelBookmarkProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBookmarkProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userSub
        quantity
        option
        productID
        product {
          id
          title
          author
          description
          image
          categoryTitle
          avgRating
          ratings
          categoryID
          countInStock
          price
          oldPrice
          options
          isSaved
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        isBookmarked
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getBookmarkProduct = /* GraphQL */ `
  query GetBookmarkProduct($id: ID!) {
    getBookmarkProduct(id: $id) {
      id
      userSub
      quantity
      option
      productID
      product {
        id
        title
        author
        description
        image
        categoryTitle
        avgRating
        ratings
        categoryID
        category {
          id
          title
          color
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Comments {
          nextToken
          startedAt
        }
        countInStock
        price
        oldPrice
        options
        isSaved
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      isBookmarked
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listBookmarkProducts = /* GraphQL */ `
  query ListBookmarkProducts(
    $filter: ModelBookmarkProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookmarkProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userSub
        quantity
        option
        productID
        product {
          id
          title
          author
          description
          image
          categoryTitle
          avgRating
          ratings
          categoryID
          countInStock
          price
          oldPrice
          options
          isSaved
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        isBookmarked
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCategories = /* GraphQL */ `
  query SyncCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        color
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      title
      color
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        color
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        email
        image
        sub
        firstName
        lastName
        phoneNumber
        address
        city
        Comments {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      image
      sub
      firstName
      lastName
      phoneNumber
      address
      city
      Comments {
        items {
          id
          comment
          likes
          dislikes
          replies
          productID
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        image
        sub
        firstName
        lastName
        phoneNumber
        address
        city
        Comments {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        author
        description
        image
        categoryTitle
        avgRating
        ratings
        categoryID
        category {
          id
          title
          color
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Comments {
          nextToken
          startedAt
        }
        countInStock
        price
        oldPrice
        options
        isSaved
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      title
      author
      description
      image
      categoryTitle
      avgRating
      ratings
      categoryID
      category {
        id
        title
        color
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      Comments {
        items {
          id
          comment
          likes
          dislikes
          replies
          productID
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      countInStock
      price
      oldPrice
      options
      isSaved
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        author
        description
        image
        categoryTitle
        avgRating
        ratings
        categoryID
        category {
          id
          title
          color
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Comments {
          nextToken
          startedAt
        }
        countInStock
        price
        oldPrice
        options
        isSaved
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        comment
        likes
        dislikes
        replies
        productID
        User {
          id
          username
          email
          image
          sub
          firstName
          lastName
          phoneNumber
          address
          city
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Product {
          id
          title
          author
          description
          image
          categoryTitle
          avgRating
          ratings
          categoryID
          countInStock
          price
          oldPrice
          options
          isSaved
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      comment
      likes
      dislikes
      replies
      productID
      User {
        id
        username
        email
        image
        sub
        firstName
        lastName
        phoneNumber
        address
        city
        Comments {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      Product {
        id
        title
        author
        description
        image
        categoryTitle
        avgRating
        ratings
        categoryID
        category {
          id
          title
          color
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Comments {
          nextToken
          startedAt
        }
        countInStock
        price
        oldPrice
        options
        isSaved
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        comment
        likes
        dislikes
        replies
        productID
        User {
          id
          username
          email
          image
          sub
          firstName
          lastName
          phoneNumber
          address
          city
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Product {
          id
          title
          author
          description
          image
          categoryTitle
          avgRating
          ratings
          categoryID
          countInStock
          price
          oldPrice
          options
          isSaved
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCartProducts = /* GraphQL */ `
  query SyncCartProducts(
    $filter: ModelCartProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCartProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userSub
        quantity
        option
        productID
        product {
          id
          title
          author
          description
          image
          categoryTitle
          avgRating
          ratings
          categoryID
          countInStock
          price
          oldPrice
          options
          isSaved
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCartProduct = /* GraphQL */ `
  query GetCartProduct($id: ID!) {
    getCartProduct(id: $id) {
      id
      userSub
      quantity
      option
      productID
      product {
        id
        title
        author
        description
        image
        categoryTitle
        avgRating
        ratings
        categoryID
        category {
          id
          title
          color
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Comments {
          nextToken
          startedAt
        }
        countInStock
        price
        oldPrice
        options
        isSaved
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listCartProducts = /* GraphQL */ `
  query ListCartProducts(
    $filter: ModelCartProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCartProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userSub
        quantity
        option
        productID
        product {
          id
          title
          author
          description
          image
          categoryTitle
          avgRating
          ratings
          categoryID
          countInStock
          price
          oldPrice
          options
          isSaved
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOrderProducts = /* GraphQL */ `
  query SyncOrderProducts(
    $filter: ModelOrderProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrderProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        quantity
        option
        productID
        product {
          id
          title
          author
          description
          image
          categoryTitle
          avgRating
          ratings
          categoryID
          countInStock
          price
          oldPrice
          options
          isSaved
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        orderID
        order {
          id
          userSub
          fullName
          phoneNumber
          country
          city
          address
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userSub
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getOrderProduct = /* GraphQL */ `
  query GetOrderProduct($id: ID!) {
    getOrderProduct(id: $id) {
      id
      quantity
      option
      productID
      product {
        id
        title
        author
        description
        image
        categoryTitle
        avgRating
        ratings
        categoryID
        category {
          id
          title
          color
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Comments {
          nextToken
          startedAt
        }
        countInStock
        price
        oldPrice
        options
        isSaved
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      orderID
      order {
        id
        userSub
        fullName
        phoneNumber
        country
        city
        address
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      userSub
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listOrderProducts = /* GraphQL */ `
  query ListOrderProducts(
    $filter: ModelOrderProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        quantity
        option
        productID
        product {
          id
          title
          author
          description
          image
          categoryTitle
          avgRating
          ratings
          categoryID
          countInStock
          price
          oldPrice
          options
          isSaved
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        orderID
        order {
          id
          userSub
          fullName
          phoneNumber
          country
          city
          address
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        userSub
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userSub
        fullName
        phoneNumber
        country
        city
        address
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      userSub
      fullName
      phoneNumber
      country
      city
      address
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userSub
        fullName
        phoneNumber
        country
        city
        address
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
