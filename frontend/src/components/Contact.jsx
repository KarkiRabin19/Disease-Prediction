import React, { useState } from 'react';
import { toast } from 'react-toastify';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', details: '' });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        toast.success('Message sent successfully!');
    };

    return (
        <section className="min-h-screen bg-white py-5 -mb-40  min-w-full ">
            <div className='border-t-2 border-[#51829B] max-w-7xl mx-15 pt-8'>
                {/* Header  */}
                <h2 className="text-4xl font-bold text-center text-[#51829B] my-5">Contact Us</h2>
                <div className="max-w-5xl mx-auto flex flex-row justify-between items-center">
                    {/* Location Details  */}
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-lg font-semibold">📍 Location</h4>
                            <p className="text-gray-600">Kathmandu, Nepal</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">📞 Phone</h4>
                            <p className="text-gray-600">+977 987654321</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold">✉️ Email</h4>
                            <p className="text-gray-600">drexample@gmail.com</p>
                        </div>
                    </div>
                    {/* Form  */}
                    <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-md space-y-4 flex flex-col w-[70%]">
                    <   input type="text" name="name" placeholder="Your Name" required
                            value={formData.name} onChange={handleChange}
                            className="w-full p-2 rounded border focus:outline-none" />
                        <input type="email" name="email" placeholder="Your Email" required
                            value={formData.email} onChange={handleChange}
                            className="w-full p-2 rounded border focus:outline-none" />
                        <textarea name="details" rows="4" placeholder="Your Message" required
                            value={formData.details} onChange={handleChange}
                            className="w-full p-2 rounded border focus:outline-none" />
                        <div className='flex items-center justify-end'>
                            <button type="submit" className="w-50 bg-black text-white py-2 rounded hover:bg-gray-800 flex items-center justify-center">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
