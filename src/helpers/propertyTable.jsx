import { useState, useEffect } from "react";
import { Table } from 'react-bootstrap';
import axios from "axios";

function PropertyByBranchTable({ branchNo }) {
const [branchData, setBranchData] = useState(null);

useEffect(() => {
axios
.get("http://127.0.0.1:8000/api/propertieslisting/B00001/")
.then((response) => {
setBranchData(response.data);
})
.catch((error) => {
console.log(error);
});
}, [branchNo]);

if (!branchData) {
return <div>Loading...</div>;
}

return (
<>
<h2>{branchData.branch_name}</h2>
<Table striped bordered hover variant="light">
<thead>
<tr>
<th>Property Name</th>
<th>Property Type</th>
<th>Rent Price</th>
<th>Address</th>
<th>Rooms</th>
</tr>
</thead>
<tbody>
{branchData.property && branchData.property.map((property) => (
<tr key={property.id}>
<td>{property.propertyno}</td>
<td>{property.proptype}</td>
<td>{property.rent}</td>
<td>{property.address}</td>
<td>{property.rooms}</td>
</tr>
))}
</tbody>
</Table>
</>
);
}

export default PropertyByBranchTable;