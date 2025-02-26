

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

    // Esse código está manualmente definindo os domingos e feriados
    const domingosFeriados = {
        1: 5, 2: 4, 3: 5, 4: 6, 5: 7, 6: 5,
        7: 4, 8: 5, 9: 5, 10: 5, 11: 8, 12: 5
    };

    // Esse código está manualmente definindo os dias do mês
    const diasNoMes = {
        1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30,
        7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31
    };

    const diasUteis = diasNoMes[mes] - domingosFeriados[mes]; // Agora acessa corretamente os dias do mês

    // Cálculo do DSR sobre horas extras
    const dsr = (totalExtras * domingosFeriados[mes]) / diasUteis;
    // const dsr = (totalExtras / diasUteis)* domingosFeriados[mes];

    // Atualiza os valores na página
    document.getElementById('resultado50').textContent = `R$ ${total50.toFixed(2)}`;
    document.getElementById('resultado70').textContent = `R$ ${total70.toFixed(2)}`;
    document.getElementById('resultado100').textContent = `R$ ${total100.toFixed(2)}`;
    document.getElementById('resultadoTotal').textContent = `R$ ${totalExtras.toFixed(2)}`;

    // Exibir o DSR sobre horas extras na página
    let dsrElemento = document.getElementById('dsrTotal').textContent = `R$ ${dsr.toFixed(2)}`;
    if (!dsrElemento) {
        let dsrContainer = document.querySelector('.resultadoTotal');
        dsrContainer.innerHTML += `<br><br> DSR sobre Horas Extras: <span id="dsrTotal">R$ ${dsr.toFixed(2)}</span>`;
    } else {
        dsrElemento.textContent = `R$ ${dsr.toFixed(2)}`;
    }

    // Soma total de horas extras + DSR
    const totalComDSR = totalExtras + dsr;

    // Atualiza o valor total incluindo o DSR
    document.getElementById('somaTotalDsr').textContent = `R$ ${totalComDSR.toFixed(2)}`;


}
