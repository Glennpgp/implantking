'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Globe, Phone } from 'lucide-react';

export default function HeroSection() {
  return (
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
              <a href='https://www.geelongdaysurgery.com.au/dr-neil-vijayaraj-dentist/'>
                <Button size="lg" variant="outline" className="border-gray-300">
                  <Globe className="w-5 h-5 mr-2"/>
                  Learn More
                </Button>
              </a>
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
  );
}