function sendEmail(e) {
  // Get the form responses
  var fullName = e.namedValues["Full Name:"][0];
  var emailAddress = e.namedValues["Email address"][0];
  // var emailAddress = "adhilsalim2025@cs.ajce.in";
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
    message = `
        Hey ${firstName} \n
        First of all, Congratulations on completing the Introduction to Command Line! We hope you have learned the basic commands and can now navigate your way around the command line with ease. I wanted to reach out to you personally to confirm that we have received your completed tasks and to thank you for submitting them on time. We will review them shortly. I hope the tasks were a valuable learning experience for you.\n\nPlease know that if you encounter any difficulties or have any questions about the tasks, I am here to help. Don't hesitate to reach out to me, and I will do my best to provide you with the guidance and support you need.\nThank you again for your hard work and dedication. I look forward to seeing your progress throughout the program.\n\nHappy Coding!\nLaunchPad - Internship Program,\nStartups Valley TBI`;
  } else if (selectedTask === "#2 Introduction to GitHub") {
    subject =
      firstName + ", congratulations on completing Introduction to GitHub!";
    message =
      "Hey " +
      firstName +
      ",\n\n" +
      "Congrats on completing the Introduction to GitHub! We hope you found it informative and useful in your journey as a developer. We have received your GitHub repository URL and will review it shortly.\n\n" +
      "Happy Coding!\nLaunchPad - Internship Program,\nStartups Valley TBI";
  } else if (selectedTask == "#3 Introduction to Markdown") {
    subject =
      firstName + ", congratulations on completing Introduction to Markdown!";
    message =
      "Hey " +
      firstName +
      ",\n\n" +
      "Congrats on completing Introduction to Markdown. We have received your repository URL and will review it shortly.\n\n" +
      "Happy Coding!\nLaunchPad - Internship Program,\nStartups Valley TBI";
  } else if (selectedTask === "#4 Introduction to HTML") {
    subject =
      firstName + ", congratulations on completing Introduction to HTML!";
    message =
      "Hey " +
      firstName +
      ",\n\n" +
      "Thanks for submitting your FreeCodeCamp profile URL. We will use it to verify your completion of the Introduction to HTML. Please ensure that the URL you submitted is correct and leads directly to your FreeCodeCamp profile page.\n\n" +
      "If we have any issues with the verification process, we will be in touch with you to discuss further.\n\n" +
      "Happy Coding!\nLaunchPad - Internship Program,\nStartups Valley TBI";
  } else if (selectedTask === "#5 Introduction to GitHub Pages") {
    subject =
      firstName +
      ", congratulations on completing Introduction to GitHub Pages!";
    message =
      "Hey " +
      firstName +
      ",\n\n" +
      "Thank you for submitting your GitHub Pages URL for Introduction to GitHub Pages. We have received your GitHub Pages URL and will review it shortly. If there are any issues, we will be in touch with you to discuss further.\n\n" +
      "Happy Coding!\nLaunchPad - Internship Program,\nStartups Valley TBI";
  }

  // Send the email
  MailApp.sendEmail(emailAddress, subject, message);
}
