// app/page.tsx
import React from 'react';

// Path note: Ensure your images are located directly in your 'public/' folder.
// Using fixed absolute paths relative to the public/ folder for Vercel.

export default function Home() {
  const whatsappNumber = "+2349160061132";
  // Creating a clean WhatsApp URL. Vercel doesn't need to see the string either.
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`;

  return (
    <main className="text-gray-950">
      {/* NO NAVBAR OR FOOTER HERE. They are provided by layout.tsx.
        This main container will now neatly sit inside the layout.
      */}

      {/* 2. Enhanced Hero Section */}
      <header className="py-24 md:py-32 text-center px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center text-left">
          <div>
            <span className="inline-block bg-orange-100 text-orange-800 px-4 py-1.5 rounded-full text-xs font-bold mb-4 uppercase tracking-widest">Premium Production</span>
            <h2 className="text-5xl md:text-7xl font-extrabold mb-6 leading-[0.95] tracking-tight text-slate-950">Pure Palm Oil, <br />Straight from <span className='text-orange-600'>Benin City.</span></h2>
            {/* Global Value Proposition */}
            <p className="text-xl md:text-2xl text-slate-700 mb-10 max-w-2xl">
              Supplying Nigeria, Pan-Africa, and international markets with rich, healthy, and premium-quality palm oil you can trust.
            </p>
            <div className="flex gap-4">
              {/* FIXED: WhatsApp is embedded here, number is not visible text */}
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-orange-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-700 transition">Order Bulk Today</a>
              <a href="#services" className="bg-slate-100 text-slate-800 px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition">Our Services</a>
            </div>
          </div>
          
          {/* Visual Highlight */}
          <div className="relative">
            {/* IMAGE 1: Fixed Path (Correct) */}
            <img 
              src="/palmfruits2.jpg" 
              alt="Harvested Palm Fruits" 
              className="w-full h-96 object-cover rounded-3xl shadow-2xl transition hover:-translate-y-2"
            />
            {/* Overlay product image - creates depth */}
            <div className='absolute -bottom-8 -left-8 w-64 p-5 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-orange-100'>
                <p className='text-2xl font-bold mb-2 text-orange-800'>Local Excellence</p>
                <p className='text-sm text-gray-700'>Our commitment begins with selection, supporting local farmers in Edo State.</p>
            </div>
          </div>
        </div>
      </header>

      {/* 3. About Our Process Section */}
      <section id="about" className="py-28 bg-slate-50 border-t border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-16 items-center">
            <div className='col-span-12 md:col-span-7 grid grid-cols-2 gap-6'>
                {/* Integration 2: Process Image */}
                <div className='space-y-6'>
                    <div className='p-6 bg-white rounded-3xl shadow-sm border border-orange-100'>
                        <h4 className='font-bold text-xl mb-3'>Hand-Selected Quality</h4>
                        <p className='text-sm text-gray-700'>We selection only the healthiest fruits, ensuring superior oil yield and taste.</p>
                    </div>
                    {/* IMAGE 2: Fixed Path */}
                    <img 
                        src="/palmnuts.jpg" 
                        alt="Palms holding palm nuts" 
                        className="w-full rounded-3xl shadow-md border-4 border-white aspect-square object-cover"
                    />
                </div>
                {/* Integration 3: Product Image */}
                <div className='mt-12'>
                    {/* IMAGE 3: Fixed Path */}
                    <img 
                        src="/palmfruits.webp" 
                        alt="Pile of fresh palm fruits" 
                        className="w-full rounded-3xl shadow-md border-4 border-white aspect-square object-cover"
                    />
                    <div className='p-6 bg-white rounded-3xl shadow-sm border border-orange-100 mt-6'>
                        <h4 className='font-bold text-xl mb-3'>International Standards</h4>
                        <p className='text-sm text-gray-700'>Born in Benin City, we are dedicated to setting global standards for premium, high-yield, and delicious palm oil.</p>
                    </div>
                </div>
            </div>

            <div className='col-span-12 md:col-span-5 text-left'>
                <h3 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">The Rico Oil Promise:<br /><span className='text-orange-600'>Pure Quality.</span></h3>
                <p className="text-xl text-gray-800 mb-6 leading-relaxed">Rico Oil isn't just a producer; we are your dedicated local partners with global reach. We are committed to processing and distributing only the finest palm oil, guaranteed to offer superior consistency and flavor.</p>
                <p className="text-xl text-gray-800 leading-relaxed">Whether you are market retailer or an industrial distributor, our triple-filtered oil delivers exceptional value and purity.</p>
            </div>
        </div>
      </section>

      {/* 4. Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {[
            { title: "Production Excellence", desc: "Our process begins with selecting only the healthiest, freshly harvested palm fruits from reliable local farms in Edo State." },
            { title: "Wholesale Solutions", desc: "For large markets, restaurants, and distributors, Rico Oil offers unparalleled bulk supply consistency and competitive pricing." },
            { title: "Global Export", desc: "Ready to meet international demands, we ensure all export-grade Rico Oil meets strict quality and packaging standards." }
          ].map((item, i) => (
            <div key={i} className="p-10 bg-slate-50 border border-orange-100 rounded-2xl shadow-sm hover:shadow-lg transition">
              <h3 className="text-3xl font-extrabold mb-4 text-orange-800 leading-tight">{item.title}</h3>
              <p className="text-gray-700 text-lg leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Contact Section */}
      <section id="contact" className="py-24 text-center bg-orange-600 text-white px-4">
        <h3 className="text-4xl font-extrabold mb-6 tracking-tight">Need a reliable Palm Oil partner in Benin City?</h3>
        <p className="text-2xl mb-12 max-w-2xl mx-auto">We are ready to serve you. Contact us directly on WhatsApp for bulk orders, pricing, or inquiries.</p>
        <div className="bg-white p-10 rounded-2xl max-w-sm mx-auto shadow-2xl text-orange-950">
          <p className="text-2xl font-bold mb-4 text-orange-800">Direct Contact</p>
          
          {/* REMOVED: Visible phone number text as requested. */}
          
          {/* Large, main WhatsApp contact button */}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full bg-green-600 text-white px-6 py-4 rounded-xl text-lg font-bold tracking-wider hover:bg-green-700 flex justify-center items-center gap-3 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.161 5.383 5.547 0 12.165 0c3.208 0 6.221 1.253 8.489 3.521 2.268 2.268 3.52 5.281 3.52 8.489 0 6.651-5.387 12.031-12.006 12.031-2.004 0-3.971-.5-5.727-1.446L0 24zm6.59-3.513c1.654.981 3.23 1.47 4.965 1.47 5.488 0 9.954-4.466 9.954-9.954 0-5.487-4.466-9.953-9.954-9.953-5.487 0-9.953 4.466-9.953 9.953-.001 1.761.503 3.483 1.481 4.98l-1.1 4.02 4.128-1.082zm11.367-7.64c-.303-.151-1.793-.884-2.071-.985-.278-.101-.481-.151-.684.151-.202.303-.784.985-.96 1.187-.177.202-.353.227-.656.076-.303-.151-1.28-.472-2.439-1.506-.901-.804-1.51-1.797-1.813-2.303-.303-.505-.033-.778.219-1.028.226-.226.505-.581.758-.872.253-.291.336-.505.505-.847.168-.341.084-.632-.042-.884-.127-.253-.481-1.187-.684-1.687-.197-.48-.393-.427-.557-.427h-.48c-.177 0-.455.066-.693.303-.238.237-.909.884-.909 2.152 0 1.267.921 2.49 1.048 2.667.127.177 1.813 2.768 4.39 3.882.613.265 1.09.423 1.463.541.616.195 1.176.168 1.619.102.494-.073 1.793-.733 2.046-1.441.253-.708.253-1.314.177-1.441-.076-.126-.278-.202-.581-.353z"/></svg>
                Open WhatsApp
          </a>
        </div>
      </section>

      {/* Footer text has been simplified and moved to layout.tsx */}
    </main>
  );
}