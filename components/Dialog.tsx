"use client";

import { type ReactNode, useEffect, useRef } from "react";
import { Icon } from "./Icon";

export default function Dialog({ open, onClose, labelledBy, children }: { open: boolean; onClose: () => void; labelledBy: string; children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    if (open && !dialog?.open) dialog?.showModal();
    if (!open && dialog?.open) dialog.close();
  }, [open]);

  return <dialog ref={ref} aria-labelledby={labelledBy} className="detail-dialog" onClose={onClose} onClick={(event) => {
    if (event.target === event.currentTarget) event.currentTarget.close();
  }}>
    <article className="dialog-inner">
      <button type="button" className="icon-button dialog-close" aria-label="상세 닫기" onClick={() => ref.current?.close()}><Icon name="close" /></button>
      {children}
    </article>
  </dialog>;
}
