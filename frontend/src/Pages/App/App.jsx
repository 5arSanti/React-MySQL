import { useRoutes, BrowserRouter } from "react-router-dom";

import { AppProvider } from "../../Context";
import { Home } from "../Screens/Home";

const AppRoutes = () => {
    let routes = useRoutes([
        {path: "/", element: <Home/>},
    ]);
    
    return routes;
}

const App = () => {
	return (
		<AppProvider>
			<BrowserRouter>
				<AppRoutes/>
			</BrowserRouter>
		</AppProvider>
	);
}

export default App;