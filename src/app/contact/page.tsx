import ContactForm from '@/components/ContactForm';
import CalendlyScheduler from '@/components/CalendlyScheduler';

export default function Contact() {
  return (
    <div className="container mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 py-12 xl:max-w-7xl 2xl:max-w-screen-2xl">
      {/* <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="max-w-md mx-auto mb-16">
        <ContactForm />
      </div> */}

      {/* Appointment Scheduler Section */}
      <div className="mt-16 mb-10">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Schedule a Meeting
        </h2>
        <div className="max-w-5xl mx-auto">
          <CalendlyScheduler />
        </div>
      </div>
    </div>
  );
}
