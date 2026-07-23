import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import {
  FiAlertCircle,
  FiCheckCircle,
  FiSend,
} from "react-icons/fi";

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

type SubmitStatus = "success" | "error" | null;

type ApiResponse = {
  success?: boolean;
  message?: string;
};

const initialValues: FormValues = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
};

const baseInputClass =
  "h-[50px] w-full rounded-xl border bg-white px-4 text-[14px] font-medium text-[#0B1F33] outline-none transition-all duration-300 placeholder:text-slate-400";

const ContactForm = () => {
  const [formValues, setFormValues] =
    useState<FormValues>(initialValues);

  const [errors, setErrors] = useState<FormErrors>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitMessage, setSubmitMessage] = useState("");

  const [submitStatus, setSubmitStatus] =
    useState<SubmitStatus>(null);

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
      newErrors.fullName =
        "Full name must contain at least 3 characters.";
    } else if (name.length > 100) {
      newErrors.fullName =
        "Full name cannot exceed 100 characters.";
    } else if (!namePattern.test(name)) {
      newErrors.fullName = "Please enter a valid full name.";
    }

    if (!email) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailPattern.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    } else if (email.length > 190) {
      newErrors.email =
        "Email address cannot exceed 190 characters.";
    }

    if (!phone) {
      newErrors.phone =
        "Please enter your phone or WhatsApp number.";
    } else if (!phonePattern.test(phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    } else {
      const digitCount = phone.replace(/\D/g, "").length;

      if (digitCount < 9 || digitCount > 15) {
        newErrors.phone =
          "Phone number must contain 9 to 15 digits.";
      }
    }

    if (!message) {
      newErrors.message = "Please enter your travel inquiry.";
    } else if (message.length < 10) {
      newErrors.message =
        "Your message must contain at least 10 characters.";
    } else if (message.length > 1000) {
      newErrors.message =
        "Your message cannot exceed 1,000 characters.";
    }

    return newErrors;
  };

  const clearSubmitMessage = () => {
    if (submitMessage) {
      setSubmitMessage("");
      setSubmitStatus(null);
    }
  };

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    const fieldName = name as keyof FormValues;

    setFormValues((previous) => ({
      ...previous,
      [fieldName]: value,
    }));

    if (errors[fieldName]) {
      setErrors((previous) => ({
        ...previous,
        [fieldName]: undefined,
      }));
    }

    clearSubmitMessage();
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitMessage("");
      setSubmitStatus(null);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitStatus(null);

    const requestBody: FormValues = {
      fullName: formValues.fullName.trim(),
      email: formValues.email.trim(),
      phone: formValues.phone.trim(),
      message: formValues.message.trim(),
    };

    try {
      const response = await fetch("/send-mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const rawResponse = await response.text();

      let result: ApiResponse;

      try {
        result = JSON.parse(rawResponse) as ApiResponse;
      } catch {
        console.error(
          "Invalid server response:",
          rawResponse
        );

        throw new Error(
          "The mail server returned an invalid response."
        );
      }

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
            "We could not send your inquiry."
        );
      }

      setSubmitStatus("success");

      setSubmitMessage(
        result.message ||
          "Thank you! Your inquiry has been sent successfully. We will get back to you soon."
      );

      setFormValues(initialValues);
    } catch (error) {
      console.error("Contact form error:", error);

      setSubmitStatus("error");

      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "We could not send your inquiry. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact-form"
      className="self-start overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-[0_22px_70px_rgba(15,23,42,0.08)]"
    >
      {/* this istest comment */}
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
          Send us your travel details. Our team will
          contact you soon.
        </p>

        <form
          className="grid gap-4"
          onSubmit={handleSubmit}
          noValidate
        >
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
                maxLength={100}
                placeholder="Enter your full name"
                value={formValues.fullName}
                onChange={handleChange}
                className={getInputClass("fullName")}
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={
                  errors.fullName
                    ? "fullName-error"
                    : undefined
                }
              />

              {errors.fullName && (
                <p
                  id="fullName-error"
                  className="mt-2 flex items-center gap-1.5 text-[12px] font-medium !text-red-500"
                >
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
                maxLength={190}
                placeholder="Enter your email address"
                value={formValues.email}
                onChange={handleChange}
                className={getInputClass("email")}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email ? "email-error" : undefined
                }
              />

              {errors.email && (
                <p
                  id="email-error"
                  className="mt-2 flex items-center gap-1.5 text-[12px] font-medium !text-red-500"
                >
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
              maxLength={18}
              placeholder="+94 76 123 4567"
              value={formValues.phone}
              onChange={handleChange}
              className={getInputClass("phone")}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={
                errors.phone ? "phone-error" : undefined
              }
            />

            {errors.phone && (
              <p
                id="phone-error"
                className="mt-2 flex items-center gap-1.5 text-[12px] font-medium !text-red-500"
              >
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
              aria-describedby={
                errors.message
                  ? "message-error"
                  : undefined
              }
            />

            <div className="mt-2 flex items-start justify-between gap-4">
              <div>
                {errors.message && (
                  <p
                    id="message-error"
                    className="flex items-center gap-1.5 text-[12px] font-medium !text-red-500"
                  >
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

          {/* Server Response */}
          {submitMessage && (
            <div
              role={
                submitStatus === "error"
                  ? "alert"
                  : "status"
              }
              className={`flex items-start gap-2 rounded-xl border px-4 py-3 text-[13px] font-medium ${
                submitStatus === "success"
                  ? "border-green-200 bg-green-50 !text-[#2D6A4F]"
                  : "border-red-200 bg-red-50 !text-red-600"
              }`}
            >
              {submitStatus === "success" ? (
                <FiCheckCircle
                  className="mt-0.5 shrink-0"
                  size={16}
                />
              ) : (
                <FiAlertCircle
                  className="mt-0.5 shrink-0"
                  size={16}
                />
              )}

              <span>{submitMessage}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-1 inline-flex h-[50px] w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-[#0B1F33] px-7 text-[14px] font-bold !text-white shadow-[0_12px_28px_rgba(11,31,51,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2D6A4F] disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-60 md:w-fit md:min-w-[200px]"
          >
            {isSubmitting
              ? "Sending Inquiry..."
              : "Send Inquiry"}

            <FiSend size={15} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;