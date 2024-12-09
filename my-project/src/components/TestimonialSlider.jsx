import React, { useRef } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function TestimonialCarousel() {
  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla velit, maximus sit amet suscipit in, fermentum id est. Suspendisse consequat ornare elit.",
      name: "John Doe",
      title: "CEO, ExampleCorp",
      image: "https://placehold.co/50x50?text=John",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla velit, maximus sit amet suscipit in, fermentum id est. Suspendisse consequat ornare elit.",
      name: "John Doe",
      title: "CEO, ExampleCorp",
      image: "https://placehold.co/50x50?text=John",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla velit, maximus sit amet suscipit in, fermentum id est. Suspendisse consequat ornare elit.",
      name: "John Doe",
      title: "CEO, ExampleCorp",
      image: "https://placehold.co/50x50?text=John",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla velit, maximus sit amet suscipit in, fermentum id est. Suspendisse consequat ornare elit.",
      name: "Jane Smith",
      title: "Marketing Head, SampleInc",
      image: "https://placehold.co/50x50?text=Jane",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla velit, maximus sit amet suscipit in, fermentum id est. Suspendisse consequat ornare elit.",
      name: "Emily Johnson",
      title: "CTO, TechCorp",
      image: "https://placehold.co/50x50?text=Emily",
    },
  ];

  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy({
        left: swiperRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy({
        left: -swiperRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black py-0 relative ">
      <h1 className="text-4xl lg:text-6xl font-semibold bg-gradient-to-r from-blue-100 to-blue-900 bg-clip-text text-transparent pb-6 pt-20 text-center">
        Testimonials
      </h1>
      <div className="relative max-w-7xl mx-auto px-4 ">
        {/* Testimonial Container */}
        <div
          ref={swiperRef}
          className="flex overflow-x-auto space-x-4 scroll-smooth snap-x snap-mandatory no-scrollbar p-20"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[110%] lg:min-w-[32%] bg-gradient-to-t from-purple-900  to-blue-950 text-white p-6 rounded-lg shadow-lg snap-center"
            >
              <p className="italic mb-4">“{testimonial.text}”</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={`Photo of ${testimonial.name}`}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-2  top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md z-10"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md z-10"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default TestimonialCarousel;
