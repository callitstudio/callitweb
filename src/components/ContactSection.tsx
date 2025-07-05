import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-gray-200 to-gray-100">
      <div className="container mx-auto px-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 xl:max-w-7xl 2xl:max-w-screen-2xl">
        {' '}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-primary">
          {' '}
          Get in Touch{' '}
        </h2>{' '}
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <p className="text-sm text-gray-600">Call Us</p>
                    <a 
                      href="tel:+9204236827666"
                      className="text-lg font-semibold hover:text-primary transition-colors cursor-pointer"
                    >
                      04236827666
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <p className="text-sm text-gray-600">Email Us</p>
                    <a 
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@callit-studio.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold hover:text-primary transition-colors cursor-pointer"
                    >
                      contact@callit-studio.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <p className="text-sm text-gray-600">Visit Us</p>
                    <a 
                      href="https://www.google.com/maps/dir//H96C+9XM,+Peer+Muhammad+Sadiq+Rd,+Mughalpura,+Lahore,+54840"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold hover:text-primary transition-colors cursor-pointer"
                    >
                      H96C+9XM, Peer Muhammad Sadiq Rd
                    </a>
                    <p className="text-gray-600">Mughalpura, Lahore, 54840</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-6 bg-white">
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </Card>
            {/* <Card className="p-6 bg-white">
              <h3 className="text-xl font-semibold mb-4">Our Location</h3>
              <div className="w-full h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.1234567890123!2d74.12345678901234!3d31.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDA3JzM0LjQiTiA3NMKwMDcnMzQuNCJF!5e0!3m2!1sen!2spk!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Call IT Studio Location"
                ></iframe>
              </div>
            </Card> */}
          </div>
          <Card className="p-8 bg-white">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Send us a Message
            </h3>
            <ContactForm />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
