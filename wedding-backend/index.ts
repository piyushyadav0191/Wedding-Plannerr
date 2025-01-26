import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const port = 8000;
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
}))
app.use(express.json());


const connectDb = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL!);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
    }
   
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  selectedPriceRange: String,
  selectedCardTitles: [String],
});

const User = mongoose.model('User', userSchema);

app.post('/save', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
   connectDb();
});
