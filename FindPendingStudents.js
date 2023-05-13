function checkStudents() {
  var sheet = SpreadsheetApp.getActive().getSheetByName("Sheet1"); // change the sheet name as needed
  var range = sheet.getRange("C2:C"); // assuming the header row is in row 1
  var values = range.getValues();
  var students = [];
  var studentList = "";
  const timeNow = new Date().toString();
  const dateString =
    timeNow.split(" ")[0] +
    " " +
    timeNow.split(" ")[1] +
    " " +
    timeNow.split(" ")[2];
  // loop through the values and add names to the students array
  for (var i = 0; i < values.length; i++) {
    if (values[i][0] != "") {
      students.push(values[i][0].toUpperCase());
    }
  }

  // check the students list and add missing names to studentList
  var studentNames =
    "AARON SAMUEL MATHEW,ABEL V J,ABHIJITH J,ABHIJITH SELVAM,ABHINAND S,ADITHYA A,AJISHA ELIZABETH ABRAHAM,AKHIL LORENCE,AKHIL MANOHAR,AKHIL P DOMINIC,ALAN SHAJI VATTAMALA,ALEENA JOSEPH,ALEENA THOMAS,ALEN SCARIA ANTONY,ALWIN RAJAN,ALWIN SIBI,AMAL BISO GEORGE,AMAL CHERIAN JACOB,AMARTHYAG P,AMRUTHA . P,ANGELA ROSE BABY,ANNMARIA SUSAN KURIAN,ANSPIN TITUS,ANTONY THOMAS,ASWIN SHIBU,CHRISTY KUNJUMON PETER,DEEPAK DENNY DAVID,DEEPTHI C D,DEVADETHAN R,DILIYA SAJI,ELANA MARTIN,EVANA ANN BENNY,FARHAAN M HUSSAIN,FELIN ELIZABETH BINOY,FRANCIS TOM,HAZNA R MOHAMMED,JETTIN JOY,JISHNU SURESH,JITHIN GEORGE JOHNSON,JOEL C RAJU,JONAT J MATHEW,JOSEPH V S,JOSNA MARY THOMAS,KRISHNAPRIYA RAJESH,MELBY MARY MATHEW,MELVIN TOM VARGHESE,MILU MARY JACOB,NEHA ANN SAMSON,NIKITHA MARY VARGHESE,NIMISHA NIGEL,ROHIT SUBASH NAIR,SACHU SAJI,SAYA NEZRIN,SHILPA MARIAM JAMES,SNEHA SUSAN ROBI,SUSAN ANDREWS,THOMAS KANNAMTHANAM THOMAS,VIVEK NAIR";
  var studentNamesArray = studentNames.split(",");
  for (var i = 0; i < studentNamesArray.length; i++) {
    if (!students.includes(studentNamesArray[i].toUpperCase())) {
      studentList += studentNamesArray[i] + "\n";
    }
  }

  Logger.log(studentList);

  // send an email with the list of missing students
  if (studentList != "") {
    MailApp.sendEmail({
      to: "alanjames2023@cs.ajce.in",
      subject:
        "List of students who have not completed the task " + dateString + ".",
      body:
        "The following students have not completed the task as of " +
        timeNow +
        ":\n(This is an automated email)\n\n" +
        studentList,
    });
  }
}
