/*
* Logging in to the system
*/


'use strict';


var endpoint = '/sys/login.php';


/*
* Log in to System
* @param <data> - {Object} email-password combination
* @param <callback> - {Function} callback(err)
*/
function login(data, callback) {
  reqwest({
    url: endpoint,
    method: 'POST',
    data: data,
    success: function(data) {
      return callback(null, data);
    },
    error: function(err) {
      return callback(err);
    }
  });
}


// Attaching the Submit event
$('#loginForm').submit(function(e) {
  e.preventDefault();
  // Login button
  var btnLogin = $('#btnLogin');
  var loginErrorBanner = $('#loginError');
  // Disabling the button
  $(btnLogin).attr('disabled', 'disabled');
  // Hiding the Error banner
  $(loginErrorBanner).addClass('hidden');
  // Making a login request
  login($(this).serialize(), function(err, data) {
    console.log(err, data);
    if (err) {
      // show error message
      $("#loginMessage").html(err.responseText || err.statusText);
      $(loginErrorBanner).removeClass('hidden');
      // error occurred. Clear form data
      $('input[name=email]').val('');
      $('input[name=password]').val('');
      // re-enable login button
      $(btnLogin).removeAttr('disabled');
      return;
    }
    // successful login. We shall be redirected to
    // user page by server response
    window.location = data.url;
    return;
  });
});

