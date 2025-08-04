
import React, { useEffect, useRef, useState } from 'react';
import { Copy, Video, Users, Share2, PhoneOff, Loader } from 'lucide-react';

function TakeClass() {
  const [isInMeeting, setIsInMeeting] = useState(false);
  const [meetingId, setMeetingId] = useState('');
  const [joinMeetingId, setJoinMeetingId] = useState('');
  const [userName, setUserName] = useState('');
  const [currentMeetingLink, setCurrentMeetingLink] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [jitsiLoaded, setJitsiLoaded] = useState(false);

  const jitsiContainerRef = useRef(null);
  const jitsiApiRef = useRef(null);

  // Load external Jitsi script once
  useEffect(() => {
    const loadJitsiScript = () => {
      return new Promise((resolve, reject) => {
        if (window.JitsiMeetExternalAPI) {
          setJitsiLoaded(true);
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://meet.jit.si/external_api.js';
        script.async = true;

        script.onload = () => {
          setJitsiLoaded(true);
          resolve();
        };

        script.onerror = () => reject(new Error('Jitsi failed to load'));
        document.head.appendChild(script);
      });
    };

    loadJitsiScript().catch((err) => {
      console.error(err);
      alert('Jitsi failed to load');
    });

    // Cleanup on unmount
    return () => {
      if (jitsiApiRef.current) {
        jitsiApiRef.current.dispose();
      }
    };
  }, []);

  // Generates a unique meeting ID
  const generateMeetingId = () => {
    const timestamp = Date.now().toString(36);
    const randomStr = Math.random().toString(36).substring(2, 8);
    // Use a simpler format that's less likely to trigger security restrictions
    return `meeting${timestamp}${randomStr}`;
  };

  // Copy text to clipboard
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const area = document.createElement('textarea');
      area.value = text;
      document.body.appendChild(area);
      area.select();
      document.execCommand('copy');
      document.body.removeChild(area);
    }

    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  // Initialize and start the meeting
  const startMeeting = (roomName, displayName) => {
    if (!jitsiLoaded || !window.JitsiMeetExternalAPI) {
      alert('Jitsi still loading...');
      return;
    }

    setIsLoading(true);

    // Clean up previous meeting
    if (jitsiApiRef.current) {
      jitsiApiRef.current.dispose();
      jitsiApiRef.current = null;
    }

    // Wait for the container to be rendered
    setTimeout(() => {
      if (!jitsiContainerRef.current) {
        console.error('❌ jitsiContainerRef is not ready after timeout');
        alert('Container not ready. Please try again.');
        setIsLoading(false);
        return;
      }

      // Clear container
      jitsiContainerRef.current.innerHTML = '';

      const domain = 'meet.jit.si';
      const options = {
        roomName,
        width: '100%',
        height: 500,
        parentNode: jitsiContainerRef.current,
        userInfo: { 
          displayName,
          email: `${displayName.toLowerCase().replace(/\s+/g, '')}@example.com` // Fake email for moderator
        },
        configOverwrite: {
          prejoinPageEnabled: false,
          startAudioOnly: false,
          requireDisplayName: false,
          enableWelcomePage: false,
          enableClosePage: false,
          disable1On1Mode: false,
          defaultLanguage: 'en',
          // Security settings
          enableLobbyChat: false,
          enableNoAudioDetection: false,
          enableNoisyMicDetection: false,
          // Room settings
          subject: `Meeting Room: ${roomName}`,
          // Moderation settings
          startWithAudioMuted: false,
          startWithVideoMuted: false,
        },
        interfaceConfigOverwrite: {
          SHOW_JITSI_WATERMARK: false,
          SHOW_POWERED_BY: false,
          FILMSTRIP_ENABLED: true,
          DISABLE_JOIN_LEAVE_NOTIFICATIONS: false,
          DISABLE_PRESENCE_STATUS: false,
          HIDE_INVITE_MORE_HEADER: false,
          MOBILE_APP_PROMO: false,
          RECENT_LIST_ENABLED: false,
          // Toolbar buttons
          TOOLBAR_BUTTONS: [
            'microphone', 'camera', 'closedcaptions', 'desktop', 'embedmeeting',
            'fullscreen', 'fodeviceselection', 'hangup', 'profile', 'chat', 'recording',
            'livestreaming', 'etherpad', 'sharedvideo', 'settings', 'raisehand',
            'videoquality', 'filmstrip', 'invite', 'feedback', 'stats', 'shortcuts',
            'tileview', 'select-background', 'download', 'help', 'mute-everyone',
          ],
        },
      };

      try {
        const api = new window.JitsiMeetExternalAPI(domain, options);
        jitsiApiRef.current = api;

        api.addEventListener('videoConferenceJoined', () => {
          console.log(' videoConferenceJoined');
          setIsLoading(false);
          setCurrentMeetingLink(`https://meet.jit.si/${roomName}`);
        });

        api.addEventListener('readyToClose', endMeeting);
        api.addEventListener('videoConferenceLeft', endMeeting);
        
        // Handle authentication errors
        api.addEventListener('passwordRequired', () => {
          console.log('Password required - this should not happen with our config');
        });
        
        api.addEventListener('participantRoleChanged', (event) => {
          console.log('Participant role changed:', event);
        });
      } catch (err) {
        console.error('Failed to start meeting:', err);
        alert('Error starting Jitsi meeting');
        setIsLoading(false);
      }
    }, 100);
  };

  const endMeeting = () => {
    if (jitsiApiRef.current) {
      jitsiApiRef.current.dispose();
      jitsiApiRef.current = null;
    }

    setIsInMeeting(false);
    setIsLoading(false);
    setCurrentMeetingLink('');
    setMeetingId('');
  };

  // Called when user clicks "Create Meeting"
  const handleCreateMeeting = () => {
    if (!userName.trim()) {
      alert('Enter your name');
      return;
    }

    if (!jitsiLoaded) {
      alert('Jitsi is still loading...');
      return;
    }

    const newId = generateMeetingId();
    setMeetingId(newId);
    setIsInMeeting(true); // Set this first to render the container
    startMeeting(newId, userName);
  };

  // Called when user clicks "Join Meeting"
  const handleJoinMeeting = () => {
    if (!userName.trim()) {
      alert('Enter your name');
      return;
    }

    if (!joinMeetingId.trim()) {
      alert('Enter meeting ID or URL');
      return;
    }

    let roomName = joinMeetingId.trim();
    if (roomName.includes('meet.jit.si/')) {
      roomName = roomName.split('meet.jit.si/')[1];
    }

    setIsInMeeting(true); // Set this first to render the container
    startMeeting(roomName, userName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-3">
            <Video className="text-blue-600" size={40} />
            Jitsi Meet App
          </h1>
          <p className="text-gray-600">Create or join video meetings instantly</p>
          {!jitsiLoaded && (
            <div className="flex items-center justify-center gap-2 mt-2 text-orange-600">
              <Loader className="animate-spin" size={16} />
              <span className="text-sm">Loading Jitsi Meet...</span>
            </div>
          )}
        </div>

        {!isInMeeting && !isLoading ? (
          <div className="grid md:grid-cols-2 gap-8">
            {/* Create Meeting Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="text-center mb-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="text-blue-600" size={32} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Create Meeting</h2>
                <p className="text-gray-600">Start a new video conference</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onKeyPress={(e) => e.key === 'Enter' && handleCreateMeeting()}
                  />
                </div>
                
                <button
                  onClick={handleCreateMeeting}
                  disabled={!jitsiLoaded}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Video size={20} />
                  {jitsiLoaded ? 'Create Meeting' : 'Loading...'}
                </button>
              </div>
            </div>

            {/* Join Meeting Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="text-center mb-6">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-green-600" size={32} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Join Meeting</h2>
                <p className="text-gray-600">Join an existing video conference</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meeting ID or URL
                  </label>
                  <input
                    type="text"
                    value={joinMeetingId}
                    onChange={(e) => setJoinMeetingId(e.target.value)}
                    placeholder="Enter meeting ID or paste meeting URL"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    onKeyPress={(e) => e.key === 'Enter' && handleJoinMeeting()}
                  />
                </div>
                
                <button
                  onClick={handleJoinMeeting}
                  disabled={!jitsiLoaded}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Users size={20} />
                  {jitsiLoaded ? 'Join Meeting' : 'Loading...'}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {isLoading && (
              <div className="flex items-center justify-center p-8">
                <Loader className="animate-spin mr-3" size={24} />
                <span className="text-lg">Connecting to meeting...</span>
              </div>
            )}
            
            {isInMeeting && (
              <>
                {/* Meeting Header */}
                <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold">Meeting in Progress</span>
                    {meetingId && (
                      <span className="text-gray-300 text-sm">Room: {meetingId}</span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-3">
                    {currentMeetingLink && (
                      <button
                        onClick={() => copyToClipboard(currentMeetingLink)}
                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors"
                      >
                        {copySuccess ? (
                          <>
                            <Share2 size={16} />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy size={16} />
                            Share Link
                          </>
                        )}
                      </button>
                    )}
                    
                    <button
                      onClick={endMeeting}
                      className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors"
                    >
                      <PhoneOff size={16} />
                      End Meeting
                    </button>
                  </div>
                </div>

                {/* Jitsi Meet Container */}
                <div ref={jitsiContainerRef} className="w-full h-[500px] bg-gray-900"></div>
                
                {/* Meeting Info */}
                {currentMeetingLink && (
                  <div className="p-4 bg-gray-50 border-t">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="text-sm text-gray-600 mb-1">Share this link with others to join:</p>
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={currentMeetingLink}
                            readOnly
                            className="flex-1 text-sm font-mono bg-white px-3 py-2 rounded border"
                          />
                          <button
                            onClick={() => copyToClipboard(currentMeetingLink)}
                            className="bg-gray-200 hover:bg-gray-300 p-2 rounded transition-colors"
                            title="Copy link"
                          >
                            <Copy size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {/* Instructions */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">How to use:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Creating a Meeting:</h4>
              <ol className="text-gray-600 space-y-1 text-sm">
                <li>1. Wait for Jitsi Meet to load</li>
                <li>2. Enter your name</li>
                <li>3. Click "Create Meeting"</li>
                <li>4. Share the generated link with others</li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Joining a Meeting:</h4>
              <ol className="text-gray-600 space-y-1 text-sm">
                <li>1. Enter your name</li>
                <li>2. Enter meeting ID or paste full URL</li>
                <li>3. Click "Join Meeting"</li>
                <li>4. Allow camera/microphone permissions</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakeClass;
