import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore();
  const promises = matchRoutes(Routes, req.path).map(({ route }) => (route.loadData ? route.loadData(store) : null));
  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(PORT, () => { console.log(`Server running at port ${PORT}`); });
