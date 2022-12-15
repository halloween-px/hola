require('dotenv').config();
require('./models/db');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;
const ServiceController = require('./controller/Service');
const TeamsController = require('./controller/Teams');
const ArticlesController = require('./controller/Articles');
const CategoryController = require('./controller/Categories');

app.use(express.static("public"));
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
	res.send('server start');
})

//services
app.get('/services', ServiceController.list);
app.get('/services/:id', ServiceController.getById);
app.put('/services/:id', ServiceController.update);

//teams
app.get('/teams', TeamsController.list);

//articles
app.get('/articles', ArticlesController.list);
app.get('/articles/:id', ArticlesController.getById);

//categories
app.get('/categories', CategoryController.list);

app.use('*', (req, res) => {
	res.status(404).json({
		message: '404 Not Found',
	});
});

app.use((err, req, res, next) => {
	const { statusCode = 500, message } = err;
	console.log({ err });
	res.status(statusCode).send({
		message: statusCode === 500 ? 'На сервере произошла ошибка' : message,
	});
});

app.listen(PORT, () => {
    console.log(`server start http://localhost:${PORT}`)
})
