const fs = require('fs');
const ghpages = require('gh-pages');
const copy = require('copy')

const BUILD_PATH = 'dist';

(async () => {
	await cp('src/main.js', BUILD_PATH);
	await cp('index.html', BUILD_PATH);

	ghpages.publish(BUILD_PATH, function (err) { });
})();

function cp(from, to) {
	return new Promise(function (resolve, reject) {
		copy(from, to, function (err) {
			if (err) return reject(err);
			resolve();
		});
	});
}
