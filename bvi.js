/*
  bvi.js
  (c) 2020 kazakovstepan
  for ITMO University
*/

var EGE;
var IA = {
		'автономные транспортные системы':'информатика',
		'анализ космических снимков и геопространственных данных':'информатика',
		'астрономия':'физика',
		'астрономия и науки о земле':'физика',
		'беспилотные авиационные системы':'информатика',
		'биология':'биология',
		'водные робототехнические системы':'информатика',
		'восточные языки':'иностранный язык',
		'гуманитарные и социальные науки':'обществознание',
		'естественные науки':['химия','физика','биология'],
		'инженерное дело':'физика',
		'инженерные биологические системы':'биология',
		'инженерные науки':['физика','информатика'],
		'инженерные системы':'физика',
		'иностранный язык':'иностранный язык',
		'иностранные языки':'иностранный язык',
		'интеллектуальные робототехнические системы':'информатика',
		'интеллектуальные энергетические системы':'информатика',
		'информатика':'информатика',
		'информационная безопасность':'информатика',
		'информационные технологии':'информатика',
		'китайский язык':'иностранный язык',
		'компьютерная безопасность':'информатика',
		'космонавтика':'физика',
		'криптография':'математика',
		'лингвистика':'иностранный язык',
		'математика':'математика',
		'медицина':'биология',
		'механика и математическое моделирование':'физика',
		'наносистемы и наноинженерия':'физика',
		'нанотехнологии':['химия','физика','биология'],
		'нейротехнологии и когнитивные науки':'информатика',
		'обществознание':'обществознание',
		'передовые производственные технологии':'информатика',
		'политология':'обществознание',
		'программная инженерия финансовых технологий':'информатика',
		'разработка приложений виртуальной и дополненной реальности':'информатика',
		'робототехника':'информатика',
		'русский язык':'русский язык',
		'системы связи и дистанционного зондирования земли':['физика','информатика'],
		'социология':'обществознание',
		'техника и технологии':'физика',
		'технологии беспроводной связи':'информатика',
		'умный город':['физика','информатика'],
		'физика':'физика',
		'химия':'химия',
		'экономика':'обществознание',
		'электронная инженерия: умный дом':'информатика',
		'ядерные технологии':'физика',
		'филология':false
	}

function getEGE() {
	EGE = params.EGE.split(',').reduce(
		function(p, e) {
			var a = e.split(':');
			p[decodeURIComponent(a[0]).toLowerCase()] = decodeURIComponent(a[1]);
			return p;
		}, {}
	);
}

function checkBVI(stream,subj_in,name_in,lvl_in,dip_in){

var status,
	lvl = Number(lvl_in),
	dip = Number(dip_in),
	subj = subj_in.toLowerCase(),
	name = name_in.replace(/[«»]+/g, '"').replace('cистемы', 'системы'),
	bvi = 'БВИ (проверить ЕГЭ)',
	sto = '100',
	wtf = '—',
	itin = 'спросить у Итина';

function itt() {
	if (lvl === 1) {
		status = bvi;
	} else {
		status = wtf;
	}
}

switch(stream) {
	case '01.03.02':
		switch(subj) {
			case 'информатика':
				switch(name) {
					case 'Московская олимпиада школьников':
					case 'Олимпиада школьников "Ломоносов"':
					case 'Олимпиада школьников по информатике и программированию':
					case 'Открытая олимпиада школьников по программированию':
					case 'Всесибирская открытая олимпиада школьников':
					case 'Всероссийская олимпиада школьников "Высшая проба"':
					case 'Межрегиональная олимпиада школьников "Высшая проба"':
					case 'Олимпиада Университета Иннополис "Innopolis Open"':
					case 'Олимпиада школьников Санкт-Петербургского государственного университета':
					case 'Олимпиада школьников по программированию "ТехноКубок"':
						if (lvl === 3) {
							status = sto;
						} else {
							status = bvi;
						}
						break;
					case 'Открытая олимпиада школьников':
						if ((lvl !== 3) && (dip === 1)) {
							status = bvi;
						} else {
							status = sto;
						}
						break;
					default:
						status = sto;
				}
				break;
			case 'математика':
				switch(name) {
					case 'Межрегиональная олимпиада школьников "Высшая проба"':
					case 'Всероссийская олимпиада школьников "Высшая проба"':
					case 'Межрегиональная олимпиада школьников по математике и криптографии':
					case 'Олимпиада школьников "Ломоносов"':
					case 'Олимпиада школьников "Покори Воробьѐвы горы!"':
					case 'Олимпиада школьников "Покори Воробьёвы горы!"':
					case 'Всесибирская открытая олимпиада школьников':
					case 'Межрегиональная олимпиада школьников на базе ведомственных образовательных организаций':
					case 'Объединённая межвузовская математическая олимпиада школьников':
					case 'Объединённая международная математическая олимпиада "Формула Единства" / "Третье тысячелетие"':
					case 'Межрегиональная олимпиада школьников им. И.Я.Верченко':
					case 'Олимпиада Курчатов':
					case 'Олимпиада школьников "Физтех"':
					case 'Олимпиада Юношеской математической школы':
					case 'Отраслевая физико-математическая олимпиада школьников "Росатом"':
					case 'Турнир имени М.В. Ломоносова':
						if ((lvl !== 3) && (dip === 1)) {
							status = bvi;
						} else {
							status = sto;
						}
						break;
					case 'Открытая олимпиада школьников':
						if ((lvl === 3) && (dip === 1)) {
							status = bvi;
						} else {
							status = sto;
						}
						break;
					case 'Московская олимпиада школьников':
					case 'Олимпиада школьников Санкт-Петербургского государственного университета':
					case 'Санкт-Петербургская олимпиада школьников':
					case 'Турнир городов':
						if (lvl === 3) {
							status = sto;
						} else {
							status = bvi;
						}
						break;
					default:
						status = sto;
				}
				break;
			case 'компьютерная безопасность':
				if ((dip === 1) && (lvl !== 3)) {
					if (name == 'Межрегиональная олимпиада школьников по информатике и компьютерной безопасности') {
						status = bvi;
					} else {
						status = itin;
					}
				} else {
					status = wtf;
				}
				break;
			case 'информационные технологии':
				if (lvl === 1) {
					if (dip === 1) {
						status = bvi;
					} else {
						status = sto;
					}
				} else {
					status = wtf;
				}
				break;
			case 'русский язык':
				status = sto;
				break;
			default:
				status = wtf;
		}
		break;
	case '09.03.02':
		switch(name){
			case 'Открытая олимпиада школьников':
				switch(subj) {
					case 'математика':
						if (lvl === 3) {
							status = bvi;
						} else {
							status = itin;
						}
						break;
					case 'информатика':
						if (lvl === 3) {
							status = sto;
						} else {
							status = bvi;
						}
						break;
					case 'информационные технологии':
						itt();
						break;
				}
				break;
			default:
				switch(subj) {
					case 'информационные технологии':
						itt();
						break;
					case 'математика':
					case 'информатика':
						if (lvl === 3) {
							status = sto;
						} else {
							status = bvi;
						}
						break;
					case 'русский язык':
						status = sto;
						break;
					default:
						status = wtf;
				}
		}
		break;
	case '09.03.03':
		switch(subj) {
			case 'информационные технологии':
				itt();
				break;
			case 'математика':
			case 'информатика':
				if (lvl === 3) {
					status = sto;
				} else {
					status = bvi;
				}
				break;
			case 'русский язык':
				status = sto;
				break;
			default:
				status = wtf;
		}
		break;
	case '11.03.02':
		switch(subj) {
			case 'информационные технологии':
				itt();
				break;
			case 'математика':
			case 'информатика':
			case 'системы связи и дистанционного зондирования земли':
			case 'технологии беспроводной связи':
			case 'электронная инженерия: умный дом':
			case 'умный город':
				status = bvi;
				break;
			case 'русский язык':
				status = sto;
				break;
			default:
				status = wtf;
		}
		break;
	case '45.03.04':
		switch(subj) {
			case 'информационные технологии':
				itt();
				break;
			case 'математика':
			case 'информатика':
			case 'иностранный язык':
			case 'иностранные языки':
			case 'китайский язык':
			case 'восточные языки':
			case 'лингвистика':
				status = bvi;
				break;
			case 'русский язык':
				status = sto;
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
	case '24.03.02':
	case '27.03.04':
	case '44.03.04':
		switch(subj) {
			case 'информационные технологии':
				itt();
				break;
			case 'криптография':
				if (lvl === 1) {
					status = bvi;
				} else {
					status = sto;
				}
				break;
			case 'математика':
			case 'информатика':
			case 'компьютерная безопасность':
			case 'информационная безопасность':
			case 'беспилотные авиационные системы':
			case 'автономные транспортные системы':
			case 'интеллектуальные робототехнические системы':
			case 'системы связи и дистанционного зондирования земли':
			case 'анализ космических снимков и геопространственных данных':
			case 'водные робототехнические системы':
			case 'нейротехнологии':
			case 'нейротехнологии и когнитивные науки':
			case 'передовые производственные технологии':
			case 'программная инженерия финансовых технологий':
			case 'разработка приложений виртуальной и дополненной реальности':
			case 'технологии беспроводной связи':
			case 'электронная инженерия: умный дом':
			case 'умный город':
			case 'робототехника':
			case 'инженерные науки':
			case 'технический рисунок и декоративная композиция':
				status = bvi;
				break;
			case 'русский язык':
				status = sto;
				break;
			default:
				status = wtf;
		}
		break;
	case '12.03.02':
	case '12.03.03':
	case '12.03.05':
	case '12.05.01':
		switch(subj) {
			case 'информационные технологии':
				itt();
				break;
			case 'математика':
			case 'информатика':
			case 'техника и технологии':
			case 'естественные науки':
			case 'инженерное дело':
			case 'системы связи и дистанционного зондирования земли':
			case 'ядерные технологии':
			case 'технологии беспроводной связи':
			case 'электронная инженерия: умный дом':
			case 'инженерные системы':
			case 'нанотехнологии':
			case 'инженерные науки':
			case 'астрономия':
			case 'физика':
				status = bvi;
				break;
			case 'русский язык':
				status = sto;
				break;
			default:
				status = wtf;
		}
		break;
	case '12.03.04':
	case '18.03.02':
	case '19.03.01':
		switch(subj) {
			case 'математика':
			case 'нанотехнологии':
			case 'естественные науки':
			case 'химия':
			case 'инженерные биологические системы':
			case 'биология':
				status = bvi;
				break;
			case 'русский язык':
				status = sto;
				break;
			default:
				status = wtf;
		}
		break;
	case '16.03.01':
		switch(subj) {
			case 'математика':
			case 'инженерное дело':
			case 'системы связи и дистанционного зондирования земли':
			case 'наносистемы и наноинженерия':
			case 'инженерные системы':
			case 'нанотехнологии':
			case 'инженерные науки':
			case 'астрономия':
			case 'физика':
			case 'механика и математическое моделирование':
			case 'космонавтика':
			case 'астрономия и науки о земле':
			case 'умный город':
			case 'естественные науки':
				status = bvi;
				break;
			case 'информатика':
				if (lvl === 3) {
					status = wtf;
				} else {
					status = bvi;
				}
				break;
			case 'русский язык':
				status = sto;
				break;
			default:
				status = wtf;
		}
		break;
	case '14.03.01':
	case '16.03.03':
	case '23.03.03':
		switch(subj) {
			case 'математика':
			case 'естественные науки':
			case 'инженерное дело':
			case 'ядерные технологии':
			case 'инженерные системы':
			case 'нанотехнологии':
			case 'инженерные науки':
			case 'астрономия':
			case 'физика':
				status = bvi;
				break;
			case 'русский язык':
			case 'информатика':
				status = sto;
				break;
			default:
				status = wtf;
		}
		break;
	case '27.03.05':
	case '38.03.05':
		switch(subj) {
			case 'информационные технологии':
				itt();
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
				status = bvi;
				break;
			case 'русский язык':
				status = sto;
				break;
			default:
				status = wtf;
		}
		break;
	default:
		status = wtf;
}
	if (status === wtf) {
		status = checkIA(subj, 60);
	} else if ((status === bvi) || (status === sto)) {
		if (checkIA(subj, 75) !== 'ИД') {
			status = checkIA(subj, 60);
		}
	}
	return status;
}

function checkConf(subj, points) {
	/*if (EGE[subj] >= points) {
		return 1;
	} else {
		return 0;
	}*/
	return 1;
}

function checkIA(subj, points) {
	var status, stat = 0;
	var curr_profile = IA[subj];
	if (curr_profile === undefined) {
		status = 'спросить у Итина';
	} else if (curr_profile === false) {
			status = '—';
	} else {
		if (typeof(curr_profile) === "string") {
			stat = checkConf(curr_profile, points);
		} else if (typeof(curr_profile) === "object") {
			for (var i of curr_profile) {
				stat += checkConf(i, points);
			}
		}
		if (stat === 0) {
			status = 'Не подтв.';
		} else {
			status = 'ИД';
		}
	}
	return status;
}

function makeselector(){
var streams = [
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
	"14.03.01",
	"15.03.04",
	"15.03.06",
	"16.03.01",
	"16.03.03",
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
var sstream = document.createElement('select');
	sstream.autofocus = true;
	sstream.addEventListener('change', function(){
		update_status(this.value);
	});
	for (var i = 0; i < streams.length; i++) {
		var option = document.createElement("option");
		option.value = streams[i];
		option.text = streams[i];
		sstream.appendChild(option);
	}
	return sstream;
}
