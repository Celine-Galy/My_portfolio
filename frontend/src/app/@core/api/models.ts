export interface Article {
    id: number
    title: string
    content: string
    date: Date
    published: boolean
  }
  export interface ArticlePatch {
    id?: number
    title?: string
    content: string
    date?: Date
    published?: boolean
  }
  export interface User {
    id: number
    username: string
    password: string
    email: string
    admin: boolean
  }
  export interface ITokenUser {
    id: number
    username: string
  };
  export interface ICredential {
    username: string
    password: string
  }