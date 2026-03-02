import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  image?: string;
};

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects: Project[] = [
    {
      title: "API de Catálogo de Filmes",
      description: "API para catalogar filmes assistidos por cada usuário, com sistema de autenticação JWT, tratamento de erros e documentação Swagger. Desenvolvida com as melhores práticas de desenvolvimento backend.",
      technologies: ["NestJS", "TypeScript", "PostgreSQL", "Jest", "Prisma", "JWT", "Bcrypt", "Swagger"],
      github: "https://github.com/brunocmg/movie-catalog-api",
      image: "/movie-api-swagger.png",
    },
    {
      title: "Pokédex",
      description: "Aplicação web de Pokédex interativa desenvolvida com React, Vite e Material-UI. Consome a PokéAPI para exibir informações detalhadas sobre Pokémons de forma responsiva e moderna.",
      technologies: ["React", "Vite", "Material-UI", "API REST"],
      github: "https://github.com/brunocmg/pokedex-react-mui",
      image: "/pokedex.png",
    },
    {
      title: "Gerenciador Acadêmico",
      description: "Sistema de gerenciamento acadêmico desenvolvido em Java que demonstra os principais conceitos de Programação Orientada a Objetos (POO), incluindo herança, polimorfismo, encapsulamento e abstração.",
      technologies: ["Java", "POO", "Console Application"],
      github: "https://github.com/brunocmg/academic-management-java",
      image: "/tree.png",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl mb-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Meus <span className="text-accent">Projetos</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Alguns dos projetos que desenvolvi para demonstrar minhas habilidades técnicas
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-black/40 rounded-lg overflow-hidden border border-white/10 hover:border-accent transition-all hover:shadow-xl group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              {/* Header with image or gradient fallback */}
              <div
                className={`h-32 relative overflow-hidden ${project.image ? "bg-cover bg-center" : "bg-black/30"}`}
                style={project.image ? { backgroundImage: `url(${project.image})` } : undefined}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all" />
                <div className="absolute bottom-4 right-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors inline-flex"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Ver no GitHub"
                  >
                    <Github className="text-white" size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/5 text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-accent hover:underline"
                  >
                    <Github size={16} />
                    Ver código
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="https://github.com/brunocmg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 rounded-lg hover:border-accent hover:text-accent transition-all"
          >
            <Github size={20} />
            Ver mais no GitHub
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}