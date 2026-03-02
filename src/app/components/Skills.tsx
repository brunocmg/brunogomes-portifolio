import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Backend",
      skills: [
        "Node.js",
        "NestJS",
        "TypeScript",
        "Express",
        "Swagger",
        "Zod",
        "Python",
      ],
      color: "bg-purple-500",
    },
    {
      title: "Banco de Dados",
      skills: [
        "PostgreSQL",
        "MongoDB",
        /*"Redis",*/
        "Prisma",
        "SQLite",
        "Supabase",
      ],
      color: "bg-green-500",
    },
    {
      title: "Infraestrutura & DevOps",
      skills: ["Git", "Docker", "Docker Compose", /*"Github Actions"*/],
      color: "bg-red-500",
    },
    {
      title: "Qualidade & Testes",
      skills: ["Jest", /*"Supatest",*/ "Postman"],
      color: "bg-yellow-500",
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Tailwind", "JavaScript", "Axios", "HTML", "CSS"],
      color: "bg-blue-500",
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white/5" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl mb-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Minhas <span className="text-accent">Habilidades</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Tecnologias e ferramentas que utilizo para criar soluções completas
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-black/40 p-6 rounded-lg border border-white/10 hover:border-accent transition-all hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-1 h-8 ${category.color} rounded-full`} />
                <h3 className="text-xl">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-sm hover:bg-accent/10 hover:text-accent transition-colors"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{
                      duration: 0.3,
                      delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-400">
            E sempre aprendendo novas tecnologias...
          </p>
        </motion.div>
      </div>
    </section>
  );
}
