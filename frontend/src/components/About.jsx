import { motion } from "framer-motion"
import { fadeIn } from "../varients"

function About() {
    return (
        <div className="md:mx-10 mx-5">
            <motion.div
                variants={fadeIn("down", 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.6 }}
                className="bg-[#edd1bf] my-2 rounded shadow-md shadow-gray-400"
            >
                <motion.p 
                className=" px-4 font-sans  text-justify flex justify-center items-center py-5 text-gray-900 dark:text-dark_text text-xs md:text-sm font-text  ">
                    Welcome to our AI-Powered Disease Prediction System — an advanced healthcare platform designed to bridge the gap between technology and medical diagnosis.
                    This intelligent system leverages the power of machine learning and artificial intelligence to analyze user symptoms and provide accurate predictions of 
                    possible diseases. By processing a wide range of medical data and patterns, it identifies potential health risks and delivers recommendations that guide
                    users toward the next appropriate steps. Whether you're exploring preventive healthcare, seeking clarity on existing health concerns, or just curious about
                    symptoms, our system offers a seamless and interactive experience. With an intuitive interface, users can input symptoms, answer relevant follow-up questions,
                    and receive meaningful insights — all within seconds. In addition to disease prediction, our system is designed with a user-first approach. It can be integrated
                    with features like doctor recommendations , helping individuals make well-informed decisions about their health.Our mission is to empower
                    users to take control of their health journey with confidence, enabling timely interventions and promoting early detection. By combining cutting-edge 
                    technology with medical logic, we aim to revolutionize how individuals interact with healthcare — making it more accessible, intelligent, and responsive.
                </motion.p>
            </motion.div>
        </div>
    );
}

export default About;
