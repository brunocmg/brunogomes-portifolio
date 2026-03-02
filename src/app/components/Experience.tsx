import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Calendar, MapPin } from "lucide-react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Desenvolvedor de Software",
      company: "Quyro Tech",
      location: "Salvador, BA",
      period: "Abr/2025 - Presente",
      description: "Desenvolvimento autônomo de sistemas em uma startup de tecnologia, atuando desde a concepção da solução até a implementação, com foco em resolver problemas reais do negócio.",
      current: true,
    },
    {
      title: "Desenvolvedor Projetista",
      company: "Praxis - Empresa Júnior",
      location: "Salvador, BA",
      period: "Set/2024 - Ago/2025",
      description: "Desenvolvimento de websites para clientes reais, utilizando HTML, CSS e JavaScript, com prototipação e design de interfaces no Figma, priorizando usabilidade e experiência do usuário.",
      current: false,
    },
    {
      title: "Trainee de Elétrica e Eletrônica",
      company: "Mandacaru BAJA",
      location: "Salvador, BA",
      period: "Nov/2024 - Dez/2025",
      description: "Aprendizado e aplicação prática em elétrica e eletrônica voltadas a projetos automotivos, com ênfase no uso de microcontroladores, integração de sensores e desenvolvimento de soluções funcionais.",
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl mb-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent">Experiência</span> {/* Profissional*/}
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Experiências acadêmicas e profissionais que moldaram minha jornada como desenvolvedor
        </motion.p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-8 border-l-2 border-white/10 pb-8 last:pb-0"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent border-4 border-black" />
              
              <div className="bg-black/40 p-6 rounded-lg border border-white/10 hover:border-accent transition-all hover:shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl mb-1">{exp.title}</h3>
                    <p className="text-accent">{exp.company}</p>
                  </div>
                  {exp.current && (
                    <span className="inline-block px-3 py-1 bg-accent text-white rounded-full text-sm mt-2 md:mt-0 w-fit">
                      Atual
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <p className="text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}