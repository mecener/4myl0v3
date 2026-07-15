const $ = (s) => document.querySelector(s);
const $A = (s) => document.querySelectorAll(s);
const h = (s) => s.classList.add("hide");
const s = (s) => s.classList.remove("hide");
let q = 1;
let step = 0;
const qN = $("#quest-name");
const qNum = $("#quest-num");
const qa1 = $("#qa1");
const qa2 = $("#qa2");
const qa3 = $("#qa3");
const qm = $(".quiz-messege");

let answers = {
	1: null,
	2: null,
	3: null,
	4: null,
	5: null,
	6: null,
	7: null,
	8: null,
	9: null,
	10: null,
};

$A("button").forEach((b) => {
	b.addEventListener("click", (e) => {
		const bI = (i) => e.target.getAttribute("id") === i;
		if (bI("b1")) {
			h($("#s1"));
			s($(".loader"));
			setTimeout(() => {
				h($(".loader"));
				s($("#s2"));
			}, 500);
		}
		if (bI("b2")) {
			h($("#s2"));
			s($(".loader"));
			$(".loader__text").textContent = "Проверка совместимости...";
			setTimeout(() => {
				$(".loader__text").textContent = "Расчёт уровня взаимности...";
			}, 3000);
			setTimeout(() => {
				$(".loader__text").textContent = "Подтверждение чувств...";
			}, 6000);
			setTimeout(() => {
				h($(".loader"));
				s($("#s3"));
			}, 9000);
			setTimeout(() => {
				let counter = { value: 0 };
				let counter3 = { value: 0 };
				let counter2 = { value: 0 };

				anime({
					targets: counter,
					value: 100,
					round: 1,
					easing: `easeOutExpo`,
					duration: 3000,
					update: function () {
						$(".compat").textContent = counter.value + "%";
					},
				});
				anime({
					targets: counter,
					value: 100,
					round: 1,
					easing: `easeOutExpo`,
					duration: 3000,
					update: function () {
						$("#ml1").style.width = counter.value + "%";
					},
				});
				anime({
					targets: counter3,
					value: 100,
					round: 1,
					easing: `easeOutExpo`,
					duration: 3500,
					update: function () {
						$(".compat2").textContent = counter3.value + "%";
					},
				});
				anime({
					targets: counter3,
					value: 100,
					round: 1,
					easing: `easeOutExpo`,
					duration: 3500,
					update: function () {
						$("#ml2").style.width = counter3.value + "%";
					},
				});
				anime({
					targets: counter2,
					value: 100,
					round: 1,
					easing: `easeOutExpo`,
					duration: 4000,
					update: function () {
						$(".compat3").textContent = counter2.value + "%";
					},
				});
				anime({
					targets: counter2,
					value: 100,
					round: 1,
					easing: `easeOutExpo`,
					duration: 4000,
					update: function () {
						$("#ml3").style.width = counter2.value + "%";
					},
				});

				function scrambleText(elementId, finalText, duration = 1500) {
					const el = $(elementId);
					const chars =
						"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЭЮЯABCDEFGHIJKLMNOPQRSTUVWXYZабвгдеёжзийклмнопрстуфхцчшщъыьэюяabcdefghijklmnopqrstuvwxyz1234567890-=!@#$%^&*()_+`~[]{};:'\",<.>/?\\|/"; // можно добавить и латиницу/цифры
					const finalChars = finalText.split("");
					const totalFrames = 30; // сколько раз "моргнёт" текст за всю анимацию
					let frame = 0;

					const interval = setInterval(() => {
						frame++;
						const progress = frame / totalFrames; // от 0 до 1
						const revealCount = Math.floor(progress * finalChars.length); // сколько букв уже зафиксировано

						el.textContent = finalChars
							.map((char, i) => {
								if (char === " ") return " ";
								if (i < revealCount) return char; // буква уже "расшифрована"
								return chars[Math.floor(Math.random() * chars.length)]; // случайная буква
							})
							.join("");

						if (frame >= totalFrames) {
							clearInterval(interval);
							el.textContent = finalText; // подчищаем на всякий случай
						}
					}, duration / totalFrames);
				}

				// Запуск
				scrambleText("#mv1", "Необратим", 2500);
				scrambleText("#mv2", "Абсолютное", 2750);
				scrambleText("#mv3", "ЗАШКАЛИВАЕТ", 3000);
				setTimeout(() => {
					scrambleText("#mv4", "Идеальное соответствие", 3000);
				}, 3000);
				$(".res").classList.add("active");
				$(".result").classList.add("active");
			}, 9000);
		}
		if (bI("b3")) {
			h($("#s3"));
			$(".loader__text").textContent = "Заявка передана в Комитет по созданию пар...";
			s($(".loader"));
			setTimeout(() => {
				$(".loader__text").textContent = "Проверка данных обеих Сторон...";
			}, 2000);
			setTimeout(() => {
				$(".loader__text").textContent = "Формирование документов...";
			}, 4000);
			setTimeout(() => {
				$(".loader__text").textContent = "Печать и заверение...";
			}, 6000);
			setTimeout(() => {
				h($(".loader"));
				s($("#s4"));
			}, 8000);
		}
		if (bI("b4")) {
			function triggerDownload(fileName) {
				var element = document.createElement("a");
				element.setAttribute("href", fileName);
				element.setAttribute("download", fileName);
				element.style.display = "none";
				document.body.appendChild(element);
				element.click();
				document.body.removeChild(element);
			}
			triggerDownload("../assets/C001.pdf");
		}
	});
});

$A(".quiz-answer").forEach((qa) => {
	qa.addEventListener("click", (e) => {
		$A(".quiz-answer").forEach((qa) => qa.classList.remove("active"));
		const t = e.currentTarget.closest(".quiz-answer");
		t.classList.add("active");
		$("#s3 button").removeAttribute("disabled");
	});
});
