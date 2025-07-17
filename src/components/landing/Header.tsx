import React from "react";
import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
    return (
        <header className="boarder-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <Shield className="h-8 w-8 text-primary" />
                    <span className="text-xl font-bold text-gray-900">Purpose Pay</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                     <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                        Features
                    </a>
                    <a href="#security" className="text-gray-600 hover:text-gray-900 transition-colors">
                        Security
                    </a>
                    <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                        Contact
                    </a>
                </nav>

                <div className="flex items-center gap-4">
                    <Button asChild variant="ghost">
                        <Link to="/auth">Sign In</Link>
                    </Button>
                    <Button asChild>
                        <Link to="/auth">Get Started</Link>
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;