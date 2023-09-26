// Create web server
// Handle GET requests to /comments
// Return array of comments as JSON
app.get('/comments', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});

// Path: comments.js
// Handle POST requests to /comments
// Save new comment to comments array
// Return array of comments as JSON
app.post('/comments', function(req, res) {
  var comment = req.body;
  comment.id = Date.now();
  comments.push(comment);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});

// Path: comments.js
// Handle PUT requests to /comments/:id
// Update comment with given id
// Return array of comments as JSON
app.put('/comments/:id', function(req, res) {
  var id = req.params.id;
  var comment = req.body;
  for (var i = 0; i < comments.length; i++) {
    if (comments[i].id == id) {
      comments[i] = comment;
      break;
    }
  }
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});

// Path: comments.js
// Handle DELETE requests to /comments/:id
// Delete comment with given id
// Return array of comments as JSON
app.delete('/comments/:id', function(req, res) {
  var id = req.params.id;
  for (var i = 0; i < comments.length; i++) {
    if (comments[i].id == id) {
      comments.splice(i, 1);
      break;
    }
  }
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});

// Path: comments.js
// Listen on port 3000
app.listen(3000, function() {
  console.log('Server started: http://localhost:3000/');
});