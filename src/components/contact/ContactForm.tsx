import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { FiAlertCircle, FiCheckCircle, FiSend } from "react-icons/fi";

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
};

const baseInputClass =
  "h-[50px] w-full rounded-xl border bg-white px-4 text-[14px] font-medium text-[#0B1F33] outline-none transition-all duration-300 placeholder:text-slate-400";

const ContactForm = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const getInputClass = (field: keyof FormValues) =>
    `${baseInputClass} ${
      errors[field]
        ? "border-red-400 focus:border-red-500 focus:shadow-[0_0_0_4px_rgba(239,68,68,0.10)]"
        : "border-slate-200 focus:border-[#E9A93B] focus:shadow-[0_0_0_4px_rgba(233,169,59,0.12)]"
    }`;

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    const name = formValues.fullName.trim();
    const email = formValues.email.trim();
    const phone = formValues.phone.trim();
    const message = formValues.message.trim();

    const namePattern = /^[A-Za-zÀ-ÖØ-öø-ÿ.'\-\s]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const phonePattern = /^\+?[0-9\s\-()]{9,18}$/;

    if (!name) {
      newErrors.fullName = "Please enter your full name.";
    } else if (name.length < 3) {
      newErrors.fullName = "Full name must contain at least 3 characters.";
    } else if (!namePattern.test(name)) {
      newErrors.fullName = "Please enter a valid full name.";
    }

    if (!email) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailPattern.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!phone) {
      newErrors.phone = "Please enter your phone or WhatsApp number.";
    } else if (!phonePattern.test(phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    } else {
      const digitCount = phone.replace(/\D/g, "").length;

      if (digitCount < 9 || digitCount > 15) {
        newErrors.phone = "Phone number must contain 9 to 15 digits.";
      }
    }

    if (!message) {
      newErrors.message = "Please enter your travel inquiry.";
    } else if (message.length < 10) {
      newErrors.message = "Your message must contain at least 10 characters.";
    } else if (message.length > 1000) {
      newErrors.message = "Your message cannot exceed 1,000 characters.";
    }

    return newErrors;
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormValues((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (errors[name as keyof FormValues]) {
      setErrors((previous) => ({
        ...previous,
        [name]: undefined,
      }));
    }

    if (submitMessage) {
      setSubmitMessage("");
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitMessage("");
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const subject = encodeURIComponent(
      `Travel Inquiry from ${formValues.fullName.trim()}`
    );

    const body = encodeURIComponent(
      `New Travel Inquiry

Full Name: ${formValues.fullName.trim()}
Email: ${formValues.email.trim()}
Phone / WhatsApp: ${formValues.phone.trim()}

Message:
${formValues.message.trim()}`
    );

    const mailtoLink = `mailto:info@visitmycity.lk?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    setSubmitMessage(
      "Your email application has been opened with the inquiry details."
    );

    setIsSubmitting(false);
  };

  return (
    <div
      id="contact-form"
      className="self-start overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.08)]"
    >
      {/* Top Image */}
      <div className="relative h-[280px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85"
          alt="Travel inquiry"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/70 via-[#0B1F33]/20 to-transparent" />

        <div className="absolute bottom-5 left-5 right-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] !text-[#E9A93B]">
            Travel Inquiry
          </p>

          <h3 className="mt-2 text-[28px] font-bold leading-tight !text-white md:text-[34px]">
            Plan your trip with us
          </h3>
        </div>
      </div>

      {/* Form */}
      <div className="p-5 md:p-7">
        <p className="mb-5 max-w-[520px] text-[14px] leading-6 !text-slate-500">
          Send us your travel details. Our team will contact you soon.
        </p>

        <form className="grid gap-4" onSubmit={handleSubmit} noValidate>
          {/* Name and Email */}
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-[12px] font-bold !text-[#0B1F33]"
              >
                Full Name
              </label>

              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                placeholder="Enter your full name"
                value={formValues.fullName}
                onChange={handleChange}
                className={getInputClass("fullName")}
                aria-invalid={Boolean(errors.fullName)}
              />

              {errors.fullName && (
                <p className="mt-2 flex items-center gap-1.5 text-[12px] font-medium !text-red-500">
                  <FiAlertCircle size={13} />
                  {errors.fullName}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-[12px] font-bold !text-[#0B1F33]"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email address"
                value={formValues.email}
                onChange={handleChange}
                className={getInputClass("email")}
                aria-invalid={Boolean(errors.email)}
              />

              {errors.email && (
                <p className="mt-2 flex items-center gap-1.5 text-[12px] font-medium !text-red-500">
                  <FiAlertCircle size={13} />
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-[12px] font-bold !text-[#0B1F33]"
            >
              Phone / WhatsApp Number
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="+94 76 123 4567"
              value={formValues.phone}
              onChange={handleChange}
              className={getInputClass("phone")}
              aria-invalid={Boolean(errors.phone)}
            />

            {errors.phone && (
              <p className="mt-2 flex items-center gap-1.5 text-[12px] font-medium !text-red-500">
                <FiAlertCircle size={13} />
                {errors.phone}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-[12px] font-bold !text-[#0B1F33]"
            >
              Travel Details
            </label>

            <textarea
              id="message"
              name="message"
              rows={5}
              maxLength={1000}
              placeholder="Tell us your destination, travel dates, guest count, and other requirements"
              value={formValues.message}
              onChange={handleChange}
              className={`w-full resize-none rounded-xl border bg-white px-4 py-4 text-[14px] font-medium leading-6 text-[#0B1F33] outline-none transition-all duration-300 placeholder:text-slate-400 ${
                errors.message
                  ? "border-red-400 focus:border-red-500 focus:shadow-[0_0_0_4px_rgba(239,68,68,0.10)]"
                  : "border-slate-200 focus:border-[#E9A93B] focus:shadow-[0_0_0_4px_rgba(233,169,59,0.12)]"
              }`}
              aria-invalid={Boolean(errors.message)}
            />

            <div className="mt-2 flex items-start justify-between gap-4">
              <div>
                {errors.message && (
                  <p className="flex items-center gap-1.5 text-[12px] font-medium !text-red-500">
                    <FiAlertCircle size={13} />
                    {errors.message}
                  </p>
                )}
              </div>

              <p className="shrink-0 text-[11px] font-medium !text-slate-400">
                {formValues.message.length}/1000
              </p>
            </div>
          </div>

          {/* Success Message */}
          {submitMessage && (
            <div
              role="status"
              className="flex items-start gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-[13px] font-medium !text-[#2D6A4F]"
            >
              <FiCheckCircle className="mt-0.5 shrink-0" size={16} />
              {submitMessage}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-1 inline-flex h-[50px] w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-[#0B1F33] px-7 text-[14px] font-bold !text-white shadow-[0_12px_28px_rgba(11,31,51,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2D6A4F] disabled:cursor-not-allowed disabled:opacity-60 md:w-fit md:min-w-[200px]"
          >
            {isSubmitting ? "Preparing Email..." : "Send Inquiry"}
            <FiSend size={15} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;