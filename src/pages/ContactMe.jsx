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

  const validateForm = () => {
    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return "Please enter a valid email address.";
    }
    // Check if message is not empty
    if (formData.message.trim() === "") {
      return "Message cannot be empty.";
    }
    return null; // No errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Submitting...");

    // Validate form
    const validationError = validateForm();
    if (validationError) {
      setIsSubmitting(false);
      setStatus(validationError);
      return; // Stop the submission if validation fails
    }

    try {
      const form = e.target;
      const data = new FormData(form);
      const response = await fetch("https://formsubmit.co/e15e6d47a3e7e101253e39502ebb0f4f", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Error sending message, please try again.");
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      setStatus("Error sending message, please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-100 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
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

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Contact Me</h2>

          <form
            onSubmit={handleSubmit}
            method="POST"
            action="https://formsubmit.co/e15e6d47a3e7e101253e39502ebb0f4f"
            className="space-y-4"
          >
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#99489D] hover:bg-[#88357A] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>

          {status && <p className="text-center mt-4 text-lg">{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
