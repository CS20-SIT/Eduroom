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

- **Error** : `400`

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
- **Success** : `200`
- **Error** : `400`

## instructor information

### Get List of Instructor who register to be a Private Tutor

- **URL** : `/api/tutor/instructors`
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

- **Error** : `400`

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

- **Error** : `400`

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
		"date": `YYYY-MM-DD`,
		"startTime": int,
		"endTime": int,
		"isAgree": 'Approved'/'Pending'/'Rejected'
   }
],
}
```

- **Error** : `400`

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
	 "members": [{ "id", "firstname", "lastname"}]
 }
```

- **Params** : `none`
- **Success** : `200`
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
		"date": `YYYY-MM-DD`,
		"startTime": int,
		"endTime": int,
		"status": 'Pending'/'Approved'/'Rejected',
		"members":[{"id","name"}]
   }
],
}
```

- **Error** : `400`

---

### Insert student appointment

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
- **Success** : `200`
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
		  "date": `YYYY-MM-DD`
		}]
   }
],
}
```

- **Error** : `400`

---

### Student rate instructor in appointment

- **URL** : `/api/tutor/appointment/review`
- **Method** : `POST`
- **Headers** : `Token`
- **Body** :

```
 {
	  "id",
	  "score": int,
	  "desc": String,
	  "date": `YYYY-MM-DD`
}
```

- **Params** : `none`
- **Success** : `200`
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
	 "firstname": String,
	 "lastname": String
 }
```

- **Success** : `200`

```
{
 "students": [
   {
		"id",
		"firstname": String,
		"lastname": String
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
