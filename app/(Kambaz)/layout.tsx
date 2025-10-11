import { ReactNode } from "react";
import KambazNavigation from "./Navigation"; // should use KambazNavigation, not AccountNavigation
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function KambazLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-kambaz">
      <div className="d-flex">
        {/* Fixed sidebar */}
        <div>
          <KambazNavigation />
        </div>

        {/* Main content with responsive offset */}
        <div className="wd-main-content-offset p-3 flex-fill">
          {children}
        </div>
      </div>
    </div>
  );
}
