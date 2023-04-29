import { useState, useEffect } from "react";
import { Table } from 'react-bootstrap';
import axios from "axios";
import { Link } from "react-router-dom";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function PropertyByBranchTable({ branchNo }) {
    const [branchData, setBranchData] = useState(null);

    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/propertieslisting/B00004/`)
            .then((response) => {
                setBranchData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [branchNo]);

    const handleDelete = (propertyId) => {
        axios
            .delete(`http://127.0.0.1:8000/api/properties/${propertyId}/`)
            .then((response) => {
                // Remove the deleted row from the table
                setBranchData(prevBranchData => ({
                    ...prevBranchData,
                    property: prevBranchData.property.filter(property => property.id !== propertyId)
                }));
            })
            .catch((error) => {
                console.log(error);
            });
    };

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
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {branchData.property &&
                        branchData.property.map((property) => (
                            <tr key={property.id}>
                                <td>{property.propertyno}</td>
                                <td>{property.proptype}</td>
                                <td>{property.rent}</td>
                                <td>{property.address}</td>
                                <td>{property.rooms}</td>
                                <td>
                                    <Link to={`/property/${property.propertyno}`}>
                                        <span>A</span>
                                    </Link>{" "}

                                    <Link> {" "}
                                        <button onClick={() => handleDelete(property.propertyno)} style={{ border: "none" }} >
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>{" "}
                                    </Link>{" "}
                                    <Link to={`/property/${property.propertyno}`}>
                                        <span>C</span>
                                    </Link>{" "}
                                    <Link to={`/lease/${property.propertyno}`}>
                                        <span>Lease</span>
                                    </Link>{" "}
                                    <Link to={`/property/${property.propertyno}`}>
                                        <span>E</span>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </>
    );
}

export default PropertyByBranchTable;
