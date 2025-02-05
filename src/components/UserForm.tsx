import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

interface UserData {
  id: string;
  name: string;
  address: string;
  email: string;
  phone: string;
}

const UserForm: React.FC = () => {
  const [formData, setFormData] = useState<Omit<UserData, "id">>({
    name: "",
    address: "",
    email: "",
    phone: "",
  });
  const [dirty, setDirty] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<UserData | null>(null);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (dirty) {
        e.preventDefault();
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [dirty]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDirty(true);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userData: UserData = { id: uuidv4(), ...formData };

    const existingData = localStorage.getItem("userData");
    const dataArray: UserData[] = existingData ? JSON.parse(existingData) : [];
    dataArray.push(userData);
    localStorage.setItem("userData", JSON.stringify(dataArray));

    setSubmittedData(userData);
    setDirty(false);
    setFormData({
      name: "",
      address: "",
      email: "",
      phone: "",
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Typography variant="h4" gutterBottom>
        User Data Form
      </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        label="Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        label="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Submit
      </Button>
      {submittedData && (
        <Typography variant="body1" color="success.main">
          User {submittedData.name} submitted successfully with ID:{" "}
          {submittedData.id}
        </Typography>
      )}
    </Box>
  );
};

export default UserForm;
