$(document).ready(function() {
$("#myForm").validate({
  submitHandler: function(form) {
    form.submit();
  }
 });
});