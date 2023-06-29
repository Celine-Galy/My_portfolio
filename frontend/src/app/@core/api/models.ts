export interface Article {
    id: number
    title: string
    content: string
    image: string
    date: Date
    published: boolean
    category: Category
  }
  export interface ArticlePatch {
    id?: number
    title?: string
    content: string
    image?: string
    date?: Date
    published?: boolean
    category: Category
  }
  export interface User {
    id: number
    username: string
    password: string
    email: string
    admin: boolean
  }
  export interface Category {
    id: number
    name: string
    articles?: Article[]
  }
  export interface ITokenUser {
    id: number
    username: string
    admin: boolean
  };
  export interface ICredential {
    username: string
    password: string
  }