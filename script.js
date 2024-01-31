const submitRequest = document.querySelector('.hello')
submitRequest.addEventListener('click', () => {
	window.open('https://www.google.com/', 'popUpWindow','height=400,width=600,left=10,top=10','scrollbars=yes','menubar=no')
}, false)