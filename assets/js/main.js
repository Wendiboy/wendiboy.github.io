// Scenario Data
const scenarios = [
	{
		question:
			'Насколько вы согласны: "Я готов покупать йогурт, если производитель заменит пластиковую крышку на бумажную мембрану, которую сложнее открывать и нельзя закрыть повторно, ради снижения следа пластика"?',
		pmfScore: '2.4',
		pmfLabel: 'Высокий риск оттока',
		pmfLabelColor: 'text-red-600',
		bars: [85, 70, 45, 20, 15, 10],
		barColors: [
			'bg-emerald-300',
			'bg-emerald-300',
			'bg-emerald-300',
			'bg-emerald-300',
			'bg-emerald-300',
			'bg-emerald-300',
		],
		scaleLabels: [
			'Полностью не согласен',
			'Скорее не согласен',
			'Нейтрально',
			'Скорее согласен',
			'Полностью согласен',
			'',
		],
		clusters: [
			{
				name: 'Прагматики',
				size: '62%',
				pmf: '1.8',
				color: 'bg-red-100',
				border: 'border-red-400',
				text: 'text-red-600',
				x: '20%',
				y: '30%',
			},
			{
				name: 'Эко-активисты',
				size: '18%',
				pmf: '4.6',
				color: 'bg-emerald-100',
				border: 'border-emerald-400',
				text: 'text-emerald-600',
				x: '55%',
				y: '20%',
			},
			{
				name: 'Инертные',
				size: '20%',
				pmf: '3.1',
				color: 'bg-blue-100',
				border: 'border-blue-400',
				text: 'text-blue-600',
				x: '70%',
				y: '55%',
			},
		],
		recommendation:
			'Внедрение мембраны без фиксации цены приведет к потере 14-18% доли рынка в течение первого квартала.',
		answers: [
			{
				name: 'Скептик-прагматик',
				avatar: 'bg-slate-700',
				text: 'Против. Бумажная мембрана постоянно рвется при открытии, куски попадают в йогурт...',
			},
			{
				name: 'Эко-сознательный',
				avatar: 'bg-emerald-600',
				text: 'Полностью поддерживаю. Да, открыть сложнее, но я готов потратить лишние 10 секунд...',
			},
			{
				name: 'Рационализатор',
				avatar: 'bg-blue-600',
				text: 'Мне всё равно на экологию, но если из-за бумажной крышки йогурт станет дешевле...',
			},
		],
	},
	{
		question:
			'Как вы отнесетесь к инициативе: все пятницы — "день без встреч и зумов", но с обязательным детальным отчетом о работе до 18:00?',
		pmfScore: '3.2',
		pmfLabel: 'Ложная стабильность',
		pmfLabelColor: 'text-amber-600',
		bars: [15, 25, 40, 75, 55, 30],
		barColors: [
			'bg-emerald-300',
			'bg-emerald-300',
			'bg-emerald-300',
			'bg-emerald-300',
			'bg-emerald-300',
			'bg-emerald-300',
		],
		scaleLabels: [
			'Резко негативно',
			'Скорее отрицательно',
			'Нейтрально',
			'Скорее положительно',
			'Полностью поддерживаю',
			'',
		],
		clusters: [
			{
				name: 'Senior-разработчики',
				size: '45%',
				pmf: '4.2',
				color: 'bg-emerald-100',
				border: 'border-emerald-400',
				text: 'text-emerald-600',
				x: '25%',
				y: '25%',
			},
			{
				name: 'Middle-менеджмент',
				size: '35%',
				pmf: '1.5',
				color: 'bg-red-100',
				border: 'border-red-400',
				text: 'text-red-600',
				x: '60%',
				y: '60%',
			},
			{
				name: 'Администрация',
				size: '20%',
				pmf: '3.5',
				color: 'bg-blue-100',
				border: 'border-blue-400',
				text: 'text-blue-600',
				x: '65%',
				y: '20%',
			},
		],
		recommendation:
			'Реформа создаст конфликтную зону между Dev и PM. Необходимо упростить форму отчета.',
		answers: [
			{
				name: 'Senior Developer',
				avatar: 'bg-emerald-600',
				text: 'Наконец-то. Встречи — главный убийца продуктивности. Я готов потратить 15 минут на отчет...',
			},
			{
				name: 'Project Manager',
				avatar: 'bg-amber-600',
				text: 'Очень сомневаюсь. Если я не созвонюсь с командой в пятницу, я не буду понимать статус...',
			},
			{
				name: 'Middle Designer',
				avatar: 'bg-purple-600',
				text: 'Для меня это стресс. Я и так веду задачи в Jira, теперь еще и отдельный отчет...',
			},
		],
	},
	{
		question:
			'Вы продолжите пользоваться бесплатным банком, если перед каждым входом нужно будет смотреть 5-секундный рекламный ролик?',
		pmfScore: '2.8',
		pmfLabel: 'Критическое падение удобства',
		pmfLabelColor: 'text-orange-600',
		bars: [80, 65, 50, 30, 20, 15],
		barColors: [
			'bg-emerald-300',
			'bg-emerald-300',
			'bg-emerald-300',
			'bg-emerald-300',
			'bg-emerald-300',
			'bg-emerald-300',
		],
		scaleLabels: [
			'Категорически не согласен',
			'Скорее не согласен',
			'Буду терпеть, но раздражает',
			'Почти не обращу внимания',
			'Полностью согласен',
			'',
		],
		clusters: [
			{
				name: 'On-the-go',
				size: '55%',
				pmf: '1.2',
				color: 'bg-red-100',
				border: 'border-red-400',
				text: 'text-red-600',
				x: '20%',
				y: '35%',
			},
			{
				name: 'Safe-Holders',
				size: '30%',
				pmf: '4.1',
				color: 'bg-emerald-100',
				border: 'border-emerald-400',
				text: 'text-emerald-600',
				x: '60%',
				y: '25%',
			},
			{
				name: 'Техно-оптимисты',
				size: '15%',
				pmf: '3.8',
				color: 'bg-blue-100',
				border: 'border-blue-400',
				text: 'text-blue-600',
				x: '70%',
				y: '60%',
			},
		],
		recommendation:
			'Внедрение фичи в обязательном порядке вызовет снижение DAU на 12%. Рекомендуется сделать рекламу опциональной.',
		answers: [
			{
				name: 'Активный горожанин',
				avatar: 'bg-red-600',
				text: 'Это ужасно. Я часто перевожу деньги за кофе или проезд буквально на ходу...',
			},
			{
				name: 'Консерватор',
				avatar: 'bg-emerald-600',
				text: 'Правильное решение. Сейчас столько случаев мошенничества, что лучше я лишний раз...',
			},
			{
				name: 'Техно-гик',
				avatar: 'bg-blue-600',
				text: 'В целом норм, если ролик можно пропустить через 2 секунды. Но если принудительно...',
			},
		],
	},
]

let currentScenario = 0
let isAnimating = false

function typeWriter(text, element, speed = 25) {
	return new Promise(resolve => {
		element.textContent = ''
		element.classList.add('typing-cursor')
		let i = 0

		function type() {
			if (i < text.length) {
				element.textContent += text.charAt(i)
				i++
				setTimeout(type, speed)
			} else {
				element.classList.remove('typing-cursor')
				resolve()
			}
		}
		type()
	})
}

function createChartBars(scenario) {
	const container = document.getElementById('chartContainer')
	container.innerHTML = ''

	// Only show 5 bars
	const displayCount = 5

	for (let i = 0; i < displayCount; i++) {
		const height = scenario.bars[i]
		const colorClass = scenario.barColors[i]
		const label = scenario.scaleLabels[i]

		const barWrapper = document.createElement('div')
		barWrapper.className = 'flex-1 flex flex-col items-center gap-1'

		const barContainer = document.createElement('div')
		barContainer.className =
			'w-full bg-slate-100 rounded-t-md relative h-20 flex items-end overflow-hidden'

		const bar = document.createElement('div')
		bar.className = `w-full ${colorClass} rounded-t-md transition-all duration-700 ease-out`
		bar.style.height = '0%'

		barContainer.appendChild(bar)

		const labelEl = document.createElement('span')
		labelEl.className =
			'text-[8px] text-slate-500 text-center leading-tight h-8 flex items-start justify-center px-0.5'
		labelEl.innerHTML = label

		barWrapper.appendChild(barContainer)
		barWrapper.appendChild(labelEl)
		container.appendChild(barWrapper)

		// Trigger animation
		setTimeout(
			() => {
				bar.style.height = height + '%'
			},
			100 + i * 60,
		)
	}
}

function updateClusters(scenario) {
	const clusters = [1, 2, 3]
	clusters.forEach((num, idx) => {
		const cluster = scenario.clusters[idx]
		const el = document.getElementById(`cluster${num}`)
		const circle = el.querySelector('div')
		const sizeEl = document.getElementById(`cluster${num}Size`)
		const nameEl = document.getElementById(`cluster${num}Name`)
		const pmfEl = document.getElementById(`cluster${num}PMF`)

		el.style.left = cluster.x
		el.style.top = cluster.y

		circle.className = `w-12 h-12 rounded-full ${cluster.color} border-2 ${cluster.border} flex items-center justify-center transition-all duration-500`
		if (idx === 0) circle.classList.add('cluster-pulse')
		else circle.classList.remove('cluster-pulse')

		sizeEl.textContent = cluster.size
		sizeEl.className = `text-[10px] font-bold ${cluster.text}`
		nameEl.textContent = cluster.name
		pmfEl.textContent = cluster.pmf
	})
}

function showAnswers(scenario) {
	const container = document.getElementById('answersContainer')
	container.innerHTML =
		'<div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80 pointer-events-none z-10"></div>'

	scenario.answers.forEach((answer, index) => {
		setTimeout(() => {
			const div = document.createElement('div')
			div.className =
				'message-pop bg-white rounded-lg p-2.5 border border-slate-100 shadow-sm flex gap-2.5'
			div.innerHTML = `
                        <div class="w-7 h-7 ${answer.avatar} rounded-full flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">
                            ${answer.name.charAt(0)}
                        </div>
                        <div class="flex-1 min-w-0">
                            <p class="text-[11px] font-semibold text-slate-700 mb-0.5">${answer.name}</p>
                            <p class="text-[11px] text-slate-500 leading-relaxed line-clamp-2">${answer.text}</p>
                        </div>
                    `
			container.appendChild(div)
		}, index * 500)
	})
}

async function runScenario(index) {
	if (isAnimating) return
	isAnimating = true

	const scenario = scenarios[index]

	document.querySelectorAll('.scenario-indicator').forEach((ind, i) => {
		ind.classList.toggle('active', i === index)
	})

	const windows = ['window1', 'window2', 'window3']
	windows.forEach(id => {
		const el = document.getElementById(id)
		el.style.transform = 'scale(0.97)'
		el.style.opacity = '0.6'
	})

	await new Promise(r => setTimeout(r, 250))

	document.getElementById('pmfScore').innerHTML =
		`${scenario.pmfScore}<span class="text-sm text-slate-400 font-normal">/5</span>`
	const labelEl = document.getElementById('pmfLabel')
	labelEl.textContent = scenario.pmfLabel
	labelEl.className = `text-xs font-semibold ${scenario.pmfLabelColor}`

	document.getElementById('recommendation').innerHTML =
		`<span class="font-semibold">Рекомендация:</span> ${scenario.recommendation}`

	windows.forEach((id, i) => {
		setTimeout(() => {
			const el = document.getElementById(id)
			el.style.transform = 'scale(1)'
			el.style.opacity = '1'
		}, i * 100)
	})

	await typeWriter(scenario.question, document.getElementById('questionText'))

	createChartBars(scenario)
	updateClusters(scenario)
	showAnswers(scenario)

	await new Promise(r => setTimeout(r, 4500))
	isAnimating = false
}

function nextScenario() {
	if (!isAnimating) {
		currentScenario = (currentScenario + 1) % scenarios.length
		runScenario(currentScenario)
	}
}

function initSpeedPipeline() {
	const pipeline = document.getElementById('speedPipeline')
	if (!pipeline) return

	const steps = Array.from(pipeline.querySelectorAll('.pipeline-step'))
	const statusText = document.getElementById('pipelineStatusText')
	const progressBar = document.getElementById('pipelineProgressBar')
	let currentStep = 0

	function renderPipeline(index) {
		steps.forEach((step, stepIndex) => {
			step.classList.toggle('is-active', stepIndex === index)
			step.classList.toggle('is-complete', stepIndex < index)
		})

		if (statusText) {
			statusText.textContent = steps[index].dataset.stepLabel || ''
		}

		if (progressBar) {
			progressBar.style.width = `${((index + 1) / steps.length) * 100}%`
		}
	}

	renderPipeline(currentStep)

	setInterval(() => {
		currentStep = (currentStep + 1) % steps.length
		renderPipeline(currentStep)
	}, 1800)
}

document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.scenario-indicator').forEach((ind, i) => {
		ind.addEventListener('click', () => {
			if (!isAnimating) {
				currentScenario = i
				runScenario(i)
			}
		})
	})

	runScenario(0)
	initSpeedPipeline()
	setInterval(nextScenario, 9000)

	// Challenges Carousel Logic
	const track = document.getElementById('challengesTrack');
	if(track) {
		const prevBtn = document.getElementById('challengePrev');
		const nextBtn = document.getElementById('challengeNext');
		const dots = document.querySelectorAll('.challenge-dot');
		let currentPos = 0;
		const totalSlides = 3;

		function updateCarousel() {
			track.style.transform = `translateX(-${currentPos * 100}%)`;
			dots.forEach((dot, index) => {
				if (index === currentPos) {
					dot.classList.remove('bg-slate-300');
					dot.classList.add('bg-emerald-500');
				} else {
					dot.classList.add('bg-slate-300');
					dot.classList.remove('bg-emerald-500');
				}
			});
		}

		if (prevBtn) {
			prevBtn.addEventListener('click', () => {
				currentPos = (currentPos - 1 + totalSlides) % totalSlides;
				updateCarousel();
			});
		}

		if (nextBtn) {
			nextBtn.addEventListener('click', () => {
				currentPos = (currentPos + 1) % totalSlides;
				updateCarousel();
			});
		}

		dots.forEach((dot, index) => {
			dot.addEventListener('click', () => {
				currentPos = index;
				updateCarousel();
			});
		});
	}
})
