import { useState } from "react";
import "./style.css";

export default function FormValidation() {
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  function validateField(name, value, form) {
    let error = "";
    if (name === "name") {
      if (!value.trim()) {
        error = "Please enter your name";
      } else if (!/^[A-Za-z ]+$/.test(value)) {
        error = "Only letters and spaces are allowed";
      }
    }
    if (name === "email") {
      if (!value.trim()) {
        error = "Please enter your email";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Please enter a valid email";
      }
    }
    if (name === "mobile") {
      if (!value.trim()) {
        error = "Please enter your mobile number";
      } else if (!/^[0-9]{10}$/.test(value)) {
        error = "Mobile number must be 10 digits";
      }
    }
    if (name === "address" && !value.trim()) {
      error = "Please enter your address";
    }
    if (name === "city" && !value) {
      error = "Please select your city";
    }
    if (name === "gender") {
      if (!form.querySelector('[name="gender"]:checked')) {
        error = "Please select your gender";
      }
    }
   if (name === "dob") {
      if (value === "") {
        error = "Please select your date of birth";
      } else if (value > new Date().toISOString().split("T")[0]) {
        error = "Date of birth cannot be in the future";
      }
    }
    if (name === "qualification") {
      if (!form.querySelector('[name="qualification"]:checked')) {
        error = "Please select a qualification";
      }
    }
    if (name === "hobby") {
      if (!form.querySelector('[name="hobby"]:checked')) {
        error = "Please select at least one hobby";
      }
    }
    if (name === "images") {
      const files = form.elements["images"].files;
      if (files.length === 0) {
        error = "Please upload at least one image";
      } else {
        for (const file of files) {
          if (!/\.(jpg|jpeg|png)$/i.test(file.name)) {
            error = "Only JPG, JPEG and PNG images are allowed";
            break;
          }
        }
      }
    }
    if (name === "documents") {
      if (form.elements["documents"].files.length === 0) {
        error = "Please upload a document";
      }
    }
    if (name === "note" && value.length > 100) {
      error = "Note cannot exceed 100 characters";
    }
    return error;
  }

  function handleChange(e) {
    const { name, value, form } = e.target;
    const error = validateField(name, value, form);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
    setSuccess("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const newErrors = {};
    const fields = [
      "name",
      "email",
      "mobile",
      "address",
      "city",
      "gender",
      "dob",
      "qualification",
      "hobby",
      "images",
      "documents",
      "note",
    ];
    fields.forEach((name) => {
      const input = form.elements[name];
      const value = input.value || "";
      const error = validateField(name, value, form);
      if (error) {
        newErrors[name] = error;
      }
    });
    setErrors(newErrors);
    setSuccess("");
    if (Object.keys(newErrors).length === 0) {
      setSuccess("Your form is submitted successfully!");
      form.reset();
    }
  }

  return (
    <div className="form-container">
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit} noValidate>
        <label>Full Name</label>
        <input
          name="name"
          placeholder="Enter name"
          onChange={handleChange}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}

        <label>Mobile Number</label>
        <input
          name="mobile"
          placeholder="Enter mobile number"
          onChange={handleChange}
        />
        {errors.mobile && <span className="error-message">{errors.mobile}</span>}

        <label>Address</label>
        <textarea
          name="address"
          placeholder="Enter address"
          onChange={handleChange}
        />
        {errors.address && <span className="error-message">{errors.address}</span>}

        <label>City</label>
        <select name="city" defaultValue="" onChange={handleChange}>
          <option value="">-- Select City --</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Bhavnagar">Bhavnagar</option>
          <option value="Surat">Surat</option>
          <option value="Vadodara">Vadodara</option>
          <option value="Rajkot">Rajkot</option>
        </select>
        {errors.city && <span className="error-message">{errors.city}</span>}

        <label>Gender</label>
        <div className="options">
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
            />
            Female
          </label>
        </div>
        {errors.gender && <span className="error-message">{errors.gender}</span>}

       <label>Date of Birth</label>
        <input
          type="date"
          name="dob"
          max={new Date().toLocaleDateString("en-CA")}
          onChange={handleChange}
        />
        {errors.dob && (
          <span className="error-message">{errors.dob}</span>
        )}

        <label>Qualification</label>
        <div className="options">
          {["10th", "12th", "Graduation", "Post Graduation", "Ph.D."].map(
            (item) => (
              <label key={item}>
                <input
                  type="checkbox"
                  name="qualification"
                  value={item}
                  onChange={handleChange}
                />
                {item}
              </label>
            )
          )}
        </div>
        {errors.qualification && (
          <span className="error-message">{errors.qualification}</span>
        )}

        <div className="form-group">
          <label>Hobbies</label>

          <details className="checkbox-dropdown">
            <summary>-- Select Hobbies --</summary>

            <div className="dropdown-options">
              {[
                "Reading",
                "Singing",
                "Dancing",
                "Sports",
                "Travelling",
                "Gaming",
              ].map((item) => (
                <label className="option" key={item}>
                  <input
                    type="checkbox"
                    name="hobby"
                    value={item}
                    onChange={handleChange}
                  />
                  {item}
                </label>
              ))}
            </div>
          </details>

          {errors.hobby && (
            <span className="error-message">{errors.hobby}</span>
          )}
        </div>

        <label>Upload Multiple Images</label>
        <input
          type="file"
          name="images"
          accept=".jpg,.jpeg,.png"
          multiple
          onChange={handleChange}
        />
        <small className="small">Select JPG, JPEG or PNG images.</small>
        {errors.images && <span className="error-message">{errors.images}</span>}

        <label>Upload Documents</label>
        <input
          type="file"
          name="documents"
          onChange={handleChange}
        />
        <small className="small">All file types are allowed.</small>
        {errors.documents && (
          <span className="error-message">{errors.documents}</span>
        )}

        <label>Note</label>
        <textarea
          name="note"
          maxLength={100}
          placeholder="Write your note here..."
          onChange={handleChange}
        />
        {errors.note && <span className="error-message">{errors.note}</span>}

        <button type="submit">Submit</button>

        {success && <p className="success-message">{success}</p>}
      </form>
    </div>
  );
}