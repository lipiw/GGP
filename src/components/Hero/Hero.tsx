import React from 'react';
import { Carousel } from './Carousel';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&q=80&w=1920',
    title: 'O Futuro das Finanças é Digital',
    description: 'Explore o mundo das criptomoedas com segurança e confiança',
  },
  {
    image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&q=80&w=1920',
    title: 'Invista no Amanhã',
    description: 'Diversifique seu portfólio com as principais criptomoedas do mercado',
  },
  {
    image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&q=80&w=1920',
    title: 'Tecnologia Blockchain',
    description: 'Segurança e transparência em todas as suas transações',
  },
];

export function Hero() {
  return (
    <section className="relative h-screen">
      <Carousel slides={slides}>
        {(slide) => (
          <div className="relative h-screen">
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
            
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
                <div className="max-w-3xl">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-xl text-gray-200 mb-8">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Carousel>
    </section>
  );
}