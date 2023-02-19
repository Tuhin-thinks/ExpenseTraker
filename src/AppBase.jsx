// Component to be rendered by the router based on the path
// will be passed as a prop to the component
// component will render the path specific component along with the navbar

import { Route, Routes } from "react-router-dom";
import ExpenseTracker from "./components/ExpenseTracker/ExpenseTracker";
import LandingPage from "./components/Landing";
import NavigationPanel from "./others/Navigation/NavigationPanel";

const AppBase = () => {
  return (
    <div>
      <NavigationPanel />
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/expense-tracker" element={<ExpenseTracker />} />
      </Routes>
    </div>
  );
};

export default AppBase;
