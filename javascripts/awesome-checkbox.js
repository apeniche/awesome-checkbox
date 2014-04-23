/**
Built by Amaury Peniche
apeniche@gmail.com
**/

$(document).ready(function(){
	initialize_awesome_checkbox();
	$(document).on('change', '.awesome-checkbox', function(){
		$('label[for="'+ $(this).attr('id') +'"]').html(get_awesome_checkbox_icon(this));
	});
});

function initialize_awesome_checkbox(){
	$('input[type="checkbox"].awesome-checkbox').each(function(index){
		if(!$(this).hasClass('initialized')){
			$(this).before('<label class="awesome-checkbox-label" for="'+ $(this).attr('id') + '">' + get_awesome_checkbox_icon(this) + '</label>');
			$(this).addClass('initialized');
		}
	});
}

function get_awesome_checkbox_icon(selector){
	var icon = $(selector).is(':checked') ? $(selector).data('icon-checked') : $(selector).data('icon-unchecked')
	return '<i class="' + icon + '"></i>';
}