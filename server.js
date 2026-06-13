<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TRUTH TV UG - Uganda's Truth Channel</title>
<meta name="theme-color" content="#c41e3a">
<meta name="description" content="TRUTH TV UG - Watch Emmie Shukie Live 24/7">
<link rel="manifest" href="/manifest.json">
<link rel="apple-touch-icon" href="/icon-192.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

<!-- OneSignal SDK -->
<script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" defer></script>
<script>
  window.OneSignalDeferred = window.OneSignalDeferred || [];
  OneSignalDeferred.push(function(OneSignal) {
    OneSignal.init({
      appId: "PASTE_YOUR_ONESIGNAL_APP_ID_HERE",
      notifyButton: { enable: false }
    });
  });
</script>

<style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
  body { background: #0a0a0a; color: #fff; font-family: 'Segoe UI', Arial, sans-serif; }
  
  header { 
    padding: 25px 20px; 
    background: linear-gradient(135deg, #c41e3a 0%, #8b0000 100%); 
    text-align: center;
    box-shadow: 0 4px 20px rgba(196,30,58,0.4);
    position: sticky;
    top: 0;
    z-index: 100;
  }
  header h1 { font-size: 32px; letter-spacing: 2px; }
  header p { opacity: 0.9; margin-top: 5px; font-size: 14px; }
  
  .admin-panel {
    background: #1a1a1a;
    margin: 20px;
    padding: 20px;
    border-radius: 12px;
    border: 2px solid #c41e3a;
    display: none;
  }
  .admin-panel h3 { color: #c41e3a; margin-bottom: 10px; }
  .admin-btn {
    background: #c41e3a;
    color: white;
    border: none;
    padding: 12px 25px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 10px;
  }
  .admin-btn:hover { background: #ff2a4a; }
  
  .btn-group {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
    z-index: 9998;
  }
  
  .action-btn {
    display: none;
    background: #c41e3a;
    color: white;
    border: none;
    padding: 14px 20px;
    border-radius: 50px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 6px 25px rgba(196,30,58,0.6);
    animation: slideUp 0.5s ease;
    transition: 0.2s;
  }
  .action-btn:active { transform: scale(0.95); }
  
  .share-btn { background: #25D366; box-shadow: 0 6px 25px rgba(37,211,102,0.6); }
  .bell-btn { background: #FFA500; box-shadow: 0 6px 25px rgba(255,165,0,0.6); }
  .bell-btn.subscribed { background: #4CAF50; }
  
  @keyframes slideUp {
    from { bottom: -80px; opacity: 0; }
    to { bottom: 20px; opacity: 1; }
  }
  
  .channels { 
    display: grid; 
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); 
    gap: 25px; 
    padding: 30px 20px; 
    max-width: 1400px;
    margin: 0 auto;
    padding-bottom: 120px;
  }
  
  .channel { 
    background: #1a1a1a; 
    border-radius: 12px; 
    overflow: hidden; 
    cursor: pointer; 
    transition: 0.3s;
    border: 2px solid transparent;
    position: relative;
  }
  .channel:hover { 
    transform: translateY(-5px); 
    border-color: #c41e3a;
    box-shadow: 0 8px 25px rgba(196,30,58,0.3);
  }
  .channel img { width: 100%; height: 160px; object-fit: cover; }
  .channel h3 { padding: 15px; font-size: 18px; }
  
  .live-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background: #c41e3a;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: bold;
    animation: pulse 2s infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
  }
  
  .player { 
    display: none; 
    position: fixed; 
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%; 
    background: #000; 
    z-index: 9999; 
  }
  .player iframe { width: 100%; height: 100%; border: none; }
  
  .close-btn { 
    position: absolute; 
    top: 20px; 
    right: 30px; 
    font-size: 45px; 
    cursor: pointer; 
    color: #fff; 
    z-index: 10000;
    text-shadow: 0 2px 10px #000;
    transition: 0.2s;
  }
  .close-btn:hover { color: #c41e3a; }
  
  footer { 
    text-align: center; 
    padding: 30px 20px; 
    opacity: 0.6; 
    font-size: 14px; 
    border-top: 1px solid #222;
    margin-top: 40px;
  }
  
  @media (max-width: 600px) {
    header h1 { font-size: 24px; }
    .channels { grid-template-columns: 1fr; padding: 20px 15px; padding-bottom: 140px; }
    .btn-group { flex-direction: column; gap: 8px; }
  }
</style>
</head>
<body>

<header>
  <h1>📺 TRUTH TV UG</h1>
  <p>Powered by Emmie Shukie</p>
</header>

<!-- ADMIN PANEL - Add ?admin to URL to show this -->
<div class="admin-panel" id="adminPanel">
  <h3>🔐 Admin Panel - Send Live Alert</h3>
  <p>Click below to notify all subscribers "TRUTH TV UG is LIVE NOW"</p>
  <button class="admin-btn" onclick="sendLiveAlert()">📢 Send Live Notification</button>
  <p style="font-size:12px; opacity:0.6; margin-top:10px;">Note: This opens OneSignal dashboard. You need to be logged in there.</p>
</div>

<div class="btn-group">
  <button id="bellBtn" class="action-btn bell-btn">🔔 Get Live Alerts</button>
  <button id="installBtn" class="action-btn">📲 Install App</button>
  <button id="shareBtn" class="action-btn share-btn">📤 Share</button>
</div>

<div class="channels" id="channels"></div>

<div class="player" id="player">
  <span class="close-btn" onclick="closePlayer()">×</span>
  <iframe id="videoFrame" allowfullscreen allow="autoplay; encrypted-media"></iframe>
</div>

<footer>
  © 2026 TRUTH TV UG. All Rights Reserved. | Kampala, Uganda<br>
  YouTube: @EmmieShukie
</footer>

<script>
// CONFIG - CHANGE THESE 2 LINES
const YOUTUBE_CHANNEL = "https://www.youtube.com/@EmmieShukie";
const CHANNEL_ID = "UC"; // REPLACE WITH YOUR YOUTUBE CHANNEL ID

const CHANNEL_EMBED = `https://www.youtube.com/embed/live_stream?channel=${CHANNEL_ID}&autoplay=1&mute=0`;

const channels = [
  {
    name: "TRUTH TV UG - Live Now",
    thumb: "https://via.placeholder.com/400x225/c41e3a/ffffff?text=TRUTH+TV+UG+LIVE",
    url: CHANNEL_EMBED,
    isLive: true
  },
  {
    name: "Subscribe on YouTube",
    thumb: "https://via.placeholder.com/400x225/1a1a1a/c41e3a?text=SUBSCRIBE+@EmmieShukie",
    url: YOUTUBE_CHANNEL,
    isLive: false
  }
];

const container = document.getElementById('channels');
channels.forEach(ch => {
  container.innerHTML += `
    <div class="channel" onclick="playChannel('${ch.url}')">
      <div style="position:relative">
        ${ch.isLive ? '<span class="live-badge">LIVE</span>' : ''}
        <img src="${ch.thumb}" alt="${ch.name}">
      </div>
      <h3>${ch.name}</h3>
    </div>
  `;
});

function playChannel(url) {
  document.getElementById('player').style.display = 'block';
  document.getElementById('videoFrame').src = url;
  document.body.style.overflow = 'hidden';
}

function closePlayer() {
  document.getElementById('player').style.display = 'none';
  document.getElementById('videoFrame').src = '';
  document.body.style.overflow = 'auto';
}

document.addEventListener('keydown', e => {
  if(e.key === 'Escape') closePlayer();
});

// SHOW ADMIN PANEL IF URL HAS ?admin
if (window.location.search.includes('admin')) {
  document.getElementById('adminPanel').style.display = 'block';
}

// ADMIN FUNCTION - OPENS ONESIGNAL DASHBOARD
function sendLiveAlert() {
  alert('Opening OneSignal dashboard...\\n\\n1. Login to OneSignal\\n2. Click Messages > New Push\\n3. Title: TRUTH TV UG is LIVE NOW!\\n4. Message: Tune in to watch Emmie Shukie live\\n5. Send to All Users');
  window.open('https://app.onesignal.com/', '_blank');
}

// BUTTON LOGIC
let deferredPrompt;
const installBtn = document.getElementById('installBtn');
const shareBtn = document.getElementById('shareBtn');
const bellBtn = document.getElementById('bellBtn');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  setTimeout(() => {
    installBtn.style.display = 'block';
    shareBtn.style.display = 'block';
    bellBtn.style.display = 'block';
  }, 3000);
});

installBtn.addEventListener('click', async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') console.log('TRUTH TV UG installed');
    deferredPrompt = null;
    installBtn.style.display = 'none';
  }
});

shareBtn.addEventListener('click', async () => {
  const shareData = {
    title: 'TRUTH TV UG',
    text: 'Watch TRUTH TV UG Live - Uganda\'s Truth Channel powered by Emmie Shukie 📺',
    url: window.location.href
  };
  
  if (navigator.share) {
    try { await navigator.share(shareData); } catch (err) {}
  } else {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareData.text + ' + shareData.url)}`, '_blank');
  }
});

// ONESIGNAL BELL
bellBtn.addEventListener('click', async () => {
  OneSignalDeferred.push(function(OneSignal) {
    OneSignal.showSlidedownPrompt();
  });
});

OneSignalDeferred.push(async function(OneSignal) {
  const isSubscribed = await OneSignal.isPushNotificationsEnabled();
  if (isSubscribed) {
    bellBtn.textContent = '✅ Alerts ON';
    bellBtn.classList.add('subscribed');
  }
  
  OneSignal.on('subscriptionChange', function(isSubscribed) {
    if (isSubscribed) {
      bellBtn.textContent = '✅ Alerts ON';
      bellBtn.classList.add('subscribed');
    } else {
      bellBtn.textContent = '🔔 Get Live Alerts';
      bellBtn.classList.remove('subscribed');
    }
  });
});

// Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
</script>

</body>
</html>
