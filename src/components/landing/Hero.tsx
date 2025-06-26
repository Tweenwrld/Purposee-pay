
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Wallet, QrCode, ArrowRight, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Bank-grade encryption with multi-signature security"
    },
    {
      icon: Wallet,
      title: "Multi-Wallet Support",
      description: "Connect with Sui wallets, zkLogin, or WalletConnect"
    },
    {
      icon: QrCode,
      title: "Instant QR Payments",
      description: "Send and receive money with simple QR codes"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Secured by Sui Blockchain</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Send Money
                <span className="block text-primary">Across Borders</span>
                <span className="block text-secondary">Instantly</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-xl">
                Experience the future of remittances with Purpose Pay. Secure, fast, and transparent 
                cross-border transfers powered by the Sui blockchain.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Bank-grade security</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Real-time tracking</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Low fees</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                className="purpose-button-primary text-lg px-8 py-4 h-auto group"
              >
                <Link to="/dashboard">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                variant="outline"
                className="purpose-button-outline text-lg px-8 py-4 h-auto"
              >
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Trusted by users worldwide</p>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50K+</div>
                  <div className="text-sm text-gray-500">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">$10M+</div>
                  <div className="text-sm text-gray-500">Transferred</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">150+</div>
                  <div className="text-sm text-gray-500">Countries</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Feature Preview */}
          <div className="relative">
            <div className="purpose-card p-8 max-w-md mx-auto">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 text-center">
                  Why Choose Purpose Pay?
                </h3>
                
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                        activeFeature === index 
                          ? 'bg-primary/10 border-2 border-primary/20' 
                          : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                      }`}
                      onClick={() => setActiveFeature(index)}
                      onMouseEnter={() => setActiveFeature(index)}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg ${
                          activeFeature === index ? 'bg-primary text-white' : 'bg-white text-primary'
                        }`}>
                          <feature.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{feature.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
