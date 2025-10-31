import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="label">
          <span className="label-text text-gray-300">Name</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input input-bordered w-full bg-[#0a192f] text-white border-purple-500"
          required
        />
      </div>

      <div>
        <label className="label">
          <span className="label-text text-gray-300">Email</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="input input-bordered w-full bg-[#0a192f] text-white border-purple-500"
          required
        />
      </div>

      <div>
        <label className="label">
          <span className="label-text text-gray-300">Message</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="textarea textarea-bordered w-full h-32 bg-[#0a192f] text-white border-purple-500"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn bg-purple-500 hover:bg-purple-600 border-none text-white w-full"
      >
        Send Message
      </button>
    </form>
  );
}
