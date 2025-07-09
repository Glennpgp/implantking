'use client';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Heart, Smile, Users } from 'lucide-react';

export default function SpecialtiesSection() {
  const specialties = [
    { icon: Smile, title: "Cosmetic Dentistry", description: "Smile makeovers and aesthetic treatments" },
    { icon: Award, title: "Dental Implants", description: "All-On-X and Zygomatic implant solutions" },
    { icon: Heart, title: "Full Mouth Rehabilitation", description: "Comprehensive restoration treatments" },
    { icon: Users, title: "Family Dentistry", description: "General dental care for all ages" }
  ];

  return (
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
  );
}