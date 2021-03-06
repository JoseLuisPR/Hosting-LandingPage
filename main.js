// Animacion escribir

const typed = new Typed('.typed', {
	strings: [
		'<span class="cambiante">n alto rendimiento.</span>',
		'<span class="cambiante">mpletamente dedicado.</span>',
		'<span class="cambiante">n potente hardware.</span>',
	],

	typeSpeed: 50, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 50, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});



// Cambiar diseño del nav

window.addEventListener('scroll', function () {
	let nav = document.querySelector('.navbar');
	let windowPosition = window.scrollY > 895;
	nav.classList.toggle('navbarB', windowPosition);
})


window.addEventListener('scroll', function () {
	let botonSubir = document.querySelector('.subir');
	let windowPosition = window.scrollY > 895;
	botonSubir.classList.toggle('subirB', windowPosition);
})



/* NAVMOBILE */

// Hacer que aparezca navMobile

document.querySelector('#barra3').addEventListener('click', () => {
	const e = document.querySelector('#navMobile');
	e.style.display = ((e.style.display != 'flex') ? 'flex' : 'none');
});


// Hacer que desaparezca navMobile

const cerrar = () => {
	const e = document.querySelector('#navMobile');
	e.style.display = ((e.style.display != 'none') ? 'none' : 'flex');
};

cerrar();