import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Header } from "../components/header";
import { NewHeroSection } from "../components/new-hero-section";
import { TargetAudienceSection } from "../components/target-audience-section";
import { ContentExamplesSection } from "../components/content-examples-section";
import { TestimonialsSection } from "../components/testimonials-section";
import { SidebarOffer } from "../components/sidebar-offer";
import { FAQSection } from "../components/faq-section";
import { Footer } from "../components/footer";
import { CTAButton } from "../components/cta-button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Smartphone, Check } from "lucide-react";

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
    whatsapp: ""
  });
  
  const faqRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const purchaseMutation = useMutation({
    mutationFn: async (data: PurchaseData) => {
      const response = await fetch('/api/purchases', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        throw new Error('Falha ao processar compra');
      }
      
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "🎉 Compra realizada com sucesso!",
        description: "Você receberá as instruções de acesso por email em breve.",
      });
      
      if (data.paymentUrl) {
        window.location.href = data.paymentUrl;
      }
      
      setShowPurchaseModal(false);
      setPurchaseData({ name: "", email: "", whatsapp: "" });
      queryClient.invalidateQueries({ queryKey: ['/api/purchases'] });
    },
    onError: (error: any) => {
      toast({
        title: "❌ Erro na compra",
        description: error.message || "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    }
  });

  const handleCTAClick = () => {
    setShowPurchaseModal(true);
  };

  const handleFAQClick = () => {
    faqRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePurchaseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    purchaseMutation.mutate(purchaseData);
  };

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <Header onBuyClick={handleCTAClick} onFAQClick={handleFAQClick} />
      
      <div className="lg:flex lg:space-x-8 lg:max-w-7xl lg:mx-auto lg:px-4">
        <div className="lg:flex-1">
          <NewHeroSection onCTAClick={handleCTAClick} />
          <TargetAudienceSection />
          <ContentExamplesSection />
          <TestimonialsSection />
          
          {/* Bonus Section */}
          <section className="py-16 sm:py-20 px-4 bg-background">
            <div className="max-w-4xl mx-auto mobile-padding">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
                  🎁 Bônus Exclusivos
                </h2>
                <p className="text-lg sm:text-xl text-text-secondary">
                  Além de todo o conteúdo premium, você também ganha:
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Pack de Boas-Vindas",
                    description: "50 fotos exclusivas disponíveis imediatamente após a compra",
                    value: "R$ 19,99"
                  },
                  {
                    title: "Acesso Prioritário",
                    description: "Seja o primeiro a ver os novos conteúdos antes de todos",
                    value: "R$ 9,99"
                  }
                ].map((bonus, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="bg-accent-green/10 border border-accent-green/30 rounded-2xl p-6"
                  >
                    <h3 className="text-xl font-bold text-text-primary mb-2">
                      {bonus.title}
                    </h3>
                    <p className="text-text-secondary mb-4">
                      {bonus.description}
                    </p>
                    <p className="text-accent-green font-bold">
                      Valor: {bonus.value} - GRÁTIS
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Checkout Section */}
          <section className="py-16 sm:py-20 px-4 bg-secondary/30">
            <div className="max-w-4xl mx-auto mobile-padding">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-text-primary">
                  💳 Finalizar Compra
                </h2>
                <p className="text-lg sm:text-xl text-text-secondary mb-8">
                  Após o pagamento, você receberá acesso imediato por email
                </p>
              </motion.div>

              <div className="max-w-2xl mx-auto">
                <div className="bg-background/80 rounded-2xl p-6 sm:p-8 border border-border">
                  <div className="text-center mb-6">
                    <div className="text-4xl sm:text-5xl font-bold text-text-primary mb-2">
                      R$ <span className="text-accent-green">14,99</span>
                    </div>
                    <p className="text-text-secondary">Pagamento único - Sem mensalidades</p>
                  </div>

                  <CTAButton 
                    onClick={handleCTAClick}
                    className="w-full text-lg py-4 mb-6"
                  >
                    🚀 COMPRAR AGORA
                  </CTAButton>

                  <div className="text-center">
                    <p className="text-sm text-text-secondary mb-4">Meios de pagamento aceitos:</p>
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
        </div>

        <div className="lg:w-80 lg:pt-24 px-4 lg:px-0">
          <div className="lg:sticky lg:top-24">
            <SidebarOffer onCTAClick={handleCTAClick} />
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
              <Label htmlFor="name" className="text-text-primary text-sm sm:text-base">Nome completo</Label>
              <Input
                id="name"
                type="text"
                value={purchaseData.name}
                onChange={(e) => setPurchaseData(prev => ({ ...prev, name: e.target.value }))}
                className="bg-secondary border-border text-text-primary mt-1"
                placeholder="Seu nome completo"
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-text-primary text-sm sm:text-base">E-mail</Label>
              <Input
                id="email"
                type="email"
                value={purchaseData.email}
                onChange={(e) => setPurchaseData(prev => ({ ...prev, email: e.target.value }))}
                className="bg-secondary border-border text-text-primary mt-1"
                placeholder="seu@email.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="whatsapp" className="text-text-primary text-sm sm:text-base">WhatsApp (opcional)</Label>
              <Input
                id="whatsapp"
                type="tel"
                value={purchaseData.whatsapp}
                onChange={(e) => setPurchaseData(prev => ({ ...prev, whatsapp: e.target.value }))}
                className="bg-secondary border-border text-text-primary mt-1"
                placeholder="(11) 99999-9999"
              />
            </div>
            <div className="text-center pt-4">
              <p className="text-text-secondary mb-4 text-sm sm:text-base">
                Valor: <span className="text-accent-green font-bold text-lg sm:text-xl">R$ 14,99</span>
              </p>
              <CTAButton 
                onClick={() => {}}
                disabled={purchaseMutation.isPending}
                className="w-full"
              >
                {purchaseMutation.isPending ? "Processando..." : "Finalizar Compra"}
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