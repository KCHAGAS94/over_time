



function calcularHoraExtra() {
    // Pega os valores dos campos
    const salario = parseFloat(document.getElementById('salario').value);
    const horasTrabalhadas = parseFloat(document.getElementById('horasTrabalhadas').value);
    const horasExtras50 = parseFloat(document.getElementById('horasExtras50').value);
    const horasExtras70 = parseFloat(document.getElementById('horasExtras70').value);
    const horasExtras100 = parseFloat(document.getElementById('horasExtras100').value);

    // Verifica se todos os campos estão preenchidos corretamente
    if (salario && horasTrabalhadas && horasExtras50 >= 0 && horasExtras70 >= 0 && horasExtras100 >= 0) {
        // Cálculo da hora normal
        const valorHoraNormal = salario / horasTrabalhadas;

        // Cálculo da hora extra de 50%, 70% e 100%
        const valorHoraExtra50 = valorHoraNormal * 1.50; // 50% extra
        const valorHoraExtra70 = valorHoraNormal * 1.70; // 70% extra
        const valorHoraExtra100 = valorHoraNormal * 2.00; // 100% extra

        // Calcula os valores das horas extras
        const total50 = valorHoraExtra50 * horasExtras50;
        const total70 = valorHoraExtra70 * horasExtras70;
        const total100 = valorHoraExtra100 * horasExtras100;

        // Exibe os resultados individuais
        document.getElementById('resultado50').textContent = `R$ ${total50.toFixed(2)}`;
        document.getElementById('resultado70').textContent = `R$ ${total70.toFixed(2)}`;
        document.getElementById('resultado100').textContent = `R$ ${total100.toFixed(2)}`;

        // Exibe o total geral
        const totalGeral = total50 + total70 + total100;
        document.getElementById('resultadoTotal').textContent = `R$ ${totalGeral.toFixed(2)}`;
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}