// Daftarkan fail gambar mengikut bab
const koleksiGambar = {
    1: ["images/bab1_1.PNG", "images/bab1_2.PNG", "images/bab1_3.PNG", "images/bab1_4.PNG", "images/bab1_5.PNG", "images/bab1_6.PNG", "images/bab1_7.PNG", "images/bab1_8.PNG", "images/bab1_9.PNG", "images/bab1_10.PNG", "images/bab1_11.PNG", "images/bab1_12.PNG",],
    2: ["images/bab.PNG"],
    2: ["images/bab.PNG"],
    3: ["images/bab.PNG"],
    4: ["images/bab.PNG"],
    5: ["images/bab.PNG"],
    6: ["images/bab.PNG"],
    7: ["images/bab.PNG"],
    8: ["images/bab.PNG"],
    9: ["images/bab.PNG"],
    10: ["images/bab.PNG"],
    11: ["images/bab.PNG"],
    12: ["images/bab.PNG"],
    13: ["images/bab.PNG"],
    // Tambah senarai gambar bab lain di sini
};

let babAktif = null;
let indexGambar = 0;

function pilihBab(nombor) {
    babAktif = nombor;
    indexGambar = 0;

    // Sembunyikan menu, tunjuk paparan nota
    document.getElementById("main-title").style.display = "none";
    document.getElementById("menu-section").style.display = "none";
    document.getElementById("content-section").style.display = "block";

    kemasKiniPaparan();
}

function kemasKiniPaparan() {
    const imej = document.getElementById("notaImage");
    const info = document.getElementById("page-info");
    const senarai = koleksiGambar[babAktif];

    // Pastikan bab tersebut wujud dalam data
    if (senarai) {
        imej.src = senarai[indexGambar];
        info.innerText = `${indexGambar + 1} / ${senarai.length}`;
    }
}

function gambarSeterusnya() {
    if (indexGambar < koleksiGambar[babAktif].length - 1) {
        indexGambar++;
        kemasKiniPaparan();
    }
}

function gambarSebelumnya() {
    if (indexGambar > 0) {
        indexGambar--;
        kemasKiniPaparan();
    }
}

function kembaliKeMenu() {
    // Sembunyikan nota, tunjuk menu semula
    document.getElementById("main-title").style.display = "block";
    document.getElementById("menu-section").style.display = "block";
    document.getElementById("content-section").style.display = "none";

}
