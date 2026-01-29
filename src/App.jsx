import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import useAuthListener from "./hooks/useAuthListner";

function App() {
  return (
    <Provider store={appStore}>
      <AppContent />
    </Provider>
  );
}
function AppContent() {
  useAuthListener();
  return <Body />;
}

export default App;
