# Practice

## 1 Activities and Browsing

```yaml
Feature: Create an activity
  As an organizer
  I want to create an activity with a name, description, date, location, price, age restriction and capacity and quorum limits
  So that I can offer it to participants
Scenario: Create an activity with valid inputs
  Given: I am an organizer
  When: I create an activity with name "Yoga class", description "Yoga class for beginners", date "2020-01-01", location "Ghent", price "10", age restriction "18+", capacity "10", quorum "5"
  Then: the activity is created

Feature: Create an activity edition
  As an organizer
  I want to create multiple editions of the same activity with different dates, locations or prices
  So that I can accommodate more participants
Scenario: Create an activity edition with valid inputs
  Given: I am an organizer
  When: I create an activity edition with date "2020-01-02", location "Ghent", price "10"
  Then: the activity edition is created

Feature: Browse activities
  As a participant
  I want to browse activities by age restriction, location or between dates
  So that I can find something that interests me
Scenario: Browse activities by age restriction
  Given: I am a participant
  When: I browse activities by age restriction "18+"
  Then: I see the activities with age restriction "18+" in the list
```

#### Patterns

- [ ] Builder (Activity Builder)
- [ ] Prototype (Clone Edition)
- [ ] Factory Method (Filter Strategy Catalog)
- [ ] Strategy (Filter Strategy)

## 2 Enrollments and Payments

```yaml
Feature: Create an enrollment
  As a participant
  I want to reserve for enrollments for myself or others in an activity
  So that I can secure my place
Scenario: Create an enrollment with valid inputs
  Given: I am a participant Jane Doe
  When: I create an enrollment for activity "Yoga class" for myself
  Then: the enrollment is created
Scenario: Create an enrollment with invalid inputs
  Given: I am a participant Jane Doe
  When: I create an enrollment for activity canceled "Yoga class" for myself
  Then: the enrollment is not created

Feature: Cancel an enrollment
  As a participant
  I want to cancel my enrollment in an activity if it is free or not confirmed yet
  So that I can change my mind without losing money
Scenario: Cancel an enrollment with valid inputs
  Given: I am a participant
  When: I cancel an enrollment for activity "Yoga class" in status "pending"
  Then: the enrollment is canceled
Scenario: Not Cancel an enrollment with valid inputs
  Given: I am a participant
  When: I cancel an enrollment for activity "Yoga class" in status "confirmed"
  Then: the enrollment is not canceled

Feature: Get a web url (slug) for each activity
  As a participant
  I want to get a web url (slug) for each activity
  So that I can share it with my friends
Scenario: Get a web url (slug) for each activity with valid inputs
  Given: I am a participant
  When: I get a web url (slug) for each activity for activity "Yoga class"
  Then: the web url (slug) is "yoga-class"
```

#### Patterns

- [ ] Bridge (Enrollment and IdGenerator)
- [ ] Proxy (cancel enrollment (if owner))
- [ ] Decorator (slug)

## Notifications and Invoices

```yaml
Feature: Send email notifications to participants
  As an organizer
  I want to send email notifications to participants when an activity is confirmed or cancelled
  So that they can attend
Scenario: Send email notifications to participants with valid inputs
  Given: I am an organizer
  When: I send email notifications to participants for activity "Yoga class" in status "confirmed"
  Then: the email notifications are sent

Feature: Send notifications also by SMS
  As an organizer
  I want to send notifications also by SMS
  So that the participants receive them earlier
Scenario: Send notifications also by SMS with valid inputs
  Given: I am an organizer
  When: I send notifications also by SMS for activity "Yoga class" in status "confirmed"
  Then: the notifications are sent

Feature: Pay for an enrollment
  As a participant of a confirmed activity
  I want to pay for my enrollments in any method (cash, credit card or bank transfer)
  So that I can pay conveniently
Scenario: Pay for an enrollment with valid inputs
  Given: I am a participant of a confirmed activity
  When: I pay for an enrollment for activity "Yoga class" with date "2020-01-01", location "Ghent", price "10", age restriction "18+", capacity "10", quorum "5"
  Then: the enrollment is paid

Feature: Send invoices to participants
  As an organizer
  I want to send invoices to participants when an activity is paid
  So that they can have a receipt
Scenario: Send invoices to participants with valid inputs
  Given: I am an organizer
  When: I send invoices to participants for activity "Yoga class" in status "paid"
  Then: the invoices are sent
```

#### Patterns

- [ ] Adapter (SendGrid)
- [ ] Facade (Notifications hides medium)
- [ ] Chain of Responsibility (enrolment processors)

## Logging and Metrics

```yaml
Feature: Log the creation of activities and editions
  As an organizer
  I want to log the creation of activities and editions
  So that I can track my offer
Scenario: Log the creation of activities and editions with valid inputs
  Given: I am an organizer
  When: I log the creation of activities and editions for activity "Yoga class" with date "2020-01-01", location "Ghent", price "10", age restriction "18+", capacity "10", quorum "5"
  Then: the creation of activities and editions is logged

Feature: Log the creation and cancellation of enrollments
  As an organizer
  I want to log the creation and cancellation of enrollments
  So that I can track the number of participants
Scenario: Log the creation and cancellation of enrollments with valid inputs
  Given: I am an organizer
  When: I log the creation and cancellation of enrollments for activity "Yoga class" with date "2020-01-01", location "Ghent", price "10", age restriction "18+", capacity "10", quorum "5"
  Then: the creation and cancellation of enrollments is logged

Feature: Log the creation of payments
  As an organizer
  I want to log the creation of payments
  So that I can track my finances
Scenario: Log the creation of payments with valid inputs
  Given: I am an organizer
  When: I log the creation of payments for activity "Yoga class" with date "2020-01-01", location "Ghent", price "10", age restriction "18+", capacity "10", quorum "5"
  Then: the creation of payments is logged
```

#### Patterns

- [ ] Observer
- [ ] Singleton
- [ ] Template Method
