import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Brain, GraduationCap, MapPin } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-6 bg-white/5" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Sobre <span className="text-accent">Mim</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Sou um desenvolvedor backend me aprofundando em criar soluções
              eficientes e escaláveis. Tenho grande interesse no mundo da
              inteligência artificial e suas aplicações práticas.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Atualmente cursando Engenharia de Software na Universidade
              Salvador (UNIFACS), busco aplicar meus conhecimentos e continuar
              crescendo como desenvolvedor.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Tenho experiência em desenvolvimento web full-stack, com foco
              especial em tecnologias backend como Node.js, NestJS e bancos de
              dados relacionais e não-relacionais.
            </p>
            
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="p-6 bg-black/40 rounded-lg border border-white/10 hover:border-accent transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Code2 className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="mb-2">Desenvolvimento Backend</h3>
                  <p className="text-gray-400">
                    Criação de APIs escaláveis e performáticas com Node.js,
                    NestJS e TypeScript, utilizando bancos de dados relacionais
                    e não-relacionais.
                  </p>
                </div>
              </div>
            </div>

            

            <div className="p-6 bg-black/40 rounded-lg border border-white/10 hover:border-accent transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <GraduationCap className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="mb-2">Educação</h3>
                  <p className="text-gray-400">
                    Engenharia de Software - Universidade Salvador (UNIFACS)
                    (2024-2027)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-black/40 rounded-lg border border-white/10 hover:border-accent transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="mb-2">Localização</h3>
                  <p className="text-gray-400">Salvador, Bahia, Brasil</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}