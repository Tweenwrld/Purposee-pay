import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LayoutDashboard,
  DollarSign,
  ShoppingCart,
  Send,
  ShieldCheck,
  Gift,
} from 'lucide-react';

const features = [
    {
        icon: <LayoutDashboard className='w-8 h-8 text-primary' />,
        title: 'Fund Monitoring',
        description: 'Real-time tracking of funds from sender to beneficiary.',
    },
    {
        icon: <DollarSign className='w-8 h-8 text-primary' />,
        title: 'Purpose Allocation',
        description: 'Allocate funds for specific purposes like education or healthcare.',
    },
    {
        icon: <ShoppingCart className='w-8 h-8 text-primary' />,
        title: 'Merchant Verification',
        description: 'Ensure payments are made to verified and trusted merchants.',
    },
    {
      icon: <Send className="w-8 h-8 text-primary" />,
      title: 'Send Remittance',
      description: 'Easily send money across borders with low fees and fast processing.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: 'Validate Remittance',
      description: 'A secure validation process to prevent fraud and errors.',
    },
    {
      icon: <Gift className="w-8 h-8 text-primary" />,
      title: 'Claim Remittance',
      description: 'Simple and secure process for beneficiaries to claim their funds.',
    },
];

const Features: React.FC = () => {
    return (
        <section id="features" className="bg-muted/30">
            <div className="container py-24 sm:py-32 space-y-16">
                <div className="text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold">
                        Our <span className="inline bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">Features</span>
                    </h2>
                    <p className="mt-4 text-muted-foreground md:w-1/2 mx-auto">
                        Purpose Pay provides a comprehensive suite of tools for secure and transparent international remittances.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map(({ icon, title, description }) => (
                        <Card key={title} className="bg-background transform transition-all duration-300 hover:scale-105 hover:shadow-x1">
                            <CardHeader >
                                <div className="mb-4">
                                    {icon}
                                    ...
                                </div>
                                <CardTitle>{title}</CardTitle>
                            </CardHeader>
                            <CardContent>{description}</CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;