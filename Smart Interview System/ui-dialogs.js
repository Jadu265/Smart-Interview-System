(function () {
    var activeDialog = null;

    function ensureDialogRoot() {
        var existing = document.getElementById('sisDialogRoot');
        if (existing) {
            return existing;
        }

        var root = document.createElement('div');
        root.id = 'sisDialogRoot';
        root.className = 'sis-dialog-backdrop hidden';
        root.innerHTML = [
            '<div class="sis-dialog" role="dialog" aria-modal="true" aria-labelledby="sisDialogTitle">',
            '  <div class="sis-dialog-header">',
            '    <span id="sisDialogBadge" class="sis-dialog-badge">!</span>',
            '    <h3 id="sisDialogTitle" class="sis-dialog-title">Notice</h3>',
            '  </div>',
            '  <p id="sisDialogMessage" class="sis-dialog-message"></p>',
            '  <input id="sisDialogInput" class="sis-dialog-input hidden" type="text" />',
            '  <div class="sis-dialog-actions">',
            '    <button id="sisDialogCancel" type="button" class="sis-dialog-btn sis-dialog-btn-cancel hidden">Cancel</button>',
            '    <button id="sisDialogOk" type="button" class="sis-dialog-btn sis-dialog-btn-ok">OK</button>',
            '  </div>',
            '</div>'
        ].join('');

        document.body.appendChild(root);
        return root;
    }

    function escapeText(value) {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function formatMessage(message) {
        return escapeText(message).replace(/\n/g, '<br>');
    }

    function showDialog(options) {
        return new Promise(function (resolve) {
            var root = ensureDialogRoot();
            var title = root.querySelector('#sisDialogTitle');
            var message = root.querySelector('#sisDialogMessage');
            var badge = root.querySelector('#sisDialogBadge');
            var input = root.querySelector('#sisDialogInput');
            var okBtn = root.querySelector('#sisDialogOk');
            var cancelBtn = root.querySelector('#sisDialogCancel');

            if (activeDialog) {
                activeDialog.cleanup();
            }

            title.textContent = options.title;
            message.innerHTML = formatMessage(options.message);
            badge.textContent = options.badge;
            root.dataset.variant = options.variant;

            okBtn.textContent = options.okText || 'OK';
            cancelBtn.textContent = options.cancelText || 'Cancel';
            cancelBtn.classList.toggle('hidden', !options.showCancel);

            input.classList.toggle('hidden', !options.showInput);
            if (options.showInput) {
                input.value = options.inputValue || '';
                input.placeholder = options.inputPlaceholder || '';
            } else {
                input.value = '';
                input.placeholder = '';
            }

            root.classList.remove('hidden');
            document.body.classList.add('sis-dialog-open');

            function close(result) {
                cleanup();
                root.classList.add('hidden');
                document.body.classList.remove('sis-dialog-open');
                resolve(result);
            }

            function onOk() {
                if (options.showInput) {
                    close(input.value);
                } else {
                    close(true);
                }
            }

            function onCancel() {
                if (options.showInput) {
                    close(null);
                } else {
                    close(false);
                }
            }

            function onBackdropClick(event) {
                if (event.target === root && options.allowBackdropClose !== false) {
                    onCancel();
                }
            }

            function onKeyDown(event) {
                if (event.key === 'Escape') {
                    onCancel();
                    return;
                }
                if (event.key === 'Enter') {
                    if (options.showInput && document.activeElement !== input) {
                        return;
                    }
                    onOk();
                }
            }

            function cleanup() {
                okBtn.removeEventListener('click', onOk);
                cancelBtn.removeEventListener('click', onCancel);
                root.removeEventListener('click', onBackdropClick);
                document.removeEventListener('keydown', onKeyDown);
                activeDialog = null;
            }

            activeDialog = { cleanup: cleanup };

            okBtn.addEventListener('click', onOk);
            cancelBtn.addEventListener('click', onCancel);
            root.addEventListener('click', onBackdropClick);
            document.addEventListener('keydown', onKeyDown);

            if (options.showInput) {
                setTimeout(function () { input.focus(); }, 0);
            } else {
                setTimeout(function () { okBtn.focus(); }, 0);
            }
        });
    }

    function sisAlert(message, opts) {
        opts = opts || {};
        return showDialog({
            title: opts.title || 'Message',
            message: message,
            okText: opts.okText || 'OK',
            showCancel: false,
            showInput: false,
            badge: opts.badge || 'i',
            variant: opts.variant || 'info'
        });
    }

    function sisConfirm(message, opts) {
        opts = opts || {};
        return showDialog({
            title: opts.title || 'Please Confirm',
            message: message,
            okText: opts.okText || 'Yes',
            cancelText: opts.cancelText || 'Cancel',
            showCancel: true,
            showInput: false,
            badge: opts.badge || '?',
            variant: opts.variant || 'warn'
        });
    }

    function sisPrompt(message, opts) {
        opts = opts || {};
        return showDialog({
            title: opts.title || 'Input Required',
            message: message,
            okText: opts.okText || 'Submit',
            cancelText: opts.cancelText || 'Cancel',
            showCancel: true,
            showInput: true,
            inputPlaceholder: opts.placeholder || '',
            inputValue: opts.defaultValue || '',
            badge: opts.badge || '>',
            variant: opts.variant || 'info'
        });
    }

    window.sisAlert = sisAlert;
    window.sisConfirm = sisConfirm;
    window.sisPrompt = sisPrompt;

    var nativeAlert = window.alert;
    window.alert = function (message) {
        sisAlert(message, { title: 'Notice', okText: 'OK', variant: 'info' }).catch(function () {
            nativeAlert(message);
        });
    };
})();

