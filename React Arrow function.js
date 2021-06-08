Arrow funcation
let create = (title,body) => {
	if (!title) {
		throw new Error('title is required');
	}

	if (!body) {
		throw new Error('body is required');
	}

	return alert(`${title} ${body}`);
}

create('title','body');
