import React, { useState, useEffect } from "react";
import {toast }from "react-hot-toast";
import SockJS from "sockjs-client/dist/sockjs";
import { over } from "stompjs";


let stompClient = null;

 function SendNotification() {
  const [form, setForm] = useState({ title: "", message: "", link: "" });
  const [receivedNotifications, setReceivedNotifications] = useState([]);

   const apiUrl = import.meta.env.VITE_API_URL;
  const connect = () => {
    if (!stompClient) {
      const socket = new SockJS(`${apiUrl}/ws`);
      stompClient = over(socket);
      stompClient.heartbeat.outgoing = 20000;
      stompClient.heartbeat.incoming = 20000;

     
stompClient.connect({}, () => {
  toast.success("✅ Connected to WebSocket");
  stompClient.subscribe("/topic/notifications", (message) => {
    const data= JSON.parse(message.body);
      
    toast.success("📢 New Notification Received"+data.title,{duration:3000});
    setReceivedNotifications((prev) => {
      const updated = [data, ...prev];
      return updated.slice(0, 5); // Keep only the latest 5
    });
    console.log( "hello",receivedNotifications);
  });
}, (error) => { 
       toast.error("❌ WebSocket error/disconnected:", error);
        toast.error("WebSocket disconnected. Reconnecting...");
        // ⏳ Retry after 5 seconds
        setTimeout(connect, 5000);
    }
  );
}
  };

  // const sendNotification = async () => {
  //   if (stompClient && stompClient.connected) {
  //     // ✅ Send to WebSocket
  //     stompClient.send("/app/sendNotification", {}, JSON.stringify(form));

  //     try {
  //       // ✅ Save to DB via REST API
  //       await axios.post("http://localhost:8080/api/notification/save", form);
  //       alert("✅ Notification sent & saved!");
  //     } catch (error) {
  //       console.error("❌ Error saving notification:", error);
  //       alert("❌ Failed to save in DB");
  //     }

  //     // Reset form
  //     setForm({ title: "", message: "", link: "" });
  //   } else {
  //     alert("❌ WebSocket not connected");
  //   }
  // };

  const sendNotification = async () => {
    if (!form.title.trim()) {
      toast.error(" Title is required");
      return;
    }
    if (!form.message.trim()) {
      toast.error(" Message is required");
      return;
    }
  if (stompClient && stompClient.connected) {
    stompClient.send("/app/sendNotification", {}, JSON.stringify(form));
    toast.success("✅ Notification sent to WebSocket and DB");
    

      // Reset form
      setForm({ title: "", message: "", link: "" });
   

  } else {
    toast.error("❌ WebSocket not connected");
     connect();
  }
};

  useEffect(() => {
    connect();
    
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 mb-2 p-6 bg-purple-500 shadow-lg rounded-2xl justify-center items-center text-center ">
      <h2 className="text-xl font-bold mb-4">📢 Send Notification</h2>

      <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        className="w-full p-2 mb-3 border hover:border-2   rounded-lg hover:font-semibold"
      />

      <textarea
        placeholder="Message"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full p-2 mb-3 border hover:border-2 rounded-lg font-semibold"
      />

      <input
        type="text"
        placeholder="Link (optional)"
        value={form.link}
        onChange={(e) => setForm({ ...form, link: e.target.value })}
        className="w-full p-2 mb-3 border hover:border-2 rounded-lg"
      />

      <button
        onClick={sendNotification}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        🚀 Send
      </button>

      {/* 👇 Show received notifications */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow">
        <h3 className="font-bold text-lg mb-3 text-black">📜 Received Notifications</h3>
        {receivedNotifications.length === 0 ? (
          <p className="text-gray-500">No notifications yet.</p>
        ) : (
          <ul className="space-y-3">
            {receivedNotifications.map((n, index) => (
              <li
                key={index}
                className="p-3 border rounded-lg bg-gray-50 shadow-sm"
              >
                <p className="font-semibold text-blue-600">{n.title}</p>
                <p>{n.message}</p>
                {n.link && (
                  <a
                    href={n.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-500 hover:underline"
                  >
                    🔗 {n.link}
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    
    </div>
  );
}


export default SendNotification
