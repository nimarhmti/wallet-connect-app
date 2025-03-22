import { Core } from "@walletconnect/core";
import { IWalletKit, WalletKit } from "@reown/walletkit";
export let walletkit: IWalletKit;

export async function createWalletKit() {
  const core = new Core({
    projectId: import.meta.env.VITE_PROJECT_ID,
    logger: "trace",
  });
  walletkit = await WalletKit.init({
    core,
    metadata: {
      name: "React Wallet connect app",
      description: "React Wallet for WalletConnect and ",
      url: "https://walletconnect.com/",
      icons: [],
    },
    signConfig: {
      disableRequestQueue: true,
    },
  });

  try {
    const clientId =
      await walletkit.engine.signClient.core.crypto.getClientId();
    console.log("WalletConnect app ClientID: ", clientId);
    localStorage.setItem("WALLETCONNECT_CLIENT_ID", clientId);
  } catch (error) {
    console.error(
      "Failed to set WalletConnect clientId in localStorage: ",
      error
    );
  }
}
