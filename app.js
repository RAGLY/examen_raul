const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

const puerto = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public/vristo-html-main')));

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (rep, res) => {
	res.render('dashboard');
});

app.get('/productos', (rep, res) => {
	res.render('productos');
});

app.get('/*', (rep, res) => {
	res.render('pages-error404');
});

app.listen(puerto, () => {
	console.log('Corriendo en el puerto ' + puerto);
});








