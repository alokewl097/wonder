// client/src/apiPanel/requests.js

export const apiRequests = [
  {
    id: 'login',
    name: 'Login',
    method: 'POST',
    url: '/api/auth/login',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      username: 'alok',
      password: 'alok1234'
    }
  },
  {
    id: 'register',
    name: 'Register',
    method: 'POST',
    url: '/api/auth/register',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      firstName: 'Aman',
      lastName: 'Singh',
      phoneNumber: '911277963',
      email: 'aman@gmail.com',
      username: 'aman001',
      password: 'User@123',
      confirmPassword: 'User@123',
      creatorPassword: 'Owner@123',
      role: 2
    }
  },
  {
    id: 'getProfile',
    name: 'Get Profile (Auth)',
    method: 'GET',
    url: '/api/user/profile',
    headers: {
      'Authorization': 'Bearer {{token}}'
    },
    body: null
  }
];
