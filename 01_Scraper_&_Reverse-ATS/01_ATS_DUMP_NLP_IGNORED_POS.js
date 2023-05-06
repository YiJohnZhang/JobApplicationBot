/*		
	*	
	*	
	*	
	*	
	*/

//	make it into a Set 
const IRRELEVANT_PARTS_OF_SPEECH = new Set(["about","above","across","after","against","along","among","around","at","before","behind","between","beyond","but","by","concerning","despite","down","during","except","following","for","from","in","including","into","like","near","of","off","on","onto","out","over","past","plus","since","throughout","to","towards","under","until","up","upon","up to","with","within","without","for","and","nor","but","or","yet","so","and/or","or/and","either","neither","not only","but also","as","both","whether","after","although","as soon as","because","before","by the time","in case","now that","since","unless","when","whether or not","while","after all","besides","consequently","finally","however","nevertheless","then","therefore","a","an","the","i","you","he","she","it","we","they","what","who","me","him","her","it","us","you","them","whom","mine","yours","his","hers","ours","theirs","this","that","these","those","who","whom","which","what","whose","whoever","whatever","whichever","whomever","who","whom","whose","which","that","what","whatever","whoever","whomever","whichever","myself","yourself","himself","herself","itself","ourselves","themselves","myself","yourself","himself","herself","itself","ourselves","themselves","each other","one another","anything","everybody","another","each","few","many","none","some","all","any","anybody","anyone","everyone","everything","no one","nobody","nothing","none","other","others","several","somebody","someone","something","most","enough","little","more","both","either","neither","one","much","such"]);
	// built from 01_ATS_EnglishPartsOfSpeech.js

/*
console.log(IRRELEVANT_PARTS_OF_SPEECH.has('an'));						//	t
console.log(IRRELEVANT_PARTS_OF_SPEECH.has('the'));						//	t
console.log(IRRELEVANT_PARTS_OF_SPEECH.has('I'.toLowerCase()));			//	t
console.log(IRRELEVANT_PARTS_OF_SPEECH.has('ArOuND'.toLowerCase()));	//	t
console.log(IRRELEVANT_PARTS_OF_SPEECH.has('either'));					//	t
console.log(IRRELEVANT_PARTS_OF_SPEECH.has('asdf'));					//	f
*/

const EXPORT_OBJECT = {
	IRRELEVANT_PARTS_OF_SPEECH
};

//	JS ESM (ES6)
// export default EXPORT_OBJECT;

//	JS CJS
module.exports = EXPORT_OBJECT;