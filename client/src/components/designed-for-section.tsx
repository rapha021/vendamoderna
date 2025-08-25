import { motion } from "framer-motion";
import { Heart, GraduationCap, Users } from "lucide-react";

export function DesignedForSection() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-background w-full overflow-hidden">
      <div className="max-w-6xl mx-auto mobile-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-accent-blue drop-shadow-lg">
            PENSADO PARA:
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Pais Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-accent-green/20 to-accent-blue/10 border-3 border-accent-green/40 rounded-3xl p-6 sm:p-8 playful-shadow"
          >
            <div className="text-center mb-6">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-accent-blue to-accent-purple rounded-full flex items-center justify-center mb-4">
                <Users className="h-12 w-12 text-black" />
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black mb-6 text-accent-blue flex items-center justify-center drop-shadow-lg">
              <Heart className="mr-3 h-8 w-8" />
              Pais
            </h3>

            <div className="space-y-4">
              <p className="text-text-primary text-sm sm:text-base leading-relaxed">
                Como cristão, você sabe a importância de ensinar os seus filhos
                a{" "}
                <span className="font-bold text-accent-blue">
                  amar a palavra de Deus
                </span>{" "}
                e a{" "}
                <span className="font-bold text-accent-blue">
                  SEGUIR os valores cristãos
                </span>
                . Esse material é uma ferramenta incrível para te ajudar nesse
                desafio.
              </p>
            </div>
          </motion.div>

          {/* Professores Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-accent-green/20 to-accent-blue/10 border-3 border-accent-green/40 rounded-3xl p-6 sm:p-8 playful-shadow"
          >
            <div className="text-center mb-6">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-accent-green to-accent-blue rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="h-12 w-12 text-white" />
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black mb-6 text-accent-green flex items-center justify-center drop-shadow-lg">
              <GraduationCap className="mr-3 h-8 w-8" />
              Professores
            </h3>

            <div className="space-y-4">
              <p className="text-text-primary text-sm sm:text-base leading-relaxed">
                O kit pequenos discípulos será um{" "}
                <span className="font-bold text-accent-green">
                  grande aliado na rotina do ministério infantil
                </span>
                . Ele é ideal para escola bíblica, culto kids, culto doméstico e
                na doutrinação infantil no geral.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
