'use client'

import { useTranslation } from '@/components/TranslationWrapper'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

export default function Page() {
  const { dict } = useTranslation()
  const { lang } = useParams()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: ''
  })

  useEffect(() => {
    if (status.submitted || status.error) {
      const timer = setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false, error: false }));
      }, 5000); 
      
      return () => clearTimeout(timer);
    }
  }, [status.submitted, status.error]);
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      setStatus({ submitting: true, submitted: false, error: false, message: '' })
      
      
      const response = await fetch(`/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      
      const textResponse = await response.text();
      
      let data;
      try {
        data = textResponse ? JSON.parse(textResponse) : {};
      } catch (error) {
        throw new Error(`Sunucudan geçersiz yanıt alındı: ${textResponse.substring(0, 100)}...`);
      }
      
      if (!response.ok) {
        throw new Error(data.error || `Sunucu hatası: ${response.status}`);
      }
      
      setStatus({
        submitting: false,
        submitted: true,
        error: false,
        message: data.message || dict.contact?.["success-message"] || 'Mesajınız başarıyla gönderildi!'
      })
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: error instanceof Error ? error.message : 'Bir hata oluştu'
      })
    }
  }

  return (
    <>
    {(status.submitted || status.error) && (
          <div className={`top-0 w-full fixed mt-40  p-4 text-center ${status.error ? 'bg-red-500' : 'bg-green-500'} text-white`}>
            {status.message}
          </div>
        )}
      <div className="flex flex-col justify-center items-center md:flex-row gap-8 mt-60 mb-16">
        
        <div className="w-full sm:w-2/3 md:w-1/3 border-2 border-gray-500 p-8 mx-4 md:mx-0">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                placeholder={dict.contact["name"]} 
                className="w-full border-b-2 border-gray-500 py-2 focus:outline-none"
                required
              />
            </div>
            
            <div className="mb-4">
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder={dict.contact["email"]} 
                className="w-full border-b-2 border-gray-500 py-2 focus:outline-none"
                required
              />
            </div>
            
            <div className="mb-4">
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
                placeholder={dict.contact["telephone"]} 
                className="w-full border-b-2 border-gray-500 py-2 focus:outline-none"
              />
            </div>
            
            <div className="mb-4">
              <input 
                type="text" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                placeholder={dict.contact["subject"]} 
                className="w-full border-b-2 border-gray-500 py-2 focus:outline-none"
              />
            </div>
            
            <div className="mb-6">
              <textarea 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                placeholder={dict.contact["message"]} 
                className="w-full border-b-2 border-gray-500 py-2 h-32 focus:outline-none resize-none"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="bg-gray-900 text-white px-8 py-3 font-light tracking-wider"
              disabled={status.submitting}
            >
              {status.submitting ? (dict.contact["sending"] || 'GÖNDERİLİYOR...') : dict.contact["send"]}
            </button>
          </form>
        </div>
        
        {/* Contact Information */}
        <div className="w-full sm:w-2/3 md:w-1/3 bg-gray-900 text-white p-8 mx-4 md:mx-0">
          <div className="mb-8">
            <h3 className="text-lg mb-4">TEL</h3>
            <p>+90 212 876 10 61 </p>
            <p>+90 532 481 03 46</p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-lg mb-4">EMAIL</h3>
            <p><a href="mailto:info@vestistextile.com">info@vestistextile.com</a></p>
          </div>
          
          <div>
            <h3 className="text-lg mb-4 uppercase">{dict.contact["address"]}</h3>
            <p>Yakuplu Mah. Hürriyet Bulvarı, Skyport Residence No:1 İç Kapı No:113 Beylikdüzü / İSTANBUL</p>
          </div>
        </div>
      </div>

      <div className="w-full h-[600px]">
        <iframe src="https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d1785.7109993755112!2d28.660367306261538!3d41.00743111884009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e6!4m4!1s0x14b55f77f218eab5%3A0x2fb1faa65ca3612b!3m2!1d41.0075058!2d28.6615255!4m5!1s0x14b55f77f218eab5%3A0x2fb1faa65ca3612b!2zWWFrdXBsdSwgSMO8cnJpeWV0IEJsdiwgMzQ1MjQgQmV5bGlrZMO8esO8L8Swc3RhbmJ1bCwgVMO8cmtpeWU!3m2!1d41.0075058!2d28.6615255!5e0!3m2!1str!2sde!4v1742601136126!5m2!1str!2sde" width="100%" height="100%" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </>
  )
} 