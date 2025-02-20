//your JS code here. If required.
async function fetchTodo(){
	try{
		const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
		if(!response.ok){
			throw new Error('Network response was not ok');
		}
		const data = await response.json();
		console.log(data);
	}catch(error){
		console.error('There has been a problem with your fetch operation:', error);
	}
}
fetchTodo();