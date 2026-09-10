import { toast } from "react-toastify";
import type { ITechnology } from "../Types/CardType";

export interface AddToStackProps {
  addToStack: ITechnology[];
  setAddToStack: React.Dispatch<React.SetStateAction<ITechnology[]>>;
}

export default function AddToStack({
  addToStack,
  setAddToStack,
}: AddToStackProps) {
  // Remove single technology
  const handleRemove = (id: string) => {
    setAddToStack((prev) => prev.filter((item) => item.id !== id));
    toast.error("Item Removed", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    setAddToStack([]);
    toast.error("whole Stack was Removed!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-1">Your Stack</h3>
      <p className="text-xs text-gray-400 mb-6">
        {addToStack.length}{" "}
        {addToStack.length === 1 ? "Technology" : "Technologies"} Selected
      </p>

      {/* Selected Items / Empty State Container */}
      {addToStack.length === 0 ? (
        <div className="text-center py-8 text-gray-400 text-sm border border-dashed border-gray-200 rounded-xl mb-6">
          No technologies added yet.
        </div>
      ) : (
        <div className="space-y-3 mb-6">
          {addToStack.map((c) => (
            <div
              key={c.id}
              className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-white shadow-2xs hover:border-gray-200 transition-colors"
            >
              <div className="flex items-center gap-3">
                <img
                  src={c.icon}
                  alt={c.name}
                  className="w-5 h-5 object-contain"
                />
                <span className="text-sm font-semibold text-gray-800">
                  {c.name}
                </span>
              </div>
              <button
                onClick={() => handleRemove(c.id)}
                className="text-gray-400 hover:text-red-500 text-xs p-1 transition-colors cursor-pointer"
                aria-label={`Remove ${c.name}`}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Remove All Button */}
      <button
        onClick={() => handleRemoveAll()}
        disabled={addToStack.length === 0}
        className={`w-full font-medium py-2 px-4 rounded-xl text-sm transition-all ${
          addToStack.length === 0
            ? ""
            : "border border-red-200 text-red-500 hover:bg-red-50 cursor-pointer"
        }`}
      >
        {addToStack.length === 0 ? "" : "Remove All"}
      </button>
    </div>
  );
}
