"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { ConsultModal } from "@/components/consult-modal";

const ModalContext = createContext<{ openModal: () => void }>({
  openModal: () => {},
});

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ openModal: () => setOpen(true) }}>
      {children}
      <ConsultModal open={open} onClose={() => setOpen(false)} />
    </ModalContext.Provider>
  );
}
