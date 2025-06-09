import {
    LuCalendar1,
    LuCreditCard,
    LuMapPin,
    LuShield,
    LuTrash2,
    LuTruck,
} from "react-icons/lu";

const WeWantWasteSteps = ({ onStepClick }) => {
  const steps = [
    {
      title: "Postcode",
      icon: LuMapPin,
      clickValue: "LE10 1SH",
      completed: true,
      current: false,
    },
    {
      title: "Waste Type",
      icon: LuTrash2,
      clickValue: "Garden waste",
      completed: true,
      current: false,
    },
    {
      title: "Select Skip",
      icon: LuTruck,
      clickValue: "Current page !",
      completed: false,
      current: true,
    },
    {
      title: "Permit Check",
      icon: LuShield,
      clickValue: null,
      completed: false,
      current: false,
    },
    {
      title: "Choose Date",
      icon: LuCalendar1,
      clickValue: null,
      completed: false,
      current: false,
    },
    {
      title: "Payment",
      icon: LuCreditCard,
      clickValue: null,
      completed: false,
      current: false,
    },
  ];

  return (
    <div>
      <ul className="steps steps-vertical sm:steps-horizontal gap-x-2">
        {steps.map((item, idx) => (
          <li
            key={idx}
            className={`step ${
              item.completed || item.current ? "step-primary" : ""
            } ${item.clickValue === null ? "cursor-not-allowed" : "cursor-pointer"}`}
            onClick={
              item.clickValue !== null
                ? () => onStepClick(item.clickValue)
                : null
            }
          >
            <span className="step-icon">
              <item.icon />
            </span>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeWantWasteSteps;
