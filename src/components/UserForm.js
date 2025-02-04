import React, { useState } from "react";
import {Button,Stepper,Step,StepLabel,TextField,Box,} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const steps = ["Personal Info", "Address Details", "Review & Submit"];

const validationSchemas = [
  Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
  }),
  Yup.object({
    address: Yup.string().required("Address is required"),
  }),
  Yup.object(),
];

const UserForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = (values) => {
    if (activeStep === steps.length - 1) {
      alert(JSON.stringify(values, null, 2));
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Box sx={{ width: "50%", margin: "auto", padding: 4 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Formik
        initialValues={{ name: "", email: "", phone: "", address: "" }}
        validationSchema={validationSchemas[activeStep]}
        onSubmit={handleNext}
      >
        {({ values, errors, touched }) => (
          <Form>
            {activeStep === 0 && (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Field
                  name="name"
                  as={TextField}
                  label="Name"
                  fullWidth
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />
                <Field
                  name="email"
                  as={TextField}
                  label="Email"
                  type="email"
                  fullWidth
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
                <Field
                  name="phone"
                  as={TextField}
                  label="Phone Number"
                  type="tel"
                  fullWidth
                  error={touched.phone && Boolean(errors.phone)}
                  helperText={touched.phone && errors.phone}
                />
              </Box>
            )}
            {activeStep === 1 && (
              <Field
                name="address"
                as={TextField}
                label="Address"
                fullWidth
                error={touched.address && Boolean(errors.address)}
                helperText={touched.address && errors.address}
              />
            )}
            {activeStep === 2 && (
              <Box>
                <p>
                  <strong>Name:</strong> {values.name}
                </p>
                <p>
                  <strong>Email:</strong> {values.email}
                </p>
                <p>
                  <strong>Phone Number:</strong> {values.phone}
                </p>
                <p>
                  <strong>Address:</strong> {values.address}
                </p>
              </Box>
            )}

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 2,
              }}
            >
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button type="submit" variant="contained">
                {activeStep === steps.length - 1 ? "Submit" : "Next"}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default UserForm;
