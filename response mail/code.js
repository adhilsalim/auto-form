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
    subject = "Congrats on completing the Introduction to GitHub!";
    message =
      "Dear " +
      firstName +
      ",\n\n" +
      "Congrats on completing the Introduction to GitHub course! We hope you found it informative and useful in your journey as a developer. We have received your GitHub repository URL and will review it shortly.\n\n" +
      "Happy Coding!\n";
  } else if (selectedTask == "#3 Introduction to Markdown") {
  } else if (selectedTask === "#4 Introduction to HTML") {
    subject = "Thanks for submitting your FreeCodeCamp profile URL";
    message =
      "Hi " +
      firstName +
      ",\n\n" +
      "Thanks for submitting your FreeCodeCamp profile URL. We will use it to verify your completion of the Introduction to HTML. Please ensure that the URL you submitted is correct and leads directly to your FreeCodeCamp profile page.\n\n" +
      "If we have any issues with the verification process, we will be in touch with you to discuss further.\n\n" +
      "Happy Coding!\n";
  }

  // Send the email
  MailApp.sendEmail(emailAddress, subject, message);
}
