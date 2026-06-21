document.addEventListener('DOMContentLoaded', function() {
    // 1. Tab Switching System
    var navItems = document.querySelectorAll('.nav-item');
    var tabContents = document.querySelectorAll('.tab-content');

    navItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            navItems.forEach(function(nav) {
                nav.classList.remove('active');
            });
            tabContents.forEach(function(tab) {
                tab.classList.remove('active');
            });

            item.classList.add('active');
            var targetTab = item.getAttribute('data-tab');
            document.getElementById(targetTab + '-tab').classList.add('active');
        });
    });

    // 2. Simulated Real-time Metrics (OPN Chain Simulator)
    var blockHeight = 1240582;
    var blockHeightEl = document.getElementById('block-height');
    
    setInterval(function() {
        blockHeight += Math.floor(Math.random() * 2) + 1;
        if (blockHeightEl) {
            blockHeightEl.innerText = blockHeight.toLocaleString();
        }
        addLiveLog();
    }, 3000);

    // 3. Simulated Live Network Activity Log (SWITCHED TO ENGLISH)
    var logContainer = document.getElementById('log-container');
    var activities = [
        "NeoID credential successfully verified for did:iopn:mustofa2408",
        "New block successfully committed to OPN Chain by Validator #04",
        "Project ATLAS initialized a secure Sovereign AI node environment",
        "Sovereign smart contract executed successfully on OPN Mainnet",
        "Network synchronization complete. Performance stable at 100,000 TPS"
    ];

    function addLiveLog() {
        if (!logContainer) return;
        var time = new Date().toLocaleTimeString();
        var randomActivity = activities[Math.floor(Math.random() * activities.length)];
        
        var logEntry = document.createElement('div');
        logEntry.className = 'log-entry';
        logEntry.innerHTML = '<span style="color: #94a3b8;">[' + time + ']</span> ' + randomActivity;
        
        logContainer.appendChild(logEntry);
        logContainer.scrollTop = logContainer.scrollHeight;

        while (logContainer.children.length > 20) {
            logContainer.removeChild(logContainer.firstChild);
        }
    }

    // Initialize with 3 clean English entries
    for (var i = 0; i < 3; i++) { 
        addLiveLog(); 
    }

    // 4. Connect Wallet Interactive Action (English Notifications)
    var connectBtn = document.getElementById('connect-wallet');
    if (connectBtn) {
        connectBtn.addEventListener('click', function() {
            connectBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Initializing NeoID...';
            setTimeout(function() {
                connectBtn.innerHTML = '<i class="fa-solid fa-check"></i> Connected: mustofa2408';
                connectBtn.style.background = 'linear-gradient(135deg, #00e676 0%, #00b0ff 100%)';
                alert('Successfully connected to the IOPn Ecosystem via account: mustofa2408!');
            }, 1500);
        });
    }
});