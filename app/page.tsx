'use client';
import TopBar from '@/components/TopBar';
import CTA from '@/components/Cta';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  BookOpenText,
  Brain,
  ChartLine,
  Youtube,
  Star,
  Check,
} from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="mb-10">
      <TopBar />
      <main className="flex flex-col gap-18 mt-10">
        {/* Hero */}
        <section className="mx-auto px-4 flex flex-col gap-5 items-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
              Estude de forma{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                inteligente e personalizada
              </span>
            </h1>
            <p className="text-gray-400 text-center">
              O AcertaAí utiliza inteligência artificial para criar questões
              personalizadas baseadas no seu nível e conteúdo, tornando seus
              estudos mais eficientes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button className="text-white">Começar Gratuitamente</Button>
            <Button variant="outline" className="border-primary text-primary">
              Conhecer Planos
            </Button>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto px-4 flex flex-col gap-5 items-center">
          <p className="bg-primary text-white rounded-full px-4 py-1 uppercase tracking-wider">
            Funcionalidades
          </p>
          <h1 className="text-2xl font-bold text-center">
            Tudo o que você precisa para{' '}
            <span className="text-primary">acelerar seu aprendizado!</span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 w-full max-w-6xl mx-auto">
            <Card className="w-full min-w-[250px] max-w-[310px] h-[250px] mx-auto sm:mx-0">
              <CardHeader>
                <BookOpenText
                  color="#fff"
                  size={42}
                  className="bg-primary p-1 rounded-full"
                />
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-center">
                  Gerador de Questões
                </p>
                <p className="text-center text-gray-500">
                  Questões personalizadas baseadas no seu nível e contexto
                </p>
              </CardContent>
            </Card>
            <Card className="w-full min-w-[250px] max-w-[310px] h-[250px] mx-auto sm:mx-0">
              <CardHeader>
                <Youtube
                  color="#fff"
                  size={42}
                  className="bg-primary p-1 rounded-full"
                />
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-center">
                  Questões de Vídeoaulas
                </p>
                <p className="text-center text-gray-500">
                  Envie o link de uma videoaula e receba questões baseadas no
                  conteúdo apresentado.
                </p>
              </CardContent>
            </Card>
            <Card className="w-full min-w-[250px] max-w-[310px] h-[250px] mx-auto sm:mx-0">
              <CardHeader>
                <ChartLine
                  color="#fff"
                  size={42}
                  className="bg-primary p-1 rounded-full"
                />
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-center">
                  Tracker de Desempenho
                </p>
                <p className="text-center text-gray-500">
                  Monitore seu progresso e identifique pontos de melhoria
                </p>
              </CardContent>
            </Card>
            <Card className="w-full min-w-[250px] max-w-[310px] h-[250px] mx-auto sm:mx-0">
              <CardHeader>
                <Brain
                  color="#fff"
                  size={42}
                  className="bg-primary p-1 rounded-full"
                />
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-center">
                  Correção de Redações por IA
                </p>
                <p className="text-center text-gray-500">
                  Avaliação automática de redações com 90% de precisão para
                  identificar melhorias.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="mx-auto px-4 flex flex-col gap-5 items-center">
          <div className="mx-auto text-center">
            <p className="bg-primary inline text-white rounded-full px-4 py-1 uppercase tracking-wider">
              Depoimentos
            </p>
            <h1 className="text-3xl font-bold text-center my-4">
              O que nossos <span className="text-primary">usuários dizem</span>
            </h1>
            <p className="text-gray-500">
              Estudantes de todo o Brasil já transformaram sua forma de estudar
              com o AcertaAí.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card className="gap-4 w-full max-w-sm mx-auto">
              <CardHeader className="flex flex-row gap-1">
                <Star color="#FF4C00" fill="#FF4C00" size={24} />
                <Star color="#FF4C00" fill="#FF4C00" size={24} />
                <Star color="#FF4C00" fill="#FF4C00" size={24} />
                <Star color="#FF4C00" fill="#FF4C00" size={24} />
                <Star color="#FF4C00" fill="#FF4C00" size={24} />
              </CardHeader>
              <CardContent>
                <p>
                  O AcertaAí transformou minha forma de estudar para o
                  vestibular. A ferramenta de geração de questões personalizadas
                  é incrível e me ajudou a identificar lacunas no meu
                  conhecimento que eu nem sabia que existiam.
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex flex-row gap-2 items-center">
                  <Image
                    className="w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                    alt=""
                    width={40}
                    height={40}
                  />
                  <div>
                    <p className="font-semibold">João Silva</p>
                    <p className="text-gray-500">Estudante de Engenharia</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card className="gap-4 w-full max-w-sm mx-auto">
              <CardHeader className="flex flex-row gap-1">
                <Star color="#FF4C00" fill="#FF4C00" size={24} />
                <Star color="#FF4C00" fill="#FF4C00" size={24} />
                <Star color="#FF4C00" fill="#FF4C00" size={24} />
                <Star color="#FF4C00" fill="#FF4C00" size={24} />
                <Star color="#FF4C00" fill="#FF4C00" size={24} />
              </CardHeader>
              <CardContent>
                <p>
                  Os cronogramas personalizados e o sistema de gamificação me
                  mantêm motivado. Consigo estudar por mais tempo sem me sentir
                  cansado e vejo meu progresso de forma tangível a cada semana.
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex flex-row gap-2 items-center">
                  <Image
                    className="w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                    alt=""
                    width={40}
                    height={40}
                  />
                  <div>
                    <p className="font-semibold">Carlos Eduardo</p>
                    <p className="text-gray-500">Estudante de Medicina</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card className="gap-4 w-full max-w-sm mx-auto">
              <CardHeader className="flex flex-row gap-1">
                <Star color="#FF4C00" fill="#FF4C00" size={24} />
                <Star color="#FF4C00" fill="#FF4C00" size={24} />
                <Star color="#FF4C00" fill="#FF4C00" size={24} />
                <Star color="#FF4C00" fill="#FF4C00" size={24} />
                <Star color="#FF4C00" fill="#FF4C00" size={24} />
              </CardHeader>
              <CardContent>
                <p>
                  A correção de redações é sensacional. Recebi feedback
                  detalhado que nenhum professor havia me dado antes. Melhorei
                  minha nota em 20% em apenas um mês de uso.
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex flex-row gap-2 items-center">
                  <Image
                    className="w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                    alt=""
                    width={40}
                    height={40}
                  />
                  <div>
                    <p className="font-semibold">Gabriela Martins</p>
                    <p className="text-gray-500">Estudante de Direito</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Princing */}
        <section className="mx-auto px-4 flex flex-col gap-5 items-center">
          <div className="text-center">
            <p className="bg-primary inline text-white rounded-full px-4 py-1 uppercase tracking-wider">
              Planos e Preços
            </p>
            <h1 className="text-4xl font-bold text-center my-4">
              Escolha o plano{' '}
              <span className="text-primary">ideal para voce!</span>
            </h1>
            <p className="text-gray-500 my-4">
              Oferecemos opções para todos os perfis de estudantes, desde
              iniciantes até os mais avançados.
            </p>
          </div>
          <div className="w-full grid grid-col gap-5 sm:grid-cols-2 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Start</CardTitle>
                <CardDescription className="text-gray-500 font-semibold">
                  Comece a estudar de forma mais eficiente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold mb-4">Gratuito</p>
                <div className="flex flex-col gap-2">
                  <p className="flex items-center gap-2">
                    <Check color="green" />
                    Gerador de questões básicas
                  </p>
                  <p className="flex items-center gap-2">
                    <Check color="green" />
                    Resumo e anotações
                  </p>
                  <p className="flex items-center gap-2">
                    <Check color="green" />
                    Questões baseadas em vídeos do YouTube
                  </p>
                  <p className="flex items-center gap-2">
                    <Check color="#d9d9d9" />
                    <span className="text-gray-500">Correção de redações</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Check color="#d9d9d9" />
                    <span className="text-gray-500">Tracker de desempenho</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Check color="#d9d9d9" />
                    <span className="text-gray-500">Gamificação</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Check color="#d9d9d9" />
                    <span className="text-gray-500">
                      Cronogramas personalizados
                    </span>
                  </p>
                </div>
              </CardContent>
              <CardFooter className="mx-auto">
                <Button variant="outline">Começar Gratis</Button>
              </CardFooter>
            </Card>
            <Card className="bg-[#ff4d00da] ">
              <CardHeader>
                <CardTitle className="text-4xl text-white">VIP</CardTitle>
                <CardDescription className="text-gray-100 font-semibold">
                  Tenha acesso a recursos exclusivos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-4 tracking-wide text-green-500">
                  R$ 29,90
                </p>
                <div className="flex flex-col gap-2">
                  <p className="flex items-center gap-2 text-white">
                    <Check color="green" />
                    Gerador de questões básicas
                  </p>
                  <p className="flex items-center gap-2 text-white">
                    <Check color="green" />
                    Resumo e anotações
                  </p>
                  <p className="flex items-center gap-2 text-white">
                    <Check color="green" />
                    Questões baseadas em vídeos do YouTube
                  </p>
                  <p className="flex items-center gap-2 text-white">
                    <Check color="green" />
                    <span>Correção de redações</span>
                  </p>
                  <p className="flex items-center gap-2 text-white">
                    <Check color="green" />
                    <span>Tracker de desempenho</span>
                  </p>
                  <p className="flex items-center gap-2 text-white">
                    <Check color="green" />
                    <span>Gamificação</span>
                  </p>
                  <p className="flex items-center gap-2 text-white">
                    <Check color="#d9d9d9" />
                    <span className="text-gray-300">
                      Cronogramas personalizados
                    </span>
                  </p>
                </div>
              </CardContent>
              <CardFooter className="mx-auto w-full">
                <Button className="text-white w-full flex">
                  Começar Gratis
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-4xl">PREMIUM</CardTitle>
                <CardDescription className="text-gray-500 font-semibold">
                  Maximize seu potencial de aprendizado
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-4 tracking-wide text-green-500">
                  R$ 39,90
                </p>
                <div className="flex flex-col gap-2">
                  <p className="flex items-center gap-2">
                    <Check color="green" />
                    Gerador de questões básicas
                  </p>
                  <p className="flex items-center gap-2">
                    <Check color="green" />
                    Resumo e anotações
                  </p>
                  <p className="flex items-center gap-2">
                    <Check color="green" />
                    Questões baseadas em vídeos do YouTube
                  </p>
                  <p className="flex items-center gap-2">
                    <Check color="green" />
                    <span>Correção de redações</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Check color="green" />
                    <span>Tracker de desempenho</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Check color="green" />
                    <span>Gamificação</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Check color="green" />
                    <span>Cronogramas personalizados</span>
                  </p>
                </div>
              </CardContent>
              <CardFooter className="mx-auto w-full">
                <Button className="text-white w-full flex">
                  Começar Gratis
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto px-4 flex flex-col gap-5 items-center">
          <div className="mx-auto text-center">
            <p className="bg-primary inline text-white rounded-full px-4 py-1 uppercase tracking-wider">
              FAQ
            </p>
            <h1 className="text-3xl font-bold text-center my-4">
              Tire suas <span className="text-primary">dúvidas</span>
            </h1>
            <p className="text-gray-500">
              Encontre respostas para as perguntas mais comuns sobre o AcertaAí.
            </p>
            <div className="mx-auto ">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Como o AcertaAí gera questões personalizadas?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>
                      O AcertaAí utiliza inteligência artificial avançada para
                      analisar seu perfil de aprendizado, histórico de respostas
                      e nível de conhecimento. Com base nesses dados, nosso
                      sistema gera questões que são perfeitamente adequadas ao
                      seu momento atual de aprendizado, garantindo que você seja
                      desafiado na medida certa.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    Como funciona a geração de questões a partir de vídeos do
                    YouTube?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Basta colar o link de uma videoaula do YouTube na
                      plataforma. Nossa IA analisa o conteúdo do vídeo, extrai
                      os conceitos principais e gera questões relevantes para
                      testar sua compreensão. Essa funcionalidade é perfeita
                      para complementar seus estudos com videoaulas.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Como funciona a geração de questões a partir de vídeos do
                    YouTube?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Nossa tecnologia de correção de redações possui mais de
                      90% de precisão quando comparada à correção humana. O
                      sistema foi treinado com milhares de redações avaliadas
                      por especialistas e segue rigorosamente os critérios das
                      principais bancas examinadoras do país.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    O AcertaAí funciona para qualquer disciplina ou matéria?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Sim! O AcertaAí foi desenvolvido para atender estudantes
                      de diversas áreas do conhecimento, desde ciências exatas
                      até humanas. Nossa plataforma abrange conteúdos do ensino
                      médio, vestibulares, ENEM e principais concursos públicos.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section>
          <CTA />
        </section>
      </main>

      <footer className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-sm">
                  A
                </div>
                <span className="text-lg font-bold">AcertaAí</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                Transformando a forma de estudar com inteligência artificial,
                personalização e gamificação.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">Funcionalidades</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    Gerador de Questões
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    Correção de Redações
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    Tracker de Desempenho
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    Cronogramas de Estudo
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    Carreiras
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    Termos de Serviço
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    Política de Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} AcertaAí. Todos os direitos
              reservados.
            </p>

            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
