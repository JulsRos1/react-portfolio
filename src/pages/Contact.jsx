import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const fields = [
    { id: "from_name", label: "Name", type: "text", placeholder: "Jane Doe" },
    { id: "from_email", label: "Email", type: "email", placeholder: "jane@example.com" },
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value.trimStart(),
    }));
  };

  const validate = () => {
    const { from_name, from_email, message } = formData;
    if (!from_name || !from_email || !message)
      return "Please fill in all fields.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from_email))
      return "Please enter a valid email.";
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      setStatus({ type: "error", message: error });
      return;
    }

    try {
      setSubmitting(true);
      setStatus({ type: null, message: "" });

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          ...formData,
          to_name: "Julian",
          to_email: "jjulsros@gmail.com",
          reply_to: formData.from_email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: "success",
        message: "Your message has been sent! We'll get back to you shortly.",
      });
      setFormData({ from_name: "", from_email: "", message: "" });
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({
        type: "error",
        message: err?.text || err?.message || "Something went wrong. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mb-30" id="contact">
      <h1 className="text-4xl text-center mb-5 text-white font-bold border-b-4 border-[#66B933] max-w-[145px] mx-auto">
        Contact
      </h1>

      <div className="bg-black flex items-center justify-center p-4">
        <div className="relative w-full max-w-3xl">
          <div className="absolute -inset-1 rounded-3xl bg-white" aria-hidden="true" />
          <div className="relative rounded-3xl border border-white/40 bg-white/70 backdrop-blur-xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-5">
              {/* Left Panel */}
              <div className="hidden md:block md:col-span-2 bg-black p-8 text-white">
                <div className="h-full flex flex-col">
                  <h2 className="text-2xl font-bold">Let's get in touch</h2>
                  <p className="mt-3 text-white/90">
                    I'd love to hear from you. Send me a message and I'll respond as soon as possible.
                  </p>
                  <div className="mt-auto space-y-2 pt-10 text-white/90 text-sm">
                    <p>Response time: under 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Right Panel / Form */}
              <div className="col-span-5 md:col-span-3 p-6 sm:p-10">
                <p className="text-sm text-muted-foreground">
                  Contact me here if you have any concerns
                </p>

                <form ref={formRef} onSubmit={onSubmit} className="mt-8 space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {fields.map(({ id, label, type, placeholder }) => (
                      <div key={id} className="space-y-2">
                        <label htmlFor={id} className="block text-sm font-medium text-foreground">
                          {label}
                        </label>
                        <input
                          id={id}
                          name={id}
                          type={type}
                          placeholder={placeholder}
                          value={formData[id]}
                          onChange={handleChange}
                          disabled={submitting}
                          className="w-full rounded-xl border bg-white/70 text-foreground placeholder:text-foreground/50 px-4 py-3 shadow-sm outline-none ring-0 focus-visible:ring-2 focus-visible:ring-[#66B933]/40 border-input"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us a bit about what you need..."
                      value={formData.message}
                      onChange={handleChange}
                      disabled={submitting}
                      className="w-full rounded-xl border bg-white/70 text-foreground placeholder:text-foreground/50 px-4 py-3 shadow-sm outline-none ring-0 focus-visible:ring-2 focus-visible:ring-[#66B933]/40 border-input resize-y"
                    />
                  </div>

                  {status.type && (
                    <div
                      className={`rounded-lg border px-4 py-3 text-sm ${
                        status.type === "error"
                          ? "border-red-200 bg-red-50 text-red-700"
                          : "border-emerald-200 bg-emerald-50 text-emerald-700"
                      }`}
                    >
                      {status.message}
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-[#66B933] via-[#58A830] to-[#3D7E1D] px-6 font-semibold text-white shadow-sm transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#66B933]/40 disabled:opacity-60"
                    >
                      {submitting ? "Sending..." : "Send Message"}
                    </button>
                    <p className="text-xs text-muted-foreground">Jenn Julian Ros</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
