import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { NewHeroSection } from "../components/new-hero-section";
import { IdentificationSection } from "../components/identification-section";
import { TargetAudienceSection } from "../components/target-audience-section";
import { DesignedForSection } from "../components/designed-for-section";
import { HowItWorksSection } from "../components/how-it-works-section";
import { TestimonialsWhatsAppSection } from "../components/testimonials-whatsapp-section";
import { ContentExamplesSection } from "../components/content-examples-section";
import { TestimonialsSection } from "../components/testimonials-section";
import { SidebarOffer } from "../components/sidebar-offer";
import { FAQSection } from "../components/faq-section";
import { Footer } from "../components/footer";
import { CTAButton } from "../components/cta-button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  CreditCard,
  Smartphone,
  Shield,
  X,
  Clock,
  Lock,
  BookOpen,
  FileStack,
} from "lucide-react";
import price, { upSellPrice } from "@/lib/utils";

interface PurchaseData {
  name: string;
  email: string;
  whatsapp: string;
}

export function NewHomePage() {
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [purchaseData, setPurchaseData] = useState<PurchaseData>({
    name: "",
    email: "",
    whatsapp: "",
  });

  const faqRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const purchaseMutation = useMutation({
    mutationFn: async (data: PurchaseData) => {
      const response = await fetch("/api/purchases", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Falha ao processar compra");
      }

      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "🎉 Compra realizada com sucesso!",
        description:
          "Você receberá as instruções de acesso por email em breve.",
      });

      if (data.paymentUrl) {
        window.location.href = data.paymentUrl;
      }

      setShowPurchaseModal(false);
      setPurchaseData({ name: "", email: "", whatsapp: "" });
      queryClient.invalidateQueries({ queryKey: ["/api/purchases"] });
    },
    onError: (error: any) => {
      toast({
        title: "❌ Erro na compra",
        description: error.message || "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    },
  });

  const handleCTAClick = () => {
    setShowPurchaseModal(true);
  };

  const handleFAQClick = () => {
    faqRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePurchaseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    purchaseMutation.mutate(purchaseData);
  };

  const benefitsFullPrice = [
    {
      icon: Shield,
      text: "Arquivos em PDF para imprimir",
      color: "text-accent-green",
    },
    {
      icon: Clock,
      text: "Mais de 500 atividades bíblicas",
      color: "text-accent-green",
    },
    {
      icon: BookOpen,
      text: "Bônus - 50 Caça palavras Bíblico",
      color: "text-accent-green",
    },
    {
      icon: BookOpen,
      text: "Bônus - Orações para Crianças",
      color: "text-accent-green",
    },
    {
      icon: BookOpen,
      text: "Bônus - Dicas para começar no Ministério Infantil",
      color: "text-accent-green",
    },
    {
      icon: BookOpen,
      text: "Bônus - Meu Caderninho de Orações",
      color: "text-accent-green",
    },
    {
      icon: BookOpen,
      text: "Bônus - Quiz Bíblico",
      color: "text-accent-green",
    },
    { icon: Lock, text: "Receba direto no zap", color: "text-accent-green" },
  ];

  const benefitsLowestPrice = [
    {
      icon: Shield,
      text: "Arquivos em PDF para imprimir",
      color: "text-accent-green",
    },
    {
      icon: FileStack,
      text: "Mais de 500 atividades bíblicas",
      color: "text-accent-green",
    },
    { icon: Lock, text: "Receba direto no zap", color: "text-accent-green" },
    {
      icon: X,
      text: "Você não receberá nenhum bônus",
      color: "text-accent-red",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-text-primary">
      {/* <Header onBuyClick={handleCTAClick} onFAQClick={handleFAQClick} /> */}

      <div className="lg:flex lg:space-x-8 lg:max-w-7xl lg:mx-auto lg:px-4 w-full overflow-hidden">
        <div className="lg:flex-1">
          <NewHeroSection onCTAClick={handleCTAClick} />
          <IdentificationSection />
          <TargetAudienceSection />
          <DesignedForSection />
          <HowItWorksSection />
          <TestimonialsWhatsAppSection />
          <ContentExamplesSection />
          <TestimonialsSection />

          {/* Checkout Section */}
          <section className="py-2 sm:py-20 px-4 bg-secondary/30 w-full overflow-hidden">
            <div className="max-w-4xl mx-auto mobile-padding">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
                  💳 Quero Meu Kit Agora!
                </h2>
                <p className="text-lg sm:text-xl text-text-secondary mb-8">
                  Receba o material direto no WhatsApp e no e-mail
                </p>
              </motion.div>

              <div className="max-w-2xl mx-auto">
                <div className="bg-background/80 rounded-2xl p-6 sm:p-8 border border-border">
                  <div className="text-center mb-6">
                    <div className="text-4xl sm:text-5xl font-bold text-text-primary mb-2">
                      <span className="text-accent-green">
                        A partir de {price}
                      </span>
                    </div>
                    <p className="text-text-secondary">
                      Promoção por tempo limitado - Pagamento único
                    </p>
                  </div>

                  <CTAButton className="w-full text-lg py-4 mb-6">
                    ESCOLHER MEU PLANO
                  </CTAButton>

                  <div className="text-center">
                    <p className="text-sm text-text-secondary mb-4">
                      Meios de pagamento aceitos:
                    </p>
                    <div className="flex justify-center space-x-4 text-text-secondary">
                      <CreditCard className="h-6 w-6" />
                      <Smartphone className="h-6 w-6" />
                      <span className="text-sm">PIX, Cartão, Boleto</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bonus Section */}
          <section className="py-16 sm:py-20 px-4 bg-background w-full overflow-hidden">
            <div className="max-w-4xl mx-auto mobile-padding">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
                  🎁 Receba 5 Bônus Especiais
                </h2>
                <p className="text-lg sm:text-xl text-text-secondary">
                  Além da Coleção Premium com 450+ atividades, você também
                  ganha:
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title:
                      "🧩 BÔNUS 1 - Desafios Bíblicos – 50 Caça-Palavras para Crianças",
                    description:
                      "Atividades divertidas e educativas para ajudar as crianças a fixarem passagens e personagens bíblicos. São 50 modelos exclusivos que estimulam o raciocínio e fortalecem o conhecimento bíblico de forma lúdica.",
                  },
                  {
                    title:
                      "🙏 BÔNUS 2 - Guia Infantil de Oração – Palavras que Aproximam de Deus",
                    description:
                      "Um guia simples e ilustrado com orações curtas e significativas, perfeito para ensinar os pequenos a conversar com Deus. Um recurso essencial para cultivar a fé desde cedo.",
                  },
                  {
                    title:
                      "🌱 BÔNUS 3 - Passo a Passo do Ministério Infantil – 20 Estratégias Essenciais",
                    description:
                      "Um manual prático com 20 estratégias testadas e aprovadas para iniciar ou fortalecer o seu Ministério Infantil. Descubra como engajar crianças, criar rotinas e transformar vidas através da Palavra.",
                  },
                  {
                    title:
                      "📖 BÔNUS 4 - Diário de Fé – Anotações e Orações para Crianças",
                    description:
                      "Um caderno ilustrado para que as crianças registrem aprendizados, versículos e orações após as aulas. Um jeito especial de incentivar a reflexão e manter viva a conexão com Deus.",
                  },
                  {
                    title:
                      "🎯 BÔNUS 5 - Super Quiz da Bíblia – Diversão e Aprendizado Cristão",
                    description:
                      "Um kit repleto de perguntas e respostas sobre histórias, personagens e curiosidades bíblicas. Aprender nunca foi tão divertido para as crianças e para toda a família.",
                  },
                ].map((bonus, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-card to-accent/20 rounded-3xl p-6 border-3 border-accent-purple/40 playful-shadow transform hover:scale-105 transition-all duration-300"
                  >
                    <h3 className="text-xl font-black text-text-primary mb-3 drop-shadow-md">
                      {bonus.title}
                    </h3>
                    <p className="text-text-secondary mb-4 font-semibold leading-relaxed">
                      {bonus.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="lg:w-80 lg:pt-24 px-4 lg:px-0">
          <div className="lg:sticky lg:top-24 gap-5 flex flex-col">
            <SidebarOffer
              onCTAClick={handleCTAClick}
              price={upSellPrice}
              benefits={benefitsFullPrice}
              title="👑 MAIS COMPLETO e CUSTO BENEFICIO"
              checkoutLink="https://checkout.rydigital.com.br/VCCL1O8SC6VH"
            />
            <SidebarOffer
              onCTAClick={handleCTAClick}
              price={price}
              benefits={benefitsLowestPrice}
              title="MAIS SIMPLES"
              checkoutLink="https://checkout.rydigital.com.br/VCCL1O8SC6VR"
            />
          </div>
        </div>
      </div>

      <div ref={faqRef}>
        <FAQSection onCTAClick={handleCTAClick} />
      </div>
      <Footer />

      {/* Purchase Modal */}
      <Dialog open={showPurchaseModal} onOpenChange={setShowPurchaseModal}>
        <DialogContent className="bg-background border-border max-w-md mx-4 sm:mx-auto">
          <DialogHeader>
            <DialogTitle className="text-accent-green text-lg sm:text-xl">
              🚀 Finalizar Compra
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handlePurchaseSubmit} className="space-y-4">
            <div>
              <Label
                htmlFor="name"
                className="text-text-primary text-sm sm:text-base"
              >
                Nome completo
              </Label>
              <Input
                id="name"
                type="text"
                value={purchaseData.name}
                onChange={(e) =>
                  setPurchaseData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="bg-secondary border-border text-text-primary mt-1"
                placeholder="Seu nome completo"
                required
              />
            </div>
            <div>
              <Label
                htmlFor="email"
                className="text-text-primary text-sm sm:text-base"
              >
                E-mail
              </Label>
              <Input
                id="email"
                type="email"
                value={purchaseData.email}
                onChange={(e) =>
                  setPurchaseData((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
                className="bg-secondary border-border text-text-primary mt-1"
                placeholder="seu@email.com"
                required
              />
            </div>
            <div>
              <Label
                htmlFor="whatsapp"
                className="text-text-primary text-sm sm:text-base"
              >
                WhatsApp (opcional)
              </Label>
              <Input
                id="whatsapp"
                type="tel"
                value={purchaseData.whatsapp}
                onChange={(e) =>
                  setPurchaseData((prev) => ({
                    ...prev,
                    whatsapp: e.target.value,
                  }))
                }
                className="bg-secondary border-border text-text-primary mt-1"
                placeholder="(11) 99999-9999"
              />
            </div>
            <div className="text-center pt-4">
              <p className="text-text-secondary mb-4 text-sm sm:text-base">
                Valor:{" "}
                <span className="text-accent-green font-bold text-lg sm:text-xl">
                  R$ 4,99
                </span>
              </p>
              <CTAButton
                disabled={purchaseMutation.isPending}
                className="w-full"
              >
                {purchaseMutation.isPending
                  ? "Processando..."
                  : "FINALIZAR COMPRA"}
              </CTAButton>
              <p className="text-xs text-text-secondary mt-3">
                Receba o acesso em até 5 minutos
              </p>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
