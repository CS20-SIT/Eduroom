# Private Tutor API SPECC

## instructor availability

### Get instructor availability days and times

- **URL** : `/api/tutor/instructor/availability`
- **Method** : `GET`
- **Headers** : `Token`
- **Body** : `none`
- **Params** : `none`
- **Success** : `200`

```
{
 "availabilities": [[int],[int],[int],[int],[int]],
 "price": int
}
```

- **Error** : `404`

---

### Update/Insert instructor availability days and times

- **URL** : `/api/tutor/instructor/availability`
- **Method** : `POST`
- **Headers** : `Token`
- **Body** :

```
 {
	 "availabilities": [[int],[int],[int],[int],[int]],
	 "price": int
 }
```

- **Params** : `none`
- **Success** : `201`
- **Error** : `400`

## instructor information

### Get List of Instructor who register to be a Private Tutor

- **URL** : `/api/tutor/instructor​s`
- **Method** : `GET`
- **Headers** : `Token`
- **Body** : `none`
- **Params** : `none`
- **Success** : `200`

```
{
 "instructors": [
   {
		"id",
		"name": String,
		"info": String,
		"rating": decimal,
		"ratingCount": int,
   }
],
}
```

- **Error** : `404`

---

### Get Instructor information ( available times )

- **URL** : `/api/tutor/instructor/info`
- **Method** : `GET`
- **Headers** : `Token`
- **Body** : `none`
- **Params** :

```
 {
	 "id": `instructorId`
 }
```

- **Success** : `200`

```
{
 "instructor": {
		"id",
		"name": String,
		"info": String,
		"text": String,
		"rating": decimal,
		"ratingCount": int,
		"price": decimal
		"times": [{ "date": int, "time": [int] }]
   }
}
```

- **Error** : `404`

## student's appointment

### Get List of Appointments that student appointed

- **URL** : `/api/tutor/student/appointments`
- **Method** : `GET`
- **Headers** : `Token`
- **Body** : `none`
- **Params** : `none`
- **Success** : `200`

```
{
 "appointments": [
   {
		"id",
		"name": String,
		"info": String,
		"date": `DD MMM YYYY`,
		"startTime": 'HH:MM',
		"endTime": 'HH:MM',
		"isAgree": 'Approved'/'Rejected'/'Pending'
   }
],
}
```

- **Error** : `404`

---

### Insert student appointment

- **URL** : `/api/tutor/student/appointment`
- **Method** : `POST`
- **Headers** : `Token`
- **Body** :

```
 {
	 "id",
	 "startTime": timestamp,
	 "endTime": timestamp,
	 "price": int,
	 "members": [{ "id", "name"}]
 }
```

- **Params** : `none`
- **Success** : `201`
- **Error** : `400`

## instructor's appointment

### Get List of Appointments for instructor

- **URL** : `/api/tutor/instructor/appointments`
- **Method** : `GET`
- **Headers** : `Token`
- **Body** : `none`
- **Params** : `none`
- **Success** : `200`

```
{
 "appointment": [
   {
		"appointmentID",
		"id": studentID,
		"name": String,
		"date": `[DD, MM, YYYY]`,
		"startTime": int,
		"endTime": int,
		"status": 'Approved'/'Rejected'/'Pending',
		"members":[{"id","name"}]
   }
],
}
```

- **Error** : `404`

---

### Approve or Reject student's Appointment

- **URL** : `/api/tutor/instructor/appointment`
- **Method** : `POST`
- **Headers** : `Token`
- **Body** :

```
 {
	 "appointmentID",
	 "status": boolean
 }
```

- **Params** : `none`
- **Success** : `201`
- **Error** : `400`

## Rating appointment

### Get List of instructor's reviews

- **URL** : `/api/tutor/appointment/review`
- **Method** : `GET`
- **Headers** : `Token`
- **Body** : `none`
- **Params** : `none`
- **Success** : `200`

```
{
 "appointment": [
   {
		"rating", [{
		  "score": int,
		  "desc": String,
		  "name": String,
		  "date": `YYYYMMDD`
		}]
   }
],
}
```

- **Error** : `404`

---

### Student rate instructor in appointment

- **URL** : `/api/tutor/appointment/review`
- **Method** : `POST`
- **Headers** : `Token`
- **Body** :

```
 {
	  "id": AppointmentID,
	  "score": int,
	  "desc": String,
}
```

- **Params** : `none`
- **Success** : `201`
- **Error** : `400`

## Utilities

### Searching student by first name or last name ( limit 5 )

- **URL** : `/api/tutor/utils/id`
- **Method** : `GET`
- **Headers** : `Token`
- **Body** : `none`
- **Params** :

```
 {
	 "name": String,
 }
```

- **Success** : `200`

```
{
 "students": [
   {
		"id",
		"name": String
   }
],
}
```

- **Error** : `400`

---

### Get Profile picture of user ( maybe use other group )

- **URL** : `/api/tutor/utils/pics`
- **Method** : `GET`
- **Headers** : `Token`
- **Body** : `none`
- **Params** :
- **Success** : `200`

```
{
 "profile_img"
}
```

- **Error** : `400`

---
