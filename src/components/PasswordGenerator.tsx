import usePasswordStore from "../store.ts";
import { useEffect, useState } from "react";
import Modal from "./Modal.tsx";
import Input from "./Input.tsx";

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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGeneratePassword = () => {
    if (length <= 3) return;
    generatePassword();
    setIsModalOpen(true);
  };

  const [isDisable, setIsDisable] = useState(false);

  useEffect(() => {
    setIsDisable(
      length <= 3 ||
        !(
          includeNumbers ||
          includeSymbols ||
          includeUpperCases ||
          includeLowerCases
        ),
    );
  }, [
    includeNumbers,
    includeSymbols,
    includeUpperCases,
    includeLowerCases,
    length,
  ]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4"> Password Generator</h1>
      <div className=" ">
        <div className="space-y-2 ">
          <label
            htmlFor="length"
            className="block text-sm font-medium text-gray-600"
          >
            Set Password Length :
          </label>
          <input
            className="input"
            type="number"
            id="length"
            value={length}
            onChange={(e) => setLength(+e.target.value)}
            min={7}
            max={61}
          />
        </div>
        <div className="flex flex-col space-y-3 mt-3 ">
          <Input
            title="Include UpperCases"
            checked={includeUpperCases}
            onChange={toggleUpperCases}
          />{" "}
          <Input
            title="Include Number"
            checked={includeNumbers}
            onChange={toggleNumbers}
          />{" "}
          <Input
            title="Include Symbols"
            checked={includeSymbols}
            onChange={toggleSymbols}
          />
          <Input
            title="Include LowerCases"
            checked={includeLowerCases}
            onChange={toggleLowerCases}
          />
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
