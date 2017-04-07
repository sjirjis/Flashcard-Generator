var clozeCard = function(text, cloze){
	this.fulltext = text,
	this.cloze = cloze

	if(this.fulltext.includes(this.cloze)){
		this.partialText = this.fulltext.replace(this.cloze, '...');
	} else {
		var error = 'Error: cloze "' + this.cloze + '" is not included in the full statement "' + this.fulltext + '"!';
		throw error;
	}

	console.log('Full Text:', this.fulltext);
	console.log('Cloze:', this.cloze);
	console.log('Partial Text:', this.partialText);
	
};

module.exports = clozeCard;