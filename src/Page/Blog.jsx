import "../Style/BlogCard.css";
import Card from "../../Componant/BlogCard";
import Footer from "../../Componant/Footer";
import { motion, AnimatePresence } from "framer-motion"; // استيراد الانيميشن
function Blog() {
  const data = [
    {
      title: "pizza",
      count: 6,
      image: "/PizzaImages/p1.jpg",
      icon: "bx bx-pizza",
    },
    {
      title: "Western food",
      count: 6,
      image: "/WesternImages/w1.jpg",
      icon: "bxr bx-burger-alt",
    },
    {
      title: "Oriental food",
      count: 6,
      image: "/OrientleImages/c1.jpg",
      icon: "bxr bx-bowl-hot",
    },
    {
      title: "Authority",
      count: 6,
      image: "/AuthorityImages/s1.jpg",
      icon: "bxr bx-bowl-rice",
    },
    {
      title: "drinks",
      count: 6,
      image: "/DrinksImages/d1.jpg",
      icon: "bxr bx-coffee-cup",
    },
    {
      title: "sweet",
      count: 6,
      image: "/CandiesImages/ca1.jpg",
      icon: "bxr bx-taco",
    },
  ];
  return (
    <section className="BlogSection">
      <div className="grid-container">
        <AnimatePresence mode="wait">
          {data.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card
                title={item.title}
                count={item.count}
                image={item.image}
                icon={item.icon}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>


      <div className="BlogFooter">
        <Footer />
      </div>
    </section>
  );
}


export default Blog;
