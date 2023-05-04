//	Insert irrelevant parts of speech
const IRRELEVANT_PARTS_OF_SPEECH = ['about', 'above', 'across', 'after', 'against', 'along', 'among', 'around', 'at', 'before', 'behind', 'between', 'beyond', 'but', 'by', 'concerning', 'despite', 'down', 'during', 'except', 'following', 'for', 'from', 'in', 'including', 'into', 'like', 'near', 'of', 'off', 'on', 'onto', 'out', 'over', 'past', 'plus', 'since', 'throughout', 'to', 'towards', 'under', 'until', 'up', 'upon', 'up to', 'with', 'within', 'without', 'for', 'and', 'nor', 'but', 'or', 'yet', 'so', 'and/or', 'or/and', 'either', 'neither', 'not only', 'but also', 'as', 'both', 'whether', 'after', 'although', 'as soon as', 'because', 'before', 'by the time', 'in case', 'now that', 'since', 'unless', 'when', 'whether or not', 'while', 'after all', 'besides', 'consequently', 'finally', 'however', 'nevertheless', 'then', 'therefore', 'a', 'an', 'the'];
	// built from 01_ATS_EnglishPartsOfSpeech.js

const RESUME_VERBS_MAP = 
const RESUME_VERBS_REVERSE_MAP = 

const EXPORT_OBJECT = {
	IRRELEVANT_PARTS_OF_SPEECH,
	RESUME_VERBS_MAP,
	RESUME_VERBS_REVERSE_MAP
};
//	JS ESM (ES6)
// export EXPORT_OBJECT;

//	JS CJS
module.exports = EXPORT_OBJECT;
//	God, JS is a mess.