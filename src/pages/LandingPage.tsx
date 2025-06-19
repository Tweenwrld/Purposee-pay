import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Footer from '@/components/landing/Footer';

const LandingPage: React.FC = () => {
    return (
        <div className='bg-white text-gray-900 min-h-screen'>
            <Header />
            <main>
                <Hero />
                <Features />

                { /* Call to action Section */}
                <section className='py-16 bg-primary text-primary-foreground'>
                    <div className='max-w-4xl mx-auto text-center px-6'>
                        <h2 className='text-3xl font-bold mb-4'>
                            Ready to Get Started?
                        </h2>
                        <p className='text-xl mb-8 opacity-90'>
                            Join thousands of users sending secure, purpose-driven remittances worldwide. 
                        </p>
                        <div className="space-x-4">
                            <Button asChild size="lg" variant="secondary">
                                <Link to="/auth">
                                    Start Sending Money
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                                <Link to="/auth">
                                    Sign In
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;