$( document ).ready(function() {

$("#class1_spinner").hide()
$("#class2_spinner").hide()

	$( "#btn_class1" ).on( "click", function() {

		if($("#txt_clase1").val() == "") {
			return;
		}

$("#class1_spinner").show()

		$.ajax({
		  type: "POST",
		  url: "/calculate",
		  data: {
		    class1: $("#txt_clase1").val()
		  },
		  success: function( result ) {
		  	$("#info").show()
		  	$("#class1_spinner").hide()
		    $( "#info" ).html( "PRAc: <strong>" + result + " %</strong>" );
		  }
		});
	} );

		$( "#btn_class2" ).on( "click", function() {
			if($("#txt_clase2").val() == "") {
				return;
			}

			$("#class2_spinner").show()

		$.ajax({
		  type: "POST",
		  url: "/calculate2",
		  data: {
		    class1: $("#txt_clase2").val()
		  },
		  success: function( result ) {
		  	$("#info2").show()
		  	$("#class2_spinner").hide()
		    $( "#info2" ).html( "PRAc: <strong>" + result + " %</strong>" );
		  }
		});
	} );

});

