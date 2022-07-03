import "bootstrap/dist/css/bootstrap.min.css";
import { RoutesPage } from "./root/RoutesPage";
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  return (
    <Provider store={store}>
      <RoutesPage />
    </Provider>
  );
}

export default App;
