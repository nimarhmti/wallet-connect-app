import { useState } from "react";
import { QrCodeProps } from "./QrCode.types";
import QrReader from "react-qr-reader-es6";
import { IconQrCode } from "../icons/icons";
export default function QrCode({ onConnect }: QrCodeProps) {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onErrorHandler = () => {
    setIsShow(false);
  };

  const QrCodeOnScanHandler = async (value: string | null) => {
    if (value) {
      await onConnect(value);
      setIsShow(false);
    }
  };

  const OpenSacnner = () => {
    setIsShow(true);
    setLoading(true);
  };
  return (
    <div className="mt-[20px]">
      <div className="border-dashed border-[2px] border-Gray-3 p-5 rounded-lg flex flex-col items-center justify-center">
        {isShow ? (
          <div className=" h-[250px] w-[250px]">
            <QrReader
              onLoad={() => setLoading(false)}
              showViewFinder={false}
              onError={onErrorHandler}
              onScan={QrCodeOnScanHandler}
              style={{ width: "100%" }}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-2">
            <IconQrCode viewBox="0 0 24 24" className="w-[250px] h-[250px] " />
            <button
              onClick={OpenSacnner}
              className=" p-[10px] rounded-[5px] bg-blue-600 w-full max-w-[200px] "
            >
              {loading ? "Connecting..." : "scan"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
