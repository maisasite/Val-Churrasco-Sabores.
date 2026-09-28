// ==========================================
// FORMULÁRIO DE ORÇAMENTO - VAL CHURRASCO
// ==========================================

const formulario = document.getElementById("form-orcamento");

formulario.addEventListener("submit", function(event) {

    // Impede o formulário de recarregar a página
    event.preventDefault();

    // Pega as informações preenchidas pelo cliente
    const nome = document.getElementById("nome").value;
    const data = document.getElementById("data").value;
    const convidados = document.getElementById("convidados").value;
    const evento = document.getElementById("evento").value;
    const servico = document.getElementById("servico").value;
    const local = document.getElementById("local").value;
    const observacoes = document.getElementById("mensagem").value;

    // Formata a data
    const partesData = data.split("-");
    const dataFormatada =
        partesData.length === 3
            ? `${partesData[2]}/${partesData[1]}/${partesData[0]}`
            : data;

    // Número do WhatsApp da Val
    const telefone = "5543988437792";

    // Monta a mensagem
    const mensagem = `Olá, Val! 🔥

Conheci seu trabalho pelo site e gostaria de solicitar um orçamento.

👤 *Nome:* ${nome}

🎉 *Tipo de evento:* ${evento}

📅 *Data do evento:* ${dataFormatada}

👥 *Quantidade de pessoas:* ${convidados}

🍖 *Serviço desejado:* ${servico}

📍 *Local do evento:* ${local}

📝 *Observações:* ${observacoes || "Nenhuma observação."}

Aguardo seu retorno. Obrigado(a)!`;

    // Converte a mensagem para funcionar corretamente no link
    const mensagemCodificada = encodeURIComponent(mensagem);

    // Cria o link do WhatsApp
    const linkWhatsApp =
        `https://wa.me/${telefone}?text=${mensagemCodificada}`;

    // Abre o WhatsApp
    window.open(linkWhatsApp, "_blank");

});
