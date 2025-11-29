// frontend/src/pages/Landing.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Phone,
  BookOpen,
  Users,
  FileText,
  Heart,
  Clock,
  Lock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-purple-600">
              2koSafe Haven
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/emergency"
                className="text-gray-700 hover:text-red-600 transition-colors font-medium"
              >
                Emergency Help
              </Link>
              <Link
                to="/safety-planning"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Safety Planning
              </Link>
              <Link
                to="/resources"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Resources
              </Link>
              <Link
                to="/support-community"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Community
              </Link>
              <Link
                to="/abuse-types"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Learn
              </Link>
              <Link
                to="/journal"
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                Journal
              </Link>
              <Link
                to="/login"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors font-medium"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden text-white min-h-[600px] lg:min-h-[700px] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-800/85 to-pink-900/90"></div>

        <div className="relative container mx-auto px-6 py-20 lg:py-32 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              You Are Not Alone
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              A safe, confidential platform supporting survivors of gender-based
              violence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/emergency"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
              >
                <Phone className="inline-block w-5 h-5 mr-2" />
                Emergency Help
              </Link>
              <Link
                to="/login"
                className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Safety Notice */}
      <section className="bg-yellow-50 border-y border-yellow-200">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-start gap-4 max-w-4xl mx-auto">
            <Shield className="w-6 h-6 text-yellow-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-gray-900 mb-2">Your Privacy Matters</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                This platform uses encryption and does not track your browsing.
                Press ESC or click Quick Exit to leave immediately. Your
                activity here is completely confidential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6 py-16 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
            How We Can Help
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Access support, resources, and community from anywhere, at any time
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Emergency Support */}
          <Link
            to="/emergency"
            className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-red-200"
          >
            <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-7 h-7 text-red-600" />
            </div>
            <h3 className="text-xl mb-3 text-gray-900">Emergency Resources</h3>
            <p className="text-gray-600 mb-4">
              24/7 crisis hotlines, emergency contacts, and immediate safety
              planning tools
            </p>
            <span className="text-red-600 group-hover:underline">
              Access Now →
            </span>
          </Link>

          {/* Safety Planning */}
          <Link
            to="/safety-planning"
            className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-purple-200"
          >
            <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Shield className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-xl mb-3 text-gray-900">Safety Planning</h3>
            <p className="text-gray-600 mb-4">
              Create a personalized safety plan with step-by-step guidance and
              checklists
            </p>
            <span className="text-purple-600 group-hover:underline">
              Start Planning →
            </span>
          </Link>

          {/* Learn About Abuse */}
          <Link
            to="/abuse-types"
            className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-blue-200"
          >
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl mb-3 text-gray-900">Learn About Abuse</h3>
            <p className="text-gray-600 mb-4">
              Understand different types of abuse, warning signs, and your legal
              rights
            </p>
            <span className="text-blue-600 group-hover:underline">
              Learn More →
            </span>
          </Link>

          {/* Community */}
          <Link
            to="/support-community"
            className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-pink-200"
          >
            <div className="w-14 h-14 bg-pink-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Users className="w-7 h-7 text-pink-600" />
            </div>
            <h3 className="text-xl mb-3 text-gray-900">Community Support</h3>
            <p className="text-gray-600 mb-4">
              Connect with others who understand, share experiences, and find
              solidarity
            </p>
            <span className="text-pink-600 group-hover:underline">
              Join Community →
            </span>
          </Link>

          {/* Resources */}
          <Link
            to="/resources"
            className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-green-200"
          >
            <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FileText className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-xl mb-3 text-gray-900">Resources Directory</h3>
            <p className="text-gray-600 mb-4">
              Find local shelters, legal aid, counseling services, and support
              organizations
            </p>
            <span className="text-green-600 group-hover:underline">
              Browse Resources →
            </span>
          </Link>

          {/* Journal */}
          <Link
            to="/journal"
            className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-indigo-200"
          >
            <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Heart className="w-7 h-7 text-indigo-600" />
            </div>
            <h3 className="text-xl mb-3 text-gray-900">Private Journal</h3>
            <p className="text-gray-600 mb-4">
              Document your journey, track your feelings, and monitor your
              healing progress
            </p>
            <span className="text-indigo-600 group-hover:underline">
              Start Writing →
            </span>
          </Link>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Making a Difference</h2>
            <p className="text-purple-100 text-lg">
              Together, we're creating safer communities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-5xl mb-2">10K+</div>
              <div className="text-purple-100">Survivors Supported</div>
            </div>
            <div>
              <div className="text-5xl mb-2">24/7</div>
              <div className="text-purple-100">Available Support</div>
            </div>
            <div>
              <div className="text-5xl mb-2">500+</div>
              <div className="text-purple-100">Local Resources</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="container mx-auto px-6 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              Why Choose Our Platform
            </h2>
            <p className="text-gray-600 text-lg">
              Your safety and privacy are our top priorities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Lock className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg mb-2 text-gray-900">
                  End-to-End Encryption
                </h3>
                <p className="text-gray-600">
                  All your data is encrypted. We never share your information
                  without your explicit consent.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg mb-2 text-gray-900">
                  Available Anytime
                </h3>
                <p className="text-gray-600">
                  Access support resources 24/7, whenever you need them, from
                  anywhere.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg mb-2 text-gray-900">Expert Guidance</h3>
                <p className="text-gray-600">
                  Resources created in collaboration with survivors, counselors,
                  and legal experts.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg mb-2 text-gray-900">Anonymous Access</h3>
                <p className="text-gray-600">
                  Use the platform without creating an account. No tracking, no
                  records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Ready to Take the First Step?
          </h2>
          <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
            Whether you're seeking support for yourself or someone else, we're
            here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/login"
              className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
            >
              Get Started Now
            </Link>
            <Link
              to="/abuse-types"
              className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-lg text-lg transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/emergency"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    Emergency Help
                  </Link>
                </li>
                <li>
                  <Link
                    to="/safety-planning"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    Safety Planning
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resources"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/support-community"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    to="/abuse-types"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    Learn About Abuse
                  </Link>
                </li>
                <li>
                  <Link
                    to="/journal"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    Journal
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">Crisis Hotlines</h4>
              <ul className="space-y-2 text-sm text-white">
                <li>National: 1-800-799-7233</li>
                <li>Crisis Text Line: Text START to 741741</li>
                <li>RAINN: 1-800-656-4673</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mb-4">About</h4>
              <p className="text-sm text-white">
                A confidential platform dedicated to supporting survivors of
                gender-based violence.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p className="text-white">
              &copy; 2024 2koSafe Haven. All rights reserved.
            </p>
            <p className="mt-2 text-white">
              If you're in immediate danger, please call emergency services
              (911).
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
