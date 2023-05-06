const fs = require('fs');
//	cl:

let keywordSynonymMap = {};
let keywordSynonymReverseMap = {};

// let FILE_NAME = process.argv[2] || './JobRobot_01_ATS_SWE_Industry_KW_Synonyms.md';
let FILE_NAME = './JobRobot_01_ATS_SWE_Industry_KW_Synonyms.md';
let outputKw = [];
let kwSet = new Set();

fs.readFile(FILE_NAME, 'utf-8', (error, data) => {

	const fileLines = data.split(/[\r\n]+/);

	for(let line of fileLines){

		let currentKeywordSet = new Set();
	
		if(line.length === 0 || line[0] === '<'){
			continue;
		}else if(line[0] === '#'){

			currentKeyword = line.substring(2, line.length).toLowerCase();

			if(keywordSynonymMap[currentKeyword] === undefined)
				keywordSynonymMap[currentKeyword] = [];
			
		}else{

			synonymList = line.split(', ');
			
			for(let synonym of synonymList){

				synonym = synonym.toLowerCase();

				if(!currentKeywordSet.has(synonym)){
				
					keywordSynonymMap[currentKeyword].push(synonym);
					currentKeywordSet.add(synonym);
					
				}

				keywordSynonymReverseMap[synonym] = currentKeyword;

			}
		
		}

	}

	console.log(JSON.stringify(keywordSynonymMap));
	console.log(JSON.stringify(keywordSynonymReverseMap));

});