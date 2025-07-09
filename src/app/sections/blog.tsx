'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';

export default function BlogSection() {
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

  return (
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
  );
}