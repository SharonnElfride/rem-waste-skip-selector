import { format } from "date-fns";
import { LuTriangleAlert, LuBadgeAlert } from "react-icons/lu";
import normalSkipImage from "./../assets/skips/normal-skip.png";
import specialSkipImage from "./../assets/skips/special-skip.png";

const YardSkipCard = ({ skip, isSelected, onSelect }) => {
  const nanValue = "NaN";
  let skipUpdatedAtDate = format(
    new Date(skip.updatedAt),
    "MMMM do yyyy, hh:mm:ss a"
  );

  return (
    <div className="relative group" onClick={() => onSelect(skip)}>
      <div
        className={`absolute bg-primary/10 border border-primary/35 z-0 -top-1 left-1 w-full h-full rounded-xl transform 
          ${
            isSelected
              ? "translate-x-0 translate-y-0 rotate-0 bg-primary/50"
              : "rotate-6 group-hover:animate-bounce"
          }
          transition-all duration-300 ease-in-out
        `}
      ></div>

      <div
        className={`card bg-primary text-primary-content relative shadow-lg rounded-tl-none ${
          isSelected ? "border-2 border-accent" : null
        }`}
      >
        <figure className="rounded-tl-none rounded-tr-box rounded-b-4xl">
          <img
            src={skip.size >= 20 ? specialSkipImage : normalSkipImage}
            alt="yard skip image"
          />

          <div className="absolute top-0 left-0 transform text-xs sm:text-sm">
            <div className="bg-primary/50 glass text-primary-content size-15 sm:size-18 rounded-t-box rounded-l-box rounded-r-full rounded-b-full flex flex-col items-center justify-center shadow-lg">
              <span className="font-bold">{skip.size} yards</span>
            </div>
          </div>
        </figure>

        <div className="card-body">
          <h2 className="card-title flex flex-col">
            £ {skip.priceBeforeVat.toString()}
            {skip.allowedOnRoad == false ? (
              <div className="flex bg-error text-error-content text-xs sm:text-sm px-2 py-1 rounded-box items-center space-x-2">
                <LuTriangleAlert size={24} />
                <span>Not Allowed On The Road</span>
              </div>
            ) : null}
            {skip.allowsHeavyWaste == false ? (
              <div className="flex bg-warning text-warning-content text-xs sm:text-sm px-2 py-1 rounded-box items-center space-x-2">
                <LuBadgeAlert size={24} />
                <span>Do NOT Allow Heavy Waste</span>
              </div>
            ) : null}
          </h2>

          <div className="divider m-2"></div>
          <div className="">
            <h3 className="text-lg">{skip.size} Yard Skip</h3>

            <p className="text-sm underline">
              <span className="font-extrabold">{skip.hirePeriodDays}</span> days hire
              period
            </p>

            <p>
              <span className="flex items-center gap-x-2">
                Transport cost:
                <span className="font-bold">
                  {skip.transportCost ? `£ ${skip.transportCost}` : nanValue}
                </span>
              </span>

              <span className="flex items-center gap-x-2">
                Per tonne cost:
                <span className="font-bold">
                  {skip.perTonneCost ? `£ ${skip.perTonneCost}` : nanValue}
                </span>
              </span>

              <span className="flex items-center gap-x-2">
                VAT:
                <span className="font-bold">
                  {skip.vat ? `${skip.vat}%` : nanValue}
                </span>
              </span>
            </p>
          </div>
        </div>

        <div className="p-2 border-t-2 footer footer-horizontal bg-neutral/30">
          <span>
            N° {skip.id} - Last updated on: {skipUpdatedAtDate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default YardSkipCard;
