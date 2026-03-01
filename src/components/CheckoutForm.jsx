import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  fullName: Yup.string()
    .min(2, "Full name must be at least 2 characters")
    .required("Full name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Phone number is not valid")
    .required("Phone number is required"),
  address: Yup.string().required("Address is required"),
  paymentMethod: Yup.string()
    .oneOf(["COD", "Card"], "Please select a payment method")
    .required("Payment method is required"),
  agreeTerms: Yup.boolean()
    .oneOf([true], "You must agree to the terms")
    .required("You must agree to the terms"),
});

function CheckoutForm({ cartEmpty, onSubmit }) {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      paymentMethod: "",
      agreeTerms: false,
    },
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <div>
      <h3>Checkout Form</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className={`form-control ${
              formik.touched.fullName && formik.errors.fullName
                ? "is-invalid"
                : ""
            }`}
            id="fullName"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <div className="invalid-feedback">{formik.errors.fullName}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${
              formik.touched.email && formik.errors.email ? "is-invalid" : ""
            }`}
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="invalid-feedback">{formik.errors.email}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className={`form-control ${
              formik.touched.phone && formik.errors.phone ? "is-invalid" : ""
            }`}
            id="phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="invalid-feedback">{formik.errors.phone}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <textarea
            className={`form-control ${
              formik.touched.address && formik.errors.address
                ? "is-invalid"
                : ""
            }`}
            id="address"
            name="address"
            rows="2"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.address && formik.errors.address && (
            <div className="invalid-feedback">{formik.errors.address}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Payment Method</label>
          <div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                id="paymentCOD"
                value="COD"
                checked={formik.values.paymentMethod === "COD"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label className="form-check-label" htmlFor="paymentCOD">
                COD
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                id="paymentCard"
                value="Card"
                checked={formik.values.paymentMethod === "Card"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <label className="form-check-label" htmlFor="paymentCard">
                Card
              </label>
            </div>
          </div>
          {formik.touched.paymentMethod && formik.errors.paymentMethod && (
            <div className="text-danger small">
              {formik.errors.paymentMethod}
            </div>
          )}
        </div>

        <div className="mb-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formik.values.agreeTerms}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label className="form-check-label" htmlFor="agreeTerms">
              I agree to the terms and conditions
            </label>
          </div>
          {formik.touched.agreeTerms && formik.errors.agreeTerms && (
            <div className="text-danger small">{formik.errors.agreeTerms}</div>
          )}
        </div>

        <button type="submit" className="btn btn-success" disabled={cartEmpty}>
          Place Order
        </button>
        {cartEmpty && (
          <p className="text-muted small mt-1">
            Add items to cart before placing an order.
          </p>
        )}
      </form>
    </div>
  );
}

export default CheckoutForm;
