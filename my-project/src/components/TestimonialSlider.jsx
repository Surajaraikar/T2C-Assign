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

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black py-10">
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Navigation Buttons */}
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hidden lg:flex">
          <i className="fas fa-chevron-left"></i>
        </button>

        <div className="flex overflow-hidden">
          {/* Testimonial Cards */}
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide lg:overflow-visible">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[90%] lg:min-w-[30%] bg-blue-600 text-white p-6 rounded-lg shadow-lg"
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
        </div>

        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hidden lg:flex">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default TestimonialCarousel;
