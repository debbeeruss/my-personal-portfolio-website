import React, { useState } from "react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    // Regular expression for validating a standard email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate email format
    if (!validateEmail(formData.email)) {
      setStatus("Please enter a valid email address.");
      setIsSubmitting(false);
      return; // Exit if email is invalid
    }

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/e15e6d47a3e7e101253e39502ebb0f4f",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (result.success === "true") {
        setStatus("Thanks for reaching out!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-gray-100 min-h-screen px-6 md:px-16 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative flex justify-center">
          <div
            className="absolute top-6 left-6 w-[90%] h-[95%] rounded-lg -z-10"
            style={{ backgroundColor: "#99489D" }}
          ></div>
          <img
            src="/assets/debbie.jpg"
            alt="Deborah Russell"
            className="relative rounded-lg shadow-lg w-full max-w-sm"
          />
        </div>

        {/* Contact Form Section */}
        <div className="bg-[#99489D] text-white p-8 rounded-xl shadow-lg">
          {/* Star Row */}
          <div className="flex justify-center mb-4 text-2xl">
            {"★".repeat(12)}
          </div>

          <h2 className="text-2xl font-bold text-center mb-6">Contact Me</h2>

          <form
            onSubmit={handleSubmit}
            method="POST"
            action="https://formsubmit.co/e15e6d47a3e7e101253e39502ebb0f4f"
            className="space-y-4"
          >
            {/* Full Name */}
            <div>
              <label className="block font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md text-black"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md text-black"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md text-black"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-[#99489D] font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>

          {status && <p className="text-center mt-4 text-white">{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
