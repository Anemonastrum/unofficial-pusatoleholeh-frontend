import React from "react";
import { X } from "lucide-react";

const Notification = ({ isOpen, toggleMenu, notifications = [] }) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={toggleMenu}
    >
      <div
        className={`fixed right-0 top-0 w-80 lg:w-96 bg-base-100 h-full shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } rounded-tl-lg rounded-bl-lg flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close Button */}
        <div className="p-4 text-lg font-bold text-center border-b flex items-center justify-between">
          <span>Notifications</span>
          <button
            onClick={toggleMenu}
            className="btn btn-ghost p-1 text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        {/* Notifications List */}
        <div className="flex-1 p-4 space-y-2 overflow-y-auto">
          {notifications.length === 0 ? (
            <p>No new notifications.</p>
          ) : (
            notifications.map((notification, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-2 border-b"
              >
                <div className="flex-1">{notification.message}</div>
                <div className="text-sm text-gray-500">{notification.time}</div>
              </div>
            ))
          )}
        </div>

        {/* Actions (Optional) */}
        <div className="p-4 space-y-2 border-t flex-shrink-0">
          <button className="btn btn-primary w-full">Mark All as Read</button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
