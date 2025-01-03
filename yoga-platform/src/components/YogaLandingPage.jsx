import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaRegUserCircle } from "react-icons/fa";
import { WiDayCloudy } from "react-icons/wi";
import { FaQuoteLeft } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const YogaLandingPage = () => {
  const stats = [
    { number: "190+", label: "Courses" },
    { number: "1,000+", label: "On-Demand Classes" },
    { number: "100K", label: "Members" },
  ];

  const features = [
    {
      title: "Yoga Teacher Training",
      description:
        "Become certified yoga teacher and transform through our accredited program",
    },
    {
      title: "Yoga Classes",
      description:
        "Join intensive yoga sessions of all levels with expert guidance and special focus",
    },
    {
      title: "Calm Mind",
      description:
        "Experience tranquility with our calming meditation and mindfulness programs",
    },
    {
      title: "Pranayama & Meditation",
      description:
        "Explore the power of breath and embrace your spiritual wellness journey",
    },
  ];

  const testimonials = [
    {
      text: "Bodsphere has made Yoga accessible and affordable for everyone. So grateful!",
      author: "Priyanka Maheshwar",
    },
    {
      text: "Super happy to be a part of the Bodsphere Revolution!",
      author: "Katherine Smith",
    },
    {
      text: "Bodsphere's Platform is a gift for this World",
      author: "Deepa Rodriguez",
    },
    {
      text: "Bodsphere Accreditation, I am... So powerful!",
      author: "Susana Fernandez",
    },
  ];

  const allInstructors = [
    { name: "Preetika Bhardwajat", image: "/api/placeholder/300/200" },
    { name: "Samarpana Bhardwajat", image: "/api/placeholder/300/200" },
    { name: "Diana", image: "/api/placeholder/300/200" },
    { name: "Hirukashi", image: "/api/placeholder/300/200" },
    { name: "Sarah Johnson", image: "/api/placeholder/300/200" },
    { name: "Michael Chang", image: "/api/placeholder/300/200" },
    { name: "Emma Williams", image: "/api/placeholder/300/200" },
    { name: "David Kumar", image: "/api/placeholder/300/200" },
    { name: "Maria Garcia", image: "/api/placeholder/300/200" },
    { name: "John Smith", image: "/api/placeholder/300/200" },
    { name: "Aisha Patel", image: "/api/placeholder/300/200" },
    { name: "Lucas Chen", image: "/api/placeholder/300/200" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const instructorsPerPage = 4;

  const handleNext = () => {
    setStartIndex((prevIndex) => {
      const nextIndex = prevIndex + instructorsPerPage;
      return nextIndex >= allInstructors.length ? 0 : nextIndex;
    });
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => {
      const prevIndexValue = prevIndex - instructorsPerPage;
      return prevIndexValue < 0
        ? allInstructors.length - instructorsPerPage
        : prevIndexValue;
    });
  };

  // Get current visible instructors
  const visibleInstructors = allInstructors.slice(
    startIndex,
    startIndex + instructorsPerPage
  );

  const InstructorsSection = () => (
    <div id="instructors" className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-4">
        Meet Your Instructors
      </h2>
      <p className="text-center text-gray-600 mb-12">
        We work with some of the best yoga instructors to ensure you find your
        best!
      </p>
      <div className="relative">
        <div className="flex space-x-6 transition-all duration-300 ease-in-out">
          {visibleInstructors.map((instructor, index) => (
            <div key={`${instructor.name}-${index}`} className="w-72">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-lg font-semibold">{instructor.name}</p>
            </div>
          ))}
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Previous instructors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          aria-label="Next instructors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Pagination indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({
            length: Math.ceil(allInstructors.length / instructorsPerPage),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setStartIndex(index * instructorsPerPage)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                Math.floor(startIndex / instructorsPerPage) === index
                  ? "bg-gray-800 w-4"
                  : "bg-gray-300"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <nav className="p-4 bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-semibold">
            <span style={{fontStyle: 'italic'}} className="text-orange-500 text-xl font-semibold ">BOD</span>
            <span className="text-black text-xl font-semibold">SPHERE</span>
          </div>
          <div className="flex items-center space-x-14 justify-end">
            <a href="#" className="text-gray-600">
              Home
            </a>
            <a href="#" className="text-gray-600">
              Categories
            </a>
            <a href="#" className="text-gray-600">
              Notification
            </a>
            <a href="#" className="text-gray-600">
              AI Music
            </a>
            <div className="flex items-center space-x-2">
              <div className="mr-6">
                <WiDayCloudy className="w-8 h-8 cursor-pointer" />
              </div>
              <div>
                <FaRegUserCircle className="w-8 h-8 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <div className="relative h-[500px]">
        <img
          src="/yoga.jpg"
          alt="Yoga banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
            <h1 className="text-white text-5xl font-bold mb-4">
              Welcome to
              <br />
              the Yogic World
            </h1>
            <p className="text-white text-lg">
              Join a Transformational Quest to
              <br />
              Meditation, Breathwork & Music
              <br />
              Pranayama & more
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold mb-1">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Discover Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-4">
          Discover Your Yogic Path
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Join our community and transform your yoga practice today
        </p>
        <div className="grid grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Accreditation Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-4">
              Get Internationally Accredited by Bodsphere, from the comfort of
              your home
            </h2>
            <p className="text-gray-600 mb-8">
              Join the Bodsphere Community and take the first steps towards
              joining the World&apos;s biggest Community of Yoga Schools and
              Teachers that represent high quality, safe, affordable, accessible
              and equitable Yoga.
            </p>
            <button className="bg-black text-white px-8 py-2 rounded-full">
              Get Accredited
            </button>
          </div>
          <div>
            <img
              src="/accredition.png"
              alt="Mobile app preview"
              className="w-96"
            />
          </div>
        </div>
      </div>

      {/* Instructors Section */}
      <InstructorsSection />

      {/* Yoga Banner */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center">
          <img src="/pose.jpg" alt="Yoga pose" className="w-1/2 rounded-lg" />
          <div className="w-1/3">
            <h2 className="text-3xl font-bold mb-4">Yoga Like Never Before</h2>
            <p className="text-gray-600 mb-8">
              Becoming a Yoga Teacher has never been so easy. You can even
              download and access the courses offline, and study when you want
              them.
            </p>
            <div className="flex space-x-4">
              <img src="/app_store.png" alt="App Store" className="h-10 cursor-pointer" />
              <img src="/play_store.png" alt="Play Store" className="h-10 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-4 gap-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              <p className="text-gray-600 text-sm mb-4">
                <FaQuoteLeft className="text-4xl text-gray-500" />
                {testimonial.text}
              </p>
              <p className="text-sm font-semibold">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Access Section */}
      <div className="bg-rose-400 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold mb-6">
            Get unlimited access to everything
          </h3>
          <ul className="space-y-2 mb-8">
            <li>• 50+ Hrs Yoga Online Teacher Training</li>
            <li>• 100+ Hrs Progressive Hatha Yoga</li>
            <li>• 200+ Hrs Yoga Teacher Training</li>
            <li>
              • Become Certified Yoga Teacher from the comfort of your home
            </li>
            <li>
              • Lifetime Access to teachings on Ayurveda, Anatomy & Physiology
              etc.
            </li>
            <li>• Unlimited Yoga Classes, Meditation, Pranayama & Music</li>
            <li>• Free Accreditation by Bodsphere to teach Yoga globally</li>
          </ul>
        </div>
      </div>

      {/* Download Section */}
      <div className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Download the app</h2>
              <p className="mb-6">
                Get unlimited access to Yoga Teacher Training, Yoga Classes,
                Meditation and Pranayamic Yoga. Download now!
              </p>
              <div className="flex space-x-4">
                <img src="/app_store.png" alt="App Store" className="h-8 cursor-pointer" />
                <img src="/play_store.png" alt="Play Store" className="h-8 cursor-pointer" />
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <img src="/preview.png" alt="Preview" className="w-64" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Download the Bodsphere App</span>
              <img src="/app_store.png" alt="App Store" className="h-8 cursor-pointer" />
              <img src="/play_store.png" alt="Play Store" className="h-8 cursor-pointer" />
            </div>
            <div className="flex space-x-6 text-gray-600">
              <a href="#">FAQ</a>
              <a href="#">Contact Us</a>
              <div className="flex items-center space-x-2">
                <span>Follow Bodsphere</span>
                <div className="flex space-x-2">
                  <FaFacebook className="w-6 h-6 text-blue-600 cursor-pointer" />
                  <FaTwitter className="w-6 h-6 text-blue-400 cursor-pointer" />
                  <FaYoutube className="w-6 h-6 text-red-600 cursor-pointer" />
                  <FaLinkedin className="w-6 h-6 text-blue-600 cursor-pointer" />
                  <FaInstagram className="w-6 h-6 text-purple-700 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-600 text-sm mt-8">
            © 2024 Bodsphere. All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default YogaLandingPage;
