function sendEmail(e) {
  // Get the form responses
  var fullName = e.namedValues["Full Name:"][0];
  var emailAddress = e.namedValues["Email address"][0];
  var selectedTask = e.namedValues["Select Task:"][0];

  // Split the full name into first name
  var nameParts = fullName.split(" ");
  var firstName = nameParts[0];

  var subject, message_header, message_html;

  // message main body
  var message_main = `We wanted to reach out to you personally to confirm that we have received your completed tasks and to thank you for submitting them on time. We will review them shortly. We hope the tasks were a valuable learning experience for you.<br><br>Please know that if you encounter any difficulties or have any questions about the tasks, We are here to help. Don't hesitate to reach out to us, and we will do our best to provide you with the guidance and support you need.<br><br>Thank you again for your hard work and dedication. We look forward to seeing your progress throughout the program.<br><br>Happy Coding!<br>LaunchPad - Internship Program,<br>Startups Valley TBI`;

  // select email subject and message based on the task
  if (selectedTask === "#1 Introduction to Command Line") {
    subject =
      firstName +
      ", congratulations on completing Introduction to Command Line!";
    message_header = `Hey ${firstName} 👋, <br><br>First of all, Congratulations on completing the Introduction to Command Line 🎉<br><br>We hope you have learned the basic commands and can now navigate your way around the command line with ease.`;
  } else if (selectedTask === "#2 Introduction to GitHub") {
    subject =
      firstName + ", congratulations on completing Introduction to GitHub!";
    message_header = `Hey ${firstName} 👋, <br><br>First of all, Congratulations on completing the Introduction to GitHub 🎉<br><br>We hope you now have a better understanding of Git and GitHub, and how they are used to manage version control and collaborate with others on coding projects. You should now be able to create repositories, commit changes, and push your code to GitHub with confidence.`;
  } else if (selectedTask == "#3 Introduction to Markdown") {
    subject =
      firstName + ", congratulations on completing Introduction to Markdown!";
    message_header = `Hey ${firstName} 👋, <br><br>Great job on completing the Introduction to Markdown 🎉<br><br>You now have the basic knowledge required to create simple formatted text documents with ease using Markdown syntax. You should now be able to create headers, lists, links, and images in your documents, and even use advanced formatting techniques like tables and code blocks.`;
  } else if (selectedTask === "#4 Introduction to HTML") {
    subject =
      firstName + ", congratulations on completing Introduction to HTML!";
    message_header = `Hey ${firstName} 👋, <br><br>Congratulations on completing the Introduction to HTML 🎉<br><br>You should now have a solid understanding of HTML and how it is used to structure web pages. You should be able to create basic web pages with headings, paragraphs, links, images, and lists. You should also be familiar with HTML tags and attributes and understand how to use them effectively.`;
  } else if (selectedTask === "#5 Introduction to GitHub Pages") {
    subject =
      firstName +
      ", congratulations on completing Introduction to GitHub Pages!";
    message_header = `Hey ${firstName} 👋, <br><br>Well done on completing the Introduction to GitHub Pages 🎉<br><br>You should now have a good understanding of how to use GitHub Pages to host your website. You should be able to create a simple website using HTML, CSS, and JavaScript and publish it using GitHub Pages.`;
  }

  // combine the message header and main body
  var message = message_header + "<br><br>" + message_main;

  // message html
  message_html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>LaunchPad Internship Program | Startups Valley TBI</title></head><body style="margin:0;padding:0" dir="ltr" bgcolor="#ffffff"><table border="0" cellspacing="0" cellpadding="0" align="center" id="m_-7626415423304311386email_table" style="border-collapse:collapse"><tbody><tr><td id="m_-7626415423304311386email_content" style="font-family:Helvetica Neue,Helvetica,Lucida Grande,tahoma,verdana,arial,sans-serif;background:#fff"><table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse"><tbody><tr><td height="20" style="line-height:20px" colspan="3">&nbsp;</td></tr><tr><td height="1" colspan="3" style="line-height:1px"></td></tr><tr><td><table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;text-align:center;width:100%"><tbody><tr><td width="15px" style="width:15px"></td><td style="line-height:0;max-width:600px;padding:0 0 15px 0"><table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse"></table></td><td width="15px" style="width:15px"></td></tr></tbody></table></td></tr><tr><td><table border="0" width="430" cellspacing="0" cellpadding="0" style="border-collapse:collapse;margin:0 auto 0 auto"><tbody><tr><td><table border="0" width="430px" cellspacing="0" cellpadding="0" style="border-collapse:collapse;margin:0 auto 0 auto;width:430px"><tbody><tr><td width="15" style="display:block;width:15px">&nbsp;&nbsp;&nbsp;</td></tr><tr><td><table border="0" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse"><tbody><tr><td><table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse"><tbody><tr><td width="20" style="display:block;width:20px">&nbsp;&nbsp;&nbsp;</td><td><table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse"><tbody><tr><td><p style="margin:10px 0 10px 0;color:#565a5c;font-size:18px">${message}</p></td></tr><tr><td height="20" style="line-height:20px">&nbsp;</td></tr><tr><td height="20" style="line-height:20px">&nbsp;</td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td height="10" style="line-height:10px" colspan="1">&nbsp;</td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td><table border="0" cellspacing="0" cellpadding="0" style="border-collapse:collapse;margin:0 auto 0 auto;width:100%;max-width:600px"><tbody><tr><td height="4" style="line-height:4px" colspan="3">&nbsp;</td></tr><tr><td width="15px" style="width:15px"></td><td width="20" style="display:block;width:20px">&nbsp;&nbsp;&nbsp;</td><td style="text-align:center"><div style="height:10px"></div><div style="color:#abadae;font-size:11px;margin:0 auto 5px auto">LaunchPad Internship Program | Startups Valley TBI<br></div></td><td width="20" style="display:block;width:20px">&nbsp;&nbsp;&nbsp;</td><td width="15px" style="width:15px"></td></tr><tr><td height="32" style="line-height:32px" colspan="3">&nbsp;</td></tr></tbody></table></td></tr><tr><td height="20" style="line-height:20px" colspan="3">&nbsp;</td></tr></tbody></table></tr></tbody></table></body></html>`;

  // Send the email
  MailApp.sendEmail(emailAddress, subject, "", {
    htmlBody: message_html,
  });
}
