$(document).ready(function( ) {
	$(".project").each(function( ) {
		if( $(this).attr("data-server") ) {
			let project = $(this);
			
			let server = project.attr("data-server").split(":");
			
			let query = "https://mcapi.us/server/status?ip=" + server[0];
			
			if(server[1]) query + "&port=" + server[1];
			
			$.get(query, function(response) {
				project.find(".players .important").text( response.players.now.toLocaleString( ) );
				project.find("img").attr("src", response.favicon);
			});
		}
	});
});