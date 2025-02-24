

function calcularHoraExtra() {
    // Pega os valores dos campos
    const salario = parseFloat(document.getElementById('salario').value);
    const horasTrabalhadas = parseFloat(document.getElementById('horasTrabalhadas').value);
    const horasExtras50 = parseFloat(document.getElementById('horasExtras50').value) || 0;
    const horasExtras70 = parseFloat(document.getElementById('horasExtras70').value) || 0;
    const horasExtras100 = parseFloat(document.getElementById('horasExtras100').value) || 0;
    const mes = parseInt(document.getElementById('mes').value);

    // Verifica se todos os campos estão preenchidos corretamente
    if (!salario || !horasTrabalhadas || mes === 0) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    // Cálculo da hora normal
    const valorHoraNormal = salario / horasTrabalhadas;

    // Cálculo das horas extras com os respectivos adicionais
    const valorHoraExtra50 = valorHoraNormal * 1.50; // 50% extra
    const valorHoraExtra70 = valorHoraNormal * 1.70; // 70% extra
    const valorHoraExtra100 = valorHoraNormal * 2.00; // 100% extra

    // Calcula os valores das horas extras
    const total50 = valorHoraExtra50 * horasExtras50;
    const total70 = valorHoraExtra70 * horasExtras70;
    const total100 = valorHoraExtra100 * horasExtras100;

    // Soma total das horas extras
    const totalExtras = total50 + total70 + total100;

    // Definição interna de domingos e feriados para cada mês (ajustável no código)
    const domingosFeriados = {
        1: 5, 2: 4, 3: 4, 4: 4, 5: 7, 6: 4,
        7: 4, 8: 4, 9: 5, 10: 4, 11: 5, 12: 5
    };

    // Definição do número total de dias do mês
    const diasNoMes = new Date(2025, mes, 0).getDate();
    const diasUteis = diasNoMes - domingosFeriados[mes]; // Dias úteis no mês

    // Cálculo do DSR sobre horas extras
    const dsr = (totalExtras * domingosFeriados[mes]) / diasUteis;

    // Atualiza os valores na página
    document.getElementById('resultado50').textContent = `R$ ${total50.toFixed(2)}`;
    document.getElementById('resultado70').textContent = `R$ ${total70.toFixed(2)}`;
    document.getElementById('resultado100').textContent = `R$ ${total100.toFixed(2)}`;
    document.getElementById('resultadoTotal').textContent = `R$ ${(totalExtras).toFixed(2)}`;

    // Exibir o DSR sobre horas extras na página
    let dsrElemento = document.getElementById('dsrTotal');
    if (!dsrElemento) {
        let dsrContainer = document.querySelector('.resultadoTotal');
        dsrContainer.innerHTML += `<br> DSR sobre Horas Extras: <span id="dsrTotal">R$ ${dsr.toFixed(2)}</span>`;
    } else {
        dsrElemento.textContent = `R$ ${dsr.toFixed(2)}`;
    }
}
