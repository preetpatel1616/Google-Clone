
# Google Clone 🌐

## Overview

This project is a front-end clone of Google's homepage and search results page, developed using **ReactJS**, **React Router**, **Context API**, **Firebase**, and **Material UI**. It utilizes Google's Custom Search API to fetch live search results based on user queries. The application is deployed on Firebase and can be accessed at [https://clone-1692b.web.app/](https://clone-1692b.web.app/).

---

## 🛠️ Tech Stack

- **Frontend**: ReactJS
- **Routing**: React Router
- **State Management**: Context API
- **Styling**: Material UI
- **Backend Services & Deployment**: Firebase
- **API Integration**: Google Custom Search API

---

## 🚀 Features

- **Homepage Clone**: Replicates Google's homepage with a search bar and navigation links.
- **Search Functionality**: Fetches and displays real-time search results using Google's Custom Search API.
- **Routing**: Implements client-side routing between the homepage and search results page using React Router.
- **State Management**: Utilizes Context API to manage and pass the search term across components.
- **Custom Hook**: Implements a custom React hook to handle API calls to Google's Custom Search API.
- **Deployment**: Hosted and deployed using Firebase Hosting.

---

## 📁 Project Structure

```
Google-Clone/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── SearchPage.js
│   │   └── SearchResult.js
│   ├── context/
│   │   └── SearchContext.js
│   ├── hooks/
│   │   └── useGoogleSearch.js
│   ├── App.js
│   ├── index.js
│   └── firebase.js
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/preetpatel1616/Google-Clone.git
   cd Google-Clone
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Firebase**:
   - Create a Firebase project at https://firebase.google.com/.
   - Enable Firebase Hosting and obtain your configuration details.
   - Replace the placeholder configuration in `firebase.js` with your Firebase project's config.

4. **Obtain Google Custom Search API Key**:
   - Go to https://developers.google.com/custom-search/v1/overview.
   - Create a new Custom Search Engine and obtain your API key and Search Engine ID.
   - Store these credentials securely and use them in your custom hook or wherever API calls are made.

5. **Run the application**:
   ```bash
   npm start
   ```
   The application will run on `http://localhost:3000/`.

6. **Deploy to Firebase**:
   ```bash
   npm run build
   firebase deploy
   ```
   Ensure you've installed the Firebase CLI and are authenticated.

---

## 🧪 Learning Outcomes

- Gained hands-on experience with ReactJS and its ecosystem.
- Understood client-side routing using React Router.
- Implemented global state management using Context API.
- Integrated third-party APIs (Google Custom Search API) into a React application.
- Learned deployment processes using Firebase Hosting.

---

## 📬 Contact

**Preet Patel**  
🔗 [LinkedIn](https://www.linkedin.com/in/patelpreet25)

Feel free to explore, fork, and contribute to the project on [GitHub](https://github.com/preetpatel1616/Google-Clone).
