import TransactionsPage from "./pages/TransactionsPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TransactionsPage />} />
      </Routes>
    </>
  );
}

export default App;
