import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { HeroSection } from "@/components/hero-section";
import { PricingSection } from "@/components/pricing-section";
import { BenefitsSection } from "@/components/benefits-section";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { CTAButton } from "@/components/cta-button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, TriangleAlert, Info } from "lucide-react";

export default function Home() {
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [purchaseData, setPurchaseData] = useState({
    email: "",
    name: ""
  });
  const { toast } = useToast();

  const purchaseMutation = useMutation({
    mutationFn: async (data: { email: string; name: string; amount: string }) => {
      const response = await apiRequest("POST", "/api/purchase", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Redirecionando para pagamento...",
        description: "Você será redirecionado para completar sua compra.",
      });
      // In a real implementation, this would redirect to the payment processor
      console.log("Payment link:", data.paymentLink);
      setShowPurchaseModal(false);
    },
    onError: (error: any) => {
      toast({
        title: "Erro ao processar compra",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
    }
  });

  const handleCTAClick = () => {
    setShowPurchaseModal(true);
  };

  const handlePurchaseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!purchaseData.email || !purchaseData.name) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    purchaseMutation.mutate({
      ...purchaseData,
      amount: "14.99"
    });
  };

  return (
    <div className="min-h-screen bg-dark-primary text-text-primary">
      <HeroSection onCTAClick={handleCTAClick} />
      <PricingSection onCTAClick={handleCTAClick} />
      <BenefitsSection />
      
      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-dark-secondary/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-dark-secondary/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-dark-tertiary"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="text-2xl">🤑</span> É MAIS BARATO DO QUE UM LANCHE... E MUITO MAIS GOSTOSO!
            </h2>
            
            <div className="mb-8">
              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                Tudo isso e Muito Mais
                <br />
                Por Apenas <span className="text-accent-green">R$14,99</span> 
                <span className="text-2xl"> 🤑</span>
              </h3>
              <p className="text-text-secondary text-lg mb-8">
                (pagamento único!) <span className="text-accent-green">🔥</span>
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <CTAButton onClick={handleCTAClick}>
                Quero Meu Acesso AGORA!
              </CTAButton>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-dark-primary/50 rounded-xl p-6 mb-8"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Check className="text-accent-green h-5 w-5" />
                  <span className="text-text-primary">Acesso imediato e privado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="text-accent-green h-5 w-5" />
                  <span className="text-text-primary">Sem mensalidade</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="text-accent-green h-5 w-5" />
                  <span className="text-text-primary">Totalmente seguro e anônimo</span>
                </div>
              </div>
            </motion.div>
            
            <div className="mb-8">
              <p className="text-accent-green font-bold text-xl mb-4">
                <TriangleAlert className="mr-2 inline h-5 w-5" />
                NÃO PERCA TEMPO! AS VAGAS SÃO LIMITADAS!
              </p>
              <p className="text-text-secondary">
                <Info className="mr-2 inline h-4 w-4" />
                Clique no botão abaixo, garanta seu acesso agora e desbloqueie o conteúdo mais proibido da internet.
              </p>
            </div>
            
            <CTAButton onClick={handleCTAClick}>
              Quero Meu Acesso AGORA!
            </CTAButton>
          </motion.div>
        </div>
      </section>

      <FAQSection onCTAClick={handleCTAClick} />
      <Footer />

      {/* Purchase Modal */}
      <Dialog open={showPurchaseModal} onOpenChange={setShowPurchaseModal}>
        <DialogContent className="bg-dark-secondary border-dark-tertiary">
          <DialogHeader>
            <DialogTitle className="text-accent-green text-xl">
              🚀 Finalize sua compra
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handlePurchaseSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-text-primary">Nome completo</Label>
              <Input
                id="name"
                type="text"
                value={purchaseData.name}
                onChange={(e) => setPurchaseData(prev => ({ ...prev, name: e.target.value }))}
                className="bg-dark-tertiary border-dark-tertiary text-text-primary"
                placeholder="Seu nome completo"
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-text-primary">E-mail</Label>
              <Input
                id="email"
                type="email"
                value={purchaseData.email}
                onChange={(e) => setPurchaseData(prev => ({ ...prev, email: e.target.value }))}
                className="bg-dark-tertiary border-dark-tertiary text-text-primary"
                placeholder="seu@email.com"
                required
              />
            </div>
            <div className="text-center pt-4">
              <p className="text-text-secondary mb-4">
                Valor: <span className="text-accent-green font-bold text-xl">R$ 14,99</span>
              </p>
              <CTAButton 
                onClick={() => {}}
                disabled={purchaseMutation.isPending}
                className="w-full"
              >
                {purchaseMutation.isPending ? "Processando..." : "Finalizar Compra"}
              </CTAButton>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
