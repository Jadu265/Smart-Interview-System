// Firebase Configuration
// Smart Interview System - Firebase Integration
// Project: smartinterview (smartinterview-d2ef2)
// Configured on: February 4, 2026

// ============================================
// FIREBASE CONFIGURATION
// ============================================

// Firebase project credentials - CONFIGURED
const firebaseConfig = {
    apiKey: "YOUR_NEW_API_KEY_HERE",
    authDomain: "smartinterview-d2ef2.firebaseapp.com",
    databaseURL: "https://smartinterview-d2ef2-default-rtdb.firebaseio.com",
    projectId: "smartinterview-d2ef2",
    storageBucket: "smartinterview-d2ef2.firebasestorage.app",
    messagingSenderId: "889760323914",
    appId: "1:889760323914:web:83b0166175be22c32049b3",
    measurementId: "G-HMGZH00Y5W"
};

// ============================================
// FIREBASE INITIALIZATION
// ============================================

let app, auth, db, analytics;

// Initialize Firebase
function initializeFirebase() {
    try {
        // Check if Firebase is loaded
        if (typeof firebase === 'undefined') {
            console.error('Firebase SDK not loaded. Please check your internet connection.');
            return false;
        }

        // Initialize Firebase App
        app = firebase.initializeApp(firebaseConfig);
        
        // Initialize Firebase services
        auth = firebase.auth();
        db = firebase.firestore();
        
        // Initialize Analytics (optional)
        if (firebase.analytics) {
            analytics = firebase.analytics();
        }
        
        console.log('Firebase initialized successfully');
        return true;
    } catch (error) {
        console.error('Firebase initialization error:', error);
        return false;
    }
}

// ============================================
// AUTHENTICATION FUNCTIONS
// ============================================

// Sign up with Email and Password
async function signUpWithEmail(email, password, displayName) {
    try {
        // Create user account
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        
        // Update user profile
        await user.updateProfile({
            displayName: displayName
        });
        
        // Create user document in Firestore
        await db.collection('users').doc(user.uid).set({
            uid: user.uid,
            email: email,
            displayName: displayName,
            userType: 'candidate',
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
            profileComplete: false,
            interviewCount: 0,
            lastLogin: firebase.firestore.FieldValue.serverTimestamp()
        });
        
        console.log('User created successfully:', user.uid);
        return { success: true, user: user };
    } catch (error) {
        console.error('Sign up error:', error);
        return { success: false, error: error.message };
    }
}

// Sign in with Email and Password
async function signInWithEmail(email, password) {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        const user = userCredential.user;
        
        // Update last login
        await db.collection('users').doc(user.uid).update({
            lastLogin: firebase.firestore.FieldValue.serverTimestamp()
        });
        
        console.log('User signed in successfully:', user.uid);
        return { success: true, user: user };
    } catch (error) {
        console.error('Sign in error:', error);
        return { success: false, error: error.message };
    }
}

// Sign in with Google
async function signInWithGoogle() {
    try {
        const provider = new firebase.auth.GoogleAuthProvider();
        const result = await auth.signInWithPopup(provider);
        const user = result.user;
        
        // Check if user document exists
        const userDoc = await db.collection('users').doc(user.uid).get();
        
        if (!userDoc.exists) {
            // Create new user document
            await db.collection('users').doc(user.uid).set({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
                userType: 'candidate',
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
                profileComplete: false,
                interviewCount: 0,
                lastLogin: firebase.firestore.FieldValue.serverTimestamp()
            });
        } else {
            // Update last login
            await db.collection('users').doc(user.uid).update({
                lastLogin: firebase.firestore.FieldValue.serverTimestamp()
            });
        }
        
        console.log('Google sign in successful:', user.uid);
        return { success: true, user: user };
    } catch (error) {
        console.error('Google sign in error:', error);
        return { success: false, error: error.message };
    }
}

// Sign out
async function signOut() {
    try {
        await auth.signOut();
        localStorage.clear();
        console.log('User signed out successfully');
        return { success: true };
    } catch (error) {
        console.error('Sign out error:', error);
        return { success: false, error: error.message };
    }
}

// Reset password
async function resetPassword(email) {
    try {
        await auth.sendPasswordResetEmail(email);
        console.log('Password reset email sent');
        return { success: true };
    } catch (error) {
        console.error('Password reset error:', error);
        return { success: false, error: error.message };
    }
}

// Get current user
function getCurrentUser() {
    return auth.currentUser;
}

// Listen to auth state changes
function onAuthStateChanged(callback) {
    return auth.onAuthStateChanged(callback);
}

// ============================================
// DATABASE FUNCTIONS
// ============================================

// Get user data
async function getUserData(uid) {
    try {
        const doc = await db.collection('users').doc(uid).get();
        if (doc.exists) {
            return { success: true, data: doc.data() };
        } else {
            return { success: false, error: 'User not found' };
        }
    } catch (error) {
        console.error('Get user data error:', error);
        return { success: false, error: error.message };
    }
}

// Update user profile
async function updateUserProfile(uid, data) {
    try {
        await db.collection('users').doc(uid).update({
            ...data,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log('User profile updated');
        return { success: true };
    } catch (error) {
        console.error('Update profile error:', error);
        return { success: false, error: error.message };
    }
}

// Save interview session
async function saveInterviewSession(uid, sessionData) {
    try {
        const docRef = await db.collection('interviews').add({
            userId: uid,
            ...sessionData,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        
        // Increment interview count
        await db.collection('users').doc(uid).update({
            interviewCount: firebase.firestore.FieldValue.increment(1)
        });
        
        console.log('Interview session saved:', docRef.id);
        return { success: true, sessionId: docRef.id };
    } catch (error) {
        console.error('Save interview error:', error);
        return { success: false, error: error.message };
    }
}

// Get user interviews
async function getUserInterviews(uid, limit = 10) {
    try {
        const snapshot = await db.collection('interviews')
            .where('userId', '==', uid)
            .orderBy('createdAt', 'desc')
            .limit(limit)
            .get();
        
        const interviews = [];
        snapshot.forEach(doc => {
            interviews.push({ id: doc.id, ...doc.data() });
        });
        
        return { success: true, data: interviews };
    } catch (error) {
        console.error('Get interviews error:', error);
        return { success: false, error: error.message };
    }
}

// Get interview by ID
async function getInterviewById(interviewId) {
    try {
        const doc = await db.collection('interviews').doc(interviewId).get();
        if (doc.exists) {
            return { success: true, data: { id: doc.id, ...doc.data() } };
        } else {
            return { success: false, error: 'Interview not found' };
        }
    } catch (error) {
        console.error('Get interview error:', error);
        return { success: false, error: error.message };
    }
}

// Save interview answer
async function saveInterviewAnswer(interviewId, questionId, answer) {
    try {
        await db.collection('interviews').doc(interviewId).update({
            [`answers.${questionId}`]: {
                answer: answer,
                savedAt: firebase.firestore.FieldValue.serverTimestamp()
            },
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        
        console.log('Answer saved');
        return { success: true };
    } catch (error) {
        console.error('Save answer error:', error);
        return { success: false, error: error.message };
    }
}

// Get questions by category
async function getQuestions(category, difficulty, limit = 10) {
    try {
        let query = db.collection('questions');
        
        if (category) {
            query = query.where('category', '==', category);
        }
        
        if (difficulty) {
            query = query.where('difficulty', '==', difficulty);
        }
        
        const snapshot = await query.limit(limit).get();
        
        const questions = [];
        snapshot.forEach(doc => {
            questions.push({ id: doc.id, ...doc.data() });
        });
        
        return { success: true, data: questions };
    } catch (error) {
        console.error('Get questions error:', error);
        return { success: false, error: error.message };
    }
}

// ============================================
// REAL-TIME LISTENERS
// ============================================

// Listen to user data changes
function listenToUserData(uid, callback) {
    return db.collection('users').doc(uid).onSnapshot(
        (doc) => {
            if (doc.exists) {
                callback({ success: true, data: doc.data() });
            }
        },
        (error) => {
            console.error('User data listener error:', error);
            callback({ success: false, error: error.message });
        }
    );
}

// Listen to user interviews
function listenToUserInterviews(uid, callback) {
    return db.collection('interviews')
        .where('userId', '==', uid)
        .orderBy('createdAt', 'desc')
        .limit(10)
        .onSnapshot(
            (snapshot) => {
                const interviews = [];
                snapshot.forEach(doc => {
                    interviews.push({ id: doc.id, ...doc.data() });
                });
                callback({ success: true, data: interviews });
            },
            (error) => {
                console.error('Interviews listener error:', error);
                callback({ success: false, error: error.message });
            }
        );
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Check if Firebase is initialized
function isFirebaseInitialized() {
    return app !== undefined && auth !== undefined && db !== undefined;
}

// Get friendly error message
function getFriendlyErrorMessage(errorCode) {
    const errorMessages = {
        'auth/email-already-in-use': 'This email is already registered. Please login instead.',
        'auth/invalid-email': 'Please enter a valid email address.',
        'auth/operation-not-allowed': 'Email/password authentication is not enabled.',
        'auth/weak-password': 'Password should be at least 6 characters long.',
        'auth/user-disabled': 'This account has been disabled.',
        'auth/user-not-found': 'No account found with this email.',
        'auth/wrong-password': 'Incorrect password. Please try again.',
        'auth/too-many-requests': 'Too many attempts. Please try again later.',
        'auth/network-request-failed': 'Network error. Please check your connection.',
        'auth/popup-closed-by-user': 'Sign in popup was closed.',
        'permission-denied': 'You do not have permission to perform this action.',
        'unavailable': 'Service is currently unavailable. Please try again later.'
    };
    
    return errorMessages[errorCode] || 'An error occurred. Please try again.';
}

// ============================================
// EXPORT (for use in other files)
// ============================================

// Export functions for global use
window.firebaseApp = {
    initializeFirebase,
    // Auth
    signUpWithEmail,
    signInWithEmail,
    signInWithGoogle,
    signOut,
    resetPassword,
    getCurrentUser,
    onAuthStateChanged,
    // Database
    getUserData,
    updateUserProfile,
    saveInterviewSession,
    getUserInterviews,
    getInterviewById,
    saveInterviewAnswer,
    getQuestions,
    // Real-time
    listenToUserData,
    listenToUserInterviews,
    // Utilities
    isFirebaseInitialized,
    getFriendlyErrorMessage
};

console.log('Firebase configuration loaded');

// Auto-initialize Firebase when this script loads
if (typeof firebase !== 'undefined') {
    initializeFirebase();
} else {
    console.error('Firebase SDK not loaded. Please check script tags.');
}

