"use client";

import { useState } from "react";
import { RollButton } from "./RollButton";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setStatus("success");
        setMessage(
          json.message ?? "Ďakujeme! Vaša správa bola odoslaná."
        );
        form.reset();
      } else {
        setStatus("error");
        setMessage(
          json.message ??
            "Nastala chyba pri odosielaní správy. Skúste to prosím neskôr."
        );
      }
    } catch {
      setStatus("error");
      setMessage(
        "Nastala chyba pri odosielaní správy. Skúste to prosím neskôr."
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Meno" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <Field label="Telefón" name="phone" type="tel" />
      <Field label="Predmet" name="subject" />
      <div>
        <label className="block text-sm font-medium mb-2">Správa *</label>
        <textarea
          name="message"
          required
          rows={6}
          className="w-full px-4 py-3 border border-ink/15 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors resize-y"
        />
      </div>
      <RollButton type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Odosiela sa…" : "Odoslať správu"}
      </RollButton>
      {message && (
        <div
          role="status"
          className={`p-4 text-sm ${
            status === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {message}
        </div>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        {label}
        {required && " *"}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full px-4 py-3 border border-ink/15 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors"
      />
    </div>
  );
}
