const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

//Array to store cheese data
let cheese = [
	{ id: 1, name: 'PRAIRIE BREEZE CHEDDAR', 	colour: 'Yellow',	price: 10.99, image: 'assets/cheese1.jpg' },
	{ id: 2, name: 'EPOISSES DE BOURGOGNE', 	colour: 'Yellow',	price: 11.99, image: 'assets/cheese2.jpg' },
	{ id: 3, name: 'BEENLEIGH BLUE', 			colour: 'Blue',		price: 12.99, image: 'assets/cheese3.jpg' },
	{ id: 4, name: 'BOURSIN', 					colour: 'Yellow',	price: 13.99, image: 'assets/cheese4.jpg' },
	{ id: 5, name: 'FOURME DAMBERT AOC', 		colour: 'White',	price: 14.99, image: 'assets/cheese5.jpg' }
];

// GET cheese varieties
app.get('/cheeseData', (req, res) => {
	res.json(cheese);
});

app.listen(3000, () => {
	console.log('Server Running (Port 3000)');
});