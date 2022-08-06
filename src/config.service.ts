import { devConfig } from './config/dev.config';
import { prodConfig } from './config/prod.config';
import path from 'path'
import dotenv from "dotenv"
dotenv.config({ path: path.join(__dirname, '../../.env') });
export const ConfigService = {
  provide: 'ConfigService',
  useValue: process.env.NODE_ENV == 'development' ? devConfig : prodConfig,
};
