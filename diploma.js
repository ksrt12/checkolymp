function SHA256(s) {
	var chrsz = 8;
	var hexcase = 0;

	function safe_add(x, y) {
		var lsw = (x & 0xFFFF) + (y & 0xFFFF);
		var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
		return (msw << 16) | (lsw & 0xFFFF);
	}

	function S(X, n) {
		return (X >>> n) | (X << (32 - n));
	}

	function R(X, n) {
		return (X >>> n);
	}

	function Ch(x, y, z) {
		return ((x & y) ^ ((~x) & z));
	}

	function Maj(x, y, z) {
		return ((x & y) ^ (x & z) ^ (y & z));
	}

	function Sigma0256(x) {
		return (S(x, 2) ^ S(x, 13) ^ S(x, 22));
	}

	function Sigma1256(x) {
		return (S(x, 6) ^ S(x, 11) ^ S(x, 25));
	}

	function Gamma0256(x) {
		return (S(x, 7) ^ S(x, 18) ^ R(x, 3));
	}

	function Gamma1256(x) {
		return (S(x, 17) ^ S(x, 19) ^ R(x, 10));
	}

	function core_sha256(m, l) {
		var K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);
		var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);
		var W = new Array(64);
		var a, b, c, d, e, f, g, h, i, j;
		var T1, T2;

		m[l >> 5] |= 0x80 << (24 - l % 32);
		m[((l + 64 >> 9) << 4) + 15] = l;

		for (i = 0; i < m.length; i += 16) {
			a = HASH[0];
			b = HASH[1];
			c = HASH[2];
			d = HASH[3];
			e = HASH[4];
			f = HASH[5];
			g = HASH[6];
			h = HASH[7];

			for (j = 0; j < 64; j++) {
				if (j < 16) W[j] = m[j + i];
				else W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);

				T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);
				T2 = safe_add(Sigma0256(a), Maj(a, b, c));

				h = g;
				g = f;
				f = e;
				e = safe_add(d, T1);
				d = c;
				c = b;
				b = a;
				a = safe_add(T1, T2);
			}

			HASH[0] = safe_add(a, HASH[0]);
			HASH[1] = safe_add(b, HASH[1]);
			HASH[2] = safe_add(c, HASH[2]);
			HASH[3] = safe_add(d, HASH[3]);
			HASH[4] = safe_add(e, HASH[4]);
			HASH[5] = safe_add(f, HASH[5]);
			HASH[6] = safe_add(g, HASH[6]);
			HASH[7] = safe_add(h, HASH[7]);
		}
		return HASH;
	}

	function str2binb(str) {
		var bin = Array();
		var mask = (1 << chrsz) - 1;
		for (var i = 0; i < str.length * chrsz; i += chrsz) {
			bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i % 32);
		}
		return bin;
	}

	function Utf8Encode(string) {
		string = string.replace(/\r\n/g, '\n');
		var utftext = '';

		for (var n = 0; n < string.length; n++) {

			var c = string.charCodeAt(n);

			if (c < 128) {
				utftext += String.fromCharCode(c);
			} else if ((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			} else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}

		}

		return utftext;
	}

	function binb2hex(binarray) {
		var hex_tab = hexcase ? '0123456789ABCDEF' : '0123456789abcdef';
		var str = '';
		for (var i = 0; i < binarray.length * 4; i++) {
			str += hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF) +
				hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8)) & 0xF);
		}
		return str;
	}

	s = Utf8Encode(s);
	return binb2hex(core_sha256(str2binb(s), s.length * chrsz));
}

var RSROLYMP = 'https://diploma.rsr-olymp.ru/files/rsosh-diplomas-static/compiled-storage-';
var colnames = ["name", "lvl", "dip", "subj", "num", "grad", "stream"];
var diplomaCodes = [];
var WLS = window.location.search;
var table, tbody, params = {};

function load_params() {
	params = WLS.replace('?','').split('&').reduce(
		function(p, e) {
			var a = e.split('=');
			p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
			return p;
		}, {}
	);
	if (params.EGE) {
		getEGE();
	}
	params.NAME = params.LN+' '+params.FN+' '+params.MN;
}

function loadvars(n) {
	var namestr;	
	if (n === 0) {
		if ((params.DN === undefined) || (params.DN === "")) {
			namestr = params.NAME;
		} else {
			namestr = params.DN+' '+params.NAME;
		}
	} else if (n === 2) {
		if (params.BD) {
			namestr = params.NAME+' '+params.BD;
		} else {
			namestr = params.NAME+' '+params.BDY+'-'+params.BDM+'-'+params.BDD;
		}
	}
	return namestr;
}

function clean_results() {
	var target = document.getElementById('results');
	while (0 < target.childNodes.length) {
		target.removeChild(target.childNodes[0]);
	}
	return target;
}

function make_link(t, u) {
	var a = document.createElement('a');
	a.href = u;
	a.appendChild(document.createTextNode(t));
	return a;
}

function add_entry(x, tgt) {
	if (typeof(x) == 'string') {
		tgt.appendChild(document.createTextNode(x));
	} else if (typeof(x) == 'number') {
		tgt.appendChild(document.createTextNode('' + x));
	} else if (Array.isArray(x)) {
		var i;
		for (i in x) {
			add_entry(x[i], tgt);
		}
	} else {
		tgt.appendChild(x);
	}
}

function table_row(l, p) {
	var tr = document.createElement('tr');
	if (typeof(p) === "string") {
		bvi_color(tr, p);
	}
	var g, i;
	for (i in l) {
		if (p === true) {
			g = document.createElement('th');
			g.id = colnames[i];
		} else {
			g = document.createElement('td');
		}
		if (i == '6') {
			g.width = "85px";
		}
		add_entry(l[i], g);
		tr.appendChild(g);
	}
	return tr;
}

function getSubTitles(olympname, grad) {
	var status;
	var t1 = olympname.substring(olympname.indexOf('. "') + 3, olympname.indexOf('("') - 2).trim();
	var t2 = olympname.substr(olympname.indexOf('уровень') - 2, 1).trim();
	var t3 = olympname.substr(olympname.indexOf('Диплом') + 7, 1).trim();
	var t4 = olympname.substring(olympname.indexOf('("') + 2, olympname.indexOf('")')).replace('cистемы', 'системы').trim();
	if ((grad === 10) || (grad === 11)) {
		status = checkBVI('01.03.02', t4, t1, t2, t3);
	} else if ((grad === 9) || (grad === 8) || (grad === 7)) {
		status = ia + checkConf(t4.toLowerCase(), 60);
	} else {
		status = wtf;
	}
	return [t1, t2, t3, t4, status];
}

function update_diplomas(olympYear) {
	var target = clean_results();
	var i;
	for (i in diplomaCodes) {
		var d = diplomaCodes[i];
		var doa = getSubTitles(d.oa, d.form);
		tbody.appendChild(table_row([
			doa[0],
			doa[1],
			doa[2],
			doa[3],
			make_link(('' + d.code).replace(/([0-9]{3})([0-9]{4})([0-9]{4})/, '$1 $2-$3'),
				RSROLYMP + olympYear + '/by-code/' + d.code + '/white.pdf'),
			d.form,
			doa[4],
		], doa[4]));
	}
	target.appendChild(table);
}

function load_diploma_list(year, pid) {
	var s = document.createElement('script');
	var url = RSROLYMP + year + '/by-person-released/' + pid + '/codes.js';
	s.onload = function() {
		update_diplomas(year);
	};
	s.crossorigin = "anonymous";
	s.src = url;
	document.head.appendChild(s);
}

function make_table() {
	if (params.LN) {
		table = document.createElement('table');
		table.id = 'table';
		table.setAttribute('rules', 'all');
		table.setAttribute('border', 'all');
		table.createCaption().textContent = loadvars(0);
	var thead = document.createElement('thead');
		table.appendChild(thead);
		thead.appendChild(table_row([
			'Олимпиада',
			'Уровень',
			'Степень',
			'Предмет',
			'Номер электронного диплома',
			'Класс',
			makeselector()
		], true));
		tbody = document.createElement('tbody');
		table.appendChild(tbody);
		var personID = SHA256(loadvars(2));
		for (let YEAR = 2020; YEAR >= 2014; YEAR--) {
			load_diploma_list(YEAR, personID);
		}
	return table;
	}
}

function getSort(target) {
	const order = (target.dataset.order = -(target.dataset.order || -1));
	const index = [...target.parentNode.cells].indexOf(target);
	const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
	const comparator = (index, order) => (a, b) => order * collator.compare(
		a.children[index].innerHTML,
		b.children[index].innerHTML
	);
	for (const tBody of target.closest('table').tBodies)
		tBody.append(...[...tBody.rows].sort(comparator(index, order)));
	for (const cell of target.parentNode.cells)
		cell.classList.toggle('sorted', cell === target);
}

function checktable(nt) {
	window.addEventListener("load", function() {
		if (nt.lastChild.rows.length === 0) {
			if (params.LN) {
				alert('Олимпиад РСОШ абитуриента \n' + loadvars(0) + ' не найдено!');
				window.close();
			} else {
				//document.getElementById('main_res').remove();
				if (params.source == "pwa") {
					alert('W=' + window.innerWidth +
						', H=' + window.innerHeight +
						', DPR=' + window.devicePixelRatio);
				}
			}
		} else {
			sort_table(nt);
		}
	});
}

function sort_table(nt) {
	var th_sort = nt ? nt.tHead.rows[0].cells : document.querySelectorAll('#table th');
	for (let i of th_sort) {
		if (i.id !== "stream") {
			i.onclick = function() {
				getSort(i);
			};
		}
	}
	th_sort.item(4).dataset.order = 1;
	getSort(th_sort.item(4));
}

function bvi_color(tr, new_status) {
	if (new_status.includes(bvi)) {
		tr.bgColor = "#89f5dc";
	}
}

function update_status(stream) {
	for (let i = 0; i < tbody.rows.length; i++) {
		if ((tbody.rows[i].cells[5].innerText === "11") || (tbody.rows[i].cells[5].innerText === "10")) {
			tbody.rows[i].bgColor = "";
			var new_status = checkBVI(stream,
			tbody.rows[i].cells[3].innerText,
			tbody.rows[i].cells[0].innerText,
			tbody.rows[i].cells[1].innerText,
			tbody.rows[i].cells[2].innerText);
			tbody.rows[i].cells[6].innerHTML = new_status;
			bvi_color(tbody.rows[i], new_status);
		}
	}
}

function do_search(){
	var old_table = document.getElementById('table');
	old_table ? old_table.remove() : true;
	EGE = {};
	for (var i of document.querySelectorAll("#search_form > p > input")) {
		params[i.id] = i.value.trim().toLowerCase().replace(/(([- ]|^)[^ ])/g, function(s) {
			return s.toUpperCase();
		});
	}
	for (var j of document.querySelectorAll(".ege > form > p > input")) {
		EGE[document.querySelector('[for='+j.id+']').innerText.toLowerCase()] = Number(j.value);
	}
	params.NAME = (params.LN+' '+params.FN+' '+params.MN).replace(/\s+/g, ' ');
	
	new_table = make_table();
	sort_table(new_table);
}

if (WLS !== "") {
	window.addEventListener("DOMContentLoaded", function() {
		document.getElementById('indata_id').remove();
		document.getElementById('check_button').remove();
	});
	load_params();
	new_table = make_table();
	checktable(new_table);
}

