const yearElement = document.getElementById("year");
if (yearElement) {
	yearElement.textContent = new Date().getFullYear();
}


const balls = [
	document.getElementById("ball1"),
	document.getElementById("ball2"),
	document.getElementById("ball3"),
];

const panelCards = document.querySelectorAll(".panel-card");
const spans = document.querySelectorAll(".project-tags span");
const setActiveBall = (index) => {
	balls.forEach((ball, ballIndex) => {
		if (!ball) {
			return;
		}
		ball.classList.toggle("is-active", ballIndex === index);
	});
};

panelCards.forEach((card, index) => {
	card.addEventListener("mouseenter", () => setActiveBall(index));
	card.addEventListener("focus", () => setActiveBall(index));
	card.addEventListener("click", () => {
		setActiveBall(index);
		const detail = card.nextElementSibling;
		if (detail && detail.classList.contains("panel-detail")) {
			detail.classList.toggle("is-hidden");
		}
	});
});




const panelBody = document.querySelector(".panel-body");
if (panelBody) {
	panelBody.addEventListener("mouseleave", () => setActiveBall(-1));
	panelBody.addEventListener("focusout", (event) => {
		if (!panelBody.contains(event.relatedTarget)) {
			setActiveBall(-1);
		}
	});
}


const languagePage = {
	"eng": {
		"brand": "Hardware, Programming and IT",
		"Home": "Home",
		"Projects": "software and maintenance",
		"Skills": "Skills",
		"Contact": "Contact",
		"me": "About me",
		"intro-text": "I'm Abrahan. I merge modern software development with a solid foundation in technical support and IT infrastructure to create digital solutions that not only look good, but work flawlessly from hardware to code.",
		"explore": "Explore projects",
		"Contact": "Contact",
		"projects": "Personal projects",
		"discipline": "Discipline",
		"adaptability": "Adaptability",
		"quality": "Focus on quality",
		"focus": "Focus on:",
		"programming": "Programming",
		"programming-text": "Development of interactive web interfaces using HTML5, CSS3, and JavaScript. Focused on creating seamless user experiences, responsive design (that looks good on mobile devices), and code optimization for efficient performance.",
		"hardware-maintenance": "Hardware and maintenance",
		"hardware-maintenance-text": "Specialized technical service for preventive and corrective maintenance. I perform deep cleaning of components, optimization of cooling systems, and application of high-quality thermal paste to extend the lifespan of your equipment and prevent overheating.Thermal paste",
		"software-installation": "Software installation",
		"software-installation-text": "Expert configuration of work environments. I take care of installing operating systems, office suites, and specialized software, ensuring that each program is properly optimized and free of risks to the system.",
	},
	"esp": {
		"brand": "Hardware, Programación y IT",
		"Home": "Inicio",
		"Projects": "Mantenimientos y software",
		"Skills": "Habilidades",
		"Contact": "Contacto",
		"me": "Un poco de mi",
		"intro-text": "Soy Abrahan, Fusiono el desarrollo de software moderno con una sólida base en soporte técnico e infraestructura IT para crear soluciones digitales que no solo se ven bien, sino que funcionan a la perfección desde el hardware hasta el código.",
		"explore": "Explorar proyectos",
		"Contact": "Hablemos",
		"projects": "Proyectos personales",
		"discipline": "Disciplina",
		"adaptability": "Adaptabilidad",
		"quality": "Enfoque en calidad",
		"focus": "Enfoque en:",
		"programming": "Programación",
		"programming-text": "Desarrollo de interfaces web interactivas utilizando HTML5, CSS3 y JavaScript. Enfocado en crear experiencias de usuario fluidas, diseño responsivo (que se vea bien en celulares) y optimización de código para un rendimiento eficiente.",
		"hardware-maintenance": "Hardware y mantenimiento",
		"hardware-maintenance-text": "Servicio técnico especializado en mantenimiento preventivo y correctivo. Realizo limpieza profunda de componentes, optimización de sistemas de enfriamiento y aplicación de pasta térmica de alta calidad para prolongar la vida útil de tus equipos y evitar sobrecalentamientos.<span>Limpieza</span><span>Pasta térmica",
		"software-installation": "Instalación de software",
		"software-installation-text": "Configuración experta de entornos de trabajo. Me encargo de la instalación de sistemas operativos, suites de oficina y software especializado, asegurando que cada programa esté correctamente optimizado y libre de riesgos para el sistema. <span>Sistemas Operativos",
	}
}

const langToggle = document.querySelector(".btn-lang");

if (langToggle) {
	langToggle.addEventListener("click", () => {
		const eng = document.querySelector(".eng");
		const esp = document.querySelector(".esp");
		if (eng && esp) {

			let langDestiny;

			if (eng.classList.contains("btn-lang-select")) {
				eng.classList.remove("btn-lang-select");
				esp.classList.add("btn-lang-select");
				langDestiny = "esp"; //cheange to spanish
			} else {
				eng.classList.add("btn-lang-select");
				esp.classList.remove("btn-lang-select");
				langDestiny = "eng"; //change to english
			}

			const translateElements = document.querySelectorAll("[data-translate]");
			
			translateElements.forEach((element) => {
				const key = element.getAttribute("data-translate");

				element.textContent = languagePage[langDestiny][key];
			});


			// if (eng.classList.contains("btn-lang-select")) {
			// 	eng.classList.remove("btn-lang-select");
			// 	esp.classList.add("btn-lang-select");
			// 	// Aquí podrías agregar lógica para cambiar el idioma del contenido
			// 	const engBrandTex = document.querySelector(".brand-text-2");
			// 	engBrandTex.textContent = "Hardware, Programación y IT";





			// } else {
			// 	eng.classList.add("btn-lang-select");
			// 	esp.classList.remove("btn-lang-select");
			// 	// Aquí podrías agregar lógica para cambiar el idioma del contenido
			// 	const engBrandTex = document.querySelector(".brand-text-2");
			// 	engBrandTex.textContent = "Hardware, Programming and IT";
			// }
		}
	});
}