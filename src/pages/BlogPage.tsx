import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import templesImage from "@/assets/blog-temples.jpg";
import riceTerraceImage from "@/assets/blog-rice-terraces.jpg";
import beachesImage from "@/assets/blog-beaches.jpg";
import villaInvestmentImage from "@/assets/blog-villa-investment.jpg";
import cultureImage from "@/assets/blog-culture.jpg";
import cuisineImage from "@/assets/blog-cuisine.jpg";
import wellnessImage from "@/assets/blog-wellness.jpg";

const blogPosts = [
  {
    id: 1,
    title: "The Sacred Temples of Bali: A Spiritual Journey",
    excerpt: "Discover the most breathtaking temples in Bali, from the iconic Tanah Lot to the majestic Besakih Temple, and learn about their rich spiritual significance.",
    image: templesImage,
    author: "Maya Sari",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Culture",
    content: "Bali is home to over 20,000 temples, each with its own unique history and spiritual significance. From the dramatic clifftop setting of Uluwatu Temple to the serene waters surrounding Tanah Lot, these sacred spaces offer visitors a glimpse into the island's deep-rooted Hindu traditions. Whether you're seeking spiritual enlightenment or simply admiring the architectural beauty, Bali's temples provide an unforgettable cultural experience."
  },
  {
    id: 2,
    title: "Investing in Bali Villas: Your Ultimate Guide for 2024",
    excerpt: "Everything you need to know about villa investment opportunities in Bali, from legal requirements to the most promising areas for growth.",
    image: villaInvestmentImage,
    author: "James Anderson",
    date: "February 28, 2024",
    readTime: "7 min read",
    category: "Investment",
    content: "Bali's villa market continues to show strong growth, with areas like Canggu, Uluwatu, and Ubud leading the way. Foreign investors can now own property through various legal structures, making it easier than ever to invest in paradise. With rental yields averaging 8-12% annually and capital appreciation of 15-20% per year, Bali villas represent one of the most attractive investment opportunities in Southeast Asia."
  },
  {
    id: 3,
    title: "The Stunning Rice Terraces of Jatiluwih",
    excerpt: "Explore the UNESCO World Heritage rice terraces that showcase Bali's traditional Subak irrigation system and breathtaking landscapes.",
    image: riceTerraceImage,
    author: "Ketut Wijaya",
    date: "February 20, 2024",
    readTime: "4 min read",
    category: "Nature",
    content: "The Jatiluwih rice terraces represent the pinnacle of Balinese agricultural artistry. This UNESCO World Heritage site showcases the traditional Subak irrigation system that has been used for over 1,000 years. The emerald green terraces cascade down the mountainside, creating a natural amphitheater that changes with the seasons. Best visited during sunrise or sunset, these terraces offer some of the most photographed landscapes in all of Indonesia."
  },
  {
    id: 4,
    title: "Bali's Hidden Beach Gems: Beyond the Tourist Trail",
    excerpt: "Discover secluded beaches and pristine coastlines that offer tranquility away from the crowds, perfect for your next villa vacation.",
    image: beachesImage,
    author: "Sarah Mitchell",
    date: "February 10, 2024",
    readTime: "6 min read",
    category: "Travel",
    content: "While Kuta and Seminyak get all the attention, Bali's hidden beaches offer pure paradise without the crowds. From the black sand beaches of Amed to the pristine white sands of Nusa Penida, these secret spots provide the perfect backdrop for a luxury villa stay. Green Bowl Beach, Bias Tugel, and Atuh Beach are just a few of the spectacular coastlines waiting to be discovered by adventurous travelers seeking authentic Balinese beauty."
  },
  {
    id: 5,
    title: "Traditional Balinese Culture: Festivals and Ceremonies",
    excerpt: "Immerse yourself in the vibrant traditions of Bali through its colorful festivals, ancient ceremonies, and artistic expressions.",
    image: cultureImage,
    author: "Wayan Surya",
    date: "January 25, 2024",
    readTime: "5 min read",
    category: "Culture",
    content: "Bali's cultural calendar is filled with spectacular festivals and ceremonies that bring communities together in celebration. From the elaborate Galungan and Kuningan festivals to the mystical Nyepi (Day of Silence), each ceremony offers insight into the island's deep spiritual traditions. The intricate offerings, traditional dance performances, and colorful processions create unforgettable experiences for visitors who time their stay around these special occasions."
  },
  {
    id: 6,
    title: "A Culinary Journey Through Authentic Balinese Cuisine",
    excerpt: "From street food to fine dining, explore the rich flavors and unique ingredients that make Balinese cuisine a gastronomic adventure.",
    image: cuisineImage,
    author: "Made Artawan",
    date: "January 15, 2024",
    readTime: "4 min read",
    category: "Food",
    content: "Balinese cuisine is a symphony of flavors that reflects the island's rich cultural heritage. From the famous Babi Guling (roast pig) to the aromatic Bebek Betutu (slow-roasted duck), every dish tells a story. Traditional warungs serve authentic flavors passed down through generations, while modern restaurants elevate these classics with contemporary presentations. Don't miss trying Nasi Campur, Sate Plecing, and the heavenly Es Campur for dessert."
  },
  {
    id: 7,
    title: "Wellness and Yoga Retreats: Finding Balance in Bali",
    excerpt: "Discover the transformative power of Bali's wellness scene, from world-class yoga retreats to traditional healing practices in stunning natural settings.",
    image: wellnessImage,
    author: "Ananda Devi",
    date: "January 5, 2024",
    readTime: "5 min read",
    category: "Wellness",
    content: "Bali has become a global destination for wellness seekers, offering everything from luxury spa retreats to authentic healing ceremonies. The island's natural beauty provides the perfect backdrop for yoga practice, meditation, and spiritual renewal. From the wellness centers of Ubud to beachfront yoga sessions in Canggu, Bali offers countless opportunities to reconnect with yourself while surrounded by tropical paradise."
  }
];

const BlogPage = () => {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-tropical">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Discover Bali
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Stories, insights, and guides about the Island of the Gods
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                Featured Article
              </span>
            </div>
            
            <Card className="overflow-hidden border-0 shadow-tropical">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.content}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {featuredPost.author}
                      </span>
                    </div>
                    
                    <Link to={`/blog/${featuredPost.id}`}>
                      <Button variant="outline" className="group">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Latest Stories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our collection of articles about Bali's culture, investment opportunities, and hidden gems
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden border-0 shadow-elegant hover:shadow-tropical transition-all duration-300 hover:-translate-y-1">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary/90 text-white px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                          {post.author}
                        </span>
                      </div>
                      
                      <Link to={`/blog/${post.id}`}>
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground group">
                          Read More
                          <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default BlogPage;