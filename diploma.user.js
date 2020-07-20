// ==UserScript==
// @name        Абитуриент 2.0
// @version     3.5
// @date        2020-07-20
// @author      kazakovstepan
// @namespace   ITMO University
// @description IT's MOre than the Система Абитуриент
// @homepage    https://vk.com/kazakovstepan
// @icon        https://ksrt12.github.io/icon.png
// @updateURL   https://ksrt12.github.io/diploma.user.js
// @downloadURL https://ksrt12.github.io/diploma.user.js
// @include     https://isu.ifmo.ru/pls/apex/f?p=2175*
// @run-at      document-end
// @grant       none
// ==/UserScript==

// make buttons
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
			if (ISUid == "PERS_UPDATE") {window.open(addAllOlympsCheck(),'_blank')}
			else if (ISUid == "OLYMP_DELETE") {window.open(addOlympCheck(),'_blank')};
		};
	}
}

// generate link for checking all olymps
function addAllOlympsCheck(){
	var LN=document.getElementById('ST_LASTNAME').value;
	var FN=document.getElementById('ST_FIRSTNAME').value;
	var MN=document.getElementById('ST_MIDDLENAME').value;
	var BD=document.getElementById('ST_DOB').value.split('.');
	return 'https://ksrt12.github.io?LN='+LN+'&FN='+FN+'&MN='+MN+'&BDD='+BD[0]+'&BDM='+BD[1]+'&BDY='+BD[2]
}

// generate link for checking current olymp
function addOlympCheck(){
	var olink = 'https://diploma.rsr-olymp.ru/files/rsosh-diplomas-static/compiled-storage-'+
		document.getElementById('OLYMP_YEAR').value+'/by-code/'+
		document.getElementById('OLYMP_NUM').value.replace(/[. -]+/g, "")+'/white.pdf'
    return olink;
}

// set checkboxes automatically if 'LK_DELO_0' is checked
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

// set default EGE date for subject
function sedate(subIndex) {
	var EGEDATE = document.getElementById('EGE_DATE');
	if (EGEDATE.selectedIndex == 0) {
		switch(subIndex) {
		case 4:
			EGEDATE.selectedIndex=6;
			break;
		default:
			EGEDATE.selectedIndex=5;
			break;
		}
	}
	delete(EGEDATE);
}

// parsing page for 'ege_form'
function autoEGE(){
	var EGESUBJ = document.getElementById('EGE_SUBJ');
	var EGEFORM = document.getElementById('ege_form');
	if (EGEFORM != null) {
		EGEFORM.onclick=function(){sedate(EGESUBJ.selectedIndex)};
	}
	delete(EGEFORM);
}

// add olymp check button
addcheck("Проверить олимпиады","PERS_UPDATE");
// addcheck("Проверить", "OLYMP_DELETE");

autophotocopy();
autoEGE();
