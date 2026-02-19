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