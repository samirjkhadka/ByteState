import { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fe03d89f-9b06-480b-a489-71dacada58a8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message sent successfully");  
      event.target.reset();
    } else {
     
      toast.error("Something went wrong: " + data.message);
      setResult("");
    }
  };
  return (
    <div
      id="Contact"
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Ready to Make a Move? Let&apos;s Build Your Future Together
      </p>

      <form
        onSubmit={onSubmit}
        action=""
        className="max-w-2xl mx-auto text-gray-600 pt-8"
      >
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              required
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea
            placeholder="Your Message"
            name="message"
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            required
          ></textarea>
        </div>
        <button className="bg-blue-500 px-12 py-2 rounded text-white">
          {result ? result : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
