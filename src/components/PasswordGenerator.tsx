import usePasswordStore from "../store.ts";
import { useEffect, useState } from "react";
import Modal from "./Modal.tsx";

const PasswordGenerator = () => {
  const {
    length,
    includeNumbers,
    includeSymbols,
    includeUpperCases,
    includeLowerCases,
    generatedPassword,
    setLength,
    toggleNumbers,
    toggleSymbols,
    toggleUpperCases,
    toggleLowerCases,
    generatePassword,
  } = usePasswordStore();

  // Modal'ın açık olup olmadığını kontrol eden state
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGeneratePassword = () => {
    generatePassword(); // Şifreyi oluştur
    setIsModalOpen(true); // Şifre oluşturulduktan sonra modal'ı aç
  };

  const [isDisable, setIsDisable] = useState(false);

  useEffect(() => {
    setIsDisable(
      !(
        includeNumbers ||
        includeSymbols ||
        includeUpperCases ||
        includeLowerCases
      ),
    );
  }, [includeNumbers, includeSymbols, includeUpperCases, includeLowerCases]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4"> Password Generator</h1>
      <div className=" ">
        <div className="space-y-2 ">
          <label
            htmlFor="length"
            className="block text-sm font-medium text-gray-600"
          >
            Password Length
          </label>
          <input
            className="border-2 rounded-lg p-1 "
            type="number"
            id="length"
            value={length}
            onChange={(e) => setLength(+e.target.value)}
            min={7}
            max={61}
          />
        </div>
        <div className="flex flex-col space-y-3 mt-3 ">
          <div className="flex items-center  ">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={toggleNumbers}
            />
            <label className="ml-2 text-sm">Include Number </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={toggleSymbols}
            />
            <label className="ml-2 text-sm">Include Symbol</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={includeUpperCases}
              onChange={toggleUpperCases}
            />
            <label className="ml-2 text-sm">Include UpperCases</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={includeLowerCases}
              onChange={toggleLowerCases}
            />
            <label className="ml-2 text-sm">Include LowerCases</label>
          </div>
        </div>
        <button
          disabled={isDisable}
          onClick={handleGeneratePassword}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-50 "
        >
          Generate Password
        </button>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          generatedPassword={generatedPassword}
        />
      </div>
    </div>
  );
};

export default PasswordGenerator;
