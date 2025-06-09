/**
 * Converte um número decimal para sua representação binária usando recursão.
 *
 * @param {number} decimal O número decimal a ser convertido.
 * @returns {string} A representação binária do número decimal.
 */
function converterDecimalParaBinario(decimal) {
    if (decimal === 0) {
        return "0";
    }

    if (decimal === 1) {
        return "1";
    }

    if (decimal < 0) {
        return "Número inválido (apenas números não-negativos são suportados).";
    }

    // Chamada recursiva:
    const quociente = Math.floor(decimal / 2);
    const resto = decimal % 2;

    // A ordem de concatenação é crucial para montar o binário corretamente.
    return converterDecimalParaBinario(quociente) + resto.toString();
}

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
    binaryResult.style.color = '#007bff';
});

decimalInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        convertButton.click();
    }
});
