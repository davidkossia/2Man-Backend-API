const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Welcome to the 2Man API');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// // Sample route to get all users
// app.get('/users', (req, res) => {
//   // Sample data
//   const users = [
//     { id: 1, name: 'John Doe' },
//     { id: 2, name: 'Jane Smith' },
//   ];
//   res.json(users);
// });