import { useEffect, useState } from "react";
import BottomSelectorBar from "../components/BottomSelectorBar";
import YardSkipCard from "../components/YardSkipCard";
import Skip from "../models/Skip";
import { fetchSkips } from "../utils/skips-api";
import Toast from "../components/Toast";

const YardSkipSelector = () => {
  const [skips, setSkips] = useState([]);
  const [selectedSkip, setSelectedSkip] = useState(null);

  const [fetchErrorMessage, setFetchErrorMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    fetchSkips()
      .then((data) => {
        const apiSkips = data.map(
          (item) =>
            new Skip(
              item.id,
              item.size,
              item.hire_period_days,
              item.transport_cost,
              item.per_tonne_cost,
              item.price_before_vat,
              item.vat,
              item.postcode,
              item.area,
              item.forbidden,
              item.created_at,
              item.updated_at,
              item.allowed_on_road,
              item.allows_heavy_waste
            )
        );

        setSkips(apiSkips);
      })
      .catch((error) => {
        setFetchErrorMessage(
          "Failed to fetch skips. /n More details: " + error
        );
        setToastVisible(true);
        console.error("Failed to fetch skips:", error);
      });
  }, []);

  return (
    <>
      <div className="p-4 max-w-5xl mx-auto space-y-15">
        <h1 className="text-2xl font-bold">
          Choose Your Skip Size <br />
          <span className="text-sm font-semibold text-gray-500">
            Select the skip size that best suits your needs
          </span>
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {skips.map((skip) => (
            <YardSkipCard
              key={skip.id}
              skip={skip}
              isSelected={selectedSkip?.id === skip.id}
              onSelect={() => {
                if (selectedSkip?.id === skip.id) {
                  setSelectedSkip(null);
                } else {
                  setSelectedSkip(skip);
                }
              }}
            />
          ))}
        </div>
      </div>

      <BottomSelectorBar
        selectedSkip={selectedSkip}
        onBack={() => setSelectedSkip(null)}
        onContinue={() => alert(`Selected Yard Skip: ${selectedSkip.size} Yard Skip`)}
      />

      <Toast
        message={fetchErrorMessage}
        type="error"
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </>
  );
};

export default YardSkipSelector;
