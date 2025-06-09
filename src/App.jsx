import YardSkipSelector from "./pages/YardSkipSelector";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";
import WeWantWasteSteps from "./components/WeWantWasteSteps";
import Toast from "./components/Toast";
import { useState } from "react";

function App() {
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const handleAction = (toastMessage) => {
    setToastMessage(toastMessage);
    setToastVisible(true);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col w-screen">
        <Navbar />

        <main className="flex flex-col bg-base-200 items-center p-10 space-y-10">
          <Toast
            message={toastMessage}
            visible={toastVisible}
            onClose={() => setToastVisible(false)}
          />

          <WeWantWasteSteps onStepClick={handleAction} />
          <YardSkipSelector />

        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
