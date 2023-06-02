function calcular() {
	
    // recupera os valores dos inputs
	let comprimento = document.getElementById("comprimento").value;
	let largura = document.getElementById("largura").value;
	let altura = document.getElementById("altura").value;

	// converte as dimensões para metros
	comprimento = comprimento / 100;
	largura = largura / 100;
	altura = altura / 100;

	// calcula o volume em metros cúbicos
	let volume = comprimento * largura * altura;

	// converte o volume para litros
	let litros = volume * 1000;

	// exibe o resultado
	alert("O aquário tem " + litros + " litros de capacidade.");
}
