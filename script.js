//#region B1 - Definição dos dados (JSON)
const catalogo = [
	{
		id: 1,
		titulo: "O Exorcista",
		tipo: "filme",
		ano: 1973,
		generos: [
			"Horror",
			"Tragédia",
			"Terror sobrenatural",
			"Terror psicológico",
			"Horror corporal",
			"Drama psicológico"
		],
		nota: 8.1,
		assistido: true,
	},
	{
		id: 2,
		titulo: "Invocação do Mal",
		tipo: "filme",
		ano: 2013,
		generos: [
			"Terror sobrenatural",
			"Suspense - Mistério",
			"Horror",
			"Mistério",
			"Thriller"
		],
		nota: 7.5,
		assistido: true,
	},
	{
		id: 3,
		titulo: "Psicose",
		tipo: "filme",
		ano: 1960,
		generos: [
			"Comédia de humor negro",
			"Suspense - Mistério",
			"Suspense psicológico",
			"Terror psicológico",
			"Terror slasher",
			"Drama",
			"Horror",
			"Mistério",
			"Suspense"
		],
		nota: 8.5,
		assistido: false,
	},
	{
		id: 4,
		titulo: "O Bebê de Rosemary",
		tipo: "filme",
		ano: 1968,
		generos: [
			"Drama psicológico",
			"Terror psicológico",
			"Terror sobrenatural",
			"Drama",
			"Horror"
		],
		nota: 8.0,
		assistido: false,
	},
	{
		id: 5,
		titulo: "Tubarão",
		tipo: "filme",
		ano: 1975,
		generos: [
			"Terror de monstro",
			"Aventura marítima",
			"Aventura de sobrevivência",
			"Aventura",
			"Drama",
			"Horror",
			"Thriller"
		],
		nota: 8.1,
		assistido: false,
	},
	{
		id: 6,
		titulo: "O Iluminado",
		tipo: "filme",
		ano: 1980,
		generos: [
			"Drama psicológico",
			"Terror psicológico",
			"Terror sobrenatural",
			"Drama",
			"Horror"
		],
		nota: 8.4,
		assistido: true,
	},
	{
		id: 7,
		titulo: "O Enigma de Outro Mundo",
		tipo: "filme",
		ano: 1982,
		generos: [
			"Horror corporal",
			"Invasão alienígena",
			"Horror de monstro",
			"Terror psicológico",
			"Horror splatter",
			"Suspense - Mistério",
			"Terror sobrenatural",
			"Tragédia",
			"Ficção científica",
			"Horror",
			"Mistério"
		],
		nota: 8.2,
		assistido: true,
	},
	{
		id: 8,
		titulo: "Filhos da Anarquia",
		tipo: "serie",
		ano: 2008,
		generos: [
			"Gângster",
			"Drama psicológico",
			"Suspense psicológico",
			"Crime",
			"Drama",
			"Suspense"
		],
		nota: 8.5,
		assistido: false,
	},
	{
		id: 9,
		titulo: "Breaking Bad",
		tipo: "serie",
		ano: 2008,
		generos: [
			"Comédia de humor negro",
			"Crime de drogas",
			"Drama psicológico",
			"Suspense psicológico",
			"Tragédia",
			"Crime",
			"Drama",
			"Suspense"
		],
		nota: 9.5,
		assistido: true,
	},
	{
		id: 10,
		titulo: "Game of Thrones",
		tipo: "serie",
		ano: 2011,
		generos: [
			"Aventura épica",
			"Épico",
			"Espada e feitiçaria",
			"Fantasia épica",
			"Fantasia sombria",
			"Drama",
			"Fantasia"
		],
		nota: 9.2,
		assistido: false,
	},
	{
		id: 11,
		titulo: "House of Cards",
		tipo: "serie",
		ano: 2013,
		generos: [
			"Drama político",
			"Épico",
			"Thriller político",
			"Drama",
			"Suspense"
		],
		nota: 8.6,
		assistido: false,
	},
	{
		id: 12,
		titulo: "Demolidor",
		tipo: "serie",
		ano: 2015,
		generos: [
			"Gângster",
			"Drama jurídico",
			"Thriller jurídico",
			"Artes marciais",
			"Suspense psicológico",
			"Super-herói",
			"Ação",
			"Crime",
			"Drama"
		],
		nota: 8.6,
		assistido: false,
	},
	{
		id: 13,
		titulo: "Fargo",
		tipo: "serie",
		ano: 2014,
		generos: [
			"Comédia de humor negro",
			"Drama psicológico",
			"Suspense psicológico",
			"Crime",
			"Drama",
			"Suspense"
		],
		nota: 8.8,
		assistido: false,
	},
	{
		id: 14,
		titulo: "Ozark",
		tipo: "serie",
		ano: 2017,
		generos: [
			"Crime de drogas",
			"Épico",
			"Drama psicológico",
			"Suspense psicológico",
			"Crime",
			"Drama",
			"Suspense"
		],
		nota: 8.4,
		assistido: false,
	},
	{
		id: 15,
		titulo: "Peaky Blinders: Sangue, Apostas e Navalhas",
		tipo: "serie",
		ano: 2013,
		generos: [
			"Drama de época",
			"Drama psicológico",
			"Gângster",
			"Crime",
			"Drama"
		],
		nota: 8.7,
		assistido: false,
	}
];
//#endregion

//#region B2 - Acesso e leitura dos dados
console.log(catalogo)

console.log(`Título do primeiro item:, ${catalogo[0].titulo}`);
console.log(`Ano do último item:, ${catalogo[catalogo.length - 1].ano}`);

const terceiroItem = catalogo[2];
if (terceiroItem.generos.length >= 2) {
	console.log(`Segundo gênero do terceiro item:, ${terceiroItem.generos[1]}`);
} else {
	console.log(`O item "${terceiroItem.titulo}" não possui um segundo gênero cadastrado.`);
}

//#endregion

//#region Iterações com iterators (tarefas)

//#region A) Listagem com forEach
console.log("A) Listagem com forEach");
catalogo.forEach((item) => {
	console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});
//#endregion

//#region B) Transformação com map
const titulosEmCaixaAlta = catalogo.map((item) => item.titulo.toUpperCase());
console.log("\n--- Títulos em caixa alta (map) ---");
console.log(titulosEmCaixaAlta);
//#endregion

//#region C) Seleção com filter
const naoAssistidos = catalogo.filter((item) => item.assistido === false);
console.log("\n--- Não assistidos (filter) ---");
console.log(`Quantidade de itens não assistidos: ${naoAssistidos.length}`);
//#endregion

//#region D) Busca com find
const melhorAvaliado = catalogo.find((item) => item.nota >= 9);
console.log("\n--- Busca por nota >= 9 (find) ---");
if (melhorAvaliado) {
    console.log(`Encontrado: "${melhorAvaliado.titulo}" com nota ${melhorAvaliado.nota}`);
} else {
    console.log("Nenhum item com nota igual ou superior a 9 foi encontrado.");
}
//#endregion

//#region E) Agregação com reduce
const somaNotas = catalogo.reduce((soma, item) => soma + item.nota, 0);
const mediaGeral = somaNotas / catalogo.length;
 
const assistidos = catalogo.filter((item) => item.assistido === true);
const mediaAssistidos = assistidos.length > 0
    ? assistidos.reduce((soma, item) => soma + item.nota, 0) / assistidos.length
    : 0;
 
console.log("\n--- Médias (reduce) ---");
console.log(`Média geral de notas: ${mediaGeral.toFixed(2)}`);
console.log(`Média das notas dos assistidos: ${mediaAssistidos.toFixed(2)}`);
//#endregion

//#region F) Checagens com some e every
const existeAntesDe2000 = catalogo.some((item) => item.ano < 2000);
const todosTemGenero = catalogo.every((item) => item.generos.length >= 1);
 
console.log("\n--- Checagens (some/every) ---");
console.log(`Existe algum item com ano < 2000? ${existeAntesDe2000}`);
console.log(`Todos os itens têm pelo menos 1 gênero? ${todosTemGenero}`);
//#endregion

//#endregion

//#region B.4 - Saída na tela (DOM simples)
const totalItens = catalogo.length;
const totalFilmes = catalogo.filter((item) => item.tipo === "filme").length;
const totalSeries = catalogo.filter((item) => item.tipo === "serie").length;

const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3);
 
const rankingHTML = ranking
    .map((item) => `<li>${item.titulo} (nota ${item.nota})</li>`)
    .join("");
 
const resumoHTML = `
    <h2>Resumo do Catálogo</h2>
    <ul>
        <li>Total de itens: ${totalItens}</li>
        <li>Filmes: ${totalFilmes}</li>
        <li>Séries: ${totalSeries}</li>
        <li>Não assistidos: ${naoAssistidos.length}</li>
        <li>Média geral de notas: ${mediaGeral.toFixed(2)}</li>
    </ul>
    <h3>Top 3 melhores notas</h3>
    <ol>${rankingHTML}</ol>
`;
 
document.getElementById("output").innerHTML = resumoHTML;
//#endregion