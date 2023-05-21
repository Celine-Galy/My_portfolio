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