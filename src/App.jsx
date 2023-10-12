import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/routes'
import GlobalStyle from "./styles/GlobalStyled";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
