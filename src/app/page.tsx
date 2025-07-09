import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { MapPin, Phone, Mail, Globe, Clock, Smile } from 'lucide-react';

// Import the broken-down components
import HeroSection from './sections/hero';
import SpecialtiesSection from './sections/specialities';
import AboutSection from './sections/about';
import BlogSection from './sections/blog';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Smile className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Dr. Neil Vijayaraj</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
            <a href='https://onlineappointment.carestack.au/?dn=norlaneandsayers&ln=1#/home'>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Phone className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Import and render the broken-down components */}
      <HeroSection />
      <SpecialtiesSection />
      <AboutSection />
      <BlogSection />

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Experience compassionate, cutting-edge dental care in a comfortable environment. 
            Schedule your consultation today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-blue-100">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Melbourne, Australia</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>Mon-Fri: 8AM-6PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Smile className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Dr. Neil Vijayaraj</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Creating beautiful, healthy smiles with 28+ years of experience and a commitment to patient comfort and cutting-edge care.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#about" className="text-gray-400 hover:text-white transition-colors block">About</a>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors block">Services</a>
                <a href="#blog" className="text-gray-400 hover:text-white transition-colors block">Blog</a>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors block">Contact</a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <div>Melbourne, Australia</div>
                <div>info@drneilvijayaraj.com</div>
                <div>+61 XXX XXX XXX</div>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Dr. Neil Vijayaraj. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export const metadata = {
  title: 'Dr. Neil Vijayaraj - Implant Dentistry',
  description: 'Expert implant dentistry with a holistic approach, creating beautiful smiles for over 28 years.',
  openGraph: {
    title: 'Dr. Neil Vijayaraj - Implant Dentistry',
    description: 'Expert implant dentistry with a holistic approach, creating beautiful smiles for over 28 years.',
    url: 'https://drneilvijayaraj.com',
    siteName: 'Dr. Neil Vijayaraj',
    images: [
      {
        url: 'https://drneilvijayaraj.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Neil Vijayaraj - Implant Dentistry',      
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Neil Vijayaraj - Implant Dentistry',
    description: 'Expert implant dentistry with a holistic approach, creating beautiful smiles for over 28 years.',
    images: ['https://drneilvijayaraj.com/images/twitter-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-16x16.png',
  },      
};