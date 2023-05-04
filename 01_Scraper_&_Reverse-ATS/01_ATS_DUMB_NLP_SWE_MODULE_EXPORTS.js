/*
	*	
	*	
	*	 
	*/
const SWE_KEYWORDS
const SWE_SYNONYMS_MAP
const SWE_SYNONYMS_REVERSE_MAP

const EXPORT_OBJECT = {
	SWE_KEYWORDS,					/* set */
	SWE_SYNONYMS_MAP,				/* map set */
	SWE_SYNONYMS_REVERSE_MAP		/* map */
};

//	JS ESM (ES6)
// export default EXPORT_OBJECT;

//	JS CJS
module.exports = EXPORT_OBJECT;

//	TESTS
/*
console.log([''].has('));	//	t
console.log([''].has('));	//	f
console.log([''].has('));	//	t
console.log([''].has('));	//	f
console.log([''].has('));	//	t
console.log([''].has('));	//	f
*/
/*
console.log([''] === '');	//	t
console.log([''] === '');	//	t
console.log([''] === '');	//	t
console.log([''] === '');	//	t
console.log([''] === '');	//	t
console.log([''] === '');	//	f
*/