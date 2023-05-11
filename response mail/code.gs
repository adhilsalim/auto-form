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
  var subject, message, message_html;

  if (selectedTask === "#1 Introduction to Command Line") {
    subject =
      firstName +
      ", congratulations on completing Introduction to Command Line!";
    message = `Hey ${firstName} \nFirst of all, Congratulations on completing the Introduction to Command Line!\nWe hope you have learned the basic commands and can now navigate your way around the command line with ease. I wanted to reach out to you personally to confirm that we have received your completed tasks and to thank you for submitting them on time. We will review them shortly. I hope the tasks were a valuable learning experience for you.\n\nPlease know that if you encounter any difficulties or have any questions about the tasks, I am here to help. Don't hesitate to reach out to me, and I will do my best to provide you with the guidance and support you need.\nThank you again for your hard work and dedication. I look forward to seeing your progress throughout the program.\n\nHappy Coding!\nLaunchPad - Internship Program,\nStartups Valley TBI`;
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

  message_html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>LaunchPad Internship Program | Startups Valley TBI</title></head><body style="margin:0;padding:0" dir="ltr" bgcolor="#ffffff"><table border="0" cellspacing="0" cellpadding="0" align="center" id="m_-7626415423304311386email_table" style="border-collapse:collapse"><tbody><tr><td id="m_-7626415423304311386email_content" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;background:#fff"><table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse"><tbody><tr><td height="20" style="line-height:20px" colspan="3">&nbsp;</td></tr><tr><td height="1" colspan="3" style="line-height:1px"></td></tr><tr><td><table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;text-align:center;width:100%"><tbody><tr><td width="15px" style="width:15px"></td><td style="line-height:0;max-width:600px;padding:0 0 15px 0"><table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse"></table></td><td width="15px" style="width:15px"></td></tr></tbody></table></td></tr><tr><td><table border="0" width="430" cellspacing="0" cellpadding="0" style="border-collapse:collapse;margin:0 auto 0 auto"><tbody><tr><td><table border="0" width="430px" cellspacing="0" cellpadding="0" style="border-collapse:collapse;margin:0 auto 0 auto;width:430px"><tbody><tr><td width="15" style="display:block;width:15px">&nbsp;&nbsp;&nbsp;</td></tr><tr><td><table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse"><tbody><tr><td><table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse"><tbody><tr><td width="20" style="display:block;width:20px">&nbsp;&nbsp;&nbsp;</td><td><table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse"><tbody><tr><td><p style="margin:10px 0 10px 0;color:#565a5c;font-size:18px">${message}</p></td></tr><tr><td height="20" style="line-height:20px">&nbsp;</td></tr><tr><td height="20" style="line-height:20px">&nbsp;</td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td height="10" style="line-height:10px" colspan="1">&nbsp;</td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td><table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;margin:0 auto 0 auto;width:100%;max-width:600px"><tbody><tr><td height="4" style="line-height:4px" colspan="3">&nbsp;</td></tr><tr><td width="15px" style="width:15px"></td><td width="20" style="display:block;width:20px">&nbsp;&nbsp;&nbsp;</td><td style="text-align:center"><div style="height:10px"></div><div style="color:#abadae;font-size:11px;margin:0 auto 5px auto">LaunchPad Internship Program | Startups Valley TBI<br></div></td><td width="20" style="display:block;width:20px">&nbsp;&nbsp;&nbsp;</td><td width="15px" style="width:15px"></td></tr><tr><td height="32" style="line-height:32px" colspan="3">&nbsp;</td></tr></tbody></table></td></tr><tr><td height="20" style="line-height:20px" colspan="3">&nbsp;</td></tr></tbody></table></tr></tbody></table></body></html>`;

  // Send the email
  MailApp.sendEmail(emailAddress, subject, "", {
    htmlBody: message_html,
  });
}
