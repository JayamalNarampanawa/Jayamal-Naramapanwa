# Portfolio Website

A modern, responsive portfolio website built with React and Firebase.

## Features

- **Landing Page**: Introduction with skills overview
- **Projects Section**: Showcase your work with live demos and repository links
- **Blog**: Write and manage blog posts (requires authentication)
- **Contact Form**: Submissions stored in Firebase
- **Authentication**: Firebase Auth for admin access
- **Responsive Design**: Mobile-first approach

## Setup Instructions

### 1. Install Node.js
Download and install Node.js from [nodejs.org](https://nodejs.org/)

### 2. Install Dependencies
```bash
npm install
```

### 3. Firebase Configuration
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Authentication (Email/Password)
4. Create a Firestore Database
5. Get your Firebase config from Project Settings
6. Update `src/firebase.js` with your config

### 4. Run the Application
```bash
npm start
```

The app will open at `http://localhost:3000`

## Firebase Setup

### Firestore Collections
- `posts`: Blog posts
- `contacts`: Contact form submissions

### Security Rules
Add these rules in Firebase Console:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /posts/{post} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /contacts/{contact} {
      allow create: if true;
      allow read: if request.auth != null;
    }
  }
}
```

## Customization

1. Update personal information in `src/pages/Home.js`
2. Add your projects in `src/pages/Projects.js`
3. Update contact info in `src/pages/Contact.js`
4. Customize colors in CSS files

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

## Technologies Used

- React 18
- React Router 6
- Firebase (Auth & Firestore)
- CSS3 with responsive design

## License

MIT
