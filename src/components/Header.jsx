import React from 'react';
import WalletModal from './WalletModal';

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedWallet, setSelectedWallet] = useState(null);

    const handleWalletSelect = (walletId) => {
        setSelectedWallet(walletId);
        setIsModalOpen(false);
        console.log(`Connecting to ${walletId}...`); // TODO: Implement the actual wallet connection logic here
    };

    return (
        <header className="app-header">
          <div className="logo">
            Arcane Finance</div>
          
          {/* Existing navigation items */}
          <nav>
            {/* ... other nav items ... */}
          </nav>

        <div className="header-actions">
            <button
                className="connect-wallet-button"
                onClick={() => setIsModalOpen(true)}
            >
                Connect Wallet
            </button>
        </div>

        <WalletModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onWalletSelect={handleWalletSelect}
        />
        </header>
    );
}

export default Header;