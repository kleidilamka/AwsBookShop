/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBookmarkProduct = /* GraphQL */ `
  mutation CreateBookmarkProduct(
    $input: CreateBookmarkProductInput!
    $condition: ModelBookmarkProductConditionInput
  ) {
    createBookmarkProduct(input: $input, condition: $condition) {
      id
      userSub
      quantity
      option
      productID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        title
        description
        image
        images
        options
        categoryTitle
        avgRating
        ratings
        categoryID
        countInStock
        price
        oldPrice
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        category {
          id
          title
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
      }
    }
  }
`;
export const updateBookmarkProduct = /* GraphQL */ `
  mutation UpdateBookmarkProduct(
    $input: UpdateBookmarkProductInput!
    $condition: ModelBookmarkProductConditionInput
  ) {
    updateBookmarkProduct(input: $input, condition: $condition) {
      id
      userSub
      quantity
      option
      productID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        title
        description
        image
        images
        options
        categoryTitle
        avgRating
        ratings
        categoryID
        countInStock
        price
        oldPrice
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        category {
          id
          title
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
      }
    }
  }
`;
export const deleteBookmarkProduct = /* GraphQL */ `
  mutation DeleteBookmarkProduct(
    $input: DeleteBookmarkProductInput!
    $condition: ModelBookmarkProductConditionInput
  ) {
    deleteBookmarkProduct(input: $input, condition: $condition) {
      id
      userSub
      quantity
      option
      productID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        title
        description
        image
        images
        options
        categoryTitle
        avgRating
        ratings
        categoryID
        countInStock
        price
        oldPrice
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        category {
          id
          title
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
      }
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      title
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      title
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      title
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      image
      sub
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      image
      sub
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      image
      sub
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
    }
  }
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      title
      description
      image
      images
      options
      categoryTitle
      avgRating
      ratings
      categoryID
      countInStock
      price
      oldPrice
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      category {
        id
        title
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
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      title
      description
      image
      images
      options
      categoryTitle
      avgRating
      ratings
      categoryID
      countInStock
      price
      oldPrice
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      category {
        id
        title
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
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      title
      description
      image
      images
      options
      categoryTitle
      avgRating
      ratings
      categoryID
      countInStock
      price
      oldPrice
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      category {
        id
        title
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
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
      User {
        id
        name
        email
        image
        sub
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Comments {
          nextToken
          startedAt
        }
      }
      Product {
        id
        title
        description
        image
        images
        options
        categoryTitle
        avgRating
        ratings
        categoryID
        countInStock
        price
        oldPrice
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        category {
          id
          title
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
      }
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
      User {
        id
        name
        email
        image
        sub
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Comments {
          nextToken
          startedAt
        }
      }
      Product {
        id
        title
        description
        image
        images
        options
        categoryTitle
        avgRating
        ratings
        categoryID
        countInStock
        price
        oldPrice
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        category {
          id
          title
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
      }
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
      User {
        id
        name
        email
        image
        sub
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Comments {
          nextToken
          startedAt
        }
      }
      Product {
        id
        title
        description
        image
        images
        options
        categoryTitle
        avgRating
        ratings
        categoryID
        countInStock
        price
        oldPrice
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        category {
          id
          title
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
      }
    }
  }
`;
export const createCartProduct = /* GraphQL */ `
  mutation CreateCartProduct(
    $input: CreateCartProductInput!
    $condition: ModelCartProductConditionInput
  ) {
    createCartProduct(input: $input, condition: $condition) {
      id
      userSub
      quantity
      option
      productID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        title
        description
        image
        images
        options
        categoryTitle
        avgRating
        ratings
        categoryID
        countInStock
        price
        oldPrice
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        category {
          id
          title
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
      }
    }
  }
`;
export const updateCartProduct = /* GraphQL */ `
  mutation UpdateCartProduct(
    $input: UpdateCartProductInput!
    $condition: ModelCartProductConditionInput
  ) {
    updateCartProduct(input: $input, condition: $condition) {
      id
      userSub
      quantity
      option
      productID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        title
        description
        image
        images
        options
        categoryTitle
        avgRating
        ratings
        categoryID
        countInStock
        price
        oldPrice
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        category {
          id
          title
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
      }
    }
  }
`;
export const deleteCartProduct = /* GraphQL */ `
  mutation DeleteCartProduct(
    $input: DeleteCartProductInput!
    $condition: ModelCartProductConditionInput
  ) {
    deleteCartProduct(input: $input, condition: $condition) {
      id
      userSub
      quantity
      option
      productID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        title
        description
        image
        images
        options
        categoryTitle
        avgRating
        ratings
        categoryID
        countInStock
        price
        oldPrice
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        category {
          id
          title
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
      }
    }
  }
`;
export const createOrderProduct = /* GraphQL */ `
  mutation CreateOrderProduct(
    $input: CreateOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    createOrderProduct(input: $input, condition: $condition) {
      id
      quantity
      option
      productID
      orderID
      userSub
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        title
        description
        image
        images
        options
        categoryTitle
        avgRating
        ratings
        categoryID
        countInStock
        price
        oldPrice
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        category {
          id
          title
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
      }
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
    }
  }
`;
export const updateOrderProduct = /* GraphQL */ `
  mutation UpdateOrderProduct(
    $input: UpdateOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    updateOrderProduct(input: $input, condition: $condition) {
      id
      quantity
      option
      productID
      orderID
      userSub
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        title
        description
        image
        images
        options
        categoryTitle
        avgRating
        ratings
        categoryID
        countInStock
        price
        oldPrice
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        category {
          id
          title
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
      }
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
    }
  }
`;
export const deleteOrderProduct = /* GraphQL */ `
  mutation DeleteOrderProduct(
    $input: DeleteOrderProductInput!
    $condition: ModelOrderProductConditionInput
  ) {
    deleteOrderProduct(input: $input, condition: $condition) {
      id
      quantity
      option
      productID
      orderID
      userSub
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      product {
        id
        title
        description
        image
        images
        options
        categoryTitle
        avgRating
        ratings
        categoryID
        countInStock
        price
        oldPrice
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        category {
          id
          title
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
      }
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
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
