$('#enviar').on('click', ()=> {
    var dataUsuario = $('#data').val()
    var ano = dataUsuario.substr(0, 4);
    var mes = dataUsuario.substr(5, 2);
    var dia = dataUsuario.substr(8, 2);

    $.ajax({
        'url': `https://api.nasa.gov/planetary/apod?api_key=JTxUnXJn18LhDuXfqLxnVQCgJxrN7T70bbyZclUd&date=${ dataUsuario }`,
        'success': function(result){
            if(result.media_type == 'image'){
                $('#texto').html(`<p>${result.explanation}</p>`);
                $('#foto').html(`<img class="imagem" src="${result.url}" alt="Imagem da Nasa">`);    
            }

            else if(result.media_type == 'video'){
                $('#texto').html(`<p>${result.explanation}</p>  <br> Infelizmente vídeos ainda não são reproduzidos neste site.`)}},
           
           
            
        'error': function(result){
                $('#texto').html(`<p>Não há registro para ${dia}/${mes}/${ano}, tente inserir
                uma data maior do que 16/06/1995 e menor do que a data de hoje.</p>
                <br>
                `);
                $('#foto').html(`<img width=200px src="https://www.mercantec.com.br/wp-content/uploads/2019/06/Padr%C3%A3o-img_.jpg">`);
            }
            

        })       
            
})
