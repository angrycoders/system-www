/*
* Logging in to the system
*/


'use strict';


var endpoint = '/sys/login';


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
    if (err) {
      // show error message
      $(loginErrorBanner).removeClass('hidden');
      // error occurred. Clear form data
      $('#txtEmail').val('');
      $('#txtPassword').val('');
      // re-enable login button
      $(btnLogin).removeAttr('disabled');
      return;
    }
    // successful login. Redirecting user to user page
    window.location = "/user/";
    return;
  });
});

