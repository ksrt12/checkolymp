// ==UserScript==
// @name        Абитуриент 2.1
// @version     4.1
// @date        2020-07-24
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

function getID(someID) {
	return document.getElementById(someID)
}

// make buttons
function addCheckButton(str,ISUid) {
	var ISUELEM = getID(ISUid);
	if (ISUELEM != null) {
	var CheckButton = document.createElement("button");
		CheckButton.id="OLYMP_CHECK";
		CheckButton.value=str;
		CheckButton.className="btn btn-labeled ";
		CheckButton.type="button";
		CheckButton.style="margin-right: 5px;"
		ISUELEM.parentNode.insertBefore(CheckButton, ISUELEM);
		CheckButton.insertAdjacentHTML('beforeend', '<span class="btn-label icon fa fa-refresh"></span>'+str);
		CheckButton.onclick=function(){
			if (ISUid == "PERS_UPDATE")
				window.open(addAllOlympsCheck(),'_blank')
			else if (ISUid == "OLYMP_DELETE")
				window.open(addOlympCheck(),'_blank');
		};
	}
}

// generate link for checking all olymps
function addAllOlympsCheck() {
	var LN=getID('ST_LASTNAME').value;
	var FN=getID('ST_FIRSTNAME').value;
	var MN=getID('ST_MIDDLENAME').value;
	var BD=getID('ST_DOB').value.split('.');
	var DN=getID('P2_DELO').value;
	return 'https://ksrt12.github.io/?LN='+LN+'&FN='+FN+'&MN='+MN+'&BDD='+BD[0]+'&BDM='+BD[1]+'&BDY='+BD[2]+'&DN='+DN;
}

function getONUM(){
	return getID('OLYMP_NUM').value.replace(/[. -]+/g, "");
}

// generate link for checking current olymp
function addOlympCheck() {
	var OLYMPNUM = getONUM();
	var OLYMPYEAR = getID('OLYMP_YEAR').value;
	var olink;
	if (OLYMPNUM.indexOf('0000') == 0) {
		if ((OLYMPYEAR == 2020) || (OLYMPYEAR == 2019) || (OLYMPYEAR == 2018)) {
			olink = 'https://ksrt12.github.io/files/'+OLYMPYEAR+'.pdf'
		} else {
            alert('Древний ВСЕРОС')
        }
	} else {
		olink = 'https://diploma.rsr-olymp.ru/files/rsosh-diplomas-static/compiled-storage-'+
		OLYMPYEAR+'/by-code/'+OLYMPNUM+'/white.pdf';
	}
	return olink;
}

// set checkboxes automatically if 'LK_DELO_0' is checked
function autophotocopy() {
	var DZCH = getID('LK_DELO_0');
	var LK_PHOTO = getID('LK_PHOTO_0');
	var LK_COPY = getID('LK_PODL_COPY_0');
	if (DZCH != null) {
		DZCH.addEventListener("click", function() {
			LK_PHOTO.checked = DZCH.checked;
			LK_COPY.checked = DZCH.checked;
		})
	}
}

// set default EGE date for subject
function sedate(subIndex) {
	var EGEDATE = getID('EGE_DATE');
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
function autoEGE() {
	var EGESUBJ = getID('EGE_SUBJ');
	var EGEFORM = getID('ege_form');
	if (EGEFORM != null) {
		EGEFORM.onclick=function(){sedate(EGESUBJ.selectedIndex)};
	}
	delete(EGEFORM);
}

function listenOLYMP() {
	if ((getID('OLYMP_CHECK') == null) && (getID('OLYMP_DELETE') != null) && (getONUM() != ""))
		addCheckButton("Проверить", "OLYMP_DELETE");
}

// add olymps check button
addCheckButton("Проверить олимпиады","PERS_UPDATE");

autophotocopy();
autoEGE();

// add current olymp check button
window.addEventListener('hashchange', function(){
	if (document.location.hash == '#olymp') {
		document.addEventListener('click', listenOLYMP)
	} else {
		document.removeEventListener('click', listenOLYMP)
	};
});