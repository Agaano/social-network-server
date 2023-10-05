export default (count: number) => {
	let code = ''
	for (let i = 0; i < count; i++) {
		code += getRandomNumber(0,9);
	}
	return code;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}