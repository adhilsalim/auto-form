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
  var subject, message;

  if (selectedTask === "#1 Introduction to Command Line") {
    subject =
      firstName +
      ", congratulations on completing Introduction to Command Line!";
    message =
      "Hey " +
      firstName +
      ",\n\n" +
      "Congratulations on completing the Introduction to Command Line! We hope you have learned the basic commands and can now navigate your way around the command line with ease. We have received your screenshots and will review them shortly.\n\n" +
      "Thanks for your participation.\n\n" +
      "Happy Coding!\n";
  } else if (selectedTask === "#2 #2 Introduction to GitHub") {
  }

  // Send the email
  MailApp.sendEmail(emailAddress, subject, message);
}
