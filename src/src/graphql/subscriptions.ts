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
export const onUpdateBookmarkProduct = /* GraphQL */ `
  subscription OnUpdateBookmarkProduct {
    onUpdateBookmarkProduct {
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
export const onDeleteBookmarkProduct = /* GraphQL */ `
  subscription OnDeleteBookmarkProduct {
    onDeleteBookmarkProduct {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateCartProduct = /* GraphQL */ `
  subscription OnCreateCartProduct {
    onCreateCartProduct {
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
export const onUpdateCartProduct = /* GraphQL */ `
  subscription OnUpdateCartProduct {
    onUpdateCartProduct {
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
export const onDeleteCartProduct = /* GraphQL */ `
  subscription OnDeleteCartProduct {
    onDeleteCartProduct {
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
export const onCreateOrderProduct = /* GraphQL */ `
  subscription OnCreateOrderProduct {
    onCreateOrderProduct {
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
export const onUpdateOrderProduct = /* GraphQL */ `
  subscription OnUpdateOrderProduct {
    onUpdateOrderProduct {
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
export const onDeleteOrderProduct = /* GraphQL */ `
  subscription OnDeleteOrderProduct {
    onDeleteOrderProduct {
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
