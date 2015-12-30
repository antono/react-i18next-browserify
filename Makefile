all:
	./node_modules/.bin/babel index.jsx > index.js
	./node_modules/.bin/browserify index.js -o bundle.js
