//const myModule = require(./myModule);
//console.log(myModule.foo);

//console.log('hello');
let a = "J'apprends webpack!";
let g = "je fais un test";

function component()
{
	let element = document.createElement('div');
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	return element;
}

document.body.appendChild(component());