$('ul').on('click' , 'li', function(){
    $(this).toggleClass('completed')
})


$('#inp').keypress(function(e){
    const todoText = $(this).val();
    if(e.which ===13){
    $('#list').append(`<li> <i class="fa-solid fa-trash"></i> ${todoText}</li>`); 
    $(this).val("");   
    }    
})

$('ul').on('click' , 'i' , function(e){
    $(this).parent().fadeOut(function(){
         $(this).remove();
    })
    e.stopPropagation();
})

$('#plus').click(function(){
    $('#inp').fadeToggle();
})
