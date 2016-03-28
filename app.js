;$(function() {
	FB.init({
      appId      : '215596298799136',
      xfbml      : true,
	  cookie     : true,
      version    : 'v2.5'
    });
	
	FB.getLoginStatus(function(response) {
	  if (response.status === 'connected') {
		var user = response.authResponse.userID;
		var email = $('a').contains('@').text();
		
		console.log(user, email);
	  }
	  else {
		FB.login();
	  }
	});
});