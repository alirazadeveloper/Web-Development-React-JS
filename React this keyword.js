


let mountname={
	MN:['Ali','Raza','man'],
	printfun: function () {
		console.log('outside printfun ',this);
		setTimeout(function () {
			console.log('inside settimeout ',this);
			// console.log(this.MN.join(' - '));
		},2000)
	}

}

// alert(mountname.MN);

mountname.printfun();
