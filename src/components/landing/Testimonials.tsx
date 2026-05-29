import {
  Zap,
  UserCheck,
  DollarSign,
  MapPin,
  Star,
  Clock,
  Shield,
  Award,
  ThumbsUp,
  Quote,
  ChevronRight,
  Phone,
  TrendingUp,
  Users,
  CheckCircle2,
  Heart,
} from "lucide-react";
import { useState, useEffect } from "react";

const WhyTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      name: "Ananya Patel",
      role: "Office Manager",
      company: "Tech Solutions Inc.",
      image: "AP",
      content:
        "Fixed our office printers in just 2 hours. The team was extremely professional, punctual, and reliable. They set up 12 printers across our office and provided AMC support. Highly recommended!",
      rating: 5,
      stats: "12 printers fixed",
      time: "2 hours",
    },
    {
      name: "Rajesh Mehta",
      role: "Small Business Owner",
      company: "Mehta Enterprises",
      image: "RM",
      content:
        "Best printer support service I've ever used! They diagnosed the issue remotely in 5 minutes and fixed it within 20. No need to visit any service center. Will definitely use again.",
      rating: 5,
      stats: "3 printers fixed",
      time: "20 min",
    },
    {
      name: "Priya Sharma",
      role: "IT Manager",
      company: "Digital Agency",
      image: "PS",
      content:
        "The annual maintenance contract is a lifesaver. They handle all our printer issues proactively. Response time is always under 2 minutes. Professional and knowledgeable team.",
      rating: 5,
      stats: "AMC Customer",
      time: "1 year",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const stats = [
    {
      value: "18 min",
      label: "Average fix time",
      icon: Clock,
      trend: "+32% faster",
    },
    {
      value: "2,000+",
      label: "Printers fixed",
      icon: TrendingUp,
      trend: "This month",
    },
    {
      value: "4.9 ★",
      label: "Average rating",
      icon: Star,
      trend: "From 400+ reviews",
    },
    {
      value: "24 / 7",
      label: "Always available",
      icon: Shield,
      trend: "365 days",
    },
  ];

  const whyUsFeatures = [
    {
      icon: Zap,
      title: "Same-Day Fast Service",
      desc: "Most issues resolved within 20 minutes — no waiting around.",
      proof: "Avg. fix time: 18 minutes",
      color: "orange",
    },
    {
      icon: UserCheck,
      title: "Certified Experts",
      desc: "Specialized in HP, Canon, Epson, Brother & all major brands.",
      proof: "All brands · All models",
      color: "blue",
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      desc: "No hidden fees. You only pay if we fix your printer.",
      proof: "No fix = No fee",
      color: "green",
    },
    {
      icon: MapPin,
      title: "Flexible Support",
      desc: "Remote assistance or on-site visit — whatever works best for you.",
      proof: "Available 24/7",
      color: "purple",
    },
  ];

  const reviewStats = [
    { value: "400+", label: "Verified Reviews", icon: Users },
    { value: "4.9", label: "Average Rating", icon: Star, suffix: "★" },
    { value: "97%", label: "Resolution Rate", icon: CheckCircle2 },
    { value: "2,000+", label: "Happy Customers", icon: Heart },
  ];

  return (
    <>
      {/* ================= WHY SECTION ================= */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24 px-4 md:px-10 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative z-10 max-w-[1400px] mx-auto">
          {/* HEADER */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide">
                WHY CHOOSE US
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              The Fastest, Most{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Trusted
              </span>{" "}
              Printer Support
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Real numbers. Real results. Backed by thousands of satisfied
              customers.
            </p>
          </div>

          {/* STATS BAR - Premium Design */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {stats.map((stat, i) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={i}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-transparent rounded-2xl transition-all duration-300" />
                  <div className="flex items-center justify-between mb-3">
                    <IconComponent className="w-8 h-8 text-orange-400" />
                    <span className="text-xs text-green-400 bg-green-500/20 px-2 py-1 rounded-full">
                      {stat.trend}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* FEATURES CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUsFeatures.map((feature, i) => {
              const IconComponent = feature.icon;
              const colorClasses = {
                orange:
                  "from-orange-500/20 to-orange-600/20 border-orange-500/30",
                blue: "from-blue-500/20 to-blue-600/20 border-blue-500/30",
                green: "from-green-500/20 to-green-600/20 border-green-500/30",
                purple:
                  "from-purple-500/20 to-purple-600/20 border-purple-500/30",
              };

              return (
                <div
                  key={i}
                  className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${colorClasses[feature.color]} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-white font-bold text-lg mb-2">
                      {feature.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {feature.desc}
                    </p>

                    <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-3 py-1">
                      <Zap className="w-3 h-3 text-orange-400" />
                      <span className="text-orange-400 text-xs font-medium">
                        {feature.proof}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-24 px-4 md:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,107,26,0.03),transparent_50%)]" />

        <div className="relative z-10 max-w-[1400px] mx-auto">
          {/* HEADER */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-orange-500" />
              <span className="text-sm font-semibold tracking-wide">
                REAL STORIES
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
              Real Customers.{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Real Results.
              </span>
            </h2>

            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join over 2,000 satisfied customers who got their printers fixed
              fast
            </p>

            {/* Rating Badge */}
            <div className="inline-flex items-center gap-4 bg-white shadow-xl border border-gray-200 px-6 py-3 rounded-full mt-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="font-bold text-lg text-gray-900">4.9</span>
              <span className="text-gray-500 text-sm">out of 5</span>
              <div className="w-px h-6 bg-gray-300" />
              <span className="text-gray-600 text-sm">
                Based on 400+ reviews
              </span>
            </div>
          </div>

          {/* FEATURED TESTIMONIAL - Auto-rotating */}
          <div className="mb-12">
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,107,26,0.15),transparent_70%)]" />

              <div
                className={`relative p-8 md:p-10 transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"}`}
              >
                <Quote className="absolute top-8 right-8 w-16 h-16 text-white/5" />

                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-xl">
                      {testimonials[activeTestimonial].image}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      {[...Array(testimonials[activeTestimonial].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                          />
                        ),
                      )}
                    </div>

                    <p className="text-white text-lg md:text-xl leading-relaxed mb-6 italic">
                      "{testimonials[activeTestimonial].content}"
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                      <div>
                        <p className="text-white font-bold text-lg">
                          {testimonials[activeTestimonial].name}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {testimonials[activeTestimonial].role} ·{" "}
                          {testimonials[activeTestimonial].company}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs">
                          {testimonials[activeTestimonial].stats}
                        </span>
                        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs">
                          Fixed in {testimonials[activeTestimonial].time}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dots Navigation */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsAnimating(true);
                      setTimeout(() => {
                        setActiveTestimonial(idx);
                        setIsAnimating(false);
                      }, 300);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeTestimonial === idx
                        ? "w-8 bg-orange-500"
                        : "w-2 bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* TESTIMONIALS GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                name: "Vikram Singh",
                role: "IT Director",
                content:
                  "Set up printers across 3 offices in one day. Highly recommend their AMC services.",
                rating: 5,
                time: "Same day",
              },
              {
                name: "Neha Gupta",
                role: "Business Owner",
                content:
                  "Annual maintenance saves us huge hassle. They're always just a call away.",
                rating: 5,
                time: "1 hour",
              },
              {
                name: "Amit Kumar",
                role: "Freelancer",
                content:
                  "Quick cartridge support and guidance. Saved me money on replacements.",
                rating: 4,
                time: "15 min",
              },
              {
                name: "Sneha Reddy",
                role: "Team Lead",
                content:
                  "Driver issue fixed in under 30 minutes. Professional and knowledgeable team.",
                rating: 5,
                time: "30 min",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="border-t border-gray-100 pt-3">
                  <p className="font-semibold text-gray-900 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                  <div className="mt-2 inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs">
                    <Clock className="w-3 h-3" />
                    <span>Fixed in {testimonial.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* REVIEW STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {reviewStats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-xl p-4 text-center"
                >
                  <IconComponent className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                  <div className="text-2xl font-black text-gray-900">
                    {stat.value}
                    {stat.suffix || ""}
                  </div>
                  <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* FINAL CTA */}
          <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_70%)]" />

            <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Join 2,000+ satisfied customers today
                </h3>
                <p className="text-orange-100 text-lg">
                  No fix, no fee guarantee — only pay when we fix your printer
                </p>
                <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span className="text-orange-100 text-sm">
                      24/7 Support
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span className="text-orange-100 text-sm">
                      Certified Experts
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyTestimonials;
