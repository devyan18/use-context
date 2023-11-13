import { Routes, Route } from "react-router-dom";

// importamos todas las páginas desde una sola ubicación
import { AllTasks, NewTask, OneTask } from "./pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<AllTasks />} />
      <Route path="/new" element={<NewTask />} />
      <Route path="/:taskId" element={<OneTask />} />
    </Routes>
  );
};
export default Router;
