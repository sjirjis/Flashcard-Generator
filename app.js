

var inquirer = require('inquirer'),
	basicCard = require('./basicCard'),
	clozeCard = require('./clozeCard');

var basicArray = [],
	clozeArray = [];

promptBasicOrCloze();

function promptBasicOrCloze(){
	inquirer.prompt([{
		type: 'list',
		name: 'userInput',
		message: 'Would you like to create a BASIC or CLOZE card?',
		choices: [
			'BASIC',
			'CLOZE'
		]
	}]).then(function(answer){
		if (answer.userInput === 'BASIC'){
			newBasicCard();
		} else {
			newClozeCard();
		}
	});
};

function newBasicCard() {
    inquirer.prompt([{
        type: 'input',
        name: 'front',
        message: 'What should the FRONT of the flashcard say?'
    }, {
        type: 'input',
        name: 'back',
        message: 'What should the BACK of the flashcard say?'
    }]).then(function(answers) {
    	var newBasicCard = new basicCard(answers.front, answers.back);
    	basicArray.push(newBasicCard);
    	console.log(basicArray);
    	promptCreateNewCard();
    });
};

function newClozeCard() {
    inquirer.prompt([{
        type: 'input',
        name: 'text',
        message: 'What is the FULL statement?'
    }, {
        type: 'input',
        name: 'cloze',
        message: 'What is the CLOZE of the statement?'
    }]).then(function(answers) {
    	var newClozeCard = new clozeCard(answers.text, answers.cloze);
    	clozeArray.push(newClozeCard);
    	console.log(clozeArray);
    	promptCreateNewCard();
    });
};

function promptCreateNewCard() {
	inquirer.prompt([{
		type: 'list',
		name: 'userInput',
		message: 'Would you like to create another card?',
		choices: [
			'YES',
			'NO'
		]
	}]).then(function(answer){
		if (answer.userInput === 'YES'){
			promptBasicOrCloze();
		} else {
			console.log('See you next time!');
		}
	});
};	
