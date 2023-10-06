export default () => {
	console.log(__dirname);
	const array = __dirname.split(`\\`).reverse();
	if (array.length === 1) {
		const anotherarray = __dirname.split('/').reverse();
		anotherarray[2] = 'dist';
		anotherarray.reverse();
		const newanotherarray = anotherarray.join('/');
		return newanotherarray + '/';
	}
	array[2] = 'src';
	array.reverse();
	const newarray = array.join(`\\`);
	return newarray + '\\';
}