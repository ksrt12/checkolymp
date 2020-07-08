// ==UserScript==
// @name        Check All Olymps
// @version     3.2
// @date        2020-07-09
// @author      kazakovstepan
// @namespace   ITMO University
// @description Get all abiturient's olymps
// @homepage    https://vk.com/kazakovstepan
// @icon        https://ksrt12.github.io/icon.png
// @updateURL   https://ksrt12.github.io/diploma.user.js
// @downloadURL https://ksrt12.github.io/diploma.user.js
// @include     https://isu.ifmo.ru/pls/apex/f?p=2175*
// @run-at      document-end
// @grant       none
// ==/UserScript==

function addcheck(str,ISUid){
	var ISUELEM = document.getElementById(ISUid);
	if (ISUELEM != null) {
	var сheckolymp = document.createElement("button");
		сheckolymp.id="OLYMP_CHECK";
		сheckolymp.value=str;
		сheckolymp.className="btn btn-labeled ";
		сheckolymp.type="button";
		сheckolymp.style="margin-right: 5px;"
		ISUELEM.parentNode.insertBefore(сheckolymp, ISUELEM);
		сheckolymp.insertAdjacentHTML('beforeend', '<span class="btn-label icon fa fa-refresh"></span>'+str);
		сheckolymp.onclick=function(){
			if (ISUid == "PERS_UPDATE") {window.open(loadISU(),'_blank')}
			else if (ISUid == "OLYMP_DELETE") {window.open(addOlympCheck(),'_blank')};
		};
	}
}

function loadISU(){
	var LN=document.getElementById('ST_LASTNAME').value;
	var FN=document.getElementById('ST_FIRSTNAME').value;
	var MN=document.getElementById('ST_MIDDLENAME').value;
	var BD=document.getElementById('ST_DOB').value.split('.');
	return 'https://ksrt12.github.io?LN='+LN+'&FN='+FN+'&MN='+MN+'&BDD='+BD[0]+'&BDM='+BD[1]+'&BDY='+BD[2]
}

function addOlympCheck(){
	var olink = 'https://diploma.rsr-olymp.ru/files/rsosh-diplomas-static/compiled-storage-'+
		document.getElementById('OLYMP_YEAR').value+'/by-code/'+
		document.getElementById('OLYMP_NUM').value.replace(/[. -]+/g, "")+'/white.pdf'
    return olink;
}

function autophotocopy(){
	var DZCH = document.getElementById('LK_DELO_0');
	var LK_PHOTO = document.getElementById('LK_PHOTO_0');
	var LK_COPY = document.getElementById('LK_PODL_COPY_0');
	if (DZCH != null) {
		DZCH.addEventListener("click", function() {
			LK_PHOTO.checked = DZCH.checked;
			LK_COPY.checked = DZCH.checked;
		})
	}
}

addcheck("Проверить олимпиады","PERS_UPDATE");
// addcheck("Проверить", "OLYMP_DELETE");

autophotocopy();
