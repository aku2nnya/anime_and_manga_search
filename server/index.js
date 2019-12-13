const express = require('express');
const { getAnimeData } = require('./controller');


const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/:searchText', getAnimeData);

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
