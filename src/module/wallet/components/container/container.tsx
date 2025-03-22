import { useState } from "react";
import { parseUri } from "@walletconnect/utils";
import { walletkit } from "../../services/walletConnectServices";
import PageTitle from "../../../../components/pageTitle/PageTitle";
import QrCode from "../../../../components/qr-code/QrCode";
import TextField from "../../../../components/text-box/text-box";
import Button from "../../../../components/button/button";

export default function WalletConnectContainer() {
  const [uri, setUri] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  async function onConnect(uri: string) {
    const { topic: pairingTopic } = parseUri(uri);
    console.log(pairingTopic);
    // if for some reason, the proposal is not received, we need to close the modal when the pairing expires (5mins)
    const pairingExpiredListener = ({ topic }: { topic: string }) => {
      if (pairingTopic === topic) {
        // styledToast(
        //   "Pairing expired. Please try again with new Connection URI",
        //   "error"
        // );
        // ModalStore.close();
        walletkit.core.pairing.events.removeListener(
          "pairing_expire",
          pairingExpiredListener
        );
      }
    };
    walletkit.once("session_proposal", () => {
      walletkit.core.pairing.events.removeListener(
        "pairing_expire",
        pairingExpiredListener
      );
    });
    try {
      setLoading(true);
      walletkit.core.pairing.events.on(
        "pairing_expire",
        pairingExpiredListener
      );
      await walletkit.pair({ uri });
    } catch (error) {
      // styledToast((error as Error).message, "error");
      // ModalStore.close();
    } finally {
      setLoading(false);
      setUri("");
    }
  }
  return (
    <div className="p-[30px] text-white">
      <PageTitle title="Wallet Connect" />
      <QrCode onConnect={onConnect} />
      <div className="flex items-center gap-3 mt-[20px]">
        <TextField
          name="wallet-connect-uri"
          type="text"
          value={uri}
          className="w-full"
          aria-label="wc url connect input"
          placeholder="e.g. wc:a281567bb3e4..."
          onChange={(e) => setUri(e.target.value)}
        />

        <Button onClick={() => onConnect(uri)} loading={loading}>
          connect
        </Button>
      </div>
    </div>
  );
}
