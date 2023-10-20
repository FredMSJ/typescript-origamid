async function fetchApi() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    console.log(response);
    const json = await response.json();
    console.log(json);
    printResult(json);
}

fetchApi();


interface Cursos {
    nome: string;
    horas: number;
    aulas: number;
    gratuito: boolean;
    tags: string[];
    idAulas: number[];
    nivel: 'iniciante' | 'avancado';
}

function isCursos(value: unknown): value is Cursos  {
    if (value && typeof value === "object" && 
        "nome" in value &&
        "horas" in value &&
        "tags" in value
    ) {
        return true;
    }
    return false;
}

function printResult(data: unknown) {
    if(Array.isArray(data)) {
        data.filter(isCursos).forEach((value) => {
            document.body.innerHTML += 
                `<div>
                    <h2>Nome: ${value.nome}</h2>
                    <p>Carga Horária: ${value.horas}</p>
                    <p>Conteúdo: ${value.tags.join(',')}</p>
                </div>`;
        })
    }
}