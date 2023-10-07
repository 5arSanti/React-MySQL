import React from "react";
import PropTypes from "prop-types";

export const AppContext = React.createContext();

const AppProvider = ({children}) => {
    AppProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }

    const [data, setData] = React.useState([]);

	React.useEffect(() => {
		try {
			const fetchData = async () => {
				await fetch("http://localhost:8081/users")
				.then(res => res.json())
				.then(data => setData(data))
				.catch(err => console.log(err))
			}
			fetchData();
		} catch (err) {
			console.log(err);
		}

	}, [])

    return (
        <AppContext.Provider
            value={{
                data,
                setData,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}  

export { AppProvider };