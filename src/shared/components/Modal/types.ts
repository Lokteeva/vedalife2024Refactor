import { PropsWithChildren } from "react";

export interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  title?: string;
  width?: string;
  onClose(): void;
  onAfterOpen?(): void;
  onAfterClose?(): void;
}
