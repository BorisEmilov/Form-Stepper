import { Divider, Typography } from "@mui/material";
import React from "react";
import ProgressForm from "./components/ProgressForm";

function App() {
  return (
    <div className="h-[100%] w-[100%] flex flex-col items-center justify-center bg-#8d99ae">
      <Typography variant="h2">SignUp Form</Typography>
      <Divider sx={{ width: '80%', mt: 5, mb: 5 }} />
      <ProgressForm />
    </div>
  );
}

export default App;
