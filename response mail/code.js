function sendEmail(e) {
  // Get the form responses
  var fullName = e.namedValues["Full Name:"][0];
  var emailAddress = e.namedValues["Email address"][0];
  var contactNumber = e.namedValues["Contact Number (WhatsApp preferred):"][0];
  var selectedTask = e.namedValues["Select Task:"][0];

  // Split the full name into first and last names
  var nameParts = fullName.split(" ");
  var firstName = nameParts[0];

  // Compose the email message
  var subject = firstName + " we have received your form submission.";
  var message =
    "Dear " +
    firstName +
    ",\n\n" +
    "Thank you for submitting the form. Here are the details you provided:\n\n" +
    "Full Name: " +
    fullName +
    "\n" +
    "Email Address: " +
    emailAddress +
    "\n" +
    "Contact Number: " +
    contactNumber +
    "\n" +
    "Selected Task: " +
    selectedTask +
    "\n\n" +
    "We will get back to you as soon as possible.\n\n" +
    "Regards,\n" +
    "Adhil Salim";

  // Send the email
  MailApp.sendEmail(emailAddress, subject, message);
}
