"use strict";
async function apiCursos() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const data = await response.json();
    console.log(data);
    mostraCursos(data);
}
apiCursos();
function mostraCursos(cursos) {
    cursos.forEach(curso => {
        let color;
        if (curso.nivel === "iniciante") {
            color = "blue";
        }
        else if (curso.nivel === "avancado") {
            color = "red";
        }
        document.body.innerHTML += `
    <h2 style="color:${color}">${curso.nome}</h2>
    <p>Custo: ${curso.gratuiro ? "Gratuito" : "Pago"}</p>
    <p>Carga Horária: ${curso.horas}</p>
    <p>Assuntos: ${curso.tags.join(', ')}</p>
    <p>Aulas: ${curso.idAulas.join(' | ')}</p>
    `;
    });
    return true;
}
