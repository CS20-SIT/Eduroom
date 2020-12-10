# TEST

### #instructors-btn
`List all instructors who attend to be private tutor`
- **Route** change from `/tutor/appointment` to `/tutor`
- **.instructor-info-list** must show

### #appointments-btn
`List all appointments that students appointed`
- **Route** change from `/tutor` to `/tutor/appointment`
- **.appointment-info-list** must show
  
### .rating-btn
`Open rating pop-up to rate the appointment`
- **#review-pop-up** must show
  
### #submit-rating-btn
`Submit rating`
- **POST** score and description to backend
- **UPDATE** score and description to database
- **#review-pop-up** close

### .instructor-info-list
`Show selected instructor information and available time for booking`
- **Route** change from `/tutor` to `/tutor/[id]`
- **SHOW** available date and time of instructor

### .month-picker
### .date-picker
### .time-picker
`Select date and time for appointment`
- **SHOW** correct date and time
- **SHOW** correct information
  
### #booking-group-btn
`Add booking group section`
- **#booking-group** must show
- **#booking-group-searchbar** must show
  
### #booking-group-searchbar
`Search name from database for every typing`
- **.members-add** must show
  
### .members-add
`Add member to group`
- **.members-add** close
- **.members-removal** must show
  
### .members-removal
`Remove member from group`
- **.members-removal** remove

### #book-btn
`Submit booking appointment`
- **POST** appointment information to backend
- **INSERT** appointment information to database
- **REFRESH**
  
### #reviews-section
`Show every reviews of instructor`

### #edit-ins-availabilities
`Edit instructor available times`
- **.time-slots-add** show
- **.time-slots-remove** show
  
### .time-slots-add
### .time-slots-remove
`Edit instructor available times`
- **SHOW** correct time slots

### #update-ins-availabilities
`Update instructor available times`
- **POST** new available times of instructor to backend
- **UPDATE** new available times of instructor to database
  
### .appointment-info-btn
`Show instructor appointment information`
- **#appointment-info** show

### #approve-btn
### #reject-btn
`Approve or Reject appointment`
- **POST** status of appointment to backend
- **UPDATE** status of appointment to database
  
