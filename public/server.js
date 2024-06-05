const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const port = 5000;

// Підключення до MongoDB
mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.json());
app.use(cookieParser());

// Додавання статичної директорії
app.use(express.static(path.join(__dirname, 'public')));

// Реєстрація користувача
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, password: hashedPassword });
  await newUser.save();
  res.status(201).send('User registered');
});

// Авторизація користувача
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ username }, 'secretkey');
    res.cookie('token', token, { httpOnly: true });
    res.status(200).send('Logged in');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

// Захищений маршрут
app.get('/protected', (req, res) => {
  const token = req.cookies.token;
  if (token) {
    jwt.verify(token, 'secretkey', (err, decoded) => {
      if (err) {
        res.status(401).send('Unauthorized');
      } else {
        res.status(200).send(`Hello, ${decoded.username}`);
      }
    });
  } else {
    res.status(401).send('Unauthorized');
  }
});

// Динамічний контент
app.get('/dynamic-content', (req, res) => {
  const hour = new Date().getHours();
  const theme = hour >= 18 || hour < 6 ? 'dark' : 'light';
  res.json({ theme });
});

// Контент з файлової системи
app.get('/comments', (req, res) => {
  fs.readFile('comments.txt', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading comments');
    } else {
      res.json({ comments: data.split('\n') });
    }
  });
});

// Додати обробник для кореневого маршруту
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
