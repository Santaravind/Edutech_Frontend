import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

 function Notification() {

 const apiUrl = import.meta.env.VITE_API_URL;
const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/notification/all`)
      .then((res) => {
        setNotifications(res.data);
        console.log("Notifications fetched:", res.data);
      })
      .catch((err) => {
        toast.error("❌ Error fetching notifications:", err);
      });
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6  bg-rose-300 rounded-2xl shadow-lg mb-4">
      <h2 className="text-2xl font-bold mb-6 text-black">📜 Notifications</h2>

      {notifications.length === 0 ? (
        <p className="text-gray-500">No notifications yet.</p>
      ) : (
        // <ul className="space-y-4">
        //   {notifications.map((n) => (
        //     <li
        //       key={n.id}
        //       className="p-4 bg-white border rounded-xl shadow-sm hover:shadow-md transition"
        //     >
        //       <h3 className="text-lg font-semibold text-blue-700">
        //         {n.title}
        //       </h3>
        //       <p className="text-gray-700">{n.message}</p>
        //       {n.link && (
        //         <a
        //           href={n.link}
        //           target="_blank"
        //           rel="noopener noreferrer"
        //           className="text-sm text-blue-600 hover:underline"
        //         >
        //           🔗 {n.link}
        //         </a>
        //       )}
        //           <p className="text-xs text-gray-400 mt-2">
        //            ⏰ {new Date(n.createAt).toLocaleString()}
        //            </p>

        //     </li>
        //   ))}
        // </ul>

        <ul className="space-y-4">
  {[...notifications]
    .sort((a, b) => new Date(b.createAt) - new Date(a.createAt)) // newest first
    .map((n) => (
      <li
        key={n.id}
        className="p-4 bg-white border rounded-xl shadow-sm hover:shadow-md transition"
      >
        <h3 className="text-lg font-semibold text-blue-700">
          {n.title}
        </h3>
        <p className="text-gray-700">{n.message}</p>
        {n.link && (
          <a
            href={n.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline"
          >
            🔗 {n.link}
          </a>
        )}
        <p className="text-xs text-gray-400 mt-2">
          ⏰ {new Date(n.createAt).toLocaleString()}
        </p>
      </li>
    ))}
</ul>

      )}
    </div>
  );
}


export default Notification
