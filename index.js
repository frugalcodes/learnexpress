const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

// setup static routes
// app.use(express.static(path.join(__dirname, 'public')));

let posts = [
  { artist: 'wizkid', song: 'unavailable' },
  { artist: 'davido', song: 'joy' },
]

app.get('/api/posts', (req, res) => {
  const limit = parseInt(req.query.limit)

  if (!isNaN(limit) && limit > 0) {
    res.status(200).json (posts.slice (0, limit));
  } else {
    res.status(200).json(posts);
  }
 
});

app.get('/api/posts/:artist', (req, res) => {
  const artist = req.params.artist.toLowerCase(); // Ensure case-insensitive comparison
  const post = posts.find((post) => post.artist.toLowerCase() === artist);

  if (!post) {
    res.status(404).json({ msg: `Post of id ${artist} not found, fuck off bro` });
  } else {
    res.status(200).json(post);
  }
})
 

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
