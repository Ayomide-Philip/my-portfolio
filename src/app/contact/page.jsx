import FormSection from "../componet/contact/formSection";
import LetConnect from "../componet/contact/letConncet";

export default function Page() {
  return (
    <section
      id="contact"
      className="pb-24 pt-10 bg-gradient-to-br from-gray-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <LetConnect />
          <FormSection />
        </div>
      </div>
    </section>
  );
}
