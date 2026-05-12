# Smart Interview System 🎯

A fully functional, modern interview practice platform built for BUBT SDP4 project.

## ✨ Features

### Candidate Portal
- **Dashboard** - Overview of stats, recent interviews, quick start
- **Interview Setup** - Configure role, difficulty, duration, and mode
- **Live Interview** - Real-time questions with timer and answer recording
- **Results** - Detailed score, feedback, and answer review with charts
- **History** - Browse all past interviews with filters and sorting

### Admin Panel
- **Overview** - System statistics with charts (difficulty distribution, top roles)
- **User Management** - View all registered users
- **Interview Monitoring** - Track all interviews in real-time

### Core Features
- 🔐 Firebase Authentication (Email/Password + Google Sign-in)
- 💾 Firestore Database for persistence
- ⏱️ Real-time countdown timer with color warnings
- 📊 Automatic scoring with keyword-based evaluation
- 📈 Chart.js integration for data visualization
- 🎨 Beautiful dark mode UI with Tailwind CSS
- 📱 Fully responsive design
- ⌨️ Keyboard shortcuts (Enter, Arrow keys)
- 💯 90 pre-built questions (6 roles × 3 difficulties)

## 🚀 Quick Start

### Option 1: Python Server (Recommended)
```bash
cd "d:\Project\Bubt\Smart Interview System"
python -m http.server 8000
```
Then open: `http://localhost:8000/auth_signup.html`

### Option 2: Node.js Server
```bash
node server.js
```
Then open: `http://localhost:8000/auth_signup.html`

## 📁 Production Files (Use These!)

```
├── auth_signup.html              # ✅ Sign up page (START HERE)
├── auth_login.html               # ✅ Login page
├── auth_dashboard.html           # ✅ Main candidate dashboard
├── auth_interview_setup.html     # ✅ Interview configuration
├── auth_live_interview.html      # ✅ Live interview with timer
├── auth_result.html              # ✅ Results with Chart.js
├── auth_history.html             # ✅ Interview history
├── admin_dashboard.html          # ✅ Admin panel
├── questionBank.js               # ✅ 90 questions database
├── firebase-config.js            # ✅ Firebase configuration
├── PROJECT_DOCUMENTATION.md      # 📖 Complete documentation
└── TESTING_GUIDE.md              # 🧪 Testing checklist
```

## 🗑️ Legacy Files (Ignore These)
```
❌ login.html, signup.html, candidate_dashboard.html
❌ interview_setup.html, live_mock_interview.html
❌ interview_result.html, candidate_history.html
❌ test_buttons.html
```
*These files are outdated and have been replaced by auth_ prefixed files.*

## 🔧 Technologies

- **HTML5** - Structure
- **Tailwind CSS** - Styling (CDN)
- **Vanilla JavaScript** - Logic
- **Firebase 9.22.0** - Authentication + Firestore
- **Chart.js** - Data visualization
- **Material Symbols** - Icons
- Firebase (Auth + Firestore)
- Material Icons

## 📊 Interview Flow

```
Landing → Signup/Login → Dashboard → Setup → Live Interview → Results
```

## 🎨 Customization

### Change Primary Color
Edit the Tailwind config in each HTML file:
```javascript
colors: {
    primary: "#137fec"  // Change this
}
```

### Add More Questions
Modify the `questionBank` object in `live_mock_interview.html`

### Adjust Scoring
Update the `finishInterview()` function scoring logic

## 🔒 Firebase Setup

1. Create project at https://console.firebase.google.com
2. Enable Authentication (Email/Password)
3. Create Firestore database
4. Copy config to `firebase-config.js`

### Firestore Security Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /interviews/{interview} {
      allow read, write: if request.auth != null && 
                          request.auth.uid == resource.data.userId;
    }
  }
}
```

## 💾 Database Schema

### interviews collection
```javascript
{
  userId: string,
  userName: string,
  userEmail: string,
  role: string,
  difficulty: "easy" | "medium" | "hard",
  duration: number,
  mode: "mock" | "practice",
  status: "in-progress" | "completed",
  score: number,
  answeredCount: number,
  totalQuestions: number,
  questions: [
    {
      id: number,
      question: string,
      category: string,
      difficulty: string,
      answer: string,
      answered: boolean
    }
  ],
  createdAt: timestamp,
  completedAt: timestamp
}
```

## 🐛 Clean Build

This is a **complete clean rebuild** with:
- ✅ No legacy bugs
- ✅ Simple, working code
- ✅ Proper Firebase integration
- ✅ Clear structure
- ✅ Modern UI/UX

## 📝 License

MIT License

## 👨‍💻 Developer

Built for BUBT SDP4 Project
Clean rebuild completed: March 2026

---

**Status**: All core features working ✅

