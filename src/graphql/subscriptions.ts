/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBookmarkProduct = /* GraphQL */ `
  subscription OnCreateBookmarkProduct {
    onCreateBookmarkProduct {
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
export const onUpdateBookmarkProduct = /* GraphQL */ `
  subscription OnUpdateBookmarkProduct {
    onUpdateBookmarkProduct {
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
export const onDeleteBookmarkProduct = /* GraphQL */ `
  subscription OnDeleteBookmarkProduct {
    onDeleteBookmarkProduct {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateCartProduct = /* GraphQL */ `
  subscription OnCreateCartProduct {
    onCreateCartProduct {
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
export const onUpdateCartProduct = /* GraphQL */ `
  subscription OnUpdateCartProduct {
    onUpdateCartProduct {
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
export const onDeleteCartProduct = /* GraphQL */ `
  subscription OnDeleteCartProduct {
    onDeleteCartProduct {
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
export const onCreateOrderProduct = /* GraphQL */ `
  subscription OnCreateOrderProduct {
    onCreateOrderProduct {
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
export const onUpdateOrderProduct = /* GraphQL */ `
  subscription OnUpdateOrderProduct {
    onUpdateOrderProduct {
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
export const onDeleteOrderProduct = /* GraphQL */ `
  subscription OnDeleteOrderProduct {
    onDeleteOrderProduct {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
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
