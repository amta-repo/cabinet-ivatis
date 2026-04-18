import { SeoHelmet } from "@/components/SeoHelmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PageHeader } from "@/components/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const faqCategories = [
  {
    title: "Services & Expertises",
    faqs: [
      { q: "Quels services propose Cabinet IVATIS au Bénin ?", a: "Cabinet IVATIS propose une gamme complète de services : Études d'Impact Environnemental et Social (EIES), Cadre de Gestion Environnementale et Sociale (CGES), audits environnementaux, Plans de Gestion Environnementale et Sociale (PGES), suivi environnemental de projets, formation professionnelle (HSE, secourisme, sauvegarde environnementale), études topographiques, et génie civil & BTP." },
      { q: "Qu'est-ce qu'une Étude d'Impact Environnemental et Social (EIES) ?", a: "L'EIES est une analyse systématique des impacts positifs et négatifs d'un projet sur l'environnement physique, biologique et humain. Elle inclut la description du projet, l'identification des impacts, les mesures d'atténuation, un plan de gestion et des consultations publiques. IVATIS réalise des EIES conformes aux normes de la Banque Mondiale et de la BAD." },
      { q: "Qu'est-ce qu'un audit environnemental et social ?", a: "L'audit environnemental est une évaluation indépendante vérifiant la conformité des activités d'une organisation aux exigences réglementaires et standards environnementaux. IVATIS a réalisé des audits pour la Centrale Électrique de Parakou, ORYX SA, le Port Autonome de Cotonou, la Société de Ciment du Bénin, SOBEBRA, Golden Tulip et BETRA." },
      { q: "Quelles formations propose IVATIS ?", a: "IVATIS propose des formations en : instruments de sauvegarde environnementale et sociale, sécurité incendie, secourisme, HSE (Hygiène Sécurité Environnement), accompagnement ISO 9001/14001/45001. Les formations sont disponibles en intra-entreprise et inter-entreprise." },
      { q: "IVATIS réalise-t-il des études topographiques ?", a: "Oui, IVATIS réalise des levés topographiques de haute précision avec équipement GPS RTK, du bornage et implantation, des plans parcellaires et cadastraux, des études géotechniques, de la cartographie SIG, et la maîtrise des études topographiques pour les lignes électriques BT/MT/HT." },
    ],
  },
  {
    title: "Projets & Références",
    faqs: [
      { q: "Quels sont les principaux partenaires et références d'IVATIS ?", a: "IVATIS a collaboré avec de nombreux partenaires : P2AE (Projet d'Augmentation de l'Accès à l'Énergie), CEB (Communauté Électrique du Bénin), VINCI Énergies, PASE, ACCESS, MCA Bénin, AGETUR-SA, PDVIR, PRUBA, Golden Tulip Le Diplomate, Société BETRA, PEB, et bien d'autres." },
      { q: "Dans quels secteurs IVATIS intervient-il ?", a: "IVATIS intervient dans les secteurs de l'environnement, de l'énergie, du transport, du bâtiment et voiries, du développement local, et de la formation professionnelle. L'entreprise couvre l'ensemble des projets d'infrastructure au Bénin et en Afrique de l'Ouest." },
      { q: "Combien de projets IVATIS a-t-il réalisés ?", a: "Cabinet IVATIS a réalisé plus de 200 projets depuis sa création en 2009, incluant des EIES, des audits, des PGES, des études topographiques et des projets BTP à travers le Bénin et dans la sous-région." },
    ],
  },
  {
    title: "Organisation & Contact",
    faqs: [
      { q: "Où se trouve Cabinet IVATIS ?", a: "Cabinet IVATIS est situé à Abomey-Calavi, quartier Agori St Louis, rue Général HOUNDEGNON, Parcelle 118S Immeuble BEHANZIN. BP 1495 Abomey-Calavi, République du Bénin." },
      { q: "Comment contacter Cabinet IVATIS ?", a: "Vous pouvez contacter Cabinet IVATIS par téléphone au +229 01 97 20 33 03, ou par email à ivatis.ivatis@gmail.com. Notre site web est www.cabinetivatis.com." },
      { q: "Qui dirige Cabinet IVATIS ?", a: "Cabinet IVATIS est dirigé par Dr. WOKOU Cossi Guy, spécialiste des évaluations environnementales, titulaire d'un Doctorat. L'équipe permanente compte 17 professionnels, complétée par des consultants et prestataires selon les besoins." },
      { q: "Depuis quand Cabinet IVATIS existe-t-il ?", a: "Cabinet IVATIS a été créé en 2009. Avec plus de 15 ans d'expérience, il est devenu un leader dans les études environnementales au Bénin, reconnu pour son expertise, son éthique et son engagement pour le développement durable." },
    ],
  },
  {
    title: "Normes & Conformité",
    faqs: [
      { q: "Quelles normes internationales IVATIS respecte-t-il ?", a: "IVATIS travaille en conformité avec les standards de la Banque Mondiale, de la Banque Africaine de Développement (BAD), et les normes nationales béninoises. L'entreprise accompagne également les organisations dans la mise en place ISO 9001, ISO 14001 et ISO 45001." },
      { q: "Qu'est-ce qu'un PGES et pourquoi est-il important ?", a: "Le Plan de Gestion Environnementale et Sociale (PGES) est un document opérationnel qui traduit les résultats de l'EIES en actions concrètes : mesures d'atténuation, programme de surveillance, plan de suivi, responsabilités et calendrier de mise en œuvre. Il est obligatoire pour tout projet à impact environnemental significatif." },
    ],
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <SeoHelmet
        title="FAQ Cabinet IVATIS | Questions sur EIES, PGES, Audit Environnemental, Topographie au Bénin"
        description="Réponses aux questions fréquentes sur les services de Cabinet IVATIS : EIES, PGES, CGES, audits environnementaux, topographie, BTP et formations HSE au Bénin."
        canonical="/faq"
        keywords="FAQ EIES Bénin, questions audit environnemental, PGES questions, Cabinet IVATIS FAQ"
      />
      <Header />
      <WhatsAppButton />

      <PageHeader
        eyebrow="Questions Fréquentes"
        title="Foire Aux Questions"
        description="Retrouvez les réponses aux questions les plus fréquentes sur nos services d'ingénierie environnementale, de topographie et de BTP au Bénin."
      />

      {/* FAQ Content */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              custom={catIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mb-12"
            >
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6 border-l-4 border-primary pl-4">
                {category.title}
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                {category.faqs.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`${catIndex}-${faqIndex}`}
                    className="bg-card border border-border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-black text-3xl text-primary-foreground mb-4">
            Vous avez d'autres questions ?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            N'hésitez pas à nous contacter directement, notre équipe est à votre disposition.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-md font-heading font-bold text-sm hover:brightness-110 transition-all"
          >
            Contactez-Nous <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
