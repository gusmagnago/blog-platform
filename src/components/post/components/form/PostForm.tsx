import {
  Box,
  TextField,
  MenuItem,
  Button,
  Stack,
  ButtonBase,
  InputLabel,
  Select,
  FormControl,
} from '@mui/material';
import { AddPhotoAlternate } from '@mui/icons-material';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, Controller } from 'react-hook-form';
import { ArticleProps, FormViewProps } from './PostForm.types';
import useNewPostForm from '../../schema';

import { useContext, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { AppContext } from '../../../../context/appContext';
import { ArticlesContextType } from '../../../../utils/types/articles';
import { categories } from '../categories/CategoriesList';

const PostForm = ({ isEdit, article }: FormViewProps) => {
  const { saveArticle } = useContext(AppContext) as ArticlesContextType;
  const { user } = useAuth0();
  const form = useNewPostForm();
  const navigate = useNavigate();

  const [uploadedFile, setUploadedFile] = useState('');

  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { isValid, errors },
  } = form;

  const uniqueId = uuid();

  const onSubmitImage = async (e: any) => {
    const file = e.target.files;
    const base64 = await convertToBase64(file);

    setUploadedFile(base64 as string);
  };

  const convertToBase64 = (e: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      if (e) {
        fileReader.readAsDataURL(e[0]);

        fileReader.onload = () => {
          resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
          reject(error);
        };
      }
    });
  };

  const formSubmitHandler: SubmitHandler<ArticleProps> = (
    data: ArticleProps
  ) => {
    const createdAt = new Date();
    const createdBy = user?.name;
    const { image, ...rest } = data;
    const newPost = {
      ...rest,
      image: uploadedFile,
      id: uniqueId,
      createdAt,
      createdBy,
    };
    try {
      saveArticle(newPost, 'posts');
      isValid && reset();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack
      component="form"
      sx={{
        width: '100%',
      }}
      spacing={4}
      autoComplete="off"
      onSubmit={handleSubmit(formSubmitHandler)}
    >
      <Box>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Title"
              sx={{ width: '100%' }}
              variant="outlined"
              value={isEdit && article?.title}
              error={!!errors.title}
              helperText={
                errors.title ? errors.title.message : 'Title is required'
              }
              {...register('title', { required: true })}
            />
          )}
        />
      </Box>
      <Box>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Small Description"
              sx={{ width: '100%' }}
              multiline
              minRows={4}
              value={isEdit && article?.description}
              error={!!errors.description}
              helperText={
                errors.description
                  ? errors.description.message
                  : 'Descripion is required'
              }
              {...register('description', { required: true })}
            />
          )}
        />
      </Box>
      <Box>
        <Controller
          name="image"
          control={control}
          render={({ field }) => (
            <ButtonBase component="label" {...field}>
              <AddPhotoAlternate color="primary" sx={{ fontSize: 130 }} />
              <input
                type="file"
                hidden
                accept="image/*"
                {...register('image', {
                  required: true,
                  onChange: (e) => onSubmitImage(e),
                })}
              />
            </ButtonBase>
          )}
        />
      </Box>
      <Box>
        <FormControl fullWidth>
          <InputLabel htmlFor="category-select">Category</InputLabel>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                {...register('category', {
                  required: true,
                })}
                error={!!errors.category}
              >
                {categories.map(({ value, label }) => (
                  <MenuItem key={value} value={label}>
                    {label}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>
      </Box>
      <Box>
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Content"
              multiline
              minRows={20}
              maxRows={20}
              sx={{ width: '100%' }}
              value={isEdit && article?.content}
              {...register('content', { required: true })}
              error={!!errors.content}
              helperText={
                errors.content ? errors.content.message : 'Content is required'
              }
            />
          )}
        />
      </Box>
      <Box>
        <Button
          variant="contained"
          type="submit"
          sx={{
            width: '25ch',
          }}
        >
          Submit
        </Button>
      </Box>
    </Stack>
  );
};

export default PostForm;
