import { create } from "zustand";

// Define the state type
interface EditorState {
    code: string;
    setCode: (newCode: string) => void;
}

// "create" creates a global state storage for the entire application
export const useEditorStore = create<EditorState>((set) => ({
    code: "",
    setCode: (newCode: string) => set({ code: newCode }), // Updates code with newCode
}));
