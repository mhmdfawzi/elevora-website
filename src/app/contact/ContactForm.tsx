"use client";

import { useState, useRef } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-jetbrains), monospace",
  fontSize: "10px",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#000",
  display: "block",
  marginBottom: "8px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  border: "1px solid #E5E5E5",
  backgroundColor: "#fff",
  fontFamily: "var(--font-inter), sans-serif",
  fontSize: "15px",
  color: "#000",
  outline: "none",
  transition: "border-color 0.2s",
};

export default function ContactForm() {
  const [status, setStatus]       = useState<Status>("idle");
  const [errorMsg, setErrorMsg]   = useState("");
  const formRef                   = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const fd      = new FormData(e.currentTarget);
    const payload = {
      name:    (fd.get("name")    as string).trim(),
      email:   (fd.get("email")   as string).trim(),
      company: (fd.get("company") as string).trim(),
      details: (fd.get("details") as string).trim(),
    };

    // Client-side guard (API validates too)
    if (!payload.name || !payload.email || !payload.details) {
      setErrorMsg("Please fill in all required fields.");
      setStatus("error");
      return;
    }

    try {
      const res  = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data?.error ?? "Something went wrong. Please try again later.");
        setStatus("error");
        return;
      }

      setStatus("success");
      formRef.current?.reset();
    } catch {
      setErrorMsg("Something went wrong. Please try again later.");
      setStatus("error");
    }
  }

  // ── Success state ─────────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <div
        className="flex flex-col items-start gap-4 py-12"
        role="alert"
        aria-live="polite"
      >
        <div
          className="w-12 h-12 flex items-center justify-center"
          style={{ backgroundColor: "#000" }}
        >
          <span
            className="material-symbols-outlined text-white"
            style={{ fontSize: "24px" }}
            aria-hidden="true"
          >
            check
          </span>
        </div>
        <h3
          style={{
            fontFamily: "var(--font-hanken), sans-serif",
            fontSize: "24px",
            fontWeight: 600,
            color: "#000",
          }}
        >
          Message received.
        </h3>
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "16px",
            color: "#737373",
            lineHeight: "1.7",
          }}
        >
          Thank you. Your message has been sent successfully. We&apos;ll get back to you within one
          business day.
        </p>
      </div>
    );
  }

  const pending = status === "submitting";

  // ── Form ──────────────────────────────────────────────────────────────────
  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col gap-6">
        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" style={labelStyle}>
              Name{" "}
              <span aria-hidden="true" style={{ color: "#000" }}>
                *
              </span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Jane Smith"
              disabled={pending}
              style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#000")}
              onBlur={(e)  => (e.currentTarget.style.borderColor = "#E5E5E5")}
            />
          </div>
          <div>
            <label htmlFor="email" style={labelStyle}>
              Email{" "}
              <span aria-hidden="true" style={{ color: "#000" }}>
                *
              </span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="jane@company.com"
              disabled={pending}
              style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#000")}
              onBlur={(e)  => (e.currentTarget.style.borderColor = "#E5E5E5")}
            />
          </div>
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" style={labelStyle}>
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Acme Inc."
            disabled={pending}
            style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#000")}
            onBlur={(e)  => (e.currentTarget.style.borderColor = "#E5E5E5")}
          />
        </div>

        {/* Project Details */}
        <div>
          <label htmlFor="details" style={labelStyle}>
            Project Details{" "}
            <span aria-hidden="true" style={{ color: "#000" }}>
              *
            </span>
          </label>
          <textarea
            id="details"
            name="details"
            required
            rows={6}
            disabled={pending}
            placeholder="Tell us about your project — what you're building, your timeline, and any specific challenges."
            style={{ ...inputStyle, resize: "vertical", lineHeight: "1.7" }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#000")}
            onBlur={(e)  => (e.currentTarget.style.borderColor = "#E5E5E5")}
          />
        </div>

        {/* Error message */}
        {status === "error" && (
          <p
            role="alert"
            aria-live="polite"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "14px",
              color: "#ba1a1a",
            }}
          >
            {errorMsg}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={pending}
          className="transition-all duration-300 hover:opacity-90 active:scale-[0.98] disabled:opacity-50"
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "16px 40px",
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: "12px",
            letterSpacing: "0.12em",
            fontWeight: 700,
            textTransform: "uppercase",
            alignSelf: "flex-start",
            border: "none",
            cursor: pending ? "not-allowed" : "pointer",
          }}
        >
          {pending ? "Sending…" : "Start the Conversation"}
        </button>
      </div>
    </form>
  );
}
