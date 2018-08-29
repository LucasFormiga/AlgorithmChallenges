/*
*	Definindo variáveis base para início da aplicação, variáveis estas
*	que serão utilizadas para import de método, inicialização de arrays
*	assim como definição de variáveis para inicialização posterior.
*/
var readline		= require('readline');
var sameLetters		= [];
var array			= [];
var pos				= 0;
var word, split, length;

/*
*	Definindo a interface do scanner para posterior uso do mesmo.
*/
var reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
*	Requisitando ao usuário a palavra que ele gostaria de testar e
*	realizando a execução do código de acordo com o necessário.
*/
reader.question("Qual palavra você gostaria de testar?\n", (answer) => {
	word 	= answer;
	split 	= word.split('');
	length 	= split.length;
	execute();
	reader.close();
});

/*
*	Função destinada à execução do que é necessário para realização
*	do desafio.
*/
function execute() {
	/*
	*	Primeiramente devemos consultar as letras iguais presentes
	*	na palavra afim de separá-las das restantes.
	*/
	for (var i = 0; i < length; i++) {
		if (split[i] == split[i + 1] || split[i] == split[i - 1]) {
			sameLetters.push(split[i]);
		}
	}

	/*
	*	Em seguida faremos verifiações para organização de uma
	*	nova array com apenas as letras repetidas que realmente
	*	desejarmos. Ou seja, as letras repetidas em maior quantidade
	*	e mesmo que hajam letras iguais em localidades diferentes da palavra
	*	as mesmas não serão adicionadas.
	*/
	for (var i = 0; i < sameLetters.length; i++) {
		if (array[pos] == undefined) {
			array[pos] = sameLetters[i];
		} else if (array[pos].includes(sameLetters[i])) {
			array[pos] += sameLetters[i];
		} else if (!array[pos].includes(sameLetters[i]) && !isInArray(array, sameLetters[i])) {
			pos++;
			array[pos] = sameLetters[i];
		}
	}

	/*
	*	Verificando se o array contém algo para devolver ao usuário
	*	caso não haja, apenas a keyword 'null' será devolvida.
	*/
	if (array.length != 0)
		return console.log(array);
	
	return console.log(null);
}

/*
*	Função destinada para verificação dos itens da array
*	para que não haja duplicação de letras.
*/
function isInArray(array, toVerify) {
	for (var i = 0; i < array.length; i++) {
		if (array[i].includes(toVerify)) {
			return true;
		} else {
			return false;
		}
	}
}