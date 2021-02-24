$('#bars').on ('click', () => {
    if ($('#menu').css.display == 'none') {
        console.log ('dovrei apparire')
    } else { 
        $('#menu').css('display','none')
    }
})