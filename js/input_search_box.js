let availableKeywords = [
	'HTML',
	'CSS',
	'JS',
	'Java',
	'How to',
	'Where'
]

const resultBox = document.querySelector(".syllabus-form .result")
const inputBox = document.querySelector(".syllabus-form #inputBoxSearch")

inputBox.onkeyup = ()=>{
	let result = []
	let input = inputBox.value
	if(input.length){
		result = availableKeywords.filter((keyword)=>{
			return keyword.toLowerCase().includes(input.toLowerCase())
		})
		console.log(result)
	}
	displayInputBox(result)
}

function displayInputBox(result){
	const content = result.map((list)=>{
		return `<li>${list}</li>`
	})
	resultBox.innerHTML = `<ul>${content.join("")}</ul>`
}