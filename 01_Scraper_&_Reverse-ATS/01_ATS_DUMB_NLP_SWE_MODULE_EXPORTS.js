/*
	*	
	*	
	*	 
	*/

const SWE_KEYWORDS = new Set([".NET","algorithms","android","architecture","architectures","audio","AutoCAD","AWS","big data","business analysis","business continuity","C (programming language)","C#","C++","CAD","certification","Cisco","cloud","compliance","computer applications","computer science","controls","CSS","D (programming language)","data center","data collection","data entry","data management","database","datasets","design","development activities","digital marketing","digital media","distribution","DNS","ecommerce","e-commerce","end user","experimental","experiments","frameworks","front-end","GIS","graphic design","hardware","HTML5","I-DEAS","information management","information security","information technology","intranet","iOS","iPhone","IT infrastructure","ITIL","Java","Javascript","JIRA","LAN","licensing","Linux","machine learning","MATLAB","matrix","mechanical engineering","migration","mobile","modeling","networking","operations management","oracle","OS","process development","process improvement","process improvements","product design","product development","product knowledge","program management","programming","protocols","prototype","Python","quality assurance","real-time","research","resource management","root cause","routing","SaaS","SAS","SCI","scripting","scrum","SDLC","SEO","service delivery","software development","software development life cycle","software engineering","SQL","SQL server","tablets","technical","technical issues","technical knowledge","technical skills","technical support","test cases","test plans","testing","troubleshooting","UI","Unix","usability","user experience","UX","variances","vendor management","VMware","web services","workflows","frontend","front end","backend","back-end","back end","full-stack","full stack","fullstack","react","reactjs","react.js","angular","angularjs","angular.js","vue","vue.js","vuejs","node","nodejs","node.js","flask","data structures","data structures and algorithms","data structure and algorithm","ds+a","ds + a","design patterns","agile","tdd","heroku","windows","linux","postgresql","mysql","jest","jasmine","unit test","unit tests","c","html","css","python","bash","rest","restful","rest api","restful api","javascript","js","html5","Back-end","Backend","Back End","Front-end","Frontend","Front End","Full-Stack","Full Stack","Data Structures","Algorithms","Data Structures and Algorithms","Data Structure and Algorithm","DS+A","DS + A","software architecture","system architecture","micro-service","microarchitecture","micro-architecture","micro service","micro architecture","React","ReactJS","React.js","Node","NodeJS","Node.js","TDD","test-driven development","test driven development","Unit Test","Unit Tests","Integration Test","Integration Tests","End-to-end Test","E2E Test","End to end Test","End-to-end Tests","E2E Tests","End to end Tests","REST","RESTful","REST API","RESTful API","JavaScript","JS","HTML","CSS3","Python3","Relational","Relational Database","Relational DBMS","Flat-File","Flat-File Relational","Flat File Relational","PostgreSQL","Postgres"]);
const SWE_SYNONYMS_MAP = {"back-end":new Set (["back-end","backend","back end"]),"front-end":new Set (["front-end","frontend","front end"]),"full-stack":new Set (["full-stack","full stack"]),"data structures and algorithms":new Set (["data structures","algorithms","data structures and algorithms","data structure and algorithm","ds+a","ds + a"]),"software architecture":new Set (["software architecture","system architecture"]),"microservice":new Set (["micro-service","microarchitecture","micro-architecture","micro service","micro architecture"]),"react":new Set (["react","reactjs","react.js"]),"node":new Set (["node","nodejs","node.js"]),"tdd":new Set (["tdd","test-driven development","test driven development"]),"unit test":new Set (["unit test","unit tests"]),"integration test":new Set (["integration test","integration tests"]),"end-to-end test":new Set (["end-to-end test","e2e test","end to end test","end-to-end tests","e2e tests","end to end tests"]),"rest":new Set (["rest","restful","rest api","restful api"]),"javascript":new Set (["javascript","js"]),"html":new Set (["html","html5"]),"css":new Set (["css","css3"]),"python":new Set (["python","python3"]),"relational":new Set (["relational","relational database","relational dbms","sql","flat-file","flat-file relational","flat file relational"]),"postgresql":new Set (["postgresql","postgres"]),"ux":new Set (["user experience","ux"])};
const SWE_SYNONYMS_REVERSE_MAP = {"back-end":"back-end","backend":"back-end","back end":"back-end","front-end":"front-end","frontend":"front-end","front end":"front-end","full-stack":"full-stack","full stack":"full-stack","data structures":"data structures and algorithms","algorithms":"data structures and algorithms","data structures and algorithms":"data structures and algorithms","data structure and algorithm":"data structures and algorithms","ds+a":"data structures and algorithms","ds + a":"data structures and algorithms","software architecture":"software architecture","system architecture":"software architecture","micro-service":"microservice","microarchitecture":"microservice","micro-architecture":"microservice","micro service":"microservice","micro architecture":"microservice","react":"react","reactjs":"react","react.js":"react","node":"node","nodejs":"node","node.js":"node","tdd":"tdd","test-driven development":"tdd","test driven development":"tdd","unit test":"unit test","unit tests":"unit test","integration test":"integration test","integration tests":"integration test","end-to-end test":"end-to-end test","e2e test":"end-to-end test","end to end test":"end-to-end test","end-to-end tests":"end-to-end test","e2e tests":"end-to-end test","end to end tests":"end-to-end test","rest":"rest","restful":"rest","rest api":"rest","restful api":"rest","javascript":"javascript","js":"javascript","html":"html","html5":"html","css":"css","css3":"css","python":"python","python3":"python","relational":"relational","relational database":"relational","relational dbms":"relational","sql":"relational","flat-file":"relational","flat-file relational":"relational","flat file relational":"relational","postgresql":"postgresql","postgres":"postgresql","user experience":"ux","ux":"ux"};

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
console.log(SWE_KEYWORDS.has('angular'.toLowerCase()));		//	t
console.log(SWE_KEYWORDS.has('angularJ'.toLowerCase()));	//	f
console.log(SWE_KEYWORDS.has('AngularJS'.toLowerCase()));	//	t
console.log(SWE_KEYWORDS.has('frontttendd'.toLowerCase()));	//	f
console.log(SWE_KEYWORDS.has('FrONteND'.toLowerCase()));	//	t
console.log(SWE_KEYWORDS.has('herokuy'.toLowerCase()));		//	f
*/
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

//	SWE_KEYWORDS
//	SWE_SYNONYMS_MAP
//	SWE_SYNONYMS_REVERSE_MAP