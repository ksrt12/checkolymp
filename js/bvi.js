/*
  bvi.js
  (c) 2020 kazakovstepan
  for ITMO University
*/

var EGE,
	nonconf = ' Не подтв.',
	yesconf = ' Подтв.';
const ia = 'ИД',
	bvi = 'БВИ',
	sto = '100',
	wtf = '—',
	itin = 'спросить у Итина',
	DEF_EGE = {
		'русский язык': 100,
		'математика': 100,
		'иностранный язык': 100,
		'физика': 100,
		'химия': 100,
		'биология': 100,
		'обществознание': 100,
		'информатика': 100
	},
	SUBJ_ID = {
		'математика': 'm',
		'русский язык': 'r',
		'информатика': 'i',
		'физика': 'f',
		'иностранный язык': 'e',
		'обществознание': 'o',
		'химия': 'c',
		'биология': 'b'
	};
SUBJ_EGE = {
	'автоматизация бизнес-процессов': ['информатика', 'обществознание'],
	'автономные транспортные системы': 'информатика',
	'академический рисунок, живопись, композиция, история искусства и культуры': 'информатика',
	'анализ космических снимков и геопространственных данных': 'физика',
	'архитектура, изобразительные и прикладные виды искусств': 'информатика',
	'астрономия и науки о земле': 'физика',
	'астрономия': 'физика',
	'аэрокосмические системы': 'информатика',
	'беспилотные авиационные системы': 'информатика',
	'биология': 'биология',
	'водные робототехнические системы': 'информатика',
	'восточные языки': 'иностранный язык',
	'графика': 'информатика',
	'графический дизайн': 'информатика',
	'гуманитарные и социальные науки': 'обществознание',
	'дизайн': 'информатика',
	'естественные науки': ['химия', 'физика', 'биология'],
	'журналистика': false,
	'инженерное дело': ['физика', 'информатика'],
	'инженерные биологические системы: агробиотехнологии': 'биология',
	'инженерные биологические системы': 'биология',
	'инженерные науки': ['физика', 'информатика'],
	'инженерные системы': ['физика', 'информатика'],
	'иностранные языки': 'иностранный язык',
	'иностранный язык': 'иностранный язык',
	'интеллектуальные робототехнические системы': 'информатика',
	'интеллектуальные энергетические системы': 'информатика',
	'информатика': 'информатика',
	'информационная безопасность': 'информатика',
	'информационные и коммуникационные технологии': 'информатика',
	'информационные технологии': 'информатика',
	'искусственный интеллект': 'информатика',
	'искусство, черчение': 'информатика',
	'китайский язык': 'иностранный язык',
	'комплекс предметов (физика, информатика, математика)': ['физика', 'информатика'],
	'компьютерная безопасность': 'информатика',
	'компьютерное моделирование и графика': 'информатика',
	'космонавтика': 'физика',
	'криптография': 'математика',
	'летающая робототехника': 'информатика',
	'лингвистика': 'иностранный язык',
	'математика': 'математика',
	'медицина': 'биология',
	'механика и математическое моделирование': 'физика',
	'наносистемы и наноинженерия': ['физика', 'химия'],
	'нанотехнологии': ['химия', 'физика', 'биология'],
	'нейротехнологии и когнитивные науки': 'информатика',
	'нейротехнологии': 'информатика',
	'обществознание': 'обществознание',
	'педагогические науки и образование': false,
	'передовые производственные технологии': 'информатика',
	'политология': 'обществознание',
	'программная инженерия финансовых технологий': 'информатика',
	'разработка приложений виртуальной и дополненной реальности': 'информатика',
	'рисунок, живопись, скульптура, дизайн': 'информатика',
	'рисунок': 'информатика',
	'робототехника': 'информатика',
	'русский язык': false,
	'системы связи и дистанционного зондирования земли': ['физика', 'информатика'],
	'социология': 'обществознание',
	'спутниковые системы': 'информатика',
	'техника и технологии': 'физика',
	'технический рисунок и декоративная композиция': 'информатика',
	'технологии беспроводной связи': 'информатика',
	'умный город': ['физика', 'информатика'],
	'физика': 'физика',
	'филология': false,
	'финансовая грамотность': 'обществознание',
	'химия': 'химия',
	'экономика': 'обществознание',
	'электроника и вычислительная техника': 'информатика',
	'электронная инженерия: умный дом': 'информатика',
	'ядерные технологии': 'физика'
};

function checkBVI(stream, grad_in, subj_in, name_in, lvl_in, dip_in) {

	let status,
		grad = Number(grad_in),
		lvl = Number(lvl_in),
		dip = Number(dip_in),
		subj = subj_in.toLowerCase(),
		name = name_in.replace(/[«»]+/g, '"');

	function itt() {
		return (lvl === 1) ? bvi : sto;
	}

	function born() {
		return (lvl === 2) ? bvi : itin;
	}

	switch (stream) {
		case '01.03.02':
			switch (subj) {
				case 'информатика':
					switch(name) {
						case 'Московская олимпиада школьников':
						case 'Всесибирская открытая олимпиада школьников':
						case 'Олимпиада школьников "Ломоносов"':
						case 'Олимпиада школьников по информатике и программированию':
						case 'Олимпиада школьников по программированию "ТехноКубок"':
						case 'Олимпиада школьников Санкт-Петербургского государственного университета':
						case 'Олимпиада школьников СПбГУ':
						case 'Открытая олимпиада школьников по программированию':
						case 'Межрегиональная олимпиада школьников "Высшая проба"':
						case 'Всероссийская олимпиада школьников "Высшая проба"':
							status = (lvl === 1) ? bvi : sto;
							break;
						case 'Открытая олимпиада школьников':
							status = (lvl === 1) ? ((grad === 11) || ((grad === 10) && (dip === 1))) ? bvi : sto : sto;
							break;
						case 'Олимпиада Университета Иннополис "Innopolis Open"':
							status = (lvl === 2) ? bvi : sto;
							break;
						default:
							status = sto;
					}
					break;
				case 'информационные технологии':
					status = sto; // ????
					break;
				case 'информатика и икт':
					status = (dip === 2) ? bvi : sto;
					break;
				case 'программирование':
					switch(name) {
						case 'Олимпиада школьников "Шаг в будущее"':
							status = ((lvl === 2) && (dip === 1)) ? bvi : sto;
							break;
						case 'Вузовско-академическая олимпиада по программированию на Урале':
							status = ((lvl === 3) && (dip === 1)) ? bvi : sto;
							break;
						default:
							status = sto;
					}
					break;
				case 'математика':
					switch(name) {
						case 'Межрегиональная олимпиада школьников "Высшая проба"':
						case 'Всероссийская олимпиада школьников "Высшая проба"':
						case 'Московская олимпиада школьников':
						case 'Олимпиада школьников Санкт-Петербургского государственного университета':
						case 'Санкт-Петербургская олимпиада школьников':
						case 'Турнир городов':
							status = (lvl === 1) ? bvi : sto;
							break;
						case 'Олимпиада школьников "Ломоносов"':
						case 'Олимпиада школьников "Покори Воробьѐвы горы!"':
						case 'Олимпиада школьников "Покори Воробьёвы горы!"':
							status = ((lvl === 1) && (dip === 1)) ? bvi : sto;
							break;
						case 'Всесибирская открытая олимпиада школьников':	
						case 'Межрегиональная олимпиада школьников им. И.Я.Верченко':
						case 'Межрегиональная олимпиада школьников на базе ведомственных образовательных организаций':
						case 'Объединённая межвузовская математическая олимпиада школьников':
						case 'Объединённая международная математическая олимпиада "Формула Единства" / "Третье тысячелетие"':
						case 'Олимпиада Курчатов':
						case 'Олимпиада школьников "Физтех"':
						case 'Отраслевая физико-математическая олимпиада школьников "Росатом"':
						case 'Олимпиада "Росатом"':
							status = ((lvl === 2) && (dip === 1)) ? bvi : sto;
							break;
						case 'Олимпиада Юношеской математической школы':
							status = (lvl === 2) ? bvi : sto;
							break;
						case 'Турнир имени М.В. Ломоносова':
						case 'Турнир Ломоносова':
							status = (lvl === 2) ? bvi : sto;
							break;
						case 'Открытая олимпиада школьников':
						case 'Межрегиональная олимпиада школьников по математике "САММАТ"':
						case 'Многопрофильная олимпиада школьников Уральского федерального университета "Изумруд"':
						case 'Олимпиада Университета Иннополис "Innopolis Open"':
							status = ((lvl === 3) && (dip === 1)) ? bvi : sto;
							break;
						case 'Межрегиональная олимпиада школьников по математике и криптографии':
							status = itin;
							break;
						default:
							status = sto;
					}
					break;
				case 'большие данные и машинное обучение':
					status = born();
					break;
				case 'информационные и коммуникационные технологии':
				case 'искусственный интеллект':
				case 'умный город':
					status = sto;
					break;
				default:
					status = wtf;
			}
			break;
		case '09.03.02':
			if (grad === 11) {
				switch (subj) {
					case 'информатика':
						status = (lvl === 3) ? sto : bvi;
						break;
					case 'информационные технологии':
						status = sto; //itt(); куда???
						break;
					case 'информатика и икт':
						status = itin; //(dip === 2) ? bvi : sto; а на ПМИ есть....
						break;
					case 'программирование':
						status = ((lvl === 2) && (dip === 1)) ? bvi : sto;
						break;
					case 'математика':
						status = (lvl === 3) ? (name === 'Открытая олимпиада школьников') ? bvi : sto : bvi;
						break;
					case 'большие данные и машинное обучение':
						status = itin; //(lvl === 2) ? (dip === 1) ? bvi : sto : wtf; тоже исчезло
						break;
					case 'информационные и коммуникационные технологии':
					case 'искусственный интеллект':
					case 'умный город':
						status = sto;
						break;
					default:
						status = wtf;
				}
			} else {
				status = sto
			}
			break;
		case '09.03.03':
			switch (subj) {
				case 'информатика':
				case 'математика':
				case 'информационные и коммуникационные технологии':
				case 'искусственный интеллект':
				case 'умный город':
					status = bvi;
					break;
				case 'информационные технологии':
					status = itt();
					break;
				case 'большие данные и машинное обучение':
					status = born();
					break;
				case 'информатика и икт':
				case 'программирование':
					status = (dip === 2) ? bvi : sto;
					break;
				default:
					status = wtf;
			}
			break;
		case '11.03.02':
			switch (subj) {
				case 'информатика':
				case 'математика':
				case 'информационные и коммуникационные технологии':
				case 'искусственный интеллект':
				case 'умный город':
				case 'спутниковые системы':
					status = bvi;
					break;
				case 'информационные технологии':
					status = itt();
					break;
				case 'большие данные и машинное обучение':
					status = born();
					break;
				case 'информатика и икт':
				case 'программирование':
				case 'технологии беспроводной связи':
					status = (dip === 2) ? bvi : sto;
					break;
				default:
					status = wtf;
			}
			break;
		case '45.03.04':
			switch (subj) {
				case 'информатика':
				case 'математика':
				case 'информационные и коммуникационные технологии':
				case 'искусственный интеллект':
				case 'умный город':
				case 'иностранный язык':
				case 'иностранные языки':
				case 'китайский язык':
				case 'восточные языки':
				case 'лингвистика':
					status = bvi;
					break;
				case 'информационные технологии':
					status = itt();
					break;
				case 'большие данные и машинное обучение':
				case 'информатика и икт':
				case 'программирование':
					status = born();
					break;
				default:
					status = wtf;
			}
			break;
		case '09.03.01':
		case '09.03.04':
		case '10.03.01':
		case '11.03.03':
		case '12.03.01':
		case '13.03.02':
		case '15.03.04':
		case '15.03.06':
		case '23.03.03':
		case '24.03.02':
		case '27.03.04':
			switch (subj) {
				case 'информационные технологии':
					status = itt();
					break;
				case 'криптография':
					status = itin;
					break;
				case 'математика':
				case 'информатика':
				case 'компьютерная безопасность':
				case 'информационная безопасность':
				case 'автономные транспортные системы':
				case 'аэрокосмические системы':
				case 'интеллектуальные энергетические системы':
				case 'нейротехнологии':
				case 'программная инженерия финансовых технологий':
				case 'технологии беспроводной связи':
				case 'робототехника':
				case 'летающая робототехника':
				case 'инженерные науки':
				case 'компьютерное моделирование и графика':
				case 'спутниковые системы':
				case 'инженерные системы':
				case 'инженерные науки':
				case 'информационные и коммуникационные технологии':
				case 'искусственный интеллект':
					status = bvi;
					break;
				case 'разработка приложений виртуальной и дополненной реальности':
				case 'нейротехнологии и когнитивные науки':
				case 'водные робототехнические системы':
				case 'беспилотные авиационные системы':
				case 'электроника и вычислительная техника':
				case 'инженерное дело':
				case 'большие данные и машинное обучение':
				case 'информатика и икт':
				case 'программирование':
					status = born();
					break;
				case 'интеллектуальные робототехнические системы':
					status = (lvl === 3) ? itin : bvi;
					break;
				default:
					status = wtf;
			}
			break;

		case '44.03.04':
			switch (subj) {
				case 'информационные технологии':
					status = itt();
					break;
				case 'математика':
				case 'информатика':
				case 'информационные и коммуникационные технологии':
				case 'искусственный интеллект':
				case 'нейротехнологии':
				case 'программная инженерия финансовых технологий':
				case 'компьютерное моделирование и графика':
					status = bvi;
					break;
					// графика start
				case 'технический рисунок и декоративная композиция':
				case 'академический рисунок, живопись, композиция, история искусства и культуры':
				case 'рисунок, живопись, скульптура, дизайн':
				case 'дизайн':
					status = (lvl === 1) ? bvi : itin;
					break;
				case 'искусство, черчение':
				case 'графический дизайн':
				case 'рисунок':
				case 'графика':
				case 'архитектура, изобразительные и прикладные виды искусств':
					// графика end
				case 'автоматизация бизнес-процессов':
				case 'разработка приложений виртуальной и дополненной реальности':
				case 'нейротехнологии и когнитивные науки':
				case 'электроника и вычислительная техника':
				case 'большие данные и машинное обучение':
				case 'информатика и икт':
				case 'программирование':
					status = born();
					break;

				default:
					status = wtf;
			}
			break;

		case '12.03.02':
		case '12.03.03':
		case '12.03.05':
		case '12.05.01':
			switch (subj) {
				case 'информационные технологии':
					status = itt();
					break;
				case 'информатика':
				case 'математика':
				case 'информационные и коммуникационные технологии':
				case 'техника и технологии':
				case 'естественные науки':
				case 'инженерное дело': //так 2 или всё???
				case 'инженерные науки':
				case 'инженерные системы':
				case 'системы связи и дистанционного зондирования земли':
				case 'ядерные технологии':
				case 'технологии беспроводной связи':
				case 'нанотехнологии':
				case 'анализ космических снимков и геопространственных данных':
				case 'астрономия':
				case 'астрономия и науки о земле':
				case 'физика':
				case 'аэрокосмические системы':
				case 'комплекс предметов (физика, информатика, математика)':
					status = bvi;
					break;
				case 'программирование':
				case 'информатика и икт':
				case 'электроника и вычислительная техника':
				case 'наносистемы и наноинженерия':
				case 'передовые производственные технологии':
				case 'космонавтика':
					status = born();
					break;
				default:
					status = wtf;
			}
			break;
		case '16.03.01':
		case '16.03.03':
			switch (subj) {
				case 'математика':
				case 'техника и технологии':
				case 'естественные науки':
				case 'инженерное дело': //так 2 или всё???
				case 'инженерные науки':
				case 'инженерные системы':
				case 'системы связи и дистанционного зондирования земли':
				case 'ядерные технологии':
				case 'технологии беспроводной связи': //зачем тут???
				case 'нанотехнологии':
				case 'анализ космических снимков и геопространственных данных':
				case 'астрономия':
				case 'астрономия и науки о земле':
				case 'физика':
				case 'аэрокосмические системы':
				case 'комплекс предметов (физика, информатика, математика)':
				case 'робототехника': //зачем она тут???
				case 'нейротехнологии':
					status = bvi;
					break;
					//case 'механика и математическое моделирование':куда?
				case 'наносистемы и наноинженерия':
				case 'передовые производственные технологии':
				case 'космонавтика':
				case 'нейротехнологии и когнитивные науки':
					status = born();
					break;
				default:
					status = wtf;
			}
			break;
		case '12.03.04':
		case '18.03.02':
		case '19.03.01':
			switch (subj) {
				case 'математика':
				case 'нанотехнологии':
				case 'естественные науки':
				case 'химия':
				case 'инженерные биологические системы':
				case 'инженерные биологические системы: агробиотехнологии':
				case 'биология':
				case 'техника и технологии':
					status = bvi;
					break;
				case 'наносистемы и наноинженерия':
					status = (lvl === 2) ? bvi : wtf;
					break;
				default:
					status = wtf;
			}
			break;
		case '18.03.01':
			switch (subj) {
				case 'математика':
					status = sto;
					break;
				case 'нанотехнологии':
				case 'естественные науки':
				case 'химия':
					status = bvi;
					break;
				case 'наносистемы и наноинженерия':
					status = (lvl === 2) ? bvi : wtf;
					break;
				default:
					status = wtf;
			}
			break;
		case '27.03.05':
		case '38.03.05':
			switch (subj) {
				case 'информационные технологии':
					status = itt();
					break;
				case 'математика':
				case 'информатика':
				case 'иностранный язык':
				case 'иностранные языки':
				case 'китайский язык':
				case 'восточные языки':
				case 'лингвистика':
				case 'экономика':
				case 'обществознание':
				case 'социология':
				case 'гуманитарные и социальные науки':
				case 'финансовая грамотность':
				case 'естественные науки':
				case 'автоматизация бизнес-процессов':
					status = bvi;
					break;
				default:
					status = wtf;
			}
			break;
		default:
			status = wtf;
	}

	if (EGE === undefined) {
		EGE = DEF_EGE;
		yesconf = '';
		nonconf = '';
	}

	if (subj === 'русский язык') {
		return (checkConfNum(EGE[subj], 75) === 1) ? sto : wtf;
	}
	//let ch60 = checkConf(subj, 60);
	let ch75 = checkConf(subj, 75);
/*
	function chwtf() {
		return ((ch60 === wtf) || (ch60 === itin)) ? ch60 : ia + ch60;
	}
*/
	if (status === wtf) {
		status = ia + ch75;
	} else if ((status === bvi) || (status === sto)) {
		if (ch75 === yesconf) {
			status += yesconf;
		} else {
			status += nonconf;
		}
	}

	return status;
}

function checkConfNum(curr_points, conf_points) {
	return (curr_points >= conf_points) ? 1 : 0;
}

function checkConf(olymp_profile, conf_points) {
	let stat = 0;
	const conf_subj = SUBJ_EGE[olymp_profile];

	if (conf_subj === undefined) {
		return itin;
	} else if (conf_subj === false) {
		return wtf;
	} else if (Array.isArray(conf_subj)) {
		for (let i of conf_subj) {
			stat += checkConfNum(EGE[i], conf_points);
		}
	} else {
		stat = checkConfNum(EGE[conf_subj], conf_points);
	}

	return (stat > 0) ? yesconf : nonconf;
}

function makeselector() {
	let streams = [
		"01.03.02",
		"09.03.01",
		"09.03.02",
		"09.03.03",
		"09.03.04",
		"10.03.01",
		"11.03.02",
		"11.03.03",
		"12.03.01",
		"12.03.02",
		"12.03.03",
		"12.03.04",
		"12.03.05",
		"12.05.01",
		"13.03.02",
		"15.03.04",
		"15.03.06",
		"16.03.01",
		"16.03.03",
		"18.03.01",
		"18.03.02",
		"19.03.01",
		"23.03.03",
		"24.03.02",
		"27.03.04",
		"27.03.05",
		"38.03.05",
		"44.03.04",
		"45.03.04",
	];
	let sstream = document.createElement('select');
	sstream.autofocus = true;
	sstream.addEventListener('change', function() {
		update_status(this.value);
	});
	for (let i = 0; i < streams.length; i++) {
		let option = document.createElement("option");
		option.value = streams[i];
		option.text = streams[i];
		sstream.appendChild(option);
	}
	return sstream;
}