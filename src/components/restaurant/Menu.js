import React from 'react';

function MenuCard({ image, name, description, price, category }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800">{name}</h3>
          <span className="text-primary-600 font-bold text-xl">${price}</span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        <button className="mt-4 w-full bg-primary-50 text-primary-600 py-2 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors">
          Add to Order
        </button>
      </div>
    </div>
  );
}

function Menu() {
  const menuItems = [
    {
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
      name: 'Garden Fresh Salad',
      description: 'Crisp mixed greens with seasonal vegetables, cherry tomatoes, and house vinaigrette',
      price: '12.99',
      category: 'Appetizer'
    },
    {
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1481&q=80',
      name: 'Margherita Pizza',
      description: 'Classic Italian pizza with fresh mozzarella, basil, and our signature tomato sauce',
      price: '18.99',
      category: 'Main Course'
    },
    {
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      name: 'Grilled Salmon',
      description: 'Atlantic salmon grilled to perfection, served with roasted vegetables and lemon butter',
      price: '28.99',
      category: 'Seafood'
    },
    {
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      name: 'Beef Burger Deluxe',
      description: 'Angus beef patty with cheese, lettuce, tomato, and our special sauce on brioche bun',
      price: '16.99',
      category: 'Main Course'
    },
    {
      image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      name: 'Creamy Pasta Alfredo',
      description: 'Fresh fettuccine in rich parmesan cream sauce with grilled chicken and herbs',
      price: '22.99',
      category: 'Pasta'
    },
    {
      image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80',
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with molten center, served with vanilla ice cream',
      price: '9.99',
      category: 'Dessert'
    },
    {
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80',
      name: 'Thai Chicken Curry',
      description: 'Tender chicken in aromatic coconut curry with jasmine rice and vegetables',
      price: '19.99',
      category: 'Asian Fusion'
    },
    {
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      name: 'Fresh Fruit Smoothie',
      description: 'Blend of tropical fruits, yogurt, and honey - refreshing and healthy',
      price: '7.99',
      category: 'Beverages'
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of delicious dishes, 
            each prepared with the finest ingredients and utmost care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <MenuCard key={index} {...item} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transform hover:scale-105 transition-all shadow-lg">
            View Full Menu (PDF)
          </button>
        </div>
      </div>
    </section>
  );
}

export default Menu;
