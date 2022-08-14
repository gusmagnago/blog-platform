import { AddPhotoAlternate } from '@mui/icons-material';
import { ButtonBase } from '@mui/material';
import { Controller } from 'react-hook-form';
import useNewPostForm from '../../../schema';

const FileUploadInput = () => {
  const { control } = useNewPostForm();

  const onSubmit = async (e: any) => {
    const file = e.target.files;
    const base64 = await convertToBase64(file);
    return base64;
  };

  const convertToBase64 = (e: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(e[0]);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
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
            onChange={(e) => onSubmit(e)}
          />
        </ButtonBase>
      )}
    />
  );
};

export default FileUploadInput;
