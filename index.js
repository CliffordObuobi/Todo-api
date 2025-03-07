import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import todosRoutes from './routes/todos_routes.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/v1',todosRoutes);


await mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log("Database connected"))
.catch(err => console.log(err));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});