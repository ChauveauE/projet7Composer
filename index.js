//const myModule = require(./myModule);
//console.log(myModule.foo);

//console.log('hello');

function component()
{
	let element = document.createElement('div');
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	return element;
}

document.body.appendChild(component());