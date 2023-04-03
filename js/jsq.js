$(document).ready(function() {
  $("#message-form").submit(function(event) {
    event.preventDefault(); // prevent default form submission
    var formData = $(this).serialize(); // serialize the form data

    // Send the form data to your server-side script using AJAX
    $.ajax({
      type: "POST",
      url: "your-email-script.php", // Replace with your server-side script that sends the email
      data: formData,
      success: function(response) {
        // Handle the response from the server-side script, if needed
        console.log(response);
      },
      error: function(xhr, status, error) {
        // Handle errors, if any
        console.log(xhr.responseText);
      }
    });
  });
});