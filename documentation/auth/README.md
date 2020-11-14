# Authentication Route

## Registration and login using local_auth

### Regis new user 

- **URL** : `/api/auth/register`

- **Method** : `POST`

- **Headers** : `NONE`

- **Body** :

  ```json
  {
  	email: <String>
  	password: <String>
  	firstname: <String>
  	lastname: <String>
  }
  ```
  
- **Params** : `NONE`

- **Success ** : `201` with cookie of key 'jwt'

  ```json
  { success: true }
  ```
  
- **Error** : `400`,

  ```json
  { success: false, error: "Email is used" }
  ```

- **Error** : `500`

---

### User login 

- **URL** : `/api/auth/login`

- **Method** : `POST`

- **Headers** : `NONE`

- **Body** :

  ```json
  {
  	email: <String>
  	password: <String>
  }
  ```
  
- **Params** : `NONE`

- **Success ** : `200` with cookie of key 'jwt'

  ```json
  { success: true }
  ```

- **Error** : `400` 

  ```json
  { success: false, error: "Email or password is in correct" }
  ```

- **Error** : `500`
   ```json
   { success: false, error: "Server Error" }
   ```

---

### User email verification
- **URL** : `/api/auth/verify/:token`

- **Method** : `GET`

- **Headers** : `NONE`

- **Body** : `NONE`

- **Params** : `NONE`

- **Success ** : `REDIRECT to success page`


---

## User authentication using Google OAuth
### Google OAuth Redirect
- **URL** : `/api/auth/google`

- **Method** : `GET`

- **Headers** : `NONE`

- **Body** : `NONE`

- **Params** : `NONE`

- **Success ** : `REDIRECT Google OAuth`

---
### Google OAuth Callback
- **URL** : `/api/auth/google/callback`

- **Method** : `GET`

- **Headers** : `NONE`

- **Body** : `NONE`

- **Params** : `NONE`

- **Success ** : `REDIRECT to homepage`

---

## Common Route

###   Logout

- **URL** : `/api/auth/logout`

- **Method** : `GET`

- **Headers** : `NONE`

- **Body** : `NONE`

- **Params** : `NONE`

- **Success **: `200`

  ```json
  { success: true }
  ```

---
