var counter = 0;

function generateId(){
	return counter++;
}

module.exports = generateId;