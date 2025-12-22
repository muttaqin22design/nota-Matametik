// Daftarkan fail gambar mengikut bab
const koleksiGambar = {
    1: ["images/bab1_1.png", "images/bab1_2.png", "images/bab1_3.png", "images/bab1_4.png", "images/bab1_5.png", "images/bab1_6.png", "images/bab1_7.png", "images/bab1_8.png", "images/bab1_9.png", "images/bab1_10.png", "images/bab1_11.png", "images/bab1_12.png",],
    2: ["images/bab.png"],
    3: ["images/bab.png"],
    4: ["images/bab.png"],
    5: ["images/bab.png"],
    6: ["images/bab.png"],
    7: ["images/bab.png"],
    8: ["images/bab.png"],
    9: ["images/bab.png"],
    10: ["images/bab.png"],
    11: ["images/bab.png"],
    12: ["images/bab.png"],
    13: ["images/bab.png"],
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