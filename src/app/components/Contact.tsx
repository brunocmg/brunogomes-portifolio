import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "brunocmg2006@gmail.com",
      href: "mailto:brunocmg2006@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "brunocmgomes",
      href: "https://www.linkedin.com/in/brunocmgomes/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "brunocmg",
      href: "https://github.com/brunocmg",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@brunocgomes_",
      href: "https://instagram.com/brunocgomes_",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-white/5" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl mb-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent">Contato</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Informações para contato
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-6 bg-black/40 rounded-lg border border-white/10 hover:border-accent transition-all hover:shadow-lg group"
              >
                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <item.icon className="text-accent" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                  <p className="text-gray-200 group-hover:text-accent transition-colors">
                    {item.value}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}