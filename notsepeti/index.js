const txtGorevEkle = document.querySelector('.txtgorevekle');
const btnGorevEkle = document.querySelector('.btngorevekle');
const gorevListe = document.querySelector('.gorevliste');


btnGorevEkle.addEventListener('click', gorevEkle);
gorevListe.addEventListener('click', gorevSil);
document.addEventListener('DOMContentLoaded', localoku);

function gorevSil(e) {
    const tiklanilanEleman = e.target;

    if (tiklanilanEleman.classList.contains('btngorev')) {
        
        
        tiklanilanEleman.parentElement.remove();
    }


}

function gorevEkle(e) {
    e.preventDefault();

    gorevItemOlustur(txtGorevEkle.value);


    localkaydet(txtGorevEkle.value);
    txtGorevEkle.value = '';
}



function localkaydet(yeniGorev) {
    let gorevler;

    if (localStorage.getItem('gorevler') === null) {
        gorevler = [];
    } else {
        gorevler = JSON.parse(localStorage.getItem('gorevler'));
    }

    gorevler.push(yeniGorev);

    localStorage.setItem('gorevler', JSON.stringify(gorevler))

}


function localoku() {
    let gorevler;

    if (localStorage.getItem('gorevler') === null) {
        gorevler = [];
    } else {
        gorevler = JSON.parse(localStorage.getItem('gorevler'));
    }

    gorevler.forEach(element => {
        gorevItemOlustur(gorev);
    });

}


function gorevItemOlustur(gorev) {
    if (txtGorevEkle.value != '') {




        //div oluşturma
        const gorevdivi = document.createElement('div');
        gorevdivi.classList.add('listeeleman');

        //li oluşturma
        const gorevLi = document.createElement('li');
        gorevLi.classList.add('gorevtanim');
        gorevLi.innerText = gorev;
        gorevdivi.appendChild(gorevLi);

        //ul ye oluşturuğumuz divi ekleyelimmi bebiş

        gorevListe.appendChild(gorevdivi);

        //buton ekleyelimmi

        const btnsil = document.createElement('button');
        btnsil.classList.add('btngorev');
        btnsil.classList.add('BTNsil');
        btnsil.innerHTML = '<i class="far fa-trash-alt"></i>';
        gorevdivi.appendChild(btnsil);





    } else {
        alert('Lütfen bir not yazın..');
    }
}


function localsil(params) {
    let gorevler;

    if (localStorage.getItem('gorevler') === null) {
        gorevler = [];
    } else {
        gorevler = JSON.parse(localStorage.getItem('gorevler'))
    }

    

}