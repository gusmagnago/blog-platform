export interface IArticle {
  title: string;
  description: string;
  image: string;
  category: string;
  content: string;
  id: string;
  createdAt: Date;
  createdBy: string | undefined;
}

export type ArticlesContextType = {
  articles: IArticle[];
  bookmarks: ArticleProps[];
  getArticleById: (id: string, item: IArticle[]) => IArticle | undefined;
  getArticleByUser: (
    item: IArticle[],
    userName: string | undefined
  ) => IArticle[] | IArticle | undefined;
  filterArticles: (articles: IArticle[], categoryLabel: string) => IArticle[];
  convertDate: (date: Date) => string;
  saveArticle: (article: IArticle, name: string) => void;
  removeArticle: (storedList: string) => void;
};
