import React from "react";

const Testimonial = ({ testimonial }) => {
  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg my-5">
      <div className="flex items-center">
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300">
          <img
            src={testimonial.image}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="ml-4">
          <h2 className="text-lg font-semibold">{testimonial.name}</h2>
          <p className="text-gray-600">{testimonial.title}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-700">{testimonial.message}</p>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Abdul",
      title: "WOW Participant",
      image: "https://via.placeholder.com/150",
      message:
        "The WOW programme has changed my life. I have learned new skills and now have a stable job.",
    },
    {
      name: "Jane Kinyo",
      title: "WOW Participant",
      image: "https://via.placeholder.com/150",
      message:
        "Thanks to the WOW programme, I have found a new passion in catering and now run my own small business.",
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Testimonials
      </h1>
      <div className="mt-6 space-y-6">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
