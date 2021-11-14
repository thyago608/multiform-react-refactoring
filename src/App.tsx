import { FormContextProvider } from "context/FormContext";
import { Header } from "components/Header";
import Routes from "routes";

import { GlobalStyles } from "styles/global";

function App() {
  return (
    <>
      <GlobalStyles />
      <FormContextProvider>
        <Header />
        <Routes />
      </FormContextProvider>
    </>
  );
}

export default App;
