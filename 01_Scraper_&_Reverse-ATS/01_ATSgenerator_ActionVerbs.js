const { readFile, promises: fsPromise } = require('fs');
const OUTPUT_FILE_NAME = './01_ATS_DUMB_NLP_EXPORTS.js';

let positionVerb = {};
/*
{
	supervisor: new Set(['administered', 'advised', 'approved', ...]),
	inspector:	new Set(['accomplished', 'achieved', 'affirmed', ...]),
	...,
	custodian:	new Set(['', '', ...]),
	worker:		new Set(['', '', ...])
}
=> Serialized?
{
	supervisor: ['administered', 'advised', 'approved', ...],
	inspector:	['accomplished', 'achieved', 'affirmed', ...],
	...,
	custodian:	['', '', ...],
	worker:		['', '', ...]
}
*/

let verbPositionReverseMap = {};
/*
{
	'adminster':	new Set(['supervisor', ...]),
	'accomplished':	new Set(['inspector', 'droneMaintainer', 'droneWorker']),
	'advised':		new Set(['supervisor', 'liason', ...]),
	...,
	'wove':			new Set([...])
}
=> Seralized?
{
	'adminster': ['supervisor', ...],
	'accomplished': ['inspector', 'droneMaintainer', 'droneWorker'],
	'advised': ['supervisor', 'liason', ...]
	...,
	'wove': [...]
}
*/

readFile('./JobRobot_01_ATS_Action_Verbs_Synonyms_List_reduced.md', 'utf-8', (error, data) => {

	const fileLines = data.split(/[\r\n]+/);
	let synonymMap = {};

	let currentPosition = null;
	for(let line of fileLines){

		let currentPositionVerbSet = new Set();

		if(line.length === 0){
			currentPositionVerbSet = new Set();
			continue;
		}
		
		if(line[0] === '<'){
			
			continue;
		
		}else if(line[0] === '#'){

			currentPosition = line.substring(2, line.length).toLowerCase();

			if(positionVerb[currentPosition] === undefined)
				positionVerb[currentPosition] = [];

		}else{

			synonymList = line.split(', ');

			for(let synonym of synonymList){

				synonym = synonym.toLowerCase();

				if(synonymMap[synonym] === undefined)
					synonymMap[synonym] = new Set();

				if(!currentPositionVerbSet.has(synonym))
					positionVerb[currentPosition].push(synonym);

				if(verbPositionReverseMap[synonym]){

					if(!synonymMap[synonym].has(currentPosition)){
						verbPositionReverseMap[synonym].push(currentPosition);
						synonymMap[synonym].add(currentPosition);
					}

				}else{

					verbPositionReverseMap[synonym] = [];
					verbPositionReverseMap[synonym].push(currentPosition);
					synonymMap[synonym].add(currentPosition);

				}
			
			}
		
		}

	}

	writeObjects(positionVerb, verbPositionReverseMap);

});

async function replaceString(outputFileName, searchString, replacementString){

	console.log(searchString);

	try{

		const fileContents = await fsPromise.readFile(outputFileName, 'utf-8');
		const replaceRegex = fileContents.replace(searchString, replacementString);

		await fsPromise.writeFile(outputFileName, replaceRegex);

	}catch(e){
		console.log(e);
	}

	return

}

async function writeObjects(positionVerbObject, verbPositionReverseObject){

	objectKeyReplacementOpener = `": new Set([`;
	objectKeyReplacementCloser = `]),`;

	// console.log(positionVerbObject);
		//	replace `":[` with `": new Set([`
		//	replace `],` with `]),`

	// console.log(JSON.stringify(verbPositionReverseObject));
		//	replace `":[` with `": new Set([`
		//	replace `],` with `]),`

	await replaceString(OUTPUT_FILE_NAME, 'const RESUME_VERBS_MAP = ', `const RESUME_VERBS_MAP = ${JSON.stringify(positionVerbObject)};`);
	await replaceString(OUTPUT_FILE_NAME, 'const RESUME_VERBS_REVERSE_MAP = ', `const RESUME_VERBS_REVERSE_MAP = ${JSON.stringify(verbPositionReverseObject)};`);

	// await replaceString(OUTPUT_FILE_NAME, 'const RESUME_VERBS_MAP = ', `const RESUME_VERBS_MAP = JSON.parse(${JSON.stringify(positionVerbObject).replace(/\"\:\[/gi, objectKeyReplacementOpener).replace(/\]\,/gi, objectKeyReplacementCloser)});`);
	// await replaceString(OUTPUT_FILE_NAME, 'const RESUME_VERBS_REVERSE_MAP = ', `const RESUME_VERBS_REVERSE_MAP = JSON.parse(${JSON.stringify(verbPositionReverseObject).replace(/\"\:\[/gi, objectKeyReplacementOpener).replace(/\]\,/gi, objectKeyReplacementCloser)});`);

	//	Results in object object...
	// replaceString(OUTPUT_FILE_NAME, 'const RESUME_VERBS_MAP = ', `const RESUME_VERBS_MAP = ${positionVerbObject}`);
	// replaceString(OUTPUT_FILE_NAME, 'const RESUME_VERBS_REVERSE_MAP = ', `const RESUME_VERBS_REVERSE_MAP = ${verbPositionReverseObject}`);

}

