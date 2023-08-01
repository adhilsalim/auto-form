## lazyChecker
I was asked to validate the Google Form responses of about 60 students. That's a lot of work, so I was a bit lazy and decided to automate the process. I created some scripts, this repository contains those sciprts i developed for the IEDC LaunchPad internship program at Amal Jyothi College Of Engineering, to help manage and track student progress on Google Forms. The scripts use Google's built-in scripting language, Apps Script, to automate tasks such as sending email notifications to students and teachers (by specifying email), and analyzing completion data from Google Sheets.

## Features
The repository contains three main scripts:

1. **Form Submission Notifier:** Sends an email to the student once they have filled out the Google form.

2. **Pending Student Notifier:** Sends an email to teacher with details of students who have not yet submitted the form.

3. **Student Task Tracker:** Reads through the Google Sheets data and identifies which students have completed their tasks and which tasks are pending. The results are then sent to the teacher.

## Usage
To use these scripts, you will need to have access to the Google Form and Google Sheet that you want to manage. Follow these steps to get started:
Before you continue, please note that these programs may not be flexible for your needs, these were specifically designed based on how the data is collected and organized. 

- Clone or download this repository to your local machine.

- Open the Google Form that you want to manage, and go to Tools > Script editor. This will open the Google Apps Script editor.

- In the Apps Script editor, go to File > New > Project. This will create a new project for your script.

- Copy the code from the script that you want to use (Form Submission Notifier, Pending Student Notifier, or Student Task Tracker) from the src directory in this repository, and paste it into the new project in the Apps Script editor.

- Save the script and give it a name.

- In the script editor, go to Run > Run function and select the function that you want to run (for example, sendFormSubmissionNotification for the Form Submission Notifier script).

- Follow the prompts to authorize the script to access your Google account and run the function.

## Contributing
As these scripts were developed specifically for the IEDC LaunchPad internship program at Amal Jyothi College Of Engineering, we do not currently accept external contributions to this repository. However, if you have any feedback or suggestions for improvement, please feel free to open an issue or reach out to the team directly.

## License
This project is licensed under the MIT License. See the LICENSE file for more information.






