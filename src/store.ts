import { create } from "zustand";

type PasswordState = {
  length: number;
  includeNumbers: boolean;
  includeSymbols: boolean;
  includeUpperCases: boolean;
  includeLowerCases: boolean;
  generatedPassword: string;
  setLength: (length: number) => void;
  toggleNumbers: () => void;
  toggleSymbols: () => void;
  toggleUpperCases: () => void;
  toggleLowerCases: () => void;
  generatePassword: () => void;
};
const usePasswordStore = create<PasswordState>((set) => ({
  length: 12,
  includeNumbers: false,
  includeSymbols: false,
  includeUpperCases: true,
  includeLowerCases: true,
  generatedPassword: "",
  setLength: (length: number) => set({ length }),
  toggleNumbers: () =>
    set((state) => ({ includeNumbers: !state.includeNumbers })),
  toggleSymbols: () =>
    set((state) => ({ includeSymbols: !state.includeSymbols })),
  toggleUpperCases: () =>
    set((state) => ({ includeUpperCases: !state.includeUpperCases })),
  toggleLowerCases: () =>
    set((state) => ({ includeLowerCases: !state.includeLowerCases })),
  generatePassword: () =>
    set((state) => {
      const numbers = "0123456789";
      const symbols = "é!'^+%&/()=?_£#$½{[]}|<>.,@€ß+-*/";
      const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
      const lowerCase = "qwertyuiopasdfghjklmnopqrstuvwxyz";
      let characters = "";
      if (state.includeNumbers) characters += numbers;
      if (state.includeSymbols) characters += symbols;
      if (state.includeUpperCases) characters += upperCase;
      if (state.includeLowerCases) characters += lowerCase;

      let password = "";
      for (let i = 0; i < state.length; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
      }
      return { generatedPassword: password };
    }),
}));
export default usePasswordStore;
