const fs = require('fs');
// const readline = require('readline');
	// do it for large csvs

let ignoredPartsOfSpeech = [];

fs.readFile('./JobRobot_01_ATS_English_Grammar.md', 'utf-8', (error, data) => {

	const fileLines = data.split(/[\r\n]+/);
	
	for(let line of fileLines)
		if(line.length > 0 && line[0] !== '<' && line[0] !== '#')
			line.split(', ').forEach((element) => ignoredPartsOfSpeech.push(element));

	console.log(JSON.stringify(ignoredPartsOfSpeech));

});

//	['about', 'above', 'across', 'after', 'against', 'along', 'among', 'around', 'at', 'before', 'behind', 'between', 'beyond', 'but', 'by', 'concerning', 'despite', 'down', 'during', 'except', 'following', 'for', 'from', 'in', 'including', 'into', 'like', 'near', 'of', 'off', 'on', 'onto', 'out', 'over', 'past', 'plus', 'since', 'throughout', 'to', 'towards', 'under', 'until', 'up', 'upon', 'up to', 'with', 'within', 'without', 'for', 'and', 'nor', 'but', 'or', 'yet', 'so', 'and/or', 'or/and', 'either', 'neither', 'not only', 'but also', 'as', 'both', 'whether', 'after', 'although', 'as soon as', 'because', 'before', 'by the time', 'in case', 'now that', 'since', 'unless', 'when', 'whether or not', 'while', 'after all', 'besides', 'consequently', 'finally', 'however', 'nevertheless', 'then', 'therefore', 'a', 'an', 'the']
//	["about","above","across","after","against","along","among","around","at","before","behind","between","beyond","but","by","concerning","despite","down","during","except","following","for","from","in","including","into","like","near","of","off","on","onto","out","over","past","plus","since","throughout","to","towards","under","until","up","upon","up to","with","within","without","for","and","nor","but","or","yet","so","and/or","or/and","either","neither","not only","but also","as","both","whether","after","although","as soon as","because","before","by the time","in case","now that","since","unless","when","whether or not","while","after all","besides","consequently","finally","however","nevertheless","then","therefore","a","an","the","i","you","he","she","it","we","they","what","who","me","him","her","it","us","you","them","whom","mine","yours","his","hers","ours","theirs","this","that","these","those","who","whom","which","what","whose","whoever","whatever","whichever","whomever","who","whom","whose","which","that","what","whatever","whoever","whomever","whichever","myself","yourself","himself","herself","itself","ourselves","themselves","myself","yourself","himself","herself","itself","ourselves","themselves","each other","one another","anything","everybody","another","each","few","many","none","some","all","any","anybody","anyone","everyone","everything","no one","nobody","nothing","none","other","others","several","somebody","someone","something","most","enough","little","more","both","either","neither","one","much","such"]