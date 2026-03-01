import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button, Card } from "react-bootstrap";
import "../styles/Contact.css";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      program: 0,
      message: "",
      agree: false,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      email: Yup.string().required("Required.").email("Invalid email"),
      phone: Yup.string().matches(/^[0-9]+$/, "Must be digits"),
      program: Yup.number().min(1, "Please select a program"),
      message: Yup.string()
        .required("Required.")
        .min(10, "Must be 10 characters or more"),
      agree: Yup.boolean().oneOf(
        [true],
        "The terms and conditions must be accepted.",
      ),
    }),
  });

  return (
    <div className="contact-wrapper">
      <Card className="contact-card">
        <Card.Body className="p-4">
          <h2 className="contact-title">Contact Us</h2>

          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formik.values.name}
                onChange={formik.handleChange}
                className="custom-input"
              />
              {formik.touched.name && formik.errors.name && (
                <small className="text-danger">{formik.errors.name}</small>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="custom-input"
              />
              {formik.errors.email && (
                <small className="text-danger">{formik.errors.email}</small>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                value={formik.values.phone}
                onChange={formik.handleChange}
                className="custom-input"
              />
              {formik.errors.phone && (
                <small className="text-danger">{formik.errors.phone}</small>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Program of Study</Form.Label>
              <Form.Select
                name="program"
                value={formik.values.program}
                onChange={formik.handleChange}
                className="custom-input"
              >
                <option value={0}>Please select</option>
                <option value={1}>Software Engineering</option>
                <option value={2}>Information System</option>
                <option value={3}>Information Assurance</option>
                <option value={4}>Internet of Things</option>
                <option value={5}>Artificial Intelligence</option>
                <option value={6}>Digital Art &amp; Design</option>
              </Form.Select>
              {formik.errors.program && (
                <small className="text-danger">{formik.errors.program}</small>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                placeholder="Enter your message"
                value={formik.values.message}
                onChange={formik.handleChange}
                className="custom-input"
              />
              {formik.errors.message && (
                <small className="text-danger">{formik.errors.message}</small>
              )}
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Check
                type="switch"
                label="Agree to terms and conditions."
                name="agree"
                checked={formik.values.agree}
                onChange={formik.handleChange}
                className="custom-switch"
              />
              {formik.errors.agree && (
                <small className="text-danger">{formik.errors.agree}</small>
              )}
            </Form.Group>

            <Button type="submit" className="btn-send">
              Send
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Contact;
