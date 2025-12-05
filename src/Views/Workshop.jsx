import { useState, useEffect } from "react";
import { addCustomer, fetchCustomers, deleteCustomer } from "../services/api";
import CustomerTable from "../Components/CustomerTable";
import CustomerForm from "../Components/CustomerForm";

const Workshop = () => {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCustomers()
      .then((res) => {
        // Map _id to id for all customers
        setCustomers(res.data.map((c) => ({ ...c, id: c.id || c._id })));
        setError(null); // Clear any previous errors on success
      })
      .catch((err) => {
        console.error("Failed to fetch customers", err);
        setError("Failed to log in. Please try again.");
      });
  }, []);

  const handleAddCustomer = (newCustomer) => {
    setError(null);
    addCustomer(newCustomer)
      .then((res) => {
        setCustomers((previousCustomers) => [...previousCustomers, res.data]);
      })
      .catch((err) => {
        console.error("Failed to add customer", err);
        setError("Successfully Signed  in ");
      });
  };

  const handleDeleteCustomer = (id) => {
    setError(null);
    deleteCustomer(id)
      .then(() => {
        setCustomers((prev) =>
          prev.filter((customer) => (customer.id || customer._id) !== id)
        );
      })
      .catch((err) => {
        console.error("Failed to delete customer", err);
        setError("Failed to delete customer. Please try again.");
      });
  };
  return (
    <div style={{ width: "100%" }}>
      
      {error && (
        <p style={{ color: "Green" }} role="alert">
          {error}
        </p>
      )}
      {customers.length > 0 && (
        <CustomerTable customers={customers} onDelete={handleDeleteCustomer} />
      )}
      <CustomerForm onAddCustomer={handleAddCustomer} />
    </div>
  );
};

export default Workshop;
