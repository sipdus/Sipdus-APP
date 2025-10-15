import { useEffect, useState } from "react";
import { BleManager } from "react-native-ble-plx";
import { PermissionsAndroid, Platform } from "react-native";
import { Buffer } from "buffer";

export default function useBLE() {
  const [manager, setManager] = useState(null);
  const [device, setDevice] = useState(null);
  const [bpm, setBPM] = useState(null);
  const [spo2, setSpO2] = useState(null);
  const [glucose, setGlucose] = useState(null);

  const SERVICE_UUID = "4fafc201-1fb5-459e-8fcc-c5c9c331914b";
  const CHARACTERISTIC_UUID = "beb5483e-36e1-4688-b7f5-ea07361b26a8";

  useEffect(() => {
    const initBLE = async () => {
      // Pedir permissões Android
      if (Platform.OS === "android" && Platform.Version >= 31) {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        ]);
        const allGranted = Object.values(granted).every(v => v === PermissionsAndroid.RESULTS.GRANTED);
        if (!allGranted) {
          console.warn("Permissões BLE não concedidas!");
          return;
        }
      }

      const bleManager = new BleManager();
      setManager(bleManager);

      // Aguardar o estado do BLE
      const subscription = bleManager.onStateChange((state) => {
        if (state === "PoweredOn") {
          scanAndConnect(bleManager);
        }
      }, true);

      return () => {
        subscription.remove();
        bleManager.destroy();
      };
    };

    initBLE();
  }, []);

  const scanAndConnect = (bleManager) => {
    if (!bleManager) return;

    bleManager.startDeviceScan(null, null, (error, scannedDevice) => {
      if (error) {
        console.error("Erro no scan:", error);
        return;
      }

      if (scannedDevice.name === "ESP32_MAX30102") {
        console.log("🔗 Encontrado dispositivo:", scannedDevice.name);
        bleManager.stopDeviceScan();

        scannedDevice.connect()
          .then((d) => d.discoverAllServicesAndCharacteristics())
          .then((d) => {
            setDevice(d);
            console.log("✅ Conectado ao ESP32!");
            setupNotifications(d);
          })
          .catch(err => console.error("Erro ao conectar:", err));
      }
    });
  };

  const setupNotifications = (device) => {
    device.monitorCharacteristicForService(
      SERVICE_UUID,
      CHARACTERISTIC_UUID,
      (error, characteristic) => {
        if (error) {
          console.error("Erro na notificação:", error);
          return;
        }

        const data = Buffer.from(characteristic.value, "base64").toString("utf-8");
        try {
          const json = JSON.parse(data);
          setBPM(json.bpm);
          setSpO2(json.spo2);
          setGlucose(json.glucose);
        } catch (err) {
          console.warn("⚠️ Erro ao interpretar JSON:", err);
        }
      }
    );
  };

  return { manager, bpm, spo2, glucose, device };
}