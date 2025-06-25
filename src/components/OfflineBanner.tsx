import React from 'react';

const OfflineBanner: React.FC = () => {
    <div className="fixed top-0 left-0 w-full z-50 bg-yellow-400 text-black text-center py-2 font-medium shadow-md">
        <span>⚠️ You are offline. Some features may be unavailable.</span>
    </div>
};

export default OfflineBanner;