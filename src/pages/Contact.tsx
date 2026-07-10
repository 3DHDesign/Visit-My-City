import Footer from "../components/common/Footer";
import ContactHero from "../components/contact/ContactHero";
import ContactInfoCards from "../components/contact/ContactInfoCards";
import ContactForm from "../components/contact/ContactForm";
import ContactMap from "../components/contact/ContactMap";

const Contact = () => {
  return (
    <>
      <main className="bg-[#FCFCFA]">
        <ContactHero />

        <section className="relative overflow-hidden py-4 lg:py-8">
          <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#2D6A4F]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-[#E9A93B]/15 blur-3xl" />

          <div className="container-wide relative z-10">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <ContactInfoCards />
              <ContactForm />
            </div>
          </div>
        </section>

        <ContactMap />
      </main>

      <Footer />
    </>
  );
};

export default Contact;