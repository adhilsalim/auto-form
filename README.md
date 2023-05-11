# launchpad-response-email

This repo contains the google apps script code to send an email to a user when they submit a form. The email is sent to the user's email address.

Message is decided based on the user's response to a question in the form.

## Setup

1. create a google form
2. link the form to a google sheet
3. create a google apps script file
4. copy the code from `index.gs` into the script file
5. update the column names in the `index.gs` file
6. create a trigger to run the `sendEmails` function on form submit
7. give the script permissions to send emails
