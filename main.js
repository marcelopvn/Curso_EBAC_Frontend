$(document).ready(function() {
    
    $('form').on('submit', function(e) {
    e.preventDefault()
        const Tarefa = $('#Nome-tarefa').val()
        const novoItem = $('<li></li>')
        $(`<li> ${Tarefa}</li>`).appendTo(novoItem)
        novoItem.appendTo('ul').click(function(){
            $(this).toggleClass('TarefaCompleta')
        })
        $('#Nome-tarefa').val('')
        $('')
    })
})