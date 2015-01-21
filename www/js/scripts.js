$(document).ready(function() { 

//////////////////////////////////////////////
///////////	RECADOS - MEDICAMENTOS	/////////
/////////////////////////////////////////////
	$("#list-remedios").hide();
	$("#list-medicamentos").hide();
	$("#btns-medicamentos").hide();

	$("#add-remedio").click(function() {
		$(this).hide();
		$("#list-remedios").hide();
		$("#list-medicamentos, #btns-medicamentos").fadeIn();
	});
	
	$("#btn-concluir").click(function() {
		$("#list-medicamentos, #btns-medicamentos").hide();
		$("#list-remedios, #add-remedio").fadeIn();
	});
	
	
	
	
});

