/**
 * Converte um número decimal para sua representação binária usando recursão.
 *
 * @param {number} decimal O número decimal a ser convertido.
 * @returns {string} A representação binária do número decimal.
 */
function converterDecimalParaBinario(decimal) {
    // Caso base: Se o número decimal for 0, sua representação binária é "0".
    if (decimal === 0) {
        return "0";
    }

    // Caso base: Se o número decimal for 1, sua representação binária é "1".
    if (decimal === 1) {
        return "1";
    }

    // Validação para números negativos, embora o input type="number" com min="0" ajude.
    // Funções recursivas geralmente lidam melhor com domínios bem definidos.
    if (decimal < 0) {
        return "Número inválido (apenas números não-negativos são suportados).";
    }

    // Chamada recursiva:
    const quociente = Math.floor(decimal / 2);
    const resto = decimal % 2;

    // A ordem de concatenação é crucial para montar o binário corretamente.
    return converterDecimalParaBinario(quociente) + resto.toString();
}

// Obter referências aos elementos HTML
const decimalInput = document.getElementById('decimalInput');
const convertButton = document.getElementById('convertButton');
const binaryResult = document.getElementById('binaryResult');

convertButton.addEventListener('click', () => {
    let decimalValue = parseInt(decimalInput.value);

    // Validação de entrada
    if (isNaN(decimalValue) || decimalValue < 0) {
        binaryResult.textContent = "Por favor, insira um número inteiro não-negativo válido.";
        binaryResult.style.color = '#ff0000';
        return;
    }

    const result = converterDecimalParaBinario(decimalValue);
    binaryResult.textContent = result;
    binaryResult.style.color = '#007bff'; // Cor normal de resultado
});

// Opcional: Permitir conversão ao pressionar "Enter" no campo de input
decimalInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        convertButton.click(); // Simula o clique do botão
    }
});

// Opcional: Definir um valor inicial e mostrar o resultado ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    decimalInput.value = 13; // Valor inicial para demonstração
    convertButton.click(); // Converte automaticamente ao carregar
});