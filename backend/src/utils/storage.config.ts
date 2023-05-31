import { diskStorage } from 'multer';

export const storage = diskStorage({
  filename: (req, file, callback) => {
    callback(null, generateFilename(file));
  },
  destination: (req, file, callback) => {
    callback(null, './uploads');
  },
});

function generateFilename(file: Express.Multer.File) {
  const fileExt = file.originalname;
  return `${fileExt}`;
}
