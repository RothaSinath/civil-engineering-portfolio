import React, { useState } from 'react';
import { Send, CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null); // { type: 'success' | 'warning' | 'error', text: '' }

  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = 'Please enter a valid email address (e.g., name@example.com).';
      }
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please provide a message with at least 10 characters.';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage(null);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Accessible focus on the first invalid field
      const firstErrorField = Object.keys(validationErrors)[0];
      const el = document.getElementById(firstErrorField);
      if (el) el.focus();
      return;
    }

    setIsSubmitting(true);

    // Honest handling: If no backend endpoint is configured, inform user honestly
    if (!endpoint || endpoint.trim() === '') {
      setIsSubmitting(false);
      setStatusMessage({
        type: 'warning',
        text: 'The contact form service is currently not connected (VITE_FORMSPREE_ENDPOINT is unconfigured). Please contact Ty Sophally directly by telephone at 092850199 or connect via our academic department.',
      });
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatusMessage({
          type: 'success',
          text: 'Thank you! Your message has been sent successfully. I will get back to you shortly.',
        });
        setFormData({ fullName: '', email: '', subject: '', message: '' });
      } else {
        const data = await response.json().catch(() => ({}));
        const errMsg =
          data?.errors?.map((err) => err.message).join(', ') ||
          'Failed to send message. Please try again or reach out directly by phone.';
        setStatusMessage({
          type: 'error',
          text: errMsg,
        });
      }
    } catch (err) {
      setStatusMessage({
        type: 'error',
        text: 'A network error occurred while sending your message. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#D9E2EC] shadow-card"
      aria-label="Contact Ty Sophally"
    >
      <h3 className="font-display text-xl font-bold text-primaryNavy pb-2 border-b border-[#D9E2EC]">
        Send a Message
      </h3>

      {/* Status Alerts */}
      {statusMessage && (
        <div
          role="alert"
          className={`p-4 rounded-xl text-sm flex items-start gap-3 ${
            statusMessage.type === 'success'
              ? 'bg-emerald-50 border border-emerald-200 text-emerald-900'
              : statusMessage.type === 'warning'
              ? 'bg-amber-50 border border-amber-200 text-amber-900'
              : 'bg-rose-50 border border-rose-200 text-rose-900'
          }`}
        >
          {statusMessage.type === 'success' && (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          )}
          {statusMessage.type === 'warning' && (
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          )}
          {statusMessage.type === 'error' && (
            <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          )}
          <p className="leading-relaxed">{statusMessage.text}</p>
        </div>
      )}

      {/* Full Name */}
      <div>
        <label
          htmlFor="fullName"
          className="block text-xs font-bold uppercase tracking-wider text-textPrimary mb-1.5"
        >
          Full Name <span className="text-rose-500">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          aria-invalid={Boolean(errors.fullName)}
          aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          className={`w-full px-4 py-2.5 rounded-lg border text-sm text-textPrimary bg-white focus:outline-none transition-colors ${
            errors.fullName
              ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
              : 'border-[#D9E2EC] focus:border-accentBlue focus:ring-1 focus:ring-accentBlue'
          }`}
          placeholder="e.g. John Doe"
          disabled={isSubmitting}
        />
        {errors.fullName && (
          <p id="fullName-error" className="mt-1.5 text-xs text-rose-600 font-medium">
            {errors.fullName}
          </p>
        )}
      </div>

      {/* Email Address */}
      <div>
        <label
          htmlFor="email"
          className="block text-xs font-bold uppercase tracking-wider text-textPrimary mb-1.5"
        >
          Email Address <span className="text-rose-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={`w-full px-4 py-2.5 rounded-lg border text-sm text-textPrimary bg-white focus:outline-none transition-colors ${
            errors.email
              ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
              : 'border-[#D9E2EC] focus:border-accentBlue focus:ring-1 focus:ring-accentBlue'
          }`}
          placeholder="e.g. engineering.recruiter@company.com"
          disabled={isSubmitting}
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-xs text-rose-600 font-medium">
            {errors.email}
          </p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="block text-xs font-bold uppercase tracking-wider text-textPrimary mb-1.5"
        >
          Subject <span className="text-rose-500">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
          className={`w-full px-4 py-2.5 rounded-lg border text-sm text-textPrimary bg-white focus:outline-none transition-colors ${
            errors.subject
              ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
              : 'border-[#D9E2EC] focus:border-accentBlue focus:ring-1 focus:ring-accentBlue'
          }`}
          placeholder="e.g. Internship Inquiry / Academic Collaboration"
          disabled={isSubmitting}
        />
        {errors.subject && (
          <p id="subject-error" className="mt-1.5 text-xs text-rose-600 font-medium">
            {errors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-bold uppercase tracking-wider text-textPrimary mb-1.5"
        >
          Message <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`w-full px-4 py-2.5 rounded-lg border text-sm text-textPrimary bg-white focus:outline-none transition-colors resize-y ${
            errors.message
              ? 'border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500'
              : 'border-[#D9E2EC] focus:border-accentBlue focus:ring-1 focus:ring-accentBlue'
          }`}
          placeholder="Please describe your project, organization, or internship opportunity..."
          disabled={isSubmitting}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-rose-600 font-medium">
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primaryNavy hover:bg-darkNavy text-white font-semibold text-sm transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accentBlue disabled:opacity-60 disabled:cursor-not-allowed active:scale-98"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Message</span>
          </>
        )}
      </button>

      <p className="text-[11px] text-textSecondary text-center">
        Form submissions require an active <code className="font-mono text-primaryNavy">VITE_FORMSPREE_ENDPOINT</code> configuration.
      </p>
    </form>
  );
}
