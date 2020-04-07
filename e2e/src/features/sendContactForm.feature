Feature: Contact Form Functionality
   The porpose of this is to check all validations on the Contact Form

   Scenario: Verify if user is not able to send the form with all fields on blank
      Given I go to the Contact Form page
      When I click on Send
      Then It trigger an alert for the fields being blank

   Scenario: Verify if user cannot send the form with an unvalid email
      Given I'm on the conctact Form page
      When I type an unvalid Email address
      And I send the contact form
      Then It should give me a validation for the invalid email

   Scenario: Verify if user cannot send the form w/o placing a message
      Given From the conctact Form page
      When I type a valid Email address
      And I send the form again
      Then It should give me a validation for the Message being empty

   Scenario: Verify if user cannot send the form w/o putting any subject
      Given On the conctact Form page
      When I type a valid Email
      And I type a valid Message
      And I send the form
      Then It should give me a validation for the subject being empty

   Scenario: Verify if user can attach a file by using the attach component on the form
      Given I'm at the conctact Form page
      When I attach a file
      Then The name on the component should be the file's name

   Scenario: Verify if user can submit a form with valid data 
      Given I'm into the conctact Form page
      When I fill out all fields
      And I click on send
      Then It should give me a a success validation
   