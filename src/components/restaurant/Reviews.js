import React from 'react';

function ReviewCard({ name, rating, review, image, location }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
      <div className="flex items-center mb-6">
        <img 
          src={image} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-lg text-gray-800">{name}</h4>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      <p className="text-gray-600 leading-relaxed italic">"{review}"</p>
    </div>
  );
}

function Reviews() {
  const reviews = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      review: 'Absolutely incredible! The food was outstanding and the service was impeccable. The ambiance made our anniversary dinner truly special. Will definitely be returning!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      location: 'New York, NY'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      review: 'Best restaurant experience I\'ve had in years. Every dish was perfectly prepared and beautifully presented. The staff went above and beyond to make us feel welcome.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      location: 'San Francisco, CA'
    },
    {
      name: 'Emma Williams',
      rating: 5,
      review: 'A hidden gem! The chef\'s special was out of this world. Fresh ingredients, creative flavors, and generous portions. The dessert was the perfect ending to a perfect meal.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      location: 'Boston, MA'
    },
    {
      name: 'David Martinez',
      rating: 5,
      review: 'Outstanding food and exceptional service! The atmosphere is warm and inviting. This has become my go-to place for special occasions and business dinners.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      location: 'Chicago, IL'
    },
    {
      name: 'Lisa Anderson',
      rating: 5,
      review: 'Hands down the best dining experience in the city! The attention to detail is remarkable. From the welcome to the goodbye, everything was perfect. Highly recommended!',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
      location: 'Seattle, WA'
    },
    {
      name: 'James Taylor',
      rating: 5,
      review: 'Exceptional in every way! The menu has something for everyone, and everything we tried was delicious. The wine selection is impressive too. Can\'t wait to come back!',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      location: 'Austin, TX'
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers 
            who have experienced the magic of Rumesh Guest.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Loved your experience? Share it with us!</p>
          <button className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transform hover:scale-105 transition-all shadow-lg">
            Write a Review
          </button>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
