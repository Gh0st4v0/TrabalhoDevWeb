document.addEventListener("DOMContentLoaded", async () => {
    try {
      const response = await fetch("./tabela.json");
      const data = await response.json();
  
      const tbody = document.getElementById("tabela-servicos");
      data.forEach(servico => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${servico.servico}</td>
          <td>${servico.descricao}</td>
          <td>${servico.valor}</td>
        `;
        tbody.appendChild(tr);
      });
    } catch (error) {
      console.error("Erro ao carregar os dados:", error);
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-contato");

    form.addEventListener("submit", function (event) {
      event.preventDefault(); // impede envio real

      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const telefone = document.getElementById("telefone").value.trim();
      const empresa = document.getElementById("empresa").value.trim();
      const servico = document.getElementById("servico").value;
      const mensagem = document.getElementById("mensagem").value.trim();
      const horario = document.getElementById("horario").value;
      const aceite = document.getElementById("aceite").checked;

      if (!nome || !email || !mensagem || !servico || !aceite) {
        alert("Por favor, preencha todos os campos obrigatórios e aceite o contato.");
        return;
      }

      const dados = `
        Nome: ${nome}
        Email: ${email}
        Telefone: ${telefone || "Não informado"}
        Empresa: ${empresa || "Não informado"}
        Serviço: ${servico}
        Mensagem: ${mensagem}
        Horário: ${horario || "Não especificado"}
        Aceite: ${aceite ? "Sim" : "Não"}
      `;

      console.log(dados);

      alert("Mensagem enviada com sucesso:\n\n" + dados);

      form.reset();
    });
  });
  