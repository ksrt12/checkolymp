eval(function (p, a, c, k, e, r) {
    e = function (c) { return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36)) }; if (!''.replace(/^/, String)) {
        while (c--) r[e(c)] = k[c] || e(c);
        k = [function (e) { return r[e] }];
        e = function () { return '\\w+' };
        c = 1
    }; while (c--)
        if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('u 1e(s){t o=8;t p=0;u q(x,y){t a=(x&F)+(y&F);t b=(x>>16)+(y>>16)+(a>>16);v(b<<16)|(a&F)}u S(X,n){v(X>>>n)|(X<<(G-n))}u R(X,n){v(X>>>n)}u O(x,y,z){v((x&y)^((~x)&z))}u P(x,y,z){v((x&y)^(x&z)^(y&z))}u Q(x){v(S(x,2)^S(x,13)^S(x,22))}u T(x){v(S(x,6)^S(x,11)^S(x,25))}u U(x){v(S(x,7)^S(x,18)^R(x,3))}u V(x){v(S(x,17)^S(x,19)^R(x,10))}u Y(m,l){t K=H D(1f,1g,1h,1i,1j,1k,1l,1m,1n,1o,1p,1q,1r,1s,1t,1u,1v,1w,1x,1y,1z,1A,1B,1C,1D,1E,1F,1G,1H,1I,1J,1K,1L,1M,1N,1O,1P,1Q,1R,1S,1T,1U,1V,1W,1X,1Y,1Z,20,21,23,26,27,28,29,2a,2b,2c,2d,2e,2f,2g,2h,2i,2j);t k=H D(2k,2l,2m,2n,2o,2p,2q,2r);t W=H D(I);t a,b,c,d,e,f,g,h,i,j;t n,J;m[l>>5]|=2s<<(24-l%G);m[((l+I>>9)<<4)+15]=l;B(i=0;i<m.C;i+=16){a=k[0];b=k[1];c=k[2];d=k[3];e=k[4];f=k[5];g=k[6];h=k[7];B(j=0;j<I;j++){L(j<16)W[j]=m[j+i];M W[j]=q(q(q(V(W[j-2]),W[j-7]),U(W[j-15])),W[j-16]);n=q(q(q(q(h,T(e)),O(e,f,g)),K[j]),W[j]);J=q(Q(a),P(a,b,c));h=g;g=f;f=e;e=q(d,n);d=c;c=b;b=a;a=q(n,J)}k[0]=q(a,k[0]);k[1]=q(b,k[1]);k[2]=q(c,k[2]);k[3]=q(d,k[3]);k[4]=q(e,k[4]);k[5]=q(f,k[5]);k[6]=q(g,k[6]);k[7]=q(h,k[7])}v k}u Z(a){t b=D();t c=(1<<o)-1;B(t i=0;i<a.C*o;i+=o){b[i>>5]|=(a.14(i/o)&c)<<(24-i%G)}v b}u 1a(a){a=a.2t(/\\r\\n/g,\'\\n\');t b=\'\';B(t n=0;n<a.C;n++){t c=a.14(n);L(c<E){b+=w.A(c)}M L((c>2u)&&(c<2v)){b+=w.A((c>>6)|2w);b+=w.A((c&N)|E)}M{b+=w.A((c>>12)|2x);b+=w.A(((c>>6)&N)|E);b+=w.A((c&N)|E)}}v b}u 1b(a){t b=p?\'2y\':\'2z\';t c=\'\';B(t i=0;i<a.C*4;i++){c+=b.1c((a[i>>2]>>((3-i%4)*8+4))&1d)+b.1c((a[i>>2]>>((3-i%4)*8))&1d)}v c}s=1a(s);v 1b(Y(Z(s),s.C*o))}', 62, 160, '||||||||||||||||||||||||||safe_add|||var|function|return|String||||fromCharCode|for|length|Array|128|0xFFFF|32|new|64|T2||if|else|63|Ch|Maj|Sigma0256|||Sigma1256|Gamma0256|Gamma1256|||core_sha256|str2binb|||||charCodeAt||||||Utf8Encode|binb2hex|charAt|0xF|SHA256|0x428A2F98|0x71374491|0xB5C0FBCF|0xE9B5DBA5|0x3956C25B|0x59F111F1|0x923F82A4|0xAB1C5ED5|0xD807AA98|0x12835B01|0x243185BE|0x550C7DC3|0x72BE5D74|0x80DEB1FE|0x9BDC06A7|0xC19BF174|0xE49B69C1|0xEFBE4786|0xFC19DC6|0x240CA1CC|0x2DE92C6F|0x4A7484AA|0x5CB0A9DC|0x76F988DA|0x983E5152|0xA831C66D|0xB00327C8|0xBF597FC7|0xC6E00BF3|0xD5A79147|0x6CA6351|0x14292967|0x27B70A85|0x2E1B2138|0x4D2C6DFC|0x53380D13|0x650A7354|0x766A0ABB|0x81C2C92E|0x92722C85|0xA2BFE8A1|0xA81A664B|0xC24B8B70|0xC76C51A3|0xD192E819|0xD6990624|0xF40E3585|0x106AA070|0x19A4C116||0x1E376C08|||0x2748774C|0x34B0BCB5|0x391C0CB3|0x4ED8AA4A|0x5B9CCA4F|0x682E6FF3|0x748F82EE|0x78A5636F|0x84C87814|0x8CC70208|0x90BEFFFA|0xA4506CEB|0xBEF9A3F7|0xC67178F2|0x6A09E667|0xBB67AE85|0x3C6EF372|0xA54FF53A|0x510E527F|0x9B05688C|0x1F83D9AB|0x5BE0CD19|0x80|replace|127|2048|192|224|0123456789ABCDEF|0123456789abcdef'.split('|'), 0, {}))

const RSROLYMP = 'https://diploma.rsr-olymp.ru/files/rsosh-diplomas-static/compiled-storage-',
    WLS = window.location.search;
var diplomaCodes = [];
var table, tbody, params = {};

function load_params() {
    params = WLS.replace('?', '').split('&').reduce(
        function (p, e) {
            let a = e.split('=');
            p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
            return p;
        }, {}
    );
    if (params.EGE) {
        getEGE();
    }
    params.NAME = params.LN + ' ' + params.FN + ' ' + params.MN;
}

function loadvars(n) {
    let namestr;
    if (n === 0) {
        if ((params.DN === undefined) || (params.DN === "")) {
            namestr = params.NAME;
        } else {
            namestr = params.DN + ' ' + params.NAME;
        }
    } else if (n === 2) {
        if (params.BD) {
            namestr = params.NAME + ' ' + params.BD;
        } else {
            namestr = params.NAME + ' ' + params.BDY + '-' + params.BDM + '-' + params.BDD;
        }
    }
    return namestr;
}

function clean_results() {
    let target = document.getElementById('results');
    while (0 < target.childNodes.length) {
        target.removeChild(target.childNodes[0]);
    }
    return target;
}

function make_link(t, u) {
    let a = document.createElement('a');
    a.href = u;
    a.appendChild(document.createTextNode(t));
    return a;
}

function add_entry(x, tgt) {
    if (typeof (x) == 'string') {
        tgt.appendChild(document.createTextNode(x));
    } else if (typeof (x) == 'number') {
        tgt.appendChild(document.createTextNode('' + x));
    } else if (Array.isArray(x)) {
        for (let i in x) {
            add_entry(x[i], tgt);
        }
    } else {
        tgt.appendChild(x);
    }
}

function table_row(l, p) {
    let tr = document.createElement('tr');
    if (typeof (p) === "string") {
        bvi_color(tr, p);
    }
    for (let i in l) {
        let g = (p === true) ? document.createElement('th') : document.createElement('td');
        if (i === '6') {
            g.width = "85px";
            g.id = "stream";
        }
        add_entry(l[i], g);
        tr.appendChild(g);
    }
    return tr;
}

function getSubTitles(olympname, grad) {
    let status;
    let t1 = olympname.substring(olympname.indexOf('. "') + 3, olympname.indexOf('("') - 2).trim();
    let t2 = olympname.substr(olympname.indexOf('уровень') - 2, 1).trim();
    let t3 = olympname.substr(olympname.indexOf('Диплом') + 7, 1).trim();
    let t4 = olympname.substring(olympname.indexOf('("') + 2, olympname.indexOf('")')).replace('cистемы', 'системы').trim();
    if ((grad === 10) || (grad === 11)) {
        status = checkBVI('01.03.02', grad, t4, t1, t2, t3);
        /*
        } else if ((grad === 9) || (grad === 8) || (grad === 7)) {
            status = set_ia_status(t4);
        */
    } else {
        status = wtf;
    }
    return [t1, t2, t3, t4, status];
}

function update_diplomas(olympYear) {
    let target = clean_results();
    for (let i in diplomaCodes) {
        let d = diplomaCodes[i];
        if (d.form > 9) {
            let doa = getSubTitles(d.oa, d.form);
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
            check_ege_is_empty(doa[3]);
        }
    }
    target.appendChild(table);
}

function load_diploma_list(year, pid) {
    let s = document.createElement('script');
    let url = RSROLYMP + year + '/by-person-released/' + pid + '/codes.js';
    s.onload = function () {
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
        let thead = document.createElement('thead');
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
        const personID = SHA256(loadvars(2));
        for (let YEAR = 2021; YEAR >= 2016; YEAR--) {
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
    window.addEventListener("load", function () {
        if (params.wallpapers == "true") {
            document.querySelector("body > div.left").style.display = "none";
            document.querySelector("#main_res").style.display = "none";
            document.querySelector("body > div.right").style.display = "none";
            // addScript("js/stars.js");
            start_stars();
        }
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
    let th_sort = nt ? nt.tHead.rows[0].cells : document.querySelectorAll('#table th');
    for (let i of th_sort) {
        if (i.id !== "stream") {
            i.onclick = function () {
                getSort(i);
            };
        }
    }
    th_sort.item(4).dataset.order = 1;
    getSort(th_sort.item(4));
}

function bvi_color(tr, new_status) {
    if (new_status.includes(bvi)) {
        tr.bgColor = "#a0faad";
    } else if (new_status.includes(sto)) {
        tr.bgColor = "#89f5dc";
    }
}

function update_status(stream) {
    for (let i = 0; i < tbody.rows.length; i++) {
        if ((tbody.rows[i].cells[5].innerText === "11") || (tbody.rows[i].cells[5].innerText === "10")) {
            tbody.rows[i].bgColor = "";
            let new_status = checkBVI(stream,
                tbody.rows[i].cells[5].innerText,
                tbody.rows[i].cells[3].innerText,
                tbody.rows[i].cells[0].innerText,
                tbody.rows[i].cells[1].innerText,
                tbody.rows[i].cells[2].innerText);
            tbody.rows[i].cells[6].innerHTML = new_status;
            bvi_color(tbody.rows[i], new_status);
            check_ege_is_empty(tbody.rows[i].cells[3].innerText);
        }
    }
}

function set_ia_status(subj_in) {
    let subj = subj_in.toLowerCase();
    return (subj === 'русский язык') ? wtf : ia + checkConf(subj, 60);
}

function update_ia_status() {
    for (let i = 0; i < tbody.rows.length; i++) {
        if ((tbody.rows[i].cells[5].innerText === "9") ||
            (tbody.rows[i].cells[5].innerText === "8") ||
            (tbody.rows[i].cells[5].innerText === "7")) {
            tbody.rows[i].cells[6].innerHTML = set_ia_status(tbody.rows[i].cells[3].innerText);
            check_ege_is_empty(tbody.rows[i].cells[3].innerText);
        }
    }
}

function rename_button(to_upd) {
    document.querySelector("#check_button > button").innerHTML = to_upd ? "Обновить" : "Проверить";
}

function check_ege_is_empty(conf_subj_in) {
    if (WLS === "") {
        let subj = SUBJ_EGE[conf_subj_in.toLowerCase()];
        is_empty_color(document.querySelector('[for=' + SUBJ_ID[subj] + ']'), (EGE[subj] === 0));
    }
}

function is_empty_color(elem, is_empty) {
    elem.style = (is_empty) ? "background-color: pink;" : ""
}

function do_search() {
    let is_table = document.getElementById('table');
    EGE = {};
    for (let j of document.querySelectorAll(".ege > form > p > input")) {
        let points = Number(j.value);
        if (j.value !== "") {
            points = (points < 0) ? 0 : (points > 100) ? 100 : points;
            j.value = points;
        }
        EGE[document.querySelector('[for=' + j.id + ']').innerText.toLowerCase()] = points;
    }
    if (is_table) {
        update_status('01.03.02');
        //update_ia_status();
    } else {
        for (let i of document.querySelectorAll("#search_form > p > input")) {
            params[i.id] = i.value.trim().toLowerCase().replace(/(([- ]|^)[^ ])/g, function (s) {
                return s.toUpperCase();
            });
        }
        params.NAME = (params.LN + ' ' + params.FN + ' ' + params.MN).replace(/\s+/g, ' ');

        if (params.LN && params.FN) {
            let new_table = make_table();
            sort_table(new_table);
        } else {
            console.log("empty")
        }
    }
}

function is_exist() {
    return document.getElementById('table');
}

function addScript(src) {
    var script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.head.appendChild(script);
}

function check_data() {
    let is_table = document.getElementById('table');
    if (is_table) {
        rename_button();
        is_table.remove();
        for (let j of document.querySelectorAll(".ege > form > p > input")) {
            j.value = "";
            is_empty_color(document.querySelector('[for=' + j.id + ']'), false);
        }
    } else {
        let SB = document.querySelector("#check_button > button");
        let LN = document.querySelector("#LN").value.length;
        let FN = document.querySelector("#FN").value.length;
        SB.disabled = (LN && FN) ? false : true;
    }
}

if (WLS !== "") {
    window.addEventListener("DOMContentLoaded", function () {
        document.getElementById('indata_id').remove();
        document.getElementById('check_button').remove();
        load_params();
        new_table = make_table();
        checktable(new_table);
    });
};