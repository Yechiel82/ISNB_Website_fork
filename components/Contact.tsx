import React, { useState } from 'react'
import Image from 'next/image'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Replace this with your actual Google Apps Script Web App URL
  // Tutorial:
  // 1. Create a Google Sheet
  // 2. Extensions > Apps Script
  // 3. Paste the following code:
  //    function doPost(e) {
  //      var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  //      var data = JSON.parse(e.postData.contents);
  //      sheet.appendRow([new Date(), data.name, data.email, data.subject, data.message]);
  //      return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' })).setMimeType(ContentService.MimeType.JSON);
  //    }
  // 4. Deploy > New Deployment > Select type: Web App
  // 5. Execute as: Me
  // 6. Who has access: Anyone
  // 7. Copy the URL and paste it below
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz_placeholder_id/exec';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Since Google Apps Script creates CORS issues when called directly from browser sometimes,
      // using 'no-cors' mode is a common workaround for simple submissions (fire and forget),
      // but you won't get a readable response.
      // For a proper response, the script needs to handle OPTIONS and headers correctly.
      // Here we assume a simple POST.

      /*
         NOTE: Since we don't have a real backend URL, we will simulate success
         if the URL is still the placeholder.
      */

      if (GOOGLE_SCRIPT_URL.includes('placeholder')) {
         console.log('Simulating submission to Google Sheets:', formData);
         await new Promise(resolve => setTimeout(resolve, 1000)); // Fake delay
      } else {
         await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // Important for Google Apps Script simple triggers
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
         });
      }

      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setStatus(''), 5000)
    }
  }

  return (
    <section className="flexCenter flex-col py-24">
      <div className="padding-container max-container w-full">
        <h2 className="bold-40 lg:bold-64 text-center mb-10 text-green-90">Hubungi Kami</h2>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Info */}
          <div className="flex-1 flex flex-col gap-8">
            <h3 className="bold-20 text-gray-90">Informasi Kontak</h3>
            <p className="regular-16 text-gray-30">
              Jika Anda memiliki pertanyaan, saran, atau ingin berdonasi, silakan hubungi kami melalui formulir ini atau kontak di bawah.
            </p>

            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full bg-green-50 flexCenter">
                 <Image src="/phone.png" alt="phone" width={24} height={24} />
              </div>
              <p className="bold-16 text-gray-50">085731547274 (Admin)</p>
            </div>

            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-full bg-green-50 flexCenter">
                 <Image src="/location.svg" alt="location" width={24} height={24} />
              </div>
              <p className="bold-16 text-gray-50">Yayasan Satu Visi Bagi Indonesia</p>
            </div>

            <div className="p-6 bg-green-50/5 rounded-2xl border border-green-50/20 mt-4">
               <h4 className="bold-18 text-green-90 mb-2">Visi & Misi</h4>
               <p className="regular-14 text-gray-30">
                  Kami berkomitmen untuk melayani dalam bidang keagamaan, sosial, dan kemanusiaan. Dukungan Anda sangat berarti bagi pelayanan kami.
               </p>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border border-gray-20">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="bold-16 text-gray-50">Nama</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="px-4 py-3 rounded-lg bg-gray-50/5 border border-gray-20 focus:outline-none focus:border-green-50 focus:ring-1 focus:ring-green-50 transition-all disabled:opacity-50"
                  placeholder="Nama Lengkap"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="bold-16 text-gray-50">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="px-4 py-3 rounded-lg bg-gray-50/5 border border-gray-20 focus:outline-none focus:border-green-50 focus:ring-1 focus:ring-green-50 transition-all disabled:opacity-50"
                  placeholder="alamat@email.com"
                />
              </div>

               <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="bold-16 text-gray-50">Subjek</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="px-4 py-3 rounded-lg bg-gray-50/5 border border-gray-20 focus:outline-none focus:border-green-50 focus:ring-1 focus:ring-green-50 transition-all disabled:opacity-50"
                  placeholder="Judul pesan"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="bold-16 text-gray-50">Pesan</label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="px-4 py-3 rounded-lg bg-gray-50/5 border border-gray-20 focus:outline-none focus:border-green-50 focus:ring-1 focus:ring-green-50 transition-all resize-none disabled:opacity-50"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn_dark_green mt-2 rounded-full w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-50/10 text-green-600 border border-green-50/20 rounded-lg text-center font-medium animate-pulse">
                  Pesan Anda telah terkirim! Terima kasih.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-50/10 text-red-600 border border-red-50/20 rounded-lg text-center font-medium">
                  Terjadi kesalahan. Silakan coba lagi nanti.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
