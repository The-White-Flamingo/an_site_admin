import React, { useState } from 'react';


const PlusIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const FolderIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

const PaymentIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 1v22" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const quickActions = [
  {
    id: 'survey',
    label: 'Request New Survey',
    icon: PlusIcon,
    iconClass: 'text-orange-500', 
  },
  {
    id: 'projects',
    label: 'View Completed projects',
    icon: FolderIcon,
    iconClass: 'text-amber-500 fill-amber-500/30', 
  },
  {
    id: 'payment',
    label: 'Make a payment',
    icon: PaymentIcon,
    iconClass: 'text-green-600', 
  },
];

const ActionItem = ({ action, onClick }) => {
  return (
    <button
      className="w-full text-left p-4 my-2 bg-white rounded-xl transition duration-200 
                 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 
                 focus:ring-blue-500 focus:ring-offset-2 flex items-center"
      onClick={() => onClick(action)}
    >
      {/* Icon Container */}
      <div className={`mr-4 ${action.iconClass}`}>
        <action.icon className="w-6 h-6" />
      </div>
      
      {/* Label */}
      <span className="text-gray-800 font-medium text-lg">
        {action.label}
      </span>
    </button>
  );
};

const App = () => {
  const [message, setMessage] = useState('');

  const handleActionClick = (action) => {
    const newMessage = `Action clicked: ${action.label}`;
    setMessage(newMessage);
    console.log(newMessage);
    
    
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center p-4 sm:p-8">
      
      {/* Quick Actions Card */}
      <div className="w-full max-w-sm bg-white p-6 shadow-2xl rounded-2xl border border-gray-200">
        
        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Quick Actions
        </h2>
        
        {/* Action Items List */}
        <div className="space-y-3">
          {quickActions.map((action) => (
            <ActionItem key={action.id} action={action} onClick={handleActionClick} />
          ))}
        </div>
        
      </div>
      
      {/* Feedback Message */}
      {message && (
        <div className="fixed top-4 right-4 bg-blue-600 text-white p-3 rounded-lg shadow-xl transition-opacity duration-300 z-50">
          {message}
        </div>
      )}
    </div>
  );
};

export default App;