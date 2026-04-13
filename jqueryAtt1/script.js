document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM carregado");

    $('#btnAdicionar').on('click', function() {
        let texto = $('#tarefa').val().trim();

        if (texto === "") {
            alert("Digite uma tarefa!");
            return;
        }

        const novaTarefa = `
        <div class="inputs2">
            <input type="text" value="${texto}" disabled>
            <button class="editar">Editar</button>
            <button class="remove">-</button>
        </div>`;

        $(".armazemTarefas2").append(novaTarefa);

        $('#tarefa').val(""); // limpa o input
    });

    // remover
    $(document).on('click', '.remove', function() {
        $(this).closest('.inputs2').remove();
    });

    // editar
    $(document).on('click', '.editar', function() {
        let input = $(this).siblings('input');

        if (input.prop('disabled')) {
            input.prop('disabled', false);
            input.focus();
            $(this).text("Salvar");
        } else {
            input.prop('disabled', true);
            $(this).text("Editar");
        }
    });
});