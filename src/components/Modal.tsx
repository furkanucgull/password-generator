import { MouseEventHandler } from "react";
import { FaCopy } from "react-icons/fa";
const Modal = ({
  isOpen,
  onClose,
  generatedPassword,
}: {
  isOpen: boolean;
  onClose: MouseEventHandler<HTMLButtonElement>;
  generatedPassword: string;
}) => {
  if (!isOpen) return null;
  const copyPassword = () => {
    navigator.clipboard.writeText(generatedPassword);
    alert("Copied to clipboard!");
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#e8dede] p-6 rounded-lg shadow-lg ">
        <h3 className="font-bold text-lg ">Your Generated Password</h3>
        <div className="py-4 flex items-center flex-col gap-2">
          Here is your secure password:
          <div className="flex items-center gap-2">
            <input
              readOnly
              value={generatedPassword}
              className=" border-2 p-1 rounded-lg text-center border-gray-400 font-mono"
            />
            <FaCopy
              size={18}
              onClick={copyPassword}
              className="cursor-pointer  "
            />
          </div>
        </div>
        <div className="modal-action">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded-lg cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
