
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mt-10"
      >
        <h1 className="text-4xl font-bold">Hi, I'm Nitish Nagar 👋</h1>
        <p className="mt-4 text-gray-600">
          Data Scientist | AI & ML Enthusiast | Compliance & Risk Automation
        </p>
      </motion.div>
      <Projects />
      <Contact />
    </Layout>
  );
}
