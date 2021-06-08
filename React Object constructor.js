
let fun = ({name,uni}) =>{
	console.log(`${name}, ${uni}`)
}

fun({
name:'Ali',
uni:'KFU'

})

let fun = stud=>{
	let {name,uni} = stud;
	console.log(`${name}, ${uni}`)
}

fun({
name:'Ali',
uni:'KFU'

})


let fun = stud=>{
	console.log(`${stud.name}, ${stud.uni}`)
}

fun({
name:'Ali',
uni:'KFU'

})
