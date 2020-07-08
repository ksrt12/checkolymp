// ==UserScript==
// @name        Check All Olymps
// @version     3.1
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
	var сheckolymp = document.createElement("button");
	сheckolymp.id="OLYMP_CHECK";
	сheckolymp.value=str;
	сheckolymp.className="btn btn-labeled ";
	сheckolymp.type="button";
	сheckolymp.style="margin-right: 5px;"
	var ISUELEM = document.getElementById(ISUid);
	if (ISUELEM != null) {
		ISUELEM.parentNode.insertBefore(сheckolymp, ISUELEM);
		сheckolymp.insertAdjacentHTML('beforeend', '<span class="btn-label icon fa fa-refresh"></span>'+str);
		сheckolymp.onclick=function(){addOLYMPlink()};
	}
}

function loadISU(){
	LN=document.getElementById('ST_LASTNAME').value;
	FN=document.getElementById('ST_FIRSTNAME').value;
	MN=document.getElementById('ST_MIDDLENAME').value;
	BD=document.getElementById('ST_DOB').value.split('.');
}

function addOLYMPlink(){
	loadISU();
	window.open('https://ksrt12.github.io?LN='+LN+'&FN='+FN+'&MN='+MN+'&BDD='+BD[0]+'&BDM='+BD[1]+'&BDY='+BD[2],'_blank');
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

autophotocopy();
