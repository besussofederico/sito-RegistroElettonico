
        const btnAggiungi = document.getElementById("btnAggiungi");
        const voti = [];

        btnAggiungi.onclick = function () {
            const materiaInput = document.getElementById("inputMateria");
            const votoInput = document.getElementById("inputVoto");

            const materia = materiaInput.value;
            const voto = Number(votoInput.value);

            if (materia === "" || voto === 0) {
                alert("Inserisci sia la materia che il voto!");
                return;
            }

            const lista = document.getElementById("listaVoti");
            lista.innerHTML += "<li class='list-group-item d-flex justify-content-between align-items-center'>" +
                                materia +
                                "<span class='badge bg-danger rounded-pill fs-6'>" + voto + "</span></li>";

            voti.push(voto);

            let somma = 0;
            for (let i = 0; i < voti.length; i++) {
                somma += voti[i];
            }

            const media = somma / voti.length;
            document.getElementById("mediaVoti").innerText = media;

            materiaInput.value = "";
            votoInput.value = "";
        };
    