import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import templesImage from "@/assets/blog-temples.jpg";
import riceTerraceImage from "@/assets/blog-rice-terraces.jpg";
import beachesImage from "@/assets/blog-beaches.jpg";
import villaInvestmentImage from "@/assets/blog-villa-investment.jpg";
import cultureImage from "@/assets/blog-culture.jpg";
import cuisineImage from "@/assets/blog-cuisine.jpg";
import wellnessImage from "@/assets/blog-wellness.jpg";

const blogPosts = {
  1: {
    id: 1,
    title: "The Sacred Temples of Bali: A Spiritual Journey",
    image: templesImage,
    author: "Maya Sari",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Culture",
    content: `Bali is home to over 20,000 temples, each with its own unique history and spiritual significance. From the dramatic clifftop setting of Uluwatu Temple to the serene waters surrounding Tanah Lot, these sacred spaces offer visitors a glimpse into the island's deep-rooted Hindu traditions.

    1. Uluwatu Temple: Perched on the Edge of Heaven
    
    Standing majestically atop 230-foot cliffs on the Bukit Peninsula, Uluwatu Temple is one of Bali's most iconic spiritual landmarks. Dating back over 1,000 years, this sea temple offers breathtaking sunset views and hosts the famous **Kecak fire dance** performances every evening.
    
    The temple's architecture represents the pinnacle of Balinese craftsmanship, with intricate stone carvings and traditional gates that frame the endless ocean beyond. Visitors must dress respectfully and be mindful of the resident monkeys that call this sacred place home.
    
    2. Tanah Lot: Where Land Meets Sea
    
    Perhaps no temple in Bali is more photographed than **Tanah Lot**. Built on a rocky outcrop just offshore, this 16th-century temple becomes surrounded by crashing waves during high tide, creating a mystical atmosphere that has captivated visitors for centuries.
    
    According to legend, the temple was built by the Hindu priest **Nirartha** and is protected by sea snakes that nest in the caves below. The best time to visit is during sunset when the temple silhouette against the golden sky creates an unforgettable spectacle.
    
    3. Besakih: The Mother Temple
    
    Known as Bali's **"Mother Temple,"** Besakih sits majestically on the slopes of Mount Agung, Bali's highest volcano. This complex of 23 separate temples is the most important Hindu temple in Bali and has survived numerous volcanic eruptions over the centuries.
    
    The temple complex represents the spiritual heart of **Balinese Hinduism**, where major ceremonies and festivals take place throughout the year. The climb to reach Besakih is rewarded with stunning views across the island and a profound sense of spiritual tranquility.
    
    4. Tips for Temple Visiting
    
    - Always dress modestly with covered shoulders and long pants
    - Bring a **sarong** (available for rent at most temples)
    - Visit early morning or late afternoon for the best light and fewer crowds
    - Respect local customs and ceremonies
    - Consider hiring a local guide to learn about the temple's history and significance
    
    Whether you're seeking spiritual enlightenment or simply admiring architectural beauty, Bali's temples provide an unforgettable window into the island's rich cultural heritage.`
  },
  2: {
    id: 2,
    title: "Investing in Bali Villas: Your Ultimate Guide for 2024",
    image: villaInvestmentImage,
    author: "James Anderson",
    date: "February 28, 2024",
    readTime: "7 min read",
    category: "Investment",
    content: `Bali's villa market continues to show exceptional growth, making it one of the most attractive investment destinations in Southeast Asia. With rental yields averaging 8-12% annually and capital appreciation of 15-20% per year, savvy investors are taking notice.

    1. Legal Framework for Foreign Investment
    
    Foreign investors can now own property in Bali through several legal structures:
    
    **Hak Pakai (Right to Use)**: The most straightforward option for foreigners, providing a 30-year lease with 20-year extensions possible.
    
    **PT PMA (Foreign Investment Company)**: Allows ownership through a Indonesian company structure, providing more control and longer-term security.
    
    **Nomination Agreement**: Working with trusted Indonesian partners, though this requires careful legal documentation.
    
    2. Prime Investment Areas
    
    **Canggu**: The hottest market for surf culture and digital nomads. Expect strong rental demand year-round with properties starting from $200,000.
    
    **Uluwatu**: Premium clifftop locations with stunning ocean views. Higher entry point ($500,000+) but exceptional capital appreciation potential.
    
    **Ubud**: Wellness and culture hub attracting retreat centers and luxury eco-resorts. Ideal for boutique villa investments.
    
    **Seminyak**: Established luxury market with consistent demand from high-end travelers. Premium pricing but stable returns.
    
    3. Market Trends and Opportunities
    
    The post-pandemic recovery has created unique opportunities:
    
    - Digital nomad boom driving long-term rental demand
    - Indonesian domestic tourism growing rapidly
    - Government infrastructure investments improving accessibility
    - Sustainable luxury becoming a key differentiator
    
    4. Financial Considerations
    
    **Initial Investment**: Entry-level villas start at $150,000, luxury properties can exceed $1 million
    
    **Operating Costs**: Budget 20-30% of rental income for management, maintenance, and taxes
    
    **Financing Options**: Local banks offer limited financing to foreigners, cash purchases remain most common
    
    **Currency Risk**: Consider hedging strategies for USD/IDR exposure
    
    5. Due Diligence Checklist
    
    Before making any investment:
    
    - Verify all legal documentation with qualified Indonesian lawyers
    - Conduct thorough property inspections including structural and environmental assessments
    - Research local zoning laws and development restrictions
    - Understand tax obligations in both Indonesia and your home country
    - Evaluate property management options and rental potential
    - Consider proximity to infrastructure and tourist attractions
    
    6. Management and Rental Strategy
    
    Successful villa investments require professional management:
    
    - Partner with established villa management companies
    - Invest in high-quality photography and online marketing
    - Optimize pricing strategies for seasonal demand
    - Maintain properties to international standards
    - Build relationships with local travel agents and tour operators
    
    7. Future Outlook
    
    Bali's villa market shows no signs of slowing down. The Indonesian government's commitment to tourism development, combined with the island's enduring appeal to international visitors, creates a compelling long-term investment case.
    
    However, success requires careful planning, proper legal structure, and ongoing professional management. Consider starting with a smaller investment to gain experience before expanding your portfolio.`
  },
  3: {
    id: 3,
    title: "The Stunning Rice Terraces of Jatiluwih",
    image: riceTerraceImage,
    author: "Ketut Wijaya",
    date: "February 20, 2024",
    readTime: "4 min read",
    category: "Nature",
    content: `The Jatiluwih rice terraces represent the pinnacle of Balinese agricultural artistry and one of Indonesia's most spectacular landscapes. This UNESCO World Heritage site showcases the traditional Subak irrigation system that has been used for over 1,000 years.

    1. UNESCO World Heritage Recognition
    
    In 2012, Jatiluwih was officially recognized by UNESCO as a World Heritage Site as part of the **"Cultural Landscape of Bali Province."** This recognition acknowledges not just the natural beauty of the terraces, but the sophisticated water management system that supports them.
    
    The **Subak system** represents a perfect harmony between humans and nature, incorporating traditional Balinese philosophy of **Tri Hita Karana** - the balance between God, humans, and nature.
    
    2. The Subak Irrigation System
    
    The word **"Subak"** refers to the traditional irrigation cooperatives that manage water distribution throughout the rice terraces. This ancient system ensures:
    
    - Equal water distribution to all farmers
    - Coordinated planting and harvesting schedules
    - Sustainable agricultural practices
    - Community cooperation and social harmony
    
    The system uses a complex network of canals, tunnels, and weirs that channel water from mountain springs down through the terraces, creating a continuous flow that supports year-round cultivation.
    
    3. Best Times to Visit
    
    **Sunrise (5:30 - 7:00 AM)**: The golden hour transforms the terraces into a shimmering green amphitheater. Morning mist often adds a mystical quality to photographs.
    
    **Late Afternoon (4:00 - 6:00 PM)**: Warm light creates dramatic shadows and highlights the texture of the landscape.
    
    **Rainy Season (October - March)**: Terraces are at their most vibrant green, though weather can be unpredictable.
    
    **Dry Season (April - September)**: Clearer skies and more predictable conditions, though terraces may appear less lush.
    
    4. Seasonal Changes
    
    The terraces offer different experiences throughout the year:
    
    **Planting Season**: Young green shoots create a carpet of emerald across the landscape
    
    **Growing Season**: Mature rice plants sway in the breeze, creating waves of green
    
    **Harvest Season**: Golden rice ready for harvest transforms the terraces into a patchwork of amber and green
    
    **Fallow Period**: Flooded terraces create mirror-like reflections of the sky
    
    5. Photography Tips
    
    - Bring a wide-angle lens to capture the full scope of the terraces
    - Use a polarizing filter to enhance the green colors and reduce glare
    - Consider drone photography (with proper permits) for aerial perspectives
    - Include local farmers in your shots to show the human element
    - Experiment with different viewpoints along the walking trails
    
    6. Cultural Significance
    
    Beyond their agricultural function, the rice terraces hold deep spiritual significance:
    
    - Rice is considered a gift from **Dewi Sri**, the goddess of rice and fertility
    - Planting and harvesting are accompanied by elaborate ceremonies
    - The terraces represent the Balinese concept of harmony with nature
    - Community cooperation in maintaining the Subak system strengthens social bonds
    
    7. Visiting Jatiluwih
    
    **Location**: Tabanan Regency, about 1.5 hours from Ubud
    
    **Entry Fee**: IDR 40,000 per person (subject to change)
    
    **Facilities**: Visitor center, cafes with terrace views, walking trails
    
    **What to Bring**: Comfortable walking shoes, sun protection, camera, water
    
    The Jatiluwih rice terraces offer more than just a beautiful landscape - they provide insight into centuries of sustainable agriculture and community cooperation that continues to thrive in modern Bali.`
  },
  4: {
    id: 4,
    title: "Bali's Hidden Beach Gems: Beyond the Tourist Trail",
    image: beachesImage,
    author: "Sarah Mitchell",
    date: "February 10, 2024",
    readTime: "6 min read",
    category: "Travel",
    content: `While Kuta and Seminyak draw the crowds, Bali's hidden beaches offer pristine beauty and authentic experiences away from the tourist masses. These secret spots provide the perfect backdrop for those seeking untouched paradise.

    1. Atuh Beach, Nusa Penida
    
    Arguably one of the most spectacular beaches in Indonesia, Atuh Beach on Nusa Penida's eastern coast is a hidden gem that rewards adventurous travelers. The journey involves a scenic drive followed by a 15-minute hike down a steep trail, but the payoff is extraordinary.
    
    **What Makes It Special:**
    - Pristine white sand beach surrounded by dramatic limestone cliffs
    - Crystal-clear turquoise waters perfect for swimming
    - Iconic rock formations jutting from the sea
    - Minimal crowds even during peak season
    - Traditional bamboo beach hut for shade
    
    **Getting There:** Take a fast boat from Sanur to Nusa Penida (45 minutes), then hire a scooter or driver for the 30-minute journey to Atuh Beach. The final descent requires good footwear and moderate fitness.
    
    2. Green Bowl Beach
    
    Hidden beneath towering cliffs on the Bukit Peninsula, Green Bowl Beach is accessible only through a cave tunnel, adding an element of adventure to your beach day.
    
    **Highlights:**
    - Secluded cove with golden sand
    - Excellent surfing conditions (intermediate to advanced)
    - Dramatic cliff-top views
    - Natural cave entrance adds mystery
    - Resident monkeys (keep food secured!)
    
    3. Bias Tugel Beach
    
    Often called **"White Sand Beach,"** Bias Tugel near Padangbai offers a slice of paradise on Bali's eastern coast. This hidden gem requires a short trek through the jungle, which keeps visitor numbers low.
    
    **Features:**
    - Powder-soft white sand contrasting with black volcanic rocks
    - Calm, clear waters ideal for swimming and snorkeling
    - Tropical fish visible from the shore
    - Local warungs serving fresh seafood
    - Stunning sunrise views
    
    4. Gunung Payung Beach
    
    This southern peninsula secret combines rugged natural beauty with excellent surfing conditions. The steep concrete stairway down to the beach serves as a natural filter, ensuring only dedicated beach lovers make the journey.
    
    **What to Expect:**
    - Consistent surf breaks for experienced surfers
    - Dramatic cliff-top temple overlooking the ocean
    - Rock pools perfect for exploration
    - Limited facilities maintaining wild character
    - Spectacular sunset viewing
    
    5. Amed Black Sand Beaches
    
    The traditional fishing village of **Amed** offers a completely different beach experience with its volcanic black sand beaches and authentic Balinese culture.
    
    **Unique Attractions:**
    - Traditional salt farming operations
    - Colorful outrigger fishing boats (**jukung**)
    - World-class diving and snorkeling at the Japanese shipwreck
    - Mount Agung views across the bay
    - Authentic local culture away from tourism development
    
    6. Sekumpul Beach
    
    Hidden near the famous **Sekumpul waterfall** in northern Bali, this beach offers a unique combination of waterfall and ocean experiences in one location.
    
    **Special Features:**
    - Black volcanic sand beach
    - Freshwater pools from nearby waterfalls
    - Lush jungle setting
    - Few tourists venture this far north
    - Opportunity to combine waterfall and beach visits
    
    7. Pantai Karma Kandara
    
    While technically part of a luxury resort, this clifftop beach can be accessed by the public and offers one of Bali's most exclusive beach experiences.
    
    **Highlights:**
    - Pristine white sand accessible via cliff-top elevator
    - Crystal-clear waters protected by surrounding cliffs
    - Upscale beach club atmosphere
    - Stunning sunset views
    - Excellent swimming conditions
    
    8. Hidden Beach Etiquette
    
    When visiting these pristine locations:
    
    - Leave no trace - pack out all garbage
    - Respect local customs and dress codes
    - Support local communities by buying from beach vendors
    - Don't damage coral reefs or marine life
    - Be prepared with your own food and water
    - Inform someone of your plans when visiting remote locations
    
    9. Planning Your Hidden Beach Adventure
    
    **Best Time**: Dry season (April-October) offers the most reliable weather and sea conditions
    
    **Transportation**: Rent a scooter for maximum flexibility, or hire a local driver who knows the access routes
    
    **What to Bring**: Plenty of water, snacks, sunscreen, first aid kit, and a waterproof phone case
    
    **Safety**: Check local conditions, travel with others when possible, and respect warning signs
    
    These hidden beaches represent the true spirit of Bali - natural beauty, adventure, and authentic experiences that create memories lasting far beyond your tan.`
  },
  5: {
    id: 5,
    title: "Traditional Balinese Culture: Festivals and Ceremonies",
    image: cultureImage,
    author: "Wayan Surya",
    date: "January 25, 2024",
    readTime: "5 min read",
    category: "Culture",
    content: `Bali's cultural calendar is a vibrant tapestry of festivals, ceremonies, and artistic expressions that bring communities together in spectacular celebrations. These sacred events offer visitors profound insights into the island's spiritual heart and ancient traditions.

    1. Galungan and Kuningan: The Most Sacred Festival
    
    Occurring every 210 days according to the **Pawukon calendar**, Galungan celebrates the victory of good over evil (dharma over adharma). This 10-day festival culminates in **Kuningan**, when ancestral spirits return to heaven.
    
    **Galungan Preparations:**
    - Families create elaborate **"penjor"** - decorated bamboo poles that arch over roads
    - Traditional foods like **lawar** (mixed vegetables with spices) and **ketupat** (rice cakes) are prepared
    - Homes and temples are decorated with young coconut leaves and flowers
    - Special prayers and offerings are made at family temples
    
    **Kuningan Celebration:**
    - Yellow rice offerings symbolize prosperity
    - Families gather for ceremonial meals
    - Temples host elaborate processions
    - Traditional **gamelan** music fills the air
    
    2. Nyepi: The Day of Silence
    
    Perhaps Bali's most unique celebration, **Nyepi** transforms the entire island into a place of complete silence for 24 hours. This Hindu New Year celebration is preceded by several days of purification rituals.
    
    **Ogoh-Ogoh Parade:** The night before Nyepi, massive papier-mâché demons are paraded through villages before being burned to drive away evil spirits.
    
    **The Four Prohibitions:**
    - **Amati Geni**: No fire or light
    - **Amati Karya**: No work
    - **Amati Lelungan**: No travel
    - **Amati Lelanguan**: No entertainment
    
    Even the airport closes, making Nyepi one of the world's most observed religious holidays.
    
    3. Temple Festivals (Odalan)
    
    Every Balinese temple celebrates its anniversary with elaborate ceremonies that can last for days. These festivals showcase the finest examples of traditional arts and community cooperation.
    
    **Typical Festival Elements:**
    - Processional dances carrying sacred objects
    - Elaborate food offerings arranged in towering displays
    - Traditional music performances
    - Religious ceremonies led by Hindu priests
    - Community feasting and celebration
    
    4. Traditional Dance Performances
    
    Balinese dance is inseparable from religious ceremony, with each performance telling sacred stories through intricate movements and expressions.
    
    **Barong Dance:** The eternal struggle between good (**Barong**) and evil (**Rangda**), featuring elaborate costumes and dramatic storylines.
    
    **Kecak Fire Dance:** Dozens of men in a circle chant "cak" while a dancer moves through fire, often performed at temples during sunset.
    
    **Legong Dance:** Graceful court dance performed by young girls in golden costumes, requiring years of training to master.
    
    **Janger Dance:** Social dance that brings communities together, with men and women performing coordinated movements.
    
    5. Sacred Water Ceremonies
    
    Water holds profound significance in Balinese Hinduism, representing purification and spiritual cleansing.
    
    **Melukat:** Purification ritual performed at holy water sources like **Tirta Empul temple**, where devotees bathe in sacred spring water.
    
    **Melasti:** Pre-Nyepi ceremony where temple artifacts are carried in procession to the sea for blessing and purification.
    
    6. Arts and Crafts Traditions
    
    Balinese artistic expression extends far beyond performance into daily life through traditional crafts:
    
    **Penjor Making:** Intricate bamboo decorations requiring specific knowledge passed down through generations.
    
    **Canang Sari:** Daily offerings made from palm leaves, flowers, and rice, created fresh each morning.
    
    **Stone and Wood Carving:** Temple decorations and sculptures that combine Hindu mythology with local artistic traditions.
    
    **Traditional Textiles:** **Endek** and **songket** weaving using traditional techniques and natural dyes.
    
    7. Village Community Structure
    
    Balinese ceremonies are organized through traditional village structures that have existed for centuries:
    
    **Banjar:** Neighborhood associations that coordinate ceremonies and maintain temples
    
    **Subak:** Traditional irrigation cooperatives that also organize water blessing ceremonies
    
    **Pecalang:** Traditional security volunteers who maintain order during ceremonies
    
    8. Participating Respectfully
    
    Visitors can experience these cultural treasures while showing proper respect:
    
    **Dress Code:** Always wear modest clothing covering shoulders and knees. **Sarongs** are often required for temple entry.
    
    **Behavior Guidelines:**
    - Remove shoes before entering temple areas
    - Don't point feet toward altars or priests
    - Maintain quiet, respectful demeanor
    - Don't use flash photography during ceremonies
    - Follow local guidance about where visitors may go
    
    **Cultural Sensitivity:**
    - Ask permission before photographing people
    - Learn basic Balinese greetings
    - Understand that ceremonies are religious events, not tourist attractions
    - Consider making small donations to support temple maintenance
    
    9. Festival Calendar Highlights
    
    **March-April:** Nyepi celebrations and temple festivals
    **July-August:** Galungan and Kuningan festivals
    **September-October:** Harvest ceremonies and cultural performances
    **December:** Temple anniversaries and year-end ceremonies
    
    These celebrations represent the living heart of Balinese culture, where ancient traditions continue to thrive in the modern world, creating unforgettable experiences for those fortunate enough to witness them.`
  },
  6: {
    id: 6,
    title: "A Culinary Journey Through Authentic Balinese Cuisine",
    image: cuisineImage,
    author: "Made Artawan",
    date: "January 15, 2024",
    readTime: "4 min read",
    category: "Food",
    content: `Balinese cuisine is a captivating symphony of flavors that reflects the island's rich cultural heritage, Hindu traditions, and abundant natural resources. From aromatic spice pastes to ceremonial feast dishes, every meal tells a story of tradition, community, and spiritual connection.

    1. The Foundation: Base Gede Spice Paste
    
    At the heart of Balinese cooking lies **"Base Gede,"** a complex spice paste that forms the foundation of most traditional dishes. This aromatic blend combines:
    
    - Fresh chilies (**cabe merah**)
    - Shallots and garlic
    - Galangal and ginger
    - Turmeric root
    - Candlenuts (**kemiri**)
    - Kaffir lime leaves
    - Lemongrass
    - Traditional spices like coriander and black pepper
    
    Each family has its own secret proportions, passed down through generations and ground fresh using traditional stone mortars (**cobek**).
    
    2. Iconic Balinese Dishes
    
    **Babi Guling (Roast Suckling Pig)**
    The undisputed king of Balinese cuisine, **babi guling** is a whole pig stuffed with aromatic spices and roasted over coconut husks. The result is incredibly tender meat with crispy skin, traditionally served with steamed rice, **lawar** (mixed vegetables), and spicy **sambal**.
    
    **Bebek Betutu (Slow-Roasted Duck)**
    Duck stuffed with traditional spices and wrapped in aromatic bark, then slow-roasted in underground ovens for 6-8 hours. The long cooking process creates incredibly tender meat infused with complex flavors.
    
    **Ayam Betutu (Balinese Roasted Chicken)**
    Similar preparation to **bebek betutu** but using free-range village chicken, resulting in a dish that's both rustic and refined.
    
    **Lawar**
    A traditional mix of vegetables, grated coconut, and spices, sometimes including fresh blood for added richness. Different regions have their own variations using local vegetables and protein.
    
    3. Street Food and Warung Culture
    
    Traditional **warungs** (local eateries) serve authentic flavors in casual, family-run settings where recipes have remained unchanged for generations.
    
    **Nasi Campur**
    Mixed rice dishes featuring an array of curries, vegetables, proteins, and sambals, allowing diners to experience multiple flavors in one meal.
    
    **Sate Plecing**
    Grilled fish or chicken skewers served with spicy tomato-based **sambal plecing**, a Lombok-influenced dish popular throughout Bali.
    
    **Nasi Jinggo**
    Bali's version of fast food - small portions of rice with various toppings wrapped in banana leaf, perfect for quick meals.
    
    **Tipat Cantok**
    Compressed rice cakes served with blanched vegetables and peanut sauce, often eaten as a light meal or snack.
    
    4. Ceremonial and Festival Foods
    
    Food plays a crucial role in Balinese Hindu ceremonies, with specific dishes prepared for different religious occasions.
    
    **Gebogan**
    Elaborate food arrangements offered to deities during temple ceremonies, featuring fruits, rice cakes, and decorative elements arranged in towering displays.
    
    **Pork Satay for Ceremonies**
    Special satay preparations for temple festivals, often featuring intricate spice combinations and traditional cooking methods.
    
    **Jaja Bali (Traditional Sweets)**
    Colorful rice cakes and sweet treats prepared for ceremonies, each with specific symbolic meanings and traditional preparation methods.
    
    5. Regional Specialties
    
    Different areas of Bali have developed their own culinary specialties based on local ingredients and cultural influences.
    
    **North Bali (Singaraja Region):**
    - Fresh seafood with minimal spicing to highlight natural flavors
    - Influences from Javanese and Chinese traders
    - Unique preparations of local mountain vegetables
    
    **East Bali (Karangasem):**
    - Traditional salt-making influences cuisine
    - Grilled fish preparations using local techniques
    - Mountain vegetables and unique water spinach dishes
    
    **Central Bali (Ubud Region):**
    - Creative fusion of traditional and modern techniques
    - Emphasis on organic and locally-sourced ingredients
    - Vegetarian interpretations of traditional dishes
    
    6. Traditional Cooking Methods
    
    Balinese cooking techniques have remained largely unchanged for centuries, emphasizing natural methods that enhance flavors.
    
    **Underground Roasting**
    Using coconut husks and volcanic stones to create natural ovens for slow-cooking large cuts of meat.
    
    **Banana Leaf Wrapping**
    Steaming and grilling foods wrapped in banana leaves, which imparts subtle flavors and keeps food moist.
    
    **Traditional Grinding**
    Using stone mortars to grind spices, creating pastes with different textures than modern processors.
    
    7. Desserts and Sweet Treats
    
    Balinese sweets often incorporate local ingredients like palm sugar, coconut, and tropical fruits.
    
    **Es Campur**
    Shaved ice dessert with tropical fruits, palm sugar syrup, and various toppings including grass jelly and sweetened beans.
    
    **Klepon**
    Green rice cake balls filled with palm sugar and rolled in grated coconut, bursting with sweet flavor when bitten.
    
    **Dadar Gulung**
    Green pancakes filled with sweetened grated coconut, colored with **pandan** leaves for natural flavor and color.
    
    8. Where to Experience Authentic Flavors
    
    **Traditional Warungs:**
    - **Warung Babi Guling Ibu Oka** (Ubud)
    - **Warung Men Weti** (Sanur) 
    - **Bebek Bengil** (Ubud) for bebek betutu
    
    **Local Markets:**
    - **Pasar Badung** (Denpasar) for ingredients and street food
    - **Ubud Traditional Market** for morning warung breakfasts
    - Night markets throughout the island
    
    **Cooking Classes:**
    Many venues offer hands-on cooking experiences where visitors can learn traditional techniques and take recipes home.
    
    9. Dining Etiquette and Culture
    
    - Meals are often communal affairs shared with family and friends
    - Rice is the sacred foundation of every meal
    - Traditional eating uses the right hand only
    - Sharing food strengthens community bonds
    - Many dishes are intentionally prepared in large quantities for sharing
    
    Balinese cuisine offers far more than just delicious food - it's a gateway to understanding the island's culture, spirituality, and community values, creating connections that extend far beyond the dining experience.`
  },
  7: {
    id: 7,
    title: "Wellness and Yoga Retreats: Finding Balance in Bali",
    image: wellnessImage,
    author: "Ananda Devi",
    date: "January 5, 2024",
    readTime: "5 min read",
    category: "Wellness",
    content: `Bali has evolved into a global sanctuary for wellness seekers, offering an unparalleled combination of natural beauty, spiritual traditions, and world-class facilities. From luxury spa retreats to authentic healing ceremonies, the island provides countless pathways to physical, mental, and spiritual renewal.

    1. Ubud: The Wellness Capital
    
    Nestled in Bali's cultural heart, Ubud has become synonymous with holistic wellness and spiritual transformation.
    
    **Yoga Shalas and Studios:**
    - **The Yoga Barn**: Bali's largest yoga center offering diverse styles and teacher training
    - **Radiantly Alive**: International teachers and innovative class formats
    - **Intuitive Flow**: Smaller, intimate sessions with personalized attention
    - **Power of Now Oasis**: Beachfront location with ocean views
    
    **Wellness Resorts:**
    - **COMO Shambhala Estate**: Medical wellness programs in jungle setting
    - **Fivelements Retreat**: Traditional Balinese healing in luxury environment
    - **Bagus Jati**: Holistic health programs combining Eastern and Western approaches
    
    2. Traditional Balinese Healing
    
    The island's indigenous healing traditions offer authentic wellness experiences rooted in centuries of practice.
    
    **Balian (Traditional Healers)**
    Local healers who use a combination of herbal medicine, energy work, and spiritual guidance. Sessions often include:
    - Diagnostic techniques using intuition and energy reading
    - Herbal treatments using local medicinal plants
    - Spiritual cleansing and blessing ceremonies
    - Dietary and lifestyle recommendations
    
    **Melukat Water Purification**
    Sacred water ceremonies performed at holy springs like:
    - **Tirta Empul Temple**: Ancient spring with individual spouts for different blessings
    - **Sebatu Temple**: Peaceful location with natural spring pools
    - **Pura Gunung Kawi Sebatu**: Hidden gem with lotus ponds and healing waters
    
    3. Spa and Massage Traditions
    
    Balinese massage and spa treatments combine therapeutic benefits with spiritual healing.
    
    **Traditional Balinese Massage:**
    - Deep tissue techniques using palms, thumbs, and forearms
    - Aromatic oils made from local flowers and herbs
    - Focus on improving circulation and releasing energy blockages
    - Often includes reflexology and acupressure points
    
    **Unique Balinese Treatments:**
    - **Boreh**: Traditional body scrub using ground spices and rice
    - **Lulur**: Javanese-influenced body treatment with turmeric and herbs
    - **Flower baths**: Soaking in petals from frangipani, rose, and jasmine
    - **Hot stone therapy**: Using volcanic river stones
    
    4. Yoga Styles and Practices
    
    Bali's diverse yoga scene caters to practitioners of all levels and interests.
    
    **Popular Styles Available:**
    - **Vinyasa Flow**: Dynamic sequences linking breath and movement
    - **Yin Yoga**: Passive poses held for extended periods
    - **Kundalini**: Combining breath work, meditation, and movement
    - **Aerial Yoga**: Using silk hammocks for supported poses
    - **Sound Healing**: Integration of singing bowls and mantras
    
    **Unique Bali Experiences:**
    - Beach sunrise yoga sessions
    - Rice paddy outdoor classes
    - Waterfall meditation retreats
    - Full moon ceremony practices
    
    5. Wellness Retreat Programs
    
    Structured programs combining multiple wellness modalities for comprehensive transformation.
    
    **Detox Retreats:**
    - Juice cleanses using tropical fruits and vegetables
    - Raw food preparation and education
    - Colon hydrotherapy and liver support
    - Daily yoga and meditation practices
    
    **Spiritual Retreats:**
    - Silent meditation intensives
    - Shamanic journeying workshops
    - Breathwork and consciousness exploration
    - Sacred ceremony participation
    
    **Fitness and Adventure:**
    - Surf and yoga combinations
    - Hiking and mindfulness practices
    - Martial arts and meditation
    - Rock climbing and mental resilience training
    
    6. Healthy Eating and Nutrition
    
    Bali's wellness scene includes a thriving healthy food culture supporting cleansing and vitality.
    
    **Organic Restaurants and Cafes:**
    - **Seeds of Life**: Raw vegan cuisine and superfood bowls
    - **Alchemy**: Elixir bar and plant-based dining
    - **Clear Cafe**: Wholesome meals with stunning rice field views
    - **Moksa**: Farm-to-table dining with permaculture principles
    
    **Local Superfoods:**
    - Fresh coconut water for natural electrolytes
    - Tropical fruits rich in enzymes and vitamins
    - Traditional **jamu** herbal drinks
    - Locally grown spirulina and wheatgrass
    
    7. Meditation and Mindfulness
    
    The island's spiritual atmosphere naturally supports contemplative practices.
    
    **Meditation Venues:**
    - Silent retreats in mountain settings
    - Beach meditation at sunrise and sunset
    - Temple meditation with traditional ceremonies
    - Private sessions with experienced teachers
    
    **Mindfulness Activities:**
    - Walking meditation through rice terraces
    - Mindful eating workshops
    - Art therapy and creative expression
    - Nature immersion experiences
    
    8. Planning Your Wellness Journey
    
    **Best Time to Visit:**
    - Dry season (April-October) for consistent weather
    - Shoulder seasons for fewer crowds and better rates
    - Consider moon phases for spiritual practices
    
    **What to Pack:**
    - Comfortable yoga clothing and props
    - Natural insect repellent and sunscreen
    - Journal for reflection and integration
    - Open mind and heart for transformation
    
    **Choosing the Right Program:**
    - Define your wellness goals clearly
    - Research teacher qualifications and backgrounds
    - Read recent reviews from participants
    - Consider group size and accommodation style
    
    9. Integration and Continued Practice
    
    **Taking It Home:**
    - Daily practice routines adapted to your lifestyle
    - Continued connection with teachers and community
    - Regular self-care rituals and treatments
    - Ongoing education and skill development
    
    **Building Community:**
    - Local yoga studios and wellness centers
    - Online programs and virtual sessions
    - Wellness travel and retreat participation
    - Sharing experiences with others
    
    Bali's wellness offerings extend far beyond temporary relaxation - they provide tools and experiences for lasting transformation, helping visitors develop sustainable practices for continued health and happiness long after returning home.`
  }
};

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts[parseInt(id as string)];

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Post Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="mb-6">
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-elegant"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n').map((paragraph, index) => {
                if (/^\d+\./.test(paragraph.trim())) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
                      {paragraph.trim()}
                    </h2>
                  );
                } else if (paragraph.startsWith('- ')) {
                  return (
                    <li key={index} className="text-muted-foreground mb-2 ml-4">
                      {paragraph.replace('- ', '')}
                    </li>
                  );
                } else if (paragraph.trim()) {
                  // Handle bold text within paragraphs
                  const formattedText = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                  return (
                    <p key={index} className="text-muted-foreground mb-4 leading-relaxed" dangerouslySetInnerHTML={{__html: formattedText}}>
                    </p>
                  );
                }
                return null;
              })}
            </div>
            
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-semibold text-foreground">{post.author}</p>
                    <p className="text-sm text-muted-foreground">Travel Writer & Bali Expert</p>
                  </div>
                </div>
                
                <Button variant="outline" className="group">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share Article
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPostPage;