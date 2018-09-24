const fs = require('fs');
const ghpages = require('gh-pages');
const copy = require('copy')

const BUILD_PATH = 'dist';

(async () => {
	await cp('src/index.js', 'dist/main.js');
	await cp('index.html', 'dist/index.html');

	ghpages.publish(BUILD_PATH, function (err) { });
});

function cp(from, to) {
	return new Promise(function (resolve, reject) {
		copy(from, to, function (err) {
			if (err) return reject(err);
			resolve();
		});
	});
}
