import { IArticle } from '../../../../utils/types/articles';

export interface ArticleProps {
  title: string;
  description: string;
  image: File;
  category: string;
  content: string;
  id: string;
  createdAt: Date;
  createdBy: string | undefined;
}

export type FormViewProps =
  | { isEdit?: true; article?: IArticle }
  | { isEdit?: false; article?: never };
