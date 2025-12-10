import React from 'react';

function DishCard({ image, name, description, badge }) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-3 transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        {badge && (
          <div className="absolute top-4 right-4">
            <span className="bg-secondary-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              {badge}
            </span>
          </div>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-sm text-gray-200">{description}</p>
      </div>
    </div>
  );
}

function SpecialDishes() {
  const specials = [
    {
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      name: 'Chef\'s Special Steak',
      description: 'Prime ribeye steak with truffle butter, garlic mashed potatoes, and seasonal vegetables',
      badge: 'Chef\'s Choice'
    },
    {
      image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      name: 'Seafood Platter',
      description: 'Lobster tail, jumbo shrimp, scallops, and fresh oysters with lemon herb butter',
      badge: 'Premium'
    },
    {
      image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80',
      name: 'Gourmet Sushi Platter',
      description: 'Assorted premium sushi and sashimi with wasabi, ginger, and soy sauce',
      badge: 'Popular'
    }
  ];

  return (
    <section id="specials" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            Today's Special Dishes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Indulge in our handpicked selection of signature dishes, 
            crafted by our master chefs using premium ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {specials.map((dish, index) => (
            <DishCard key={index} {...dish} />
          ))}
        </div>

        {/* Features Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-primary-100">Organic Ingredients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5★</div>
              <div className="text-primary-100">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-primary-100">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialDishes;
