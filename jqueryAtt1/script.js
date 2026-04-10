document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM carregado");

    $('#adicionar').on('click', function() {
        const taskInput = 
        `<div class="inputs2">
        <input type="text" placeholder="Digite uma tarefa" id="tarefa">
        <button class="remove">-</button>
        </div>`;

        $(".armazemTarefas2").append(taskInput);
        console.log("Tarefa adicionada");
    });
    
    $(document).on('click', '.remove',function() {
        $(this).closest('.inputs2').remove();
        console.log("Tarefa removida");
    });
});