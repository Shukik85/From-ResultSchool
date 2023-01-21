const cards = document.querySelector("#info");

const cert_list = document.createElement('div');

cert_list.classList.add('card');
cards.prepend(cert_list); // вставить в начало cards

const cert_list_title = document.createElement('h2');

cert_list_title.innerHTML = 'Мои сертификаты';
cert_list.prepend(cert_list_title);

const certs = document.createElement('div');
certs.classList.add('certs');
cert_list.append(certs);

const certImg = [
    {
        class: "cert_image", src: "http://fs.getcourse.ru/fileservice/file/download/a/177331/sc/206/h/f1a891288acf4085d12e18f3ffe8650e.png", alt: "сертификаты"
    },
    {
        class: "cert_image", src: "http://fs.getcourse.ru/fileservice/file/download/a/177331/sc/254/h/d76eac155279c9d3d8c42ba28dc927b7.png", alt: "сертификаты"
    }
];

function init() {
    let html = "";
    for (let index = 0; index < certImg.length; index++) {
        const img = certImg[index];
        html += toCard(img, index, certImg.length);
    }

    certs.innerHTML = html
;
}

function toCard(img, index, len) {
    return `
    <img class= "${img.class}" style = "left: ${((index)*75/len)}vw"  src = "${img.src}" alt="${img.alt}" />
      `;
}

// const para = document.querySelector('p');
// const compStyles = window.getComputedStyle(para);
// para.textContent = `My computed font-size is ${compStyles.getPropertyValue('font-size')},\n` +
//     `and my computed line-height is ${compStyles.getPropertyValue('line-height')}.`;

init();
