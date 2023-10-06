export default () => {
	console.log(__dirname);
	const array = __dirname.split(`\\`).reverse();
	array[2] = 'src';
	array.reverse();
	const newarray = array.join(`\\`);
	return newarray + '\\';
}