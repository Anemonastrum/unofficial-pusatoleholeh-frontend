import React from "react";
import { X } from "lucide-react";

const Message = ({ isOpen, toggleMenu, messages }) => {
  // Group messages by sender
  const groupedMessages = messages.reduce((groups, message) => {
    if (!groups[message.sender]) {
      groups[message.sender] = [];
    }
    groups[message.sender].push(message);
    return groups;
  }, {});

  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={toggleMenu}
    >
      <div
        className={`fixed right-0 top-0 w-96 bg-base-100 h-full shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } rounded-tl-lg rounded-bl-lg`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header for the message sidebar */}
        <div className="p-4 text-lg font-bold text-center border-b flex items-center justify-between">
          <span>Messages</span>
          <button
            onClick={toggleMenu}
            className="btn btn-ghost p-1 text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        {/* Grouped Messages List */}
        <div className="p-4 space-y-2 overflow-y-auto">
          {Object.keys(groupedMessages).length === 0 ? (
            <p>No new messages.</p>
          ) : (
            Object.keys(groupedMessages).map((sender, index) => {
              const latestMessage = groupedMessages[sender][groupedMessages[sender].length - 1];

              return (
                <div key={index} className="flex items-center space-x-3 border-b pb-2">
                  {/* Profile Picture */}
                  <img
                    src={latestMessage.profilePicture}
                    alt={sender}
                    className="h-10 w-10 rounded-full object-cover"
                  />

                  {/* Sender Name and Latest Message */}
                  <div className="flex-1">
                    <div className="font-semibold">{sender}</div>
                    <div className="text-sm text-gray-500">{latestMessage.text}</div>
                  </div>

                  {/* Time */}
                  <div className="text-sm text-gray-400">
                    {latestMessage.time}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
