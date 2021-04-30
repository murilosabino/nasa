$('#data').on('change', ()=> {
    
    var ano = $('#data').val().substr(0, 4);
    var mes = $('#data').val().substr(5, 2);
    var dia = $('#data').val().substr(8, 2);

    $.ajax({
        'url': `https://api.nasa.gov/planetary/apod?api_key=JTxUnXJn18LhDuXfqLxnVQCgJxrN7T70bbyZclUd&date=${$('#data').val()}`,
        'success': function(result){
            $('#texto').html(`<p>${result.explanation}</p> <img src="${result.url}">`)},
        'error': function(result){
            $('#texto').html(`<p>Não há registro para ${dia}/${mes}/${ano}, tente inserir
            uma data maior do que 16/06/1995.</p>`)}
                
            
        })})
