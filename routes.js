module.exports = function(app) {
	console.log("i am in router file");

	var serverBotController = require('./appControllers/botController');


	//app.post('/chatBot', require('./controllers/chatController.js').chatBot);
	//app.post('/chatBot', serverBotController.chatBot);
	app.post('/chatBot', serverBotController.pizzabot);
	app.post('/registration', serverBotController.userRegistration);

	//app.get('/',chatBot.index);
}