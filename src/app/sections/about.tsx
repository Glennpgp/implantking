'use client';
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Globe, Heart, Users } from 'lucide-react';

export default function AboutSection() {
  return (
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
  );
}