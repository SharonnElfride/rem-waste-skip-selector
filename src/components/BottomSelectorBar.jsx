const BottomSelectorBar = ({ selectedSkip, onBack, onContinue }) => {
  if (!selectedSkip) return null;

  return (
    <div className="fixed bg-base-100 text-base-content bottom-0 left-0 w-full border-t shadow-md z-50">
      <div className="flex flex-col md:flex-row items-center justify-between p-4 gap-5 text-sm md:text-base-content">
        <div className="items-center">
          <strong>{selectedSkip.size} Skip</strong> selected -{" "}
          <strong className="text-lg">£ {selectedSkip.priceBeforeVat}</strong>{" "}
          (ex. VAT) - <strong>{selectedSkip.hirePeriodDays}</strong> days hire
          period
        </div>

        <div className="divider m-0 md:divider-horizontal"></div>
        
        <div className="flex flex-col gap-5 items-center">
          <div>
            <p>
              Imagery and information shown throughout this website may not
              reflect the exact shape or size specification, colours may vary,
              options and/or accessories may be featured at additional cost.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-md btn-neutral hover:bg-neutral-900" onClick={onBack}>
              Back
            </button>

            <button className="btn btn-md btn-primary" onClick={onContinue}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSelectorBar;
