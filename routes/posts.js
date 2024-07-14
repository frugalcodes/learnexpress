const express = require('express');
const router = express.Router();


let posts = [
    { artist: 'wizkid', song: 'unavailable' },
    { artist: 'davido', song: 'joy' },
  ] 
  
router.get('/', (req, res) => {
    const limit = parseInt(req.query.limit)
  
    if (!isNaN(limit) && limit > 0) {
      res.status(200).json (posts.slice (0, limit));
    } else {
      res.status(200).json(posts);
    }
   
  });
  
  router.get('/:artist', (req, res) => {
    const artist = req.params.artist.toLowerCase(); // Ensure case-insensitive comparison
    const post = posts.find((post) => post.artist.toLowerCase() === artist);
  
    if (!post) {
      res.status(404).json({ msg: `Post of id ${artist} not found, fuck off bro` });
    } else {
      res.status(200).json(post);
    }
  })

  export default router 