const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
const Home = require('./client/components/Home').default;

const app = express();
const PORT = 3000 || process.env.PORT;

app.get('/', (req, res) => {
  const content = renderToString(<Home />);
  res.send(content);
});

app.listen(PORT, () => { console.log(`Server running at port${PORT}`); });
