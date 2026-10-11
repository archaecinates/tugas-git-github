let nama = "";
let jumlah = 0;
let pilihan = [];
let terpilih = "";
let email = "";


document.getElementById("btnSubmit").onclick = function () {
    nama = document.getElementById("nama").value;
    jumlah = document.getElementById("jumlah").value;

    if (nama == "") {
        alert("Nama tidak boleh kosong!");
        return;
    }
    if (jumlah == "" || jumlah <= 0) {
        alert("Jumlah pilihan harus lebih dari 0!");
        return;
    }

    jumlah = Number(jumlah);
    let tempat = document.getElementById("masukkanPilihan");
    tempat.innerHTML = "";

    for (let i = 1; i <= jumlah; i++) {
        let label = document.createElement("label");
        label.innerHTML = "Pilihan " + i;
        let input = document.createElement("input");
        input.type = "text";
        input.id = "pilihan" + i;
        tempat.appendChild(label);
        tempat.appendChild(input);

        tempat.appendChild(document.createElement("br"));
    }

    document.getElementById("inputChoice").hidden = false;
    document.getElementById("nama").disabled = true;
    document.getElementById("jumlah").disabled = true;
    document.getElementById("btnSubmit").disabled = true;
};

document.getElementById("btnSubmitChoice").onclick = function () {
    pilihan = [];

    for (let i = 1; i <= jumlah; i++) {
        let teks = document.getElementById("pilihan" + i).value;
        if (teks == "") {
            alert("Semua pilihan harus diisi!");
            return;
        }
        pilihan.push(teks);
    }

    document.getElementById("choiceButton").hidden = false;
    for (let i = 1; i <= jumlah; i++) {
        document.getElementById("pilihan" + i).disabled = true;
    }
    document.getElementById("btnSubmitChoice").disabled = true;
    changeShape();
};

function changeShape() {
    let bentuk = document.getElementById("shape").value;
    let tempat = document.getElementById("choiceContainer");
    tempat.innerHTML = "";

    if (bentuk == "radio") {
        for (let i = 0; i < pilihan.length; i++) {
            let radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "pilihan";
            radio.value = pilihan[i];
            radio.id = "radio" + i;

            let label = document.createElement("label");
            label.innerHTML = pilihan[i];
            label.htmlFor = "radio" + i;

            tempat.appendChild(radio);
            tempat.appendChild(label);
            tempat.appendChild(document.createElement("br"));
        }
    }

    else {
        let select = document.createElement("select");
        select.id = "dropdown";
        let kosong = document.createElement("option");
        kosong.value = "";
        kosong.innerHTML = "Pilih salah satu";
        select.appendChild(kosong);

        for (let i = 0; i < pilihan.length; i++) {
            let option = document.createElement("option");
            option.value = pilihan[i];
            option.innerHTML = pilihan[i];
            select.appendChild(option);
        }
        tempat.appendChild(select);
    }
}

document.getElementById("btnSubmitChoiceButton").onclick = function () {
    let bentuk = document.getElementById("shape").value;

    if (bentuk == "radio") {
        let radio = document.querySelector(
            'input[name="pilihan"]:checked'
        );
        if (radio == null) {
            alert("Silakan pilih salah satu pilihan!");
            return;
        }
        terpilih = radio.value;
    }

    else {
        let dropdown = document.getElementById("dropdown");
        if (dropdown.value == "") {
            alert("Silakan pilih salah satu pilihan!");
            return;
        }
        terpilih = dropdown.value;
    }

    document.getElementById("email").hidden = false;
    document.getElementById("shape").disabled = true;
    document.getElementById("btnSubmitChoiceButton").disabled = true;
};

document.getElementById("btnSubmitEmail").onclick = function () {
    email = document.getElementById("emailInput").value;
    if (email == "") {
        alert("Email tidak boleh kosong!");
        return;
    }

    let polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!polaEmail.test(email)) {
        alert("Format email tidak valid! Silakan masukkan ulang.");
        return;
    }

    let hasil = "Hallo, nama saya " + nama + ", email " + email + ". Saya mempunyai sejumlah " + jumlah + " pilihan yaitu " + pilihan.join(", ") + ", dan saya memilih " + terpilih + ".";

    document.getElementById("resultText").innerHTML = hasil;
    document.getElementById("result").hidden = false;
    document.getElementById("emailInput").disabled = true;
    document.getElementById("btnSubmitEmail").disabled = true;
};

document.getElementById("btnReset").onclick = function () {
    location.reload();
};

