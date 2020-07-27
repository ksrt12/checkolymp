function SHA256(s){
 var chrsz = 8;
 var hexcase = 0;

 function safe_add (x, y) {
 var lsw = (x & 0xFFFF) + (y & 0xFFFF);
 var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
 return (msw << 16) | (lsw & 0xFFFF);
 }

 function S (X, n) { return ( X >>> n ) | (X << (32 - n)); }
 function R (X, n) { return ( X >>> n ); }
 function Ch(x, y, z) { return ((x & y) ^ ((~x) & z)); }
 function Maj(x, y, z) { return ((x & y) ^ (x & z) ^ (y & z)); }
 function Sigma0256(x) { return (S(x, 2) ^ S(x, 13) ^ S(x, 22)); }
 function Sigma1256(x) { return (S(x, 6) ^ S(x, 11) ^ S(x, 25)); }
 function Gamma0256(x) { return (S(x, 7) ^ S(x, 18) ^ R(x, 3)); }
 function Gamma1256(x) { return (S(x, 17) ^ S(x, 19) ^ R(x, 10)); }

 function core_sha256 (m, l) {
 var K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);
 var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);
 var W = new Array(64);
 var a, b, c, d, e, f, g, h, i, j;
 var T1, T2;

 m[l >> 5] |= 0x80 << (24 - l % 32);
 m[((l + 64 >> 9) << 4) + 15] = l;

 for ( var i = 0; i<m.length; i+=16 ) {
 a = HASH[0];
 b = HASH[1];
 c = HASH[2];
 d = HASH[3];
 e = HASH[4];
 f = HASH[5];
 g = HASH[6];
 h = HASH[7];

 for ( var j = 0; j<64; j++) {
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

 function str2binb (str) {
 var bin = Array();
 var mask = (1 << chrsz) - 1;
 for(var i = 0; i < str.length * chrsz; i += chrsz) {
 bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i % 32);
 }
 return bin;
 }

 function Utf8Encode(string) {
 string = string.replace(/\r\n/g,'\n');
 var utftext = '';

 for (var n = 0; n < string.length; n++) {

 var c = string.charCodeAt(n);

 if (c < 128) {
 utftext += String.fromCharCode(c);
 }
 else if((c > 127) && (c < 2048)) {
 utftext += String.fromCharCode((c >> 6) | 192);
 utftext += String.fromCharCode((c & 63) | 128);
 }
 else {
 utftext += String.fromCharCode((c >> 12) | 224);
 utftext += String.fromCharCode(((c >> 6) & 63) | 128);
 utftext += String.fromCharCode((c & 63) | 128);
 }

 }

 return utftext;
 }

 function binb2hex (binarray) {
 var hex_tab = hexcase ? '0123456789ABCDEF' : '0123456789abcdef';
 var str = '';
 for(var i = 0; i < binarray.length * 4; i++) {
 str += hex_tab.charAt((binarray[i>>2] >> ((3 - i % 4)*8+4)) & 0xF) +
 hex_tab.charAt((binarray[i>>2] >> ((3 - i % 4)*8 )) & 0xF);
 }
 return str;
 }

 s = Utf8Encode(s);
 return binb2hex(core_sha256(str2binb(s), s.length * chrsz));
}

function loadvars(n){
	var n = Number(n);
	var urlParams = new URLSearchParams(window.location.search);
	var vars = ['DN','LN','FN','MN','BDY','BDM','BDD'];
	for (i in vars){
		this[vars[i]] = urlParams.get(vars[i]);
		if (this[vars[i]] == null)
			this[vars[i]] = "";
	}
	var NAME = LN+' '+FN+' '+MN;
	switch (n){
		case 0:
			namestr = NAME;
			break;
		case 1:
			namestr = DN+' '+NAME;
			break;
		case 2:
			namestr = NAME+' '+BDY+'-'+BDM+'-'+BDD;
			break;
		case 3:
			namestr = window.location.search;
			break;
	};		
	return namestr;
}

function clean_results(){
  var target = document.getElementById('results');
  while (0 < target.childNodes.length){
    target.removeChild(target.childNodes[0]);
  }
  return target;
}

function make_link(t, u){
  var a = document.createElement('a');
  a.href = u;
  //a.onclick = function(){window.open(u,'_blank')};
  a.appendChild(document.createTextNode(t));
  return a;
}

function add_entry(x, tgt){
    if (typeof(x)=='string'){
      tgt.appendChild(document.createTextNode(x));
    }
    else if(typeof(x)=='number')
    {
      tgt.appendChild(document.createTextNode(''+x));
    }
    else if(Array.isArray(x))
    {
      var i;
      for(i in x){
        add_entry(x[i], tgt);
      }
    }
    else
    {
      tgt.appendChild(x);
    }
}

function table_row(l,head){
	var tr = document.createElement('tr');
	var g, i;
	for(i in l){
		if (head) {
			g = document.createElement('th')
		} else {
			g = document.createElement('td');
			if (i == '6') {
				g.width = "85px";
			}
		};
		add_entry(l[i], g);
		tr.appendChild(g);
	}
	return tr;
}

function getSubTitles(olympname,grad){
	var t1 = olympname.substring(olympname.indexOf('. "')+3,olympname.indexOf('("')-2);
	var t2 = olympname.substr(olympname.indexOf('уровень')-2,1);
	var t3 = olympname.substr(olympname.indexOf('Диплом')+7,1);
	var t4 = olympname.substring(olympname.indexOf('("')+2,olympname.indexOf('")'));
	var BVI = checkBVI('01.03.02',grad,t4,t1,t2,t3);
	return [t1,t2,t3,t4,BVI];
}

function update_diplomas(){
	var target = clean_results();
	var i;
	table.setAttribute('rules', 'all');
	table.setAttribute('border', 'all');
    for (i in diplomaCodes){
    var d = diplomaCodes[i];
	var doa = getSubTitles(d.oa,d.form);
    table.appendChild(table_row([
		doa[0],
		doa[1],
		doa[2],
		doa[3],
        make_link((''+d.code).replace(/([0-9]{3})([0-9]{4})([0-9]{4})/,'$1 $2-$3'), rsrolymp+olympYear+'/by-code/'+d.code+'/white.pdf'),
		d.form,
		doa[4],
	]));
    }
	target.appendChild(table);
}

function load_diploma_list(year,pid){
  var diplomaCodes = [];
  var s = document.createElement('script');
  var url = rsrolymp+year+'/by-person-released/'+pid+'/codes.js'
  s.onload = function(){
  	olympYear=year;
  	update_diplomas();
  };
  s.crossorigin = "anonymous";
  s.src = url;
  document.head.appendChild(s);
}

function make_table(){
	rsrolymp = 'https://diploma.rsr-olymp.ru/files/rsosh-diplomas-static/compiled-storage-';
	
	table = document.createElement('table');
	table.id='table';
	table.setAttribute('rules', 'all');
	table.setAttribute('border', 'all');
	table.appendChild(table_row([
		'Олимпиада',
		'Уровень',
		'Степень',
		'Предмет',
		'Номер электронного дмиплома',
		'Класс',
		makeselector()
	],true));
	var currYEAR = new Date().getFullYear();
	personID=SHA256(loadvars(2));
	for (let YEAR=2014; YEAR<=currYEAR; YEAR++){
		load_diploma_list(YEAR,personID);
	}
}

function checktable(){
	window.addEventListener("load", function(event) {
		TABLE=document.getElementById('table');
		if ((TABLE == null) && (loadvars(3) != "")){
			alert('Олимпиад РСОШ абитуриента \n'+loadvars(0)+' не найдено!');
			window.close();
		};
	});
}

function update_status(stream){
	console.log(stream);
	for (let i=1; i < table.rows.length; i++) {
		table.rows[i].cells[6].innerHTML = checkBVI(
			stream,
			table.rows[i].cells[5].innerText,
			table.rows[i].cells[3].innerText,
			table.rows[i].cells[0].innerText,
			table.rows[i].cells[1].innerText,
			table.rows[i].cells[2].innerText);
	};
}

make_table();
checktable();
