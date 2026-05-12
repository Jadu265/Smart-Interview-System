(function () {
    var THEME_KEY = 'sis-theme';
    var SUPPORT_COLLECTION = 'support_requests';

    function getSavedTheme() {
        try {
            var saved = localStorage.getItem(THEME_KEY);
            if (saved === 'light' || saved === 'dark') {
                return saved;
            }
        } catch (error) {
            // Ignore storage read errors.
        }
        return 'dark';
    }

    function parseRgb(rgbText) {
        var match = (rgbText || '').match(/\d+/g);
        if (!match || match.length < 3) {
            return null;
        }
        return {
            r: parseInt(match[0], 10),
            g: parseInt(match[1], 10),
            b: parseInt(match[2], 10)
        };
    }

    function getSupportDb() {
        if (typeof firebase === 'undefined') {
            return null;
        }

        try {
            if (!firebase.apps || !firebase.apps.length) {
                firebase.initializeApp({
                    apiKey: 'YOUR_NEW_API_KEY_HERE',
                    authDomain: 'smartinterview-d2ef2.firebaseapp.com',
                    databaseURL: 'https://smartinterview-d2ef2-default-rtdb.firebaseio.com',
                    projectId: 'smartinterview-d2ef2',
                    storageBucket: 'smartinterview-d2ef2.firebasestorage.app',
                    messagingSenderId: '889760323914',
                    appId: '1:889760323914:web:83b0166175be22c32049b3',
                    measurementId: 'G-HMGZH00Y5W'
                });
            }

            return firebase.firestore();
        } catch (error) {
            return null;
        }
    }

    function getLuminance(rgb) {
        if (!rgb) {
            return 255;
        }
        return 0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b;
    }

    function pageLooksDark() {
        if (!document.body) {
            return false;
        }
        var bodyBg = window.getComputedStyle(document.body).backgroundColor;
        var bodyLum = getLuminance(parseRgb(bodyBg));
        return bodyLum < 95;
    }

    function applyTheme(theme) {
        var root = document.documentElement;
        if (theme === 'light') {
            root.classList.remove('dark');
            root.classList.add('light-mode');
        } else {
            root.classList.add('dark');
            root.classList.remove('light-mode');
        }

        if (document.body) {
            var hasExplicitShell = document.body.classList.contains('dashboard-shell') ||
                document.body.classList.contains('setup-shell') ||
                document.body.classList.contains('interview-shell') ||
                document.body.classList.contains('result-shell') ||
                document.body.classList.contains('history-shell') ||
                document.body.classList.contains('profile-shell') ||
                document.body.classList.contains('auth-shell') ||
                document.body.classList.contains('admin-shell');
            var shouldInvert = theme === 'light' && pageLooksDark() && !hasExplicitShell;
            document.body.classList.toggle('force-invert-theme', shouldInvert);
        }

        var toggleLabel = document.getElementById('themeToggleLabel');
        if (toggleLabel) {
            toggleLabel.textContent = theme === 'light' ? 'Light' : 'Dark';
        }

        var toggleIcon = document.getElementById('themeToggleIcon');
        if (toggleIcon) {
            toggleIcon.innerHTML = getThemeToggleIcon(theme);
        }
    }

    function saveTheme(theme) {
        try {
            localStorage.setItem(THEME_KEY, theme);
        } catch (error) {
            // Ignore storage write errors.
        }
    }

    function toggleTheme() {
        var root = document.documentElement;
        var nextTheme = root.classList.contains('dark') ? 'light' : 'dark';
        saveTheme(nextTheme);
        applyTheme(nextTheme);
    }

    function openSupport() {
        var backdrop = document.getElementById('supportModalBackdrop');
        if (!backdrop) {
            return;
        }

        backdrop.classList.add('is-open');
        document.body.classList.add('support-modal-open');

        var messageField = document.getElementById('supportMessage');
        if (messageField) {
            messageField.focus();
        }
    }

    function closeSupport(event) {
        var backdrop = document.getElementById('supportModalBackdrop');
        if (!backdrop) {
            return;
        }

        if (event && event.target && event.target.id !== 'supportModalBackdrop' && event.target.id !== 'supportModalClose') {
            return;
        }

        backdrop.classList.remove('is-open');
        document.body.classList.remove('support-modal-open');
    }

    async function submitSupportRequest() {
        var name = (document.getElementById('supportName') || {}).value || '';
        var email = (document.getElementById('supportEmail') || {}).value || '';
        var message = (document.getElementById('supportMessage') || {}).value || '';
        var status = document.getElementById('supportModalStatus');
        var sendButton = document.getElementById('supportSendBtn');
        var db = getSupportDb();

        name = name.trim();
        email = email.trim();
        message = message.trim();

        if (!message) {
            if (status) {
                status.textContent = 'Please write your support message.';
                status.classList.add('is-error');
            }
            return;
        }

        if (!db) {
            if (status) {
                status.textContent = 'Support service is temporarily unavailable. Please try again.';
                status.classList.add('is-error');
            }
            return;
        }

        if (status) {
            status.textContent = 'Sending your support request...';
            status.classList.remove('is-error');
        }

        if (sendButton) {
            sendButton.disabled = true;
        }

        var authUser = null;
        try {
            if (firebase.auth) {
                authUser = firebase.auth().currentUser;
            }
        } catch (error) {
            authUser = null;
        }

        try {
            await db.collection(SUPPORT_COLLECTION).add({
                name: name || null,
                email: email || null,
                message: message,
                pageUrl: window.location.href,
                userId: authUser ? authUser.uid : null,
                userEmail: authUser ? authUser.email : (email || null),
                source: 'support-float-modal',
                status: 'new',
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });

            if (status) {
                status.textContent = 'Support request sent successfully.';
                status.classList.remove('is-error');
            }

            setTimeout(function () {
                closeSupport();
            }, 700);
        } catch (error) {
            if (status) {
                status.textContent = 'Failed to send support request. Please try again.';
                status.classList.add('is-error');
            }
        } finally {
            if (sendButton) {
                sendButton.disabled = false;
            }
        }
    }

    function getThemeToggleIcon(theme) {
        if (theme === 'light') {
            return '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false"><path d="M12 3.75V2m0 20v-1.75M6.16 6.16 4.93 4.93m14.14 14.14-1.23-1.23M3.75 12H2m20 0h-1.75M6.16 17.84l-1.23 1.23m14.14-14.14-1.23 1.23M12 16.75A4.75 4.75 0 1 0 12 7.25a4.75 4.75 0 0 0 0 9.5Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
        }

        return '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false"><path d="M20.2 14.5a8.5 8.5 0 1 1-10.7-10.7 7.2 7.2 0 0 0 10.7 10.7Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    }

    function getSupportIcon() {
        return '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false"><path d="M12 19.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Zm0-4.5v-.1m-2.2-6.1a2.2 2.2 0 1 1 4.05 1.18c-.47.72-1.3 1.12-1.8 1.8-.3.4-.4.83-.4 1.42" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    }

    function injectSupportButton() {
        if (document.body && document.body.classList.contains('admin-shell')) {
            var existingButton = document.getElementById('supportFloatButton');
            if (existingButton && existingButton.parentNode) {
                existingButton.parentNode.removeChild(existingButton);
            }
            return;
        }

        if (document.getElementById('supportFloatButton')) {
            return;
        }

        var button = document.createElement('button');
        button.id = 'supportFloatButton';
        button.className = 'support-float-button';
        button.type = 'button';
        button.setAttribute('aria-label', 'Get support');
        button.innerHTML = '<span class="support-float-icon">' + getSupportIcon() + '</span><span>Support</span>';
        button.addEventListener('click', openSupport);
        document.body.appendChild(button);
    }

    function injectSupportModal() {
        if (document.getElementById('supportModalBackdrop')) {
            return;
        }

        var backdrop = document.createElement('div');
        backdrop.id = 'supportModalBackdrop';
        backdrop.className = 'support-modal-backdrop';
        backdrop.innerHTML = '' +
            '<div class="support-modal" role="dialog" aria-modal="true" aria-labelledby="supportModalTitle">' +
            '  <div class="support-modal-header">' +
            '    <h2 id="supportModalTitle" class="support-modal-title">Support</h2>' +
            '    <button id="supportModalClose" type="button" class="support-modal-close" aria-label="Close support">&times;</button>' +
            '  </div>' +
            '  <p class="support-modal-subtitle">Tell us your issue and we will help you quickly.</p>' +
            '  <div class="support-modal-field">' +
            '    <label for="supportName">Name</label>' +
            '    <input id="supportName" type="text" placeholder="Your name (optional)" />' +
            '  </div>' +
            '  <div class="support-modal-field">' +
            '    <label for="supportEmail">Email</label>' +
            '    <input id="supportEmail" type="email" placeholder="you@example.com (optional)" />' +
            '  </div>' +
            '  <div class="support-modal-field">' +
            '    <label for="supportMessage">Message</label>' +
            '    <textarea id="supportMessage" rows="4" placeholder="Describe your issue..."></textarea>' +
            '  </div>' +
            '  <p id="supportModalStatus" class="support-modal-status"></p>' +
            '  <div class="support-modal-actions">' +
            '    <button id="supportCancelBtn" type="button" class="support-modal-btn support-modal-btn-secondary">Cancel</button>' +
            '    <button id="supportSendBtn" type="button" class="support-modal-btn support-modal-btn-primary">Send</button>' +
            '  </div>' +
            '</div>';

        backdrop.addEventListener('click', closeSupport);
        document.body.appendChild(backdrop);

        var closeBtn = document.getElementById('supportModalClose');
        var cancelBtn = document.getElementById('supportCancelBtn');
        var sendBtn = document.getElementById('supportSendBtn');

        if (closeBtn) {
            closeBtn.addEventListener('click', closeSupport);
        }
        if (cancelBtn) {
            cancelBtn.addEventListener('click', closeSupport);
        }
        if (sendBtn) {
            sendBtn.addEventListener('click', submitSupportRequest);
        }

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                closeSupport();
            }
        });
    }

    function injectThemeToggle() {
        if (document.getElementById('themeToggleButton')) {
            return;
        }

        var isDarkMode = document.documentElement.classList.contains('dark');
        var initialTheme = isDarkMode ? 'dark' : 'light';
        var initialLabel = isDarkMode ? 'Dark' : 'Light';

        var button = document.createElement('button');
        button.id = 'themeToggleButton';
        button.className = 'theme-toggle-button';
        button.type = 'button';
        button.setAttribute('aria-label', 'Toggle color theme');
        button.innerHTML = '<span id="themeToggleIcon" class="theme-toggle-icon">' + getThemeToggleIcon(initialTheme) + '</span><span id="themeToggleLabel">' + initialLabel + '</span>';
        button.addEventListener('click', toggleTheme);

        document.body.appendChild(button);
    }

    var initialTheme = getSavedTheme();
    applyTheme(initialTheme);

    document.addEventListener('DOMContentLoaded', function () {
        applyTheme(getSavedTheme());
        injectSupportModal();
        injectSupportButton();
        injectThemeToggle();
    });
})();

