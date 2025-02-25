/* eslint-disable @typescript-eslint/no-explicit-any */

import DashNavbar from "@/components/shared/DashboardNavbar";


const layout = ({ children }: any) => {
  return (
    <main>
      <DashNavbar />
      {children}
    </main>
  );
};

export default layout;
