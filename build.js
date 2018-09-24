const copy = require('copy')

const BUILD_PATH = 'dist/';

(async () => {
	await cp('src/*.js', BUILD_PATH);
	await cp('index.html', BUILD_PATH);
})();

function cp(from, to) {
	return new Promise(function (resolve, reject) {
		copy(from, to, function (err) {
			if (err) return reject(err);
			resolve();
		});
	});
}
