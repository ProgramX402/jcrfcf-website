"use client";

import React, { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/newsletter/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setMessage("🎉 Subscribed successfully!");
      setEmail("");
    } catch (err: any) {
      setStatus("error");
      setMessage(err.message || "Subscription failed");
    } finally {
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-xl mx-auto bg-green-50 p-6 rounded-xl shadow-lg"
    >
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full md:w-2/3 px-5 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-green-700 text-gray-700"
        required
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className={`px-8 py-4 rounded-lg font-semibold shadow-md transition ${
          status === "loading"
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-700 hover:bg-green-800 text-white"
        }`}
      >
        {status === "loading" ? "Subscribing..." : "Subscribe"}
      </button>

      {message && (
        <p
          className={`mt-4 w-full text-center text-sm ${
            status === "success" ? "text-green-700" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
