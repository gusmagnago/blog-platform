import { UseFormProps, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ArticleProps } from './components/form/PostForm.types';
import { yupResolver } from '@hookform/resolvers/yup';

export const formats = ['image/*'];
export const schema = yup.object().shape({
  title: yup.string().max(100).required(),
  description: yup.string().max(300).required(),
  image: yup.mixed().required(),
  category: yup.string().required(),
  content: yup.string().required(),
});

const useNewPostForm = (options?: UseFormProps<ArticleProps>) => {
  const form = useForm<ArticleProps>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      title: '',
      description: '',
      category: '',
      content: '',
    },
    ...options,
  });
  return form;
};

export default useNewPostForm;
