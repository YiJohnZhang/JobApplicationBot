
# Specification (Input): Job Description Scraping List
```
link_1, physicalAddress
link_2, physicalAddress
link_3, physicalAddress
...
```

# Specification (Input): Company & Reason Map 
```js
companyReasonMapping = {
	companyOne:
		{
			general: '',
			positionName: '',
			//	...
		},
	companyTwo:
		{
			general: '',
			positionName: '',
			//	...
		},
	//	...
}
```


# Specification (Input): Master Spreadsheet of Tabulated Skills, Experience, and Education
```md
<!-- header -->
<!-- skill, skill category / experience name, date start, date end, description (inject html) / education name, date start, date end, description (inject html) -->
<!-- ... -->
<!-- empty breaker -->

|Experience|||
||
<!-- Comment -->
```

# Specification (Output): Job Qualification Obj.
```js
qualificationObject = [
	{
		positionName: '',		/*	str	*/
		companyName: '',		/*	str	*/
		physicalAddress: '',	/*	str	*/
		qualifications: [
			{
				qualificationDetail: '',
				qualificationTags: []
			},
			//	...
		]
	},
	//	{...}
];
```

# Specification (Output): Job Application Content Obj.
```js
applicationObject = [
	{
		resume: {
			brief: '',
			skills: {			// SWE
				languages: [],
				tools: [],
				//	...
			}
		},
		coverletter: {

		}
	}
]

```

# *Extra* Specification (Output): Job Application
