import { ReactNode } from "react";
import TOC from "./TOC";

export default function LabsLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex" }}>
      <aside style={{ width: "200px" }}>
        <TOC />
      </aside>
      <main style={{ marginLeft: "20px" }}>{children}</main>
    </div>
  );
}
