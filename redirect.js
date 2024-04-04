<!DOCTYPE html>
<html>
<head>
    <title>App Redirect</title>
    <script type="text/javascript">
        function redirectToApp() {
            var ua = navigator.userAgent;

            if (/Android/i.test(ua)) {
                window.location.href = 'https://play.google.com/store/apps/details?id=com.physiotutors.app';
            } else if (/iPhone|iPad|iPod/i.test(ua)) {
                window.location.href = 'https://apps.apple.com/us/app/physiotutors/id6463856810';
            } else {
                // Fallback for desktops and other devices
                window.location.href = 'https://www.physiotutors.com/physiotutors-app/';
            }
        }
    </script>
</head>
<body onload="redirectToApp()">
    <!-- You can add content here that will be shown briefly before redirection -->
    <noscript>You need to enable JavaScript to view the app.</noscript>
</body>
</html>
