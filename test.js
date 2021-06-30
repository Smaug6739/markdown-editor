function sleep() {
	return new Promise((res) => setTimeout(res, 1000))
}
async function test1() {
	console.log('Function 1');
	await sleep()
	console.log('Function 1');
	await sleep()
}
async function test2() {
	console.log('Function 2');
	await sleep()
	console.log('Function 2');
	await sleep()
}
test1()
test2()