import "./App.css";
import { useMode, ColorModeConext } from "./theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
// import Team from "./scenes/team";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Pie from "./scenes/pie";
// import Line from "./scenes/line";
// import Bar from "./scenes/bar";
// import Form from "./scenes/form";
// import FAQ from "./scenes/faq";
import { Route, Routes } from "react-router-dom";
// import Calendar from "./scenes/calendar";
// import Geography from "./scenes/geography";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeConext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/form" element={<Form />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/line" element={<Line />} />
              <Route path="/calender" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/invoices" element={<Invoices />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeConext.Provider>
  );
}

export default App;
