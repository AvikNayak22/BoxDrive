# BoxDrive

BoxDrive is a file storage application built with Next.js and Firebase. It offers file upload, download, deletion, and renaming functionalities with user authentication and theme switching.

## Features

- **User Authentication**: Secure sign-in and sign-out using Clerk.
- **File Upload:** Drag-and-drop functionality for uploading various file types with real-time status updates.
- **Real-time Notifications**: Receive notifications on file upload and deletion.
- **Theme Toggler**: Switch between light, dark, and system themes.
- **Responsive UI**: Designed to work seamlessly for both desktop and mobile devices.

## Technologies Used

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS,  Shadcn UI
- **Backend:** Firebase 
- **Authentication:** Clerk
- **State Management:** Zustand
- **File Drag 'n' drop:** React Dropzone

## Setup

### Prerequisites

1. **Node.js**: Ensure you have Node.js (v18 or higher) installed. You can download it from [nodejs.org](https://nodejs.org/).

2. **Firebase Project**: You need a Firebase project for Firestore and Storage. Follow [Firebase's setup instructions](https://firebase.google.com/docs/web/setup) to create a project and obtain your configuration credentials.

3. **Clerk Account**: Sign up for Clerk and create an application. Follow [Clerk's documentation](https://clerk.dev/docs/quickstarts/nextjs) for setup.
   
### 1. Clone the Repository

```
git clone https://github.com/AvikNayak22/BoxDrive
cd BoxDrive
```

### 2. Install Dependencies

```
npm install
```

### 3. Configure Environment Variables

   - Create a *.env.local* file in the root directory of the project and add the following environment variables:

     ```
     NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-firebase-project-id
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
     NEXT_PUBLIC_FIREBASE_APP_ID=your-firebase-app-id
     ```

     ```
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
     CLERK_SECRET_KEY=your-clerk-secret-key
     ```
     - Replace *your-firebase-** and *your-clerk-** with the actual values from your Firebase and Clerk projects.

 
 ### 4. Run the Development Server
 ```
 npm run dev
 ```

## Contributor
- **@AvikNayak22** 
      
