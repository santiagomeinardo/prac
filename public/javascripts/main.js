$( document ).ready(function() {

	$( "#btn_class1" ).on( "click", function() {

		if($("#txt_clase1").val() == "") {
			return;
		}

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

		$( "#btn_class2" ).on( "click", function() {
			if($("#txt_clase2").val() == "") {
				return;
			}

		$.ajax({
		  type: "POST",
		  url: "/calculate2",
		  data: {
		    class1: $("#txt_clase2").val()
		  },
		  success: function( result ) {
		  	$("#info2").show()
		    $( "#info2" ).html( "PRAc: <strong>" + result + " %</strong>" );
		  }
		});
	} );

});

