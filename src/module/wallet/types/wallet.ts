// WalletConnect session type
export interface WalletSession {
  topic: string;
  namespaces: {
    eip155?: {
      accounts: string[];
      methods: string[];
      events: string[];
    };
  };
}

// Connection status type
export enum ConnectionStatus {
  DISCONNECTED = "disconnected",
  CONNECTING = "connecting",
  CONNECTED = "connected",
  ERROR = "error",
}

// WalletConnect display options
export interface WalletConnectDisplayOptions {
  showQRCode?: boolean;
  showManualConnect?: boolean;
  showDisconnect?: boolean;
  showTransaction?: boolean;
}

// Response from a test transaction
export interface TestTransactionResponse {
  hash: string;
  chainId: string;
}
