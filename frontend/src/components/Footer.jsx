import React from "react";
import { Mail, Facebook, Twitter, Instagram, Linkedin, Heart, Shield, Phone, MapPin } from "lucide-react";
import { toast } from "react-toastify";

function Footer() {
    const hanldeSubscribe=(e)=>{
        e.preventDefault();
        toast.success('Sucessfully Subscribed')
    }
    return (
        <footer className="w-full bg-gradient-to-br from-[#2d4f5e] via-[#365666] to-[#4a7080] font-text">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                {/* Brand Section */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Heart className="text-[#EFBC9B]" size={28} />
                    Di-Pe
                    </h2>
                    <p className="text-gray-300 text-sm leading-relaxed">
                    Empowering healthcare with AI-driven disease prediction and intelligent diagnostic assistance.
                    </p>
                    <div className="flex gap-3 pt-2">
                    <a href="#" className="bg-white/10 hover:bg-[#EFBC9B] p-2 rounded-full transition-all duration-300 group">
                        <Facebook size={18} className="text-white group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="#" className="bg-white/10 hover:bg-[#EFBC9B] p-2 rounded-full transition-all duration-300 group">
                        <Twitter size={18} className="text-white group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="#" className="bg-white/10 hover:bg-[#EFBC9B] p-2 rounded-full transition-all duration-300 group">
                        <Instagram size={18} className="text-white group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="#" className="bg-white/10 hover:bg-[#EFBC9B] p-2 rounded-full transition-all duration-300 group">
                        <Linkedin size={18} className="text-white group-hover:scale-110 transition-transform" />
                    </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white border-b border-[#EFBC9B]/30 pb-2">Quick Links</h3>
                    <ul className="space-y-2">
                    {['About Us', 'Predict Disease', 'Book Appointment', 'Privacy Policy', 'Terms of Service'].map((link) => (
                        <li key={link}>
                        <a href={link||'#'} className="text-gray-300 hover:text-[#EFBC9B] text-sm transition-colors duration-200 flex items-center gap-2 group">
                            <span className="w-1 h-1 bg-[#EFBC9B] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            {link}
                        </a>
                        </li>
                    ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white border-b border-[#EFBC9B]/30 pb-2">Contact Us</h3>
                    <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-300 text-sm">
                        <MapPin size={18} className="text-[#EFBC9B] mt-1 flex-shrink-0" />
                        <span>123 Health Street, Wellness City, HC 12345</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300 text-sm">
                        <Phone size={18} className="text-[#EFBC9B] flex-shrink-0" />
                        <span>+1 (555) 123-4567</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300 text-sm">
                        <Mail size={18} className="text-[#EFBC9B] flex-shrink-0" />
                        <span>support@naaricycle.com</span>
                    </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white border-b border-[#EFBC9B]/30 pb-2">Newsletter</h3>
                    <p className="text-gray-300 text-sm">
                        Get exclusive health updates and medical articles delivered to your inbox.
                    </p>
                    <form className="space-y-3" onSubmit={hanldeSubscribe}>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#EFBC9B] focus:bg-white/20 transition-all duration-300"
                                />
                        </div>
                        <button type="submit" className="w-full bg-gradient-to-r from-[#EFBC9B] to-[#d4a384] hover:from-[#d4a384] hover:to-[#EFBC9B] text-[#365666] font-semibold px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            Subscribe Now
                        </button>
                    </form>
                </div>
                </div>

                {/* Trust Badges */}
                <div className="border-t border-white/10 pt-8 mb-8">
                <div className="flex flex-wrap justify-center items-center gap-6 text-gray-300 text-xs">
                    <div className="flex items-center gap-2">
                    <Shield size={16} className="text-[#EFBC9B]" />
                    <span>HIPAA Compliant</span>
                    </div>
                    <div className="flex items-center gap-2">
                    <Shield size={16} className="text-[#EFBC9B]" />
                    <span>SSL Secured</span>
                    </div>
                    <div className="flex items-center gap-2">
                    <Shield size={16} className="text-[#EFBC9B]" />
                    <span>Privacy Protected</span>
                    </div>
                </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm text-center md:text-left">
                    © Disease-Predictor 2025. All Rights Reserved.<Heart size={14} className="inline pl-1 text-[#EFBC9B]" />
                    </p>
                    <div className="flex gap-6 text-sm text-gray-400">
                    <a href="#" className="hover:text-[#EFBC9B] transition-colors">Privacy</a>
                    <a href="#" className="hover:text-[#EFBC9B] transition-colors">Terms</a>
                    <a href="#" className="hover:text-[#EFBC9B] transition-colors">Cookies</a>
                    </div>
                </div>
                </div>
            </div>

            {/* Decorative Wave */}
            <div className="h-1 bg-gradient-to-r from-transparent via-[#EFBC9B] to-transparent"></div>
        </footer>
    );
}

export default Footer;