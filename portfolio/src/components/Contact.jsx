import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = ({ isDarkMode }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "SERVICE_ID";
    const templateId = "TEMPLATE_ID";
    const publicKey = "PUBLIC_KEY";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Your_Name",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setFeedbackMessage("Your message has been sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setFeedbackMessage(""), 5000);
      })
      .catch((error) => {
        console.error("Error sending email", error);
        setFeedbackMessage("An error occurred. Please try again later.");
        setTimeout(() => setFeedbackMessage(""), 5000);
      });
  };

  return (
    <div
      className={`grid lg:flex lg:flex-row w-full gap-4 mt-5 pb-10 lg:pb-0  ${
        isDarkMode ? "" : ""
      }`}
    >
      <div className="flex flex-col w-full gap-6">
        <p className="text-xl font-bold tracking-tight">Get in Touch</p>
        <p>
          Feel free to reach out with any questions, feedback, or collaboration
          opportunities. You can contact me via email, social media, or simply
          use the contact form to send me a message directly.
        </p>
        <div className="flex flex-col gap-3">
          <p className="flex gap-2">
            <MdEmail className="w-6 h-6" />
            <span>youremail@gmail.com</span>
          </p>
          <p className="flex gap-2">
            <MdLocationOn className="w-6 h-6" />
            <span>Your Location</span>
          </p>
        </div>
        <div className="flex items-center gap-4 lg:mt-10 mt-5">
          <a href="" target="_blank" rel="noopener noreferrer" className="">
            <IoLogoLinkedin className="w-6 h-6 cursor-pointer" />
          </a>

          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6 cursor-pointer" />
          </a>
        </div>
      </div>
      <div className="flex flex-col w-full px-0 lg:mt-0 mt-5 ">
        <form onSubmit={handleSubmit} action="" className="flex flex-col gap-3">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Name"
            required
            className={`px-3 py-2 border-[1px] outline-none rounded-[4px] w-full ${
              isDarkMode
                ? "border-[#6a6a6a] bg-[#303030]"
                : "border-[#a3a3a3] bg-[#ededed]"
            }`}
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="Email Address"
            required
            className={`px-3 py-2 border-[1px] outline-none rounded-[4px] w-full ${
              isDarkMode
                ? "border-[#6a6a6a] bg-[#303030]"
                : "border-[#a3a3a3] bg-[#ededed]"
            }`}
          />
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            type="text"
            placeholder="Message"
            rows={6}
            required
            className={`resize-none px-3 py-2 border-[1px] outline-none rounded-[4px] w-full ${
              isDarkMode
                ? "border-[#6a6a6a] bg-[#303030]"
                : "border-[#a3a3a3] bg-[#ededed]"
            }`}
          />
          <button
            type="submit"
            className={`px-14 py-2 border-[1px] outline-none rounded-[4px] lg:w-fit w-full ${
              isDarkMode
                ? "border-[#6a6a6a] bg-[#ffffff] text-[#111111]"
                : "border-[#a3a3a3] bg-[#111111] text-white"
            }`}
          >
            Send
          </button>
        </form>
        {feedbackMessage && (
          <p
            className={`mt-3 ${
              feedbackMessage.includes("successfully")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {feedbackMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
