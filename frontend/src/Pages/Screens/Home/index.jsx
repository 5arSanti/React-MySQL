import React from "react";
import { AppContext } from "../../../Context";

const Home = () => {
    const context = React.useContext(AppContext);

    return(
        <div>
			<table>
				<thead>
					<th>ID</th>
					<th>Name</th>
					<th>Phone</th>
					<th>Email</th>
				</thead>
				<tbody>
					{context.data.map( (item) => (
						<tr 
							key={item.id}
						>
							<td>{item.id}</td>
							<td>{item.name}</td>
							<td>{item.phone}</td>
							<td>{item.email}</td>
						</tr>
					) )}
				</tbody>
			</table>
		</div>
    );
}

export { Home };