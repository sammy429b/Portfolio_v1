import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import { MessageModel, UserModel } from './models/User.model';
import DBconnect from './utils/DBconnect';
import { createMessage, createUser } from './utils/UserHandling';
dotenv.config()

const app = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express!');
});


app.post('/contact', async(req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body
    console.log(req.body)
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const isUser = await UserModel.findOne({email})
    if(!isUser){
      const newUser = await createUser(name,email)
    }
    const newMessage = await createMessage(email,message)

  } catch (error) {
    console.log(error)
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  DBconnect()
});