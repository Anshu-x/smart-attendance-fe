import React, { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";
import { BrowserMultiFormatReader } from "@zxing/library";

const QRScanner = ({ onSuccess }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [scanning, setScanning] = useState(false);
  const webcamRef = useRef(null);
  const codeReader = useRef(new BrowserMultiFormatReader());

  useEffect(() => {
    startScan();
    return () => stopScan();
  }, []);

  const startScan = () => {
    if (scanning) return;
    setScanning(true);

    const videoElement = webcamRef.current?.video;
    if (!videoElement) {
      setErrorMessage("No camera found.");
      return;
    }

    codeReader.current.decodeFromVideoDevice(
      undefined,
      videoElement,
      (result, error) => {
        if (result) {
          onSuccess(result.getText());
          stopScan();
        }
        if (error) {
          console.error(error);
        }
      }
    );
  };

  const stopScan = () => {
    setScanning(false);
    codeReader.current.reset();
  };

  return (
    <div className="text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-indigo-500">Scan QR Code</h2>
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 shadow-2xl rounded-xl p-4 md:p-8">
        {errorMessage ? (
          <p className="text-red-500">{errorMessage}</p>
        ) : (
          <div className="webcam-container relative">
            <Webcam
              ref={webcamRef}
              className="webcam-feed rounded-lg w-full h-auto"
              videoConstraints={{ facingMode: "environment" }}
            />
            <div className="webcam-overlay absolute inset-0 border-4 border-indigo-500 rounded-lg pointer-events-none animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-indigo-500 bg-opacity-50 rounded-full p-2 animate-ping"></div>
            </div>
          </div>
        )}
        <p className="text-gray-300 mt-4 text-sm md:text-base">Scan the QR code to mark attendance</p>
      </div>
    </div>
  );
};

export default QRScanner;
