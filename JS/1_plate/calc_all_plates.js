fs = require('fs');

let mem = '';
function wf(i, numPlate, letterPlate){
	let s = i + ': ' + numPlate + letterPlate;
	if (letterPlate.length === 5){
		s = i + ': ' + letterPlate;
	};
	mem += s + '\n';
	// console.log(s);
}

function increase(s){
	if (s === ''){
		return 'A';
	}
	if (s === 'Z'){
		return 'AA';
	};
	if (s[s.length-1] === 'Z'){
		return increase(s.substr(0, s.length-1)) + 'A';
	};
	return s.substr(0, s.length-1) + String.fromCharCode(s.charCodeAt(s.length-1) + 1);
};

function plates(){
	let i = 1;
	let numPlate = 0;
	let letterPlate = '';
	let numPlateLimit = 99999;
	wf(i, numPlate, letterPlate);
	while (letterPlate !== 'ZZZZZ'){
		if (numPlateLimit === 0){
			letterPlate = increase(letterPlate);
			i++;
			wf(i, 0, letterPlate);
			continue;
		}

		i += numPlateLimit;
		numPlate += numPlateLimit;
		wf(i, numPlate, letterPlate);

		i++;
		numPlate = 0;
		letterPlate = increase(letterPlate);
		wf(i, numPlate, letterPlate);
		numPlateLimit = Math.pow(10, 5 - letterPlate.length) - 1;
	}
};

plates();

fs.appendFile('ZZZZZ_result.txt', mem, function (err) {
	if (err) throw err;
});

//intmax = 9 007 199 254 740 991