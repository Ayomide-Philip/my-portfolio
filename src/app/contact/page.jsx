"use client";
import FormSection from "../componet/contact/formSection";
import LetConnect from "../componet/contact/letConncet";
import { useState } from "react";
export default function Page() {
  const [emailAddress, setEmailAddress] = useState(null);
  const [name, setName] = useState(null);
  return (
    <section
      id="contact"
      className="pb-24 pt-10 bg-gradient-to-br from-gray-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <LetConnect name={name} emailAddress={emailAddress} />
          <FormSection
            emailAddress={emailAddress}
            setEmailAddress={setEmailAddress}
            name={name}
            setName={setName}
          />
        </div>
      </div>
    </section>
  );
}
