import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <div className="container mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 py-12 xl:max-w-7xl 2xl:max-w-screen-2xl">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <div className="max-w-md mx-auto">
        <ContactForm />
      </div>
    </div>
  );
}
