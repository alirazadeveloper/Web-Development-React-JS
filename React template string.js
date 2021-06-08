function gert(messg) {
	return alert(`${messg} everyone!`);
}
gert('GOOD AFTER NOON');

let gert = messg => alert(`${messg} everyone!`);
gert('GOOD AFTER NOON');

let gert = () => alert(`hello everyone!`);
gert();

let gert = (name,messg) => alert(`${messg} ${name}!`);
gert('ali','GOOD AFTER NOON');
