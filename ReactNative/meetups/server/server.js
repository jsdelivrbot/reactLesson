import express from 'express';
import dbConfig from './config/db';
import middleware from './config/middleware';
import { MeetupRoutes, GroupRoutes } from './modules';
/**
 * Database cofig
 */

dbConfig();

/**
 * Middleware
 */
const app = express();
middleware(app);

app.use('/api', [MeetupRoutes, GroupRoutes]);

const PORT = process.env.PORT || 3000;
app.listen(PORT, err => {
  if (err) {
    console.log('Đã có lỗi: ', err);
  } else {
    console.log(`server is runing on port :${PORT}`);
  }
});
