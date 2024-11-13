async function buscarCEP() {
    const cep = document.getElementById('cep').value;

    if(cep === ''){
        alert("Por favor, digite um CEP válido");
        return;
    }

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if(data.erro){
            document.getElementById('resultadocep-logradouro').innerHTML = `CEP não encontrado`;
        } else {
            document.getElementById('resultadocep-logradouro').innerHTML = `<p>${data.logradouro}</p>`
            document.getElementById('resultadocep-bairro').innerHTML = `<p>${data.bairro}</p>`
            document.getElementById('resultadocep-localidade').innerHTML = `<p>${data.uf}</p>`
            ;
            }
        } catch(error) {
    document.getElementById('resultadocep').innerHTML = 'Erro ao consultar CEP';
    }
}

async function previsao() {
    const lat = document.getElementById('lat').value;
    const long = document.getElementById('long').value;

    if(lat === '' || long === ''){
        alert("Por favor, preencha o campo latitude e longitude");
        return;
    }

    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true&timezone=America%2FSao_Paulo`);
        const data = await response.json();

        if (!data.current_weather) {
            document.getElementById('resprev').innerHTML = `Erro ao obter a temperatura atual. Tente novamente.`;
        } else {
            const temperaturaAtual = data.current_weather.temperature;
            document.getElementById('resprev').innerHTML = `Previsão de tempo de acordo com a região: ${temperaturaAtual}°C`;
        }
    } catch(error) {
        document.getElementById('resprev').innerHTML = 'Erro ao consultar a temperatura atual. Tente novamente.';
        console.error('Erro ao buscar a temperatura:', error);
    }
}

function executar(){
    buscarCEP();
    previsao();
}