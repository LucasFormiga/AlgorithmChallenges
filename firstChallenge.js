/*
*	Definindo variáveis base para início da aplicação, variáveis estas
*	que serão utilizadas como cálculo de tempo que o código levou para
*	calcular tudo assim como a Integer que servirá como Input nas funções.
*/
var startTime = Date.now();
var inputChallenge = 1000000;

/*
*	A função abaixo deverá verificar se o número inserido no Input
*	é par ou ímpar; Essa função será chamada dentro da função de sequência.
*	
*	@param Integer input
*	return Integer output
*/
function isEvenOrOdd(input) {
	if (input % 2 == 0) {
		return (input / 2);
	} else {
		return (input * 3) + 1;
	}
}

/*
*	A função abaixo deverá retornar o número da sequência com base no
*	Integer de Output da Função de Verificação de Par/Ímpar assim como
*	utilizar seu próprio Input como condition no while.
*	
*	@param Integer input
*	return Integer i
*/
function getSequence(input) {
	var i = 1;

	while (input != 1) {
		input = isEvenOrOdd(input);
		i++;
	}

	return i;
}

/*
*	A função abaixo deverá retornar o número que produz a sequência
*	com a maior quantidade de itens tirando como base o número definido
*	como Input do Challenge.
*	
*	@param Integer input
*	return Integer max_index
*/
function getMajorNumber(input) {
	var iMax = 0;
	var major;

	for (var i = 1; i < input; i++) {
		var seq = getSequence(i);
		
		if (seq > iMax) {
			iMax = seq;
			major = i;
		}
	}

	return major;
}

console.log('\x1b[36m%s\x1b[0m', "O inteiro positivo abaixo de " + inputChallenge + " que produz a sequência com maior quantidade de itens é: " + getMajorNumber(inputChallenge));
console.log('\x1b[33m%s\x1b[0m', "O código levou " + ((Date.now() - startTime) / 1000) + " segundos para ser executado completamente.");