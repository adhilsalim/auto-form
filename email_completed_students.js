function getDetailsOfCompletedStudents() {
  var sheet = SpreadsheetApp.getActive().getSheetByName("Sheet1");
  var full_name_column_range = sheet.getRange("C2:C");
  var contact_number_column_range = sheet.getRange("D2:D");
  var upload_screenshot_column_range = sheet.getRange("F2:F");
  var repo_url_one_column_range = sheet.getRange("G2:G");
  var repo_url_two_column_range = sheet.getRange("H2:H");
  var freecodecamp_url_column_range = sheet.getRange("I2:I");
  var github_pages_url_column_range = sheet.getRange("J2:J");

  var full_name_values = full_name_column_range.getValues();
  var contact_number_values = contact_number_column_range.getValues();
  var upload_screenshot_values = upload_screenshot_column_range.getValues();
  var repo_url_one_values = repo_url_one_column_range.getValues();
  var repo_url_two_values = repo_url_two_column_range.getValues();
  var freecodecamp_url_values = freecodecamp_url_column_range.getValues();
  var github_pages_url_values = github_pages_url_column_range.getValues();

  const timeNow = new Date().toString();
  const dateString =
    timeNow.split(" ")[0] +
    " " +
    timeNow.split(" ")[1] +
    " " +
    timeNow.split(" ")[2];
  let currentStudent = full_name_values[0][0];
  let completedTask1 = false;
  let completedTask2 = false;
  let completedTask3 = false;
  let completedTask4 = false;
  let completedTask5 = false;
  let studentDetails;
  // loop through columns
  for (var i = 0; i < full_name_values.length; i++) {
    if (currentStudent == full_name_values[i][0]) {
      if (upload_screenshot_values[i][0] != "") {
        completedTask1 = true;
      }
      if (repo_url_one_values[i][0] != "") {
        completedTask2 = true;
      }
      if (repo_url_two_values[i][0] != "") {
        completedTask3 = true;
      }
      if (freecodecamp_url_values[i][0] != "") {
        completedTask4 = true;
      }
      if (github_pages_url_values[i][0] != "") {
        completedTask5 = true;
      }
    } else {
      if (
        completedTask1 &&
        completedTask2 &&
        completedTask3 &&
        completedTask4 &&
        completedTask5
      ) {
        studentDetails += `${currentStudent} has completed all tasks\n`;
      } else {
        studentDetails += `${currentStudent} has not completed the following task: ${
          completedTask1 ? "" : "Task 1, "
        } ${completedTask2 ? "" : "Task 2, "} ${
          completedTask3 ? "" : "Task 3, "
        } ${completedTask4 ? "" : "Task 4, "} ${
          completedTask5 ? "" : "Task 5, "
        }\n`;
      }
      currentStudent = full_name_values[i][0];
      completedTask1 = false;
      completedTask2 = false;
      completedTask3 = false;
      completedTask4 = false;
      completedTask5 = false;
    }
  }
  Logger.log(studentDetails);
}
