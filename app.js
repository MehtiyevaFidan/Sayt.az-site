const elements = {
    mobilemenu: document.getElementById('mobilemenu'),
    uzunluq: document.getElementById('uzunluq'),
    uzunluq2: document.getElementById('uzunluq2'),
    mobileDropdown: document.getElementById('mobileDropdown'),
    static: document.getElementById('static'),
    compound: document.getElementById('compound'),
    result: document.getElementById('result'),
    addition: document.getElementById('addition'),
    add: document.getElementById('add'),
    seo: document.getElementById('seo'),
    elavesayt: document.getElementById('elavesayt'),
    trade: document.getElementById('trade'),
    etrade: document.getElementById('etrade'),
    designlg: document.getElementById('designlg'),
    design: document.getElementById('design'),
    logo: document.getElementById('logo'),
    total: document.getElementById('total'),
    totalcost: document.getElementById('totalcost'),
    costt: document.getElementById('costt'),
    open: document.getElementById('open'),
    dəyişmə: document.getElementById('dəyişmə'),
    dəyişmə2: document.getElementById('dəyişmə2')
};

let kod = '';
let [baslanma, elave, ticaret, stil, topla] = [0, 0, 0, 0, 0];

function toggleDropdown(dropdownId) {
    const dropdowns = document.querySelectorAll('.mobileMenuDropdown, .term-scrollbar-dropdown, .drop');
    const selectedDropdown = document.getElementById(dropdownId);

    dropdowns.forEach(dropdown => {
        if (dropdown !== selectedDropdown) {
            dropdown.classList.remove('visible');
        }
    });

    selectedDropdown.classList.toggle('visible');
}

function toggleDisplay(element) {
    element.style.display === 'none' || element.style.display === '' ?
        element.style.display = 'flex' : element.style.display = 'none';
}

function uznlq() {
    toggleDisplay(elements.dəyişmə);
}

function uznlq2() {
    toggleDisplay(elements.dəyişmə2);
}

function say() {
    toggleDisplay(elements.uzunluq);
}

function say2() {
    toggleDisplay(elements.uzunluq2);
}

function acilanmenu() {
    elements.mobilemenu.style.display = 'block';
}

function closedmenu() {
    elements.mobilemenu.style.display = 'none';
    document.querySelector('body').style.overflowY = "auto";
}

function basla() {
    const elements = [
        adminpanel, bloq, profiller, respansiv, analtikiz,
        socialmedia, rezerv, xerite, elaqeforma, qalareya,
        canlisohbet, mesaj, form, saytaxtir
    ];

    let kod = 0;

    elements.forEach(element => {
        if (element.checked) {
            kod += +element.value;
        }
    });

    baslanma = kod;
    elements.addition.innerHTML = "₼ " + kod;
    elements.add.innerHTML = "₼ " + kod;
    umuminiHesabla();
}

function total() {
    const elements = [meta, advanced, sitemap, acarsoz, basliqteq];
    let hesab = 0;

    elements.forEach(element => {
        if (element.checked) {
            hesab += +element.value;
        }
    });

    elave = hesab;
    elements.elavesayt.innerHTML = "₼ " + hesab;
    elements.seo.innerHTML = "₼ " + hesab;
    umuminiHesabla();
}

function trade() {
    const elements = [odenis, mehsullar, filtr, sebet, like, mehsulhaqq];
    let ticarethesab = 0;

    elements.forEach(element => {
        if (element.checked) {
            ticarethesab += +element.value;
        }
    });

    ticaret = ticarethesab;
    elements.trade.innerHTML = "₼ " + ticarethesab;
    elements.etrade.innerHTML = "₼ " + ticarethesab;
    umuminiHesabla();
}

function design() {
    const artim = +elements.design.value;
    const dizaynhesab = (artim - 1) * 100;
    stil = dizaynhesab;
    elements.designlg.innerHTML = `₼ ${dizaynhesab}`;
    elements.logo.innerHTML = `₼ ${dizaynhesab}`;

    umuminiHesabla();
}

function hesabla() {
    const sehifeartim = +elements.static.value;
    const compoundd = +elements.compound.value;

    const deyisendeyer = sehifeartim * 0.01;
    const cemler = compoundd * 10000;
    const yekun = deyisendeyer * cemler;

    topla = yekun;

    elements.result.innerHTML = `${sehifeartim} səhifə / ₼ ${yekun.toFixed(0)}`;
    elements.costt.innerHTML = `₼ ${yekun.toFixed(0)}`;

    umuminiHesabla();
}
function umuminiHesabla() {
    let umumiNetice = baslanma + elave + ticaret + topla + stil;

    if (umumiNetice < 450) {
        umumiNetice = 450;
    }
    umumiNetice += 100;

    elements.umumideyer.innerHTML = `₼ ${umumiNetice.toFixed(0)}`;
}
function neticeleriHesabla() {
    basla();
    total();
    trade();
    design();
    hesabla();
    umuminiHesabla();
}
neticeleriHesabla();

function gonder(event) {
    event.preventDefault();
    const fullName = document.getElementById("fullName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;
    const notes = document.getElementById("notes").value || "Yoxdur";

    const formattedPhoneNumber = phoneNumber.startsWith('+994') ? phoneNumber : `+994${phoneNumber.slice(1)}`;
    const message = `Ad və soyad: ${fullName}\nTelefon nömrəsi: ${formattedPhoneNumber}\nEmail: ${email}\nQeydlər: ${notes}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=994703421512&text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
}

function acilantoggle(goster) {
    elements.open.style.display = goster ? "flex" : "none";
}

acilantoggle(true);
acilantoggle(false);
