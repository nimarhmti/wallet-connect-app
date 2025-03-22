# WalletConnect Module

This module implements a WalletConnect v2 integration for React and TypeScript.

## Features

- **QR Code Scanning**: Connect a wallet to a DApp by scanning a QR code.
- **Manual Connection**: Enter a WalletConnect URI manually to establish a connection.
- **Connection Status**: Display the current connection status.
- **Wallet Information**: Show the connected wallet address after a successful connection.
- **Test Transaction**: Send a test transaction to a test network and log the response.
- **Disconnect**: Allow the user to disconnect from the DApp.
- **Session Persistence**: Connection information is stored in local storage to persist after a page refresh.

## Project Setup

1. The module uses the Reown WalletKit package, which is built on top of WalletConnect v2.
2. You'll need to obtain a Project ID from [WalletConnect Cloud](https://cloud.walletconnect.com/).
3. Update the `projectId` value in `walletConnectService.ts` with your own Project ID.

## Components

- **WalletProvider**: Context provider for wallet state management.
- **WalletConnectContainer**: Main container component for the wallet connect UI.
- **QRCodeDisplay**: Component to display the WalletConnect QR code.
- **ManualConnect**: Component for manual URI connection.
- **WalletInfo**: Component to display wallet information and connection status.

## Usage

1. The `WalletProvider` component should be wrapped around your app to provide wallet connection state:

```tsx
<WalletProvider>
  <App />
</WalletProvider>
```

2. Use the `useWallet` hook to access wallet state and methods:

```tsx
const { isConnected, walletAddress, connect, disconnect, sendTransaction } =
  useWallet();
```

3. The main `WalletConnectContainer` component provides a complete UI for wallet connection.

## Test Transactions

The `sendTestTransaction` function sends a 0 ETH transaction to demonstrate the functionality. It uses the Sepolia testnet by default, but you can specify a different chain by passing a chainId parameter.

## Error Handling

All components include appropriate error handling and display error messages when an issue occurs during connection or transaction sending.

## References

- [Reown WalletKit Documentation](https://docs.reown.com/walletkit/web/installation)
- [WalletConnect Documentation](https://docs.walletconnect.com/2.0/)
