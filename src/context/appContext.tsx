import { createContext, ReactNode, useEffect, useState } from 'react';
import { ArticleProps } from '../pages/Post/ReadPost';

import { ArticlesContextType, IArticle } from '../utils/types/articles';

export const AppContext = createContext<ArticlesContextType | null>(null);

type Props = {
  children: ReactNode;
};

const AppProvider = ({ children }: Props) => {
  const [articles, setArticles] = useState<IArticle[]>([
    {
      id: '',
      title: '',
      description: '',
      image: '',
      category: '',
      content: '',
      createdAt: new Date(),
      createdBy: '',
    },
  ]);

  const [bookmarks, setBookmarks] = useState<ArticleProps[]>([]);

  useEffect(() => {
    const posts = localStorage.getItem('posts');
    const bookmarks = localStorage.getItem('bookmarks');
    if (posts) {
      setArticles(JSON.parse(posts));
      if (bookmarks) {
        setBookmarks(JSON.parse(bookmarks));
      }
    }
  }, []);

  const getArticleById = (queryId: string, item: IArticle[]) =>
    item.find(({ id }) => id === queryId);

  const getArticleByUser = (item: IArticle[], userName: string | undefined) =>
    item.filter(({ createdBy }) => createdBy === userName);

  const filterArticles = (articles: IArticle[], categoryLabel: string) =>
    articles.filter(({ category }) => category.includes(categoryLabel));

  const saveArticle = (article: IArticle, name: string) => {
    const stored = localStorage.getItem(`${name}`);
    const { ...rest } = article;
    const storeData = {
      ...rest,
    };

    if (stored) {
      const parsedPosts = JSON.parse(stored);
      localStorage.setItem(
        `${name}`,
        JSON.stringify([...(parsedPosts as ArticleProps[]), storeData])
      );
    } else {
      localStorage.setItem(`${name}`, JSON.stringify([storeData]));
    }
  };

  const convertDate = (date: Date) => {
    const location = navigator.language;
    const stringDate = new Date(date).toLocaleDateString(location, {
      weekday: 'long',
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    });
    return stringDate;
  };

  const removeArticle = (storageList: string) => {
    localStorage.setItem(storageList, '');
  };

  return (
    <AppContext.Provider
      value={{
        articles,
        bookmarks,
        getArticleById,
        getArticleByUser,
        filterArticles,
        convertDate,
        removeArticle,
        saveArticle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
