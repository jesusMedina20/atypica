import { useLanguage } from "../i18n/LanguageContext";
import { useState, type FormEvent } from "react";

const serviceOptions = [
  { key: "dynamic", hrefValue: "Branding" },
  { key: "mobile", hrefValue: "Art%20Direction" },
  { key: "tokenization", hrefValue: "Brand%20Strategy" },
  { key: "landing", hrefValue: "Editorial%20Design" },
  { key: "ecommerce", hrefValue: "Digital%20Identity" },
  { key: "dapps", hrefValue: "Packaging%20amp%3B%20Signage" },
  { key: "other", hrefValue: "Other" },
];

export function ContactForm() {
  const { t } = useLanguage();
  const { contactForm: cf, footer } = t;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      setStatus("error");
      return;
    }

    const selectedService = serviceOptions.find((s) => s.key === formData.service);
    const serviceLabel = (selectedService?.hrefValue || "Other").replace(/%20/g, " ");

    const subject = encodeURIComponent(`ATYPICA — Contact from ${formData.name} - ${serviceLabel}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\r\n` +
      `Email: ${formData.email}\r\n` +
      `Company: ${formData.company || "N/A"}\r\n` +
      `Service: ${serviceLabel}\r\n` +
      `Message: ${formData.message}`
    );

    const mailtoUrl = `mailto:${footer.contact.emailAddress}?subject=${subject}&body=${body}`;
    window.open(mailtoUrl, "_blank", "noopener,noreferrer");

    setStatus("success");
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="bg-atypica-night text-atypica-cream py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="w-10 h-0.5 bg-atypica-olive" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-atypica-olive">
                {t.nav.contact}
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-4">{cf.title}</h2>
            <p className="text-atypica-cream/70 text-lg max-w-md">{cf.subtitle}</p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-atypica-olive flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-atypica-cream"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-atypica-cream/50 mb-0.5">{cf.email}</p>
                  <a
                    href={`mailto:${footer.contact.emailAddress}`}
                    target="_blank"
                    className="text-atypica-cream hover:text-atypica-lime transition-colors"
                  >
                    {footer.contact.emailAddress}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-atypica-olive flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-atypica-cream"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-atypica-cream/50 mb-0.5">{cf.phone}</p>
                  <a
                    href={`tel:${footer.contact.phoneNumber}`}
                    className="text-atypica-cream hover:text-atypica-lime transition-colors"
                  >
                    {footer.contact.phoneNumber}
                  </a>
                </div>
              </div>

              <div className="border-t border-atypica-olive/30 pt-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-atypica-lime">
                  {footer.solutions.title}
                </p>
                <p className="font-display italic text-atypica-cream/60 mt-2">
                  No es para todos.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-atypica-black border border-atypica-olive/40 p-6 md:p-8" data-aos="fade-left">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-atypica-cream/70 mb-1">
                    {cf.name} *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder={cf.namePlaceholder}
                    className="w-full px-4 py-3 bg-atypica-night text-atypica-cream placeholder-atypica-cream/40 border border-atypica-olive/50 focus:border-atypica-lime focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-atypica-cream/70 mb-1">
                    {cf.email} *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder={cf.emailPlaceholder}
                    className="w-full px-4 py-3 bg-atypica-night text-atypica-cream placeholder-atypica-cream/40 border border-atypica-olive/50 focus:border-atypica-lime focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-atypica-cream/70 mb-1">
                    {cf.company}
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder={cf.companyPlaceholder}
                    className="w-full px-4 py-3 bg-atypica-night text-atypica-cream placeholder-atypica-cream/40 border border-atypica-olive/50 focus:border-atypica-lime focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-atypica-cream/70 mb-1">
                    {cf.service} *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-atypica-night text-atypica-cream border border-atypica-olive/50 focus:border-atypica-lime focus:outline-none transition-colors"
                    required
                  >
                    <option value="" className="bg-atypica-night text-atypica-cream">
                      {cf.servicePlaceholder}
                    </option>
                    {serviceOptions.map((opt) => (
                      <option
                        key={opt.key}
                        value={opt.key}
                        className="bg-atypica-night text-atypica-cream"
                      >
                        {cf.services[opt.key as keyof typeof cf.services]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-atypica-cream/70 mb-1">
                  {cf.message} *
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder={cf.messagePlaceholder}
                  rows={4}
                  className="w-full px-4 py-3 bg-atypica-night text-atypica-cream placeholder-atypica-cream/40 border border-atypica-olive/50 focus:border-atypica-lime focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              {status === "error" && (
                <p className="text-red-400 text-sm">{cf.error}</p>
              )}

              {status === "success" && (
                <p className="text-atypica-lime text-sm">{cf.success}</p>
              )}

              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-atypica-lime text-atypica-black font-bold hover:bg-atypica-acid transition-colors"
              >
                {cf.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}