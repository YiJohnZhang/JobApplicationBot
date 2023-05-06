const fs = require('fs');
//	cl:

let FILE_NAME = process.argv[2] || './JobRobot_01_ATS_SWE_Industry_KW_List.md';
let outputKw = [];
let kwSet = new Set();

fs.readFile(FILE_NAME, 'utf-8', (error, data) => {

	const fileLines = data.split(/[\r\n]+/);

	for(let line of fileLines)
		if(line.length > 0 && line[0] !== '<' && line[0] !== '#')
			line.split(', ').forEach((element) => {
				
				if(!kwSet.has(element)){

					outputKw.push(element)
					kwSet.add(element);

				}
			
			});

	console.log(JSON.stringify(outputKw));

});