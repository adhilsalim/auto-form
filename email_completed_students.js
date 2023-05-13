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
}
