"use client";

import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Truck,
  Users,
  DollarSign,
  Package,
  ShoppingCart,
  CreditCard,
  Clock,
  Shield,
  Zap,
  Globe,
  Target,
  Settings,
  ArrowRight,
  Star,
  Play,
  Menu,
  X,
  Smartphone,
  Phone,
  Mail,
} from "lucide-react";
import { FreeTrialRegistration } from "./free-trial-registration";
import logo from "@/public/assets/logo-sm.png";
import Image from "next/image";

export function ERPLanding() {
  const [showFreeTrialRegistration, setShowFreeTrialRegistration] =
    useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const erpModules = [
    {
      icon: Truck,
      name: "Fleet Management",
      description: "Track vehicles, maintenance, and routes",
    },
    /* {
      icon: Users,
      name: "Human Resources",
      description: "Employee management and payroll",
    },
    {
      icon: DollarSign,
      name: "Finance",
      description: "Accounting, budgeting, and reporting",
    },*/
    {
      icon: Package,
      name: "Inventory",
      description: "Stock control and warehouse management",
    },
    /* {
      icon: ShoppingCart,
      name: "Order Management",
      description: "Sales orders and fulfillment",
    },
    {
      icon: CreditCard,
      name: "Point of Sale",
      description: "Retail and transaction processing",
    },*/
    {
      icon: Target,
      name: "Sales Force Automation",
      description: "Mobile sales team and task management",
    },
  ];

  const features = [
    { icon: Clock, text: "Real-time Data Sync" },
    { icon: Shield, text: "Enterprise Security" },
    { icon: Zap, text: "Lightning Fast Performance" },
    { icon: Globe, text: "Multi-location Support" },
    { icon: Settings, text: "Fully Customizable" },
  ];

  const stats = [
    {
      /*number: "10,000+", label: "Active Users"*/
    },
    {
      /*number: "500+", label: "Companies"*/
    },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Operations Director",
      company: "TechCorp",
      content:
        "SynqOps transformed our operations completely. 45% efficiency increase in just one month!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "LogiFlow",
      content:
        "The customization capabilities are incredible. It feels like it was built specifically for us.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Finance Manager",
      company: "RetailMax",
      content:
        "Best investment we've made. The ROI was visible within weeks of implementation.",
      rating: 5,
    },
  ];

  const handleStartFreeTrial = () => {
    setShowFreeTrialRegistration(true);
  };

  const handleBackToHome = () => {
    setShowFreeTrialRegistration(false);
  };

  // Show free trial registration page
  if (showFreeTrialRegistration) {
    return <FreeTrialRegistration onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 dark:from-slate-900 dark:via-emerald-900/20 dark:to-slate-900">
      {/* Navigation Header */}
      <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image src={logo} alt="SynqOps" width={32} height={32} />
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                SynqOps
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#solutions"
                className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 transition-colors"
              >
                Solutions
              </a>

              <a
                href="#about"
                className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 transition-colors"
              >
                About
              </a>
              {/*
              <Button
                variant="outline"
                size="sm"
                onClick={handleStartFreeTrial}
              >
                Start Free Trial
              </Button> */}
              <Button
                size="sm"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
              >
                Contact Us
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700">
              <div className="flex flex-col space-y-3">
                <a
                  href="#features"
                  className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 transition-colors"
                >
                  Features
                </a>
                <a
                  href="#solutions"
                  className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 transition-colors"
                >
                  Solutions
                </a>
                <a
                  href="#pricing"
                  className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#about"
                  className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 transition-colors"
                >
                  About
                </a>
                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={handleStartFreeTrial}
                  >
                    Start Free Trial
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge 
              <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="h-4 w-4" />
                Trusted by 500+ Companies Worldwide
              </div>*/}

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight text-center">
                  Transform Your Business with{" "}
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Custom Software Solutions
                  </span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed text-center">
                  Web and mobile: fully customizable, seamlessly integrated, and
                  built for modern businesses.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-lg px-8 py-6"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Stats 
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                      {stat.number}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>*/}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
              Discover What We Can Build For You
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              From modern web platforms to mobile apps and seamless ERP
              integrations, SynqOps delivers fully customizable solutions
              tailored to your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white/90 dark:bg-slate-800/90 border-0 shadow-md flex flex-col items-center p-8 transition-transform duration-200 hover:scale-105 hover:shadow-xl">
              <Globe
                className="h-10 w-10 text-emerald-600 mb-4"
                aria-label="Web Solutions Icon"
              />
              <h3 className="font-semibold text-lg mb-1 text-slate-900 dark:text-white">
                Web Solutions
              </h3>
              <div className="text-emerald-700 dark:text-emerald-300 text-sm mb-2">
                Modern Websites & Portals
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-center">
                Modern, scalable, and fully customizable web applications
                tailored to your business needs.
              </p>
            </Card>
            <Card className="bg-white/90 dark:bg-slate-800/90 border-0 shadow-md flex flex-col items-center p-8 transition-transform duration-200 hover:scale-105 hover:shadow-xl">
              <Smartphone
                className="h-10 w-10 text-emerald-600 mb-4"
                aria-label="Mobile Solutions Icon"
              />
              <h3 className="font-semibold text-lg mb-1 text-slate-900 dark:text-white">
                Mobile Solutions
              </h3>
              <div className="text-emerald-700 dark:text-emerald-300 text-sm mb-2">
                Cross-Platform Apps
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-center">
                Cross-platform mobile apps with seamless user experience and
                deep business integration.
              </p>
            </Card>
            <Card className="bg-white/90 dark:bg-slate-800/90 border-0 shadow-md flex flex-col items-center p-8 transition-transform duration-200 hover:scale-105 hover:shadow-xl">
              <Settings
                className="h-10 w-10 text-emerald-600 mb-4"
                aria-label="ERP Integration Icon"
              />
              <h3 className="font-semibold text-lg mb-1 text-slate-900 dark:text-white">
                ERP Integration
              </h3>
              <div className="text-emerald-700 dark:text-emerald-300 text-sm mb-2">
                Unified Operations
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-center">
                Powerful ERP integration for unified operations, automation, and
                real-time data flow.
              </p>
            </Card>
          </div>

          <div id="solutions" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Complete Business Solutions
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              All systems owned and developed by SynqOps, ensuring seamless
              integration and full customization for your unique business needs.
            </p>
          </div>

          {/* ERP Modules Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {erpModules.map((module, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <module.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {module.name}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {module.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Feature Tags */}
          <div className="flex flex-wrap justify-center gap-3">
            {features.map((feature, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-0 px-4 py-2"
              >
                <feature.icon className="h-4 w-4 mr-2" />
                {feature.text}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              See what our customers say about SynqOps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-500">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="w-full px-0">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Ready to Transform Your Business?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start w-full px-2 md:px-8 lg:px-20 xl:px-32 mt-10">
            {/* Left: Contact Form */}
            <div className="w-full bg-white dark:bg-slate-900 rounded-lg shadow-lg p-6 md:p-10">
              <ContactForm />
            </div>
            {/* Right: Map and Contact Info */}
            <div className="flex flex-col gap-8 items-start w-full bg-white dark:bg-slate-900 rounded-lg shadow-lg p-6 md:p-10">
              <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1686.6352931069034!2d79.8913661307918!3d6.915732867569146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596e64b5a557%3A0xa27c6511c317a54c!2s87%2FB%2C%20Esala%20Park%20Road%2C%20Obesekarapura%2C%20Rajagiriya!5e0!3m2!1sen!2slk!4v1752413735165!5m2!1sen!2slk"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="flex items-center gap-2 text-lg text-slate-700 dark:text-slate-200">
                <Phone
                  className="h-5 w-5 text-emerald-600"
                  aria-label="Phone"
                />
                <span>+94 776051410</span>
                <span>|</span>
                <span>+94 727920628</span>
              </div>
              <div className="flex items-center gap-2 text-lg text-slate-700 dark:text-slate-200"></div>
              <div className="flex items-center gap-2 text-lg text-slate-700 dark:text-slate-200">
                <Mail className="h-5 w-5 text-emerald-600" aria-label="Email" />
                <span>info@synqops.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/70 dark:bg-slate-800/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            About SynqOps
          </h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
            With over 3 years of experience, SynqOps Team specializes in
            building custom software solutions for web, mobile, and ERP
            integration. Our team delivers scalable, innovative, and
            high-quality solutions for clients across diverse industries.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 text-emerald-600 mb-2" />
              <div className="text-xl font-semibold text-slate-900 dark:text-white">
                3+ Years
              </div>
              <div className="text-slate-600 dark:text-slate-400 text-sm">
                Industry Experience
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Star className="h-8 w-8 text-emerald-600 mb-2" />
              <div className="text-xl font-semibold text-slate-900 dark:text-white">
                30+ Projects
              </div>
              <div className="text-slate-600 dark:text-slate-400 text-sm">
                Delivered Successfully
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="h-8 w-8 text-emerald-600 mb-2" />
              <div className="text-xl font-semibold text-slate-900 dark:text-white">
                3+ Industries
              </div>
              <div className="text-slate-600 dark:text-slate-400 text-sm">
                Served Globally
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src={logo} alt="SynqOps" width={32} height={32} />
                <span className="text-xl font-bold">SynqOps</span>
              </div>
              <p className="text-slate-400 text-sm">
                Transforming businesses with integrated ERP solutions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2024 SynqOps. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="text-center">
        <div className="text-emerald-600 text-2xl font-semibold mb-2">
          Thank you!
        </div>
        <div className="text-slate-700 dark:text-slate-200">
          We received your message and will get back to you soon.
        </div>
        <div className="mt-4 flex items-center justify-center gap-2 text-lg text-slate-700 dark:text-slate-200">
          <Phone className="h-5 w-5 text-emerald-600" aria-label="Phone" />
          Or call us:{" "}
          <a
            href="tel:+94727920628"
            className="underline hover:text-emerald-600"
          >
            +1 (555) 123-4567
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <form className="space-y-5 text-left" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="name"
            className="block text-left text-slate-700 dark:text-slate-200 font-medium mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-left text-slate-700 dark:text-slate-200 font-medium mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-left text-slate-700 dark:text-slate-200 font-medium mb-1"
          >
            Company <span className="text-slate-400 text-xs">(optional)</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={form.company}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-left text-slate-700 dark:text-slate-200 font-medium mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold py-3 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-colors disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </>
  );
}
