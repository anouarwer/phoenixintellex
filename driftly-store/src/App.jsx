import React, { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei'
import { motion } from 'framer-motion'
import { ShoppingCart, Star, PawPrint, Truck, Shield, Leaf, ChevronRight, Menu, X } from 'lucide-react'
import * as THREE from 'three'

// 3D Bowl Component
function SlowFeederBowl({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current && !hovered) {
      meshRef.current.rotation.y += 0.005
    }
  })

  return (
    <group position={position} rotation={rotation}>
      {/* Main Bowl Body */}
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        castShadow
        receiveShadow
      >
        <torusGeometry args={[2, 0.8, 16, 32]} />
        <meshStandardMaterial
          color={hovered ? '#4ECDC4' : '#FF6B6B'}
          roughness={0.3}
          metalness={0.1}
        />
      </mesh>

      {/* Inner Maze Structure */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <cylinderGeometry args={[1.5, 1.5, 0.3, 32]} />
        <meshStandardMaterial color="#FFE66D" roughness={0.4} />
      </mesh>

      {/* Maze Walls */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <mesh
          key={i}
          position={[
            Math.cos((angle * Math.PI) / 180) * 0.8,
            0.3,
            Math.sin((angle * Math.PI) / 180) * 0.8,
          ]}
          rotation={[0, (angle * Math.PI) / 180, 0]}
          castShadow
        >
          <boxGeometry args={[0.2, 0.5, 1]} />
          <meshStandardMaterial color="#FFE66D" roughness={0.4} />
        </mesh>
      ))}

      {/* Base */}
      <mesh position={[0, -0.5, 0]} receiveShadow>
        <cylinderGeometry args={[2.2, 2.4, 0.3, 32]} />
        <meshStandardMaterial color="#2C3E50" roughness={0.6} />
      </mesh>
    </group>
  )
}

// Product Data
const products = [
  {
    id: 1,
    name: 'Driftly Classic',
    description: 'Perfect for small to medium dogs',
    price: 29.99,
    rating: 4.8,
    reviews: 324,
    sizes: ['Small', 'Medium'],
    colors: ['#FF6B6B', '#4ECDC4', '#FFE66D'],
  },
  {
    id: 2,
    name: 'Driftly Pro',
    description: 'Advanced maze for fast eaters',
    price: 39.99,
    rating: 4.9,
    reviews: 512,
    sizes: ['Medium', 'Large'],
    colors: ['#FF6B6B', '#4ECDC4', '#2C3E50'],
  },
  {
    id: 3,
    name: 'Driftly Max',
    description: 'Extra large for big breeds',
    price: 49.99,
    rating: 4.7,
    reviews: 198,
    sizes: ['Large', 'X-Large'],
    colors: ['#4ECDC4', '#2C3E50', '#95A5A6'],
  },
]

// Features Data
const features = [
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Made from sustainable, non-toxic materials',
  },
  {
    icon: Shield,
    title: 'Anti-Slip Base',
    description: 'Stays in place during mealtime',
  },
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'On all orders over $50',
  },
  {
    icon: PawPrint,
    title: 'Vet Recommended',
    description: 'Promotes healthy eating habits',
  },
]

// Header Component
function Header({ cartCount }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Driftly" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#products" className="text-gray-700 hover:text-purple-600 transition-colors">
              Products
            </a>
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors">
              Features
            </a>
            <a href="#reviews" className="text-gray-700 hover:text-purple-600 transition-colors">
              Reviews
            </a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-700 hover:text-purple-600 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden p-2 text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            <nav className="flex flex-col space-y-4">
              <a href="#products" className="text-gray-700 hover:text-purple-600 transition-colors">
                Products
              </a>
              <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors">
                Features
              </a>
              <a href="#reviews" className="text-gray-700 hover:text-purple-600 transition-colors">
                Reviews
              </a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">
                Contact
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

// Hero Section with 3D
function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20">
      <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Slow Down Mealtime
            <br />
            <span className="text-yellow-300">Speed Up Life</span>
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Driftly's innovative slow feeder bowls promote healthier eating habits,
            reduce bloating, and make mealtime fun for dogs of all sizes.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105 inline-flex items-center"
            >
              Shop Now <ChevronRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#features"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-yellow-300">10K+</div>
              <div className="text-white/80">Happy Dogs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-300">4.8★</div>
              <div className="text-white/80">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-300">100%</div>
              <div className="text-white/80">Eco-Friendly</div>
            </div>
          </div>
        </motion.div>

        {/* 3D Model */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-[500px] bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl"
        >
          <Canvas>
            <PerspectiveCamera makeDefault position={[5, 3, 5]} />
            <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={0.5} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
            <Environment preset="city" />
            <SlowFeederBowl position={[0, 0, 0]} />
            <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={2} />
          </Canvas>
        </motion.div>
      </div>
    </section>
  )
}

// Features Section
function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose Driftly?
          </h2>
          <p className="text-xl text-gray-600">
            Designed by vets, loved by dogs worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-purple-600 rounded-full flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Products Section
function ProductsSection({ addToCart }) {
  return (
    <section id="products" className="py-20 bg-gradient-to-br from-purple-600 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Collection
          </h2>
          <p className="text-xl text-white/90">
            Find the perfect bowl for your furry friend
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all"
            >
              {/* Product Image Placeholder */}
              <div className="h-64 bg-gradient-to-br from-yellow-200 to-orange-200 flex items-center justify-center">
                <PawPrint className="w-32 h-32 text-white/30" />
              </div>

              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600 text-sm">
                    ({product.reviews} reviews)
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                    >
                      {size}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-purple-600">
                    ${product.price}
                  </div>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-all transform hover:scale-105"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Reviews Section
function ReviewsSection() {
  const reviews = [
    {
      name: 'Sarah M.',
      dog: 'Golden Retriever',
      text: 'My dog used to gulp down food in seconds. With Driftly, mealtime is now a fun challenge!',
      rating: 5,
    },
    {
      name: 'Mike T.',
      dog: 'French Bulldog',
      text: 'The anti-slip base is amazing. No more chasing the bowl around the kitchen!',
      rating: 5,
    },
    {
      name: 'Emma L.',
      dog: 'German Shepherd',
      text: 'Finally found a bowl that can handle my big boy\'s enthusiasm. Highly recommend!',
      rating: 5,
    },
  ]

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Pet Parents Say
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of happy dogs and their owners
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{review.text}"</p>
              <div>
                <div className="font-semibold text-gray-800">{review.name}</div>
                <div className="text-gray-600 text-sm">{review.dog}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-400">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Mealtime?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join over 10,000 happy dogs who enjoy healthier, slower meals with Driftly.
          </p>
          <a
            href="#products"
            className="inline-block bg-white text-orange-500 px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-200 transition-all transform hover:scale-105 shadow-xl"
          >
            Get Your Driftly Bowl Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img src="/logo.svg" alt="Driftly" className="h-12 w-auto mb-4" />
            <p className="text-gray-400">
              Making mealtime healthier and more fun for dogs worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>hello@driftly.com</li>
              <li>1-800-DRIFTLY</li>
              <li>Mon-Fri: 9am-6pm EST</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Driftly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
function App() {
  const [cartCount, setCartCount] = useState(0)

  const addToCart = (product) => {
    setCartCount(cartCount + 1)
    // In a real app, you'd add to cart state/context
    alert(`${product.name} added to cart!`)
  }

  return (
    <div className="min-h-screen">
      <Header cartCount={cartCount} />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductsSection addToCart={addToCart} />
        <ReviewsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
