export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    children: React.ReactNode; // เพิ่ม children ใน ModalProps
  }
   