const First = async () => {
	return new Promise(res => {
		setTimeout(() => {
			res('Вывод из функции First');
		}, 3000);
	});
};
const Second = async () => Promise.resolve('Вывод из функции Second');

const A = async () => {
	const a = await First();
	console.log('a', a);
	const b = await Second();
	console.log('b', b);
	console.log('c');
};

A();
