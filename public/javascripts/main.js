$( document ).ready(function() {

	$( "#btn_class1" ).on( "click", function() {
		$.ajax({
		  type: "POST",
		  url: "/calculate",
		  data: {
		    class1: $("#txt_clase1").val()
		  },
		  success: function( result ) {
		  	$("#info").show()
		    $( "#info" ).html( "PRAc: <strong>" + result + " %</strong>" );
		  }
		});
	} );

});

