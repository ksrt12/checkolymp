// ==UserScript==
// @name        Check All Olymps
// @version     2.0
// @date        2020-06-28
// @author      kazakovstepan
// @namespace   ITMO University
// @description Get all abiturient's olymps
// @homepage    https://vk.com/kazakovstepan
// @icon        https://ksrt12.github.io/icon.png
// @updateURL   https://ksrt12.github.io/diploma.user.js
// @downloadURL https://ksrt12.github.io/diploma.user.js
// @include     https://isu.ifmo.ru/pls/apex/*
// @run-at      document-end
// @grant       GM_listValues
// @grant       GM_setValue
// @grant       GM_getValue
// @grant       GM_deleteValue
// @grant       GM_xmlhttpRequest
// @grant       GM_info
// @grant       GM_openInTab
// @grant       GM_setClipboard
// @grant       GM_registerMenuCommand
// @grant       GM_unregisterMenuCommand
// @grant       GM_notification
// @grant       GM_download
// @grant       GM.info
// @grant       GM.listValues
// @grant       GM.setValue
// @grant       GM.getValue
// @grant       GM.deleteValue
// @grant       GM.openInTab
// @grant       GM.setClipboard
// ==/UserScript==
//

function addcheck(){
var сheckolymp = document.createElement("button");
сheckolymp.id="OLYMP_CHECK";
сheckolymp.value="Проверить олимпиады";
сheckolymp.className="btn btn-labeled ";
сheckolymp.type="button";
сheckolymp.style="margin-right: 5px;"
var DELOLYMP = document.getElementById("PERS_UPDATE");
DELOLYMP.parentNode.insertBefore(сheckolymp, DELOLYMP);
сheckolymp.insertAdjacentHTML('beforeend', '<span class="btn-label icon fa fa-refresh"></span>Проверить олимпиады');
сheckolymp.onclick=function(){javascript:addOLYMPlink();};
}

function loadISU(){
	LN=document.getElementById('ST_LASTNAME').value;
	FN=document.getElementById('ST_FIRSTNAME').value;
	MN=document.getElementById('ST_MIDDLENAME').value;
	BD=document.getElementById('ST_DOB').value.split('.');
}

function addOLYMPlink(){
	loadISU();
    window.open('https://ksrt12.github.io?LN='+LN+'&FN='+FN+'&MN='+MN+'&BDD='+BD[0]+'&BDM='+BD[1]+'&BDY='+BD[2]);
}

addcheck();