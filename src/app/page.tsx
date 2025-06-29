import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar, MapPin, Phone, Mail, Globe, Award, Heart, Smile, Users, Clock } from 'lucide-react';

export default function HomePage() {
  const blogPosts = [
    {
      title: "The Complete Guide to Dental Implants",
      excerpt: "Everything you need to know about dental implants, from consultation to recovery.",
      date: "June 20, 2025",
      readTime: "8 min read",
      category: "Implant Dentistry",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=250&fit=crop"
    },
    {
      title: "Full Mouth Rehabilitation: Transforming Smiles",
      excerpt: "How comprehensive dental treatment can restore both function and aesthetics.",
      date: "June 15, 2025",
      readTime: "6 min read",
      category: "Cosmetic Dentistry",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
    },
    {
      title: "Overcoming Dental Anxiety: A Gentle Approach",
      excerpt: "Creating a comfortable environment for anxious patients through empathy and modern techniques.",
      date: "June 10, 2025",
      readTime: "5 min read",
      category: "Patient Care",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop"
    }
  ];

  const specialties = [
    { icon: Smile, title: "Cosmetic Dentistry", description: "Smile makeovers and aesthetic treatments" },
    { icon: Award, title: "Dental Implants", description: "All-On-X and Zygomatic implant solutions" },
    { icon: Heart, title: "Full Mouth Rehabilitation", description: "Comprehensive restoration treatments" },
    { icon: Users, title: "Family Dentistry", description: "General dental care for all ages" }
  ];

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
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Phone className="w-4 h-4 mr-2" />
              Book Appointment
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="text-blue-600 border-blue-200">
                  28+ Years of Excellence
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Your Trusted 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Smile Architect</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Creating peaceful, comfortable dental experiences with cutting-edge technology and a holistic approach to oral health.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300">
                  <Globe className="w-5 h-5 mr-2" />
                  Learn More
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">28+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">3</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">1000+</div>
                  <div className="text-sm text-gray-600">Happy Patients</div>
                </div>
              </div>
            </div>
            <div className="relative">
  {/* Main image container */}
  <div className="relative z-10 overflow-hidden shadow-2xl rounded-full w-[500px] h-[500px] mx-auto border-4 border-gradient-to-r from-blue-500 to-purple-500">
    <img 
      src="/images/drneil.png" 
      alt="Dr. Neil Vijayaraj" 
      className="w-full h-full object-cover rounded-full"
    />
  </div>
  
  {/* Animated spinning ring */}
  <div className="absolute inset-0 rounded-full animate-spin-slow">
    <div className="w-full h-full rounded-full border-4 border-transparent bg-gradient-to-r from-blue-600 via-transparent to-purple-600"></div>
  </div>
  
  {/* Background blur effects */}
  <div className="absolute -top-10 -right-4 w-72 h-72 bg-gradient-to-r from-blue-600 to-indigo-400 rounded-full opacity-40 blur-3xl"></div>
  <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-indigo-600 to-purple-400 rounded-full opacity-40 blur-3xl"></div>
</div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="text-blue-600 border-blue-200 mb-4">
              Specialties
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Dental Care
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From routine care to complex reconstructions, providing excellence in every aspect of dentistry
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-gray-100">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <specialty.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{specialty.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {specialty.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <Badge variant="outline" className="text-blue-600 border-blue-200 mb-4">
                  About Dr. Neil
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  A Global Journey in Dental Excellence
                </h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Dr. Neil Vijayaraj brings over 28 years of dedicated healthcare experience, marked by a unique blend of empathy, cultural sensitivity, and a holistic approach to oral health. Since graduating in 1995, he has embarked on a global journey, honing his skills across diverse healthcare landscapes in India, New Zealand, and Australia.
                </p>
                <p>
                  Central to his practice is creating a peaceful and comfortable environment for patients. Recognizing that dental anxiety is a common barrier to proper care, he prioritizes patient relaxation as a key component of successful treatment.
                </p>
                <p>
                  His passion for continuous learning is evident in his commitment to integrating the latest advancements in dental technology, ensuring patients benefit from cutting-edge treatments and techniques.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">All-On-X Certified</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Heart className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Holistic Approach</div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="p-6 bg-white shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Training & Expertise</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">All-On-X Implant Systems</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Zygomatic Implants</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Full Mouth Reconstruction</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Cosmetic & Implant Dentistry</span>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-white shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Interests</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Avid traveler & culture enthusiast</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Tennis & snooker player</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Culinary experiences explorer</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="text-blue-600 border-blue-200 mb-4">
              Latest Insights
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Dental Health Blog
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights, patient education, and the latest developments in dental care
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-gray-100">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg hover:text-blue-600 cursor-pointer transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 mb-4">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0">
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-gray-300">
              View All Articles
            </Button>
          </div>
        </div>
      </section>

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
