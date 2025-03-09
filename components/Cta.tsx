import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 md:py-24 mx-auto">
      <div className="container px-4 mx-auto md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgTCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

          <div className="relative grid gap-6 lg:grid-cols-2 items-center">
            <div className="p-8 md:p-12 flex flex-col items-start text-left text-white">
              <div className="inline-flex items-center rounded-full border border-primary-foreground/10 bg-primary-foreground/10 px-3 py-1 text-sm font-medium mb-6">
                <Sparkles className="mr-1 h-3 w-3" />
                <span>Comece agora mesmo</span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Transforme sua forma de estudar com o AcertaAí
              </h2>

              <p className="mt-4 text-primary-foreground/80 text-balance max-w-md">
                Junte-se a milhares de estudantes que já estão aproveitando o
                poder da inteligência artificial para potencializar seus
                estudos.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button className="group bg-white text-primary hover:bg-white/90">
                  Começar Gratuitamente
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>

                <Button
                  variant="outline"
                  className="bg-transparent border-white/20 text-white hover:bg-white/10">
                  Ver Demonstração
                </Button>
              </div>
            </div>

            <div className="relative hidden lg:flex justify-center p-8">
              <div className="relative aspect-square w-full max-w-sm rounded-2xl bg-white/5 p-2 shadow-lg backdrop-blur-sm">
                <div className="absolute -top-12 -left-12 animate-float">
                  <div className="rounded-xl bg-white/10 backdrop-blur-md p-4 shadow-lg">
                    <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-500" />
                    </div>
                    <p className="mt-2 text-xs font-medium text-white">
                      Questão correta!
                    </p>
                  </div>
                </div>

                <div
                  className="absolute -bottom-8 -right-8 animate-float"
                  style={{ animationDelay: '1s' }}>
                  <div className="rounded-xl bg-white/10 backdrop-blur-md p-4 shadow-lg">
                    <div className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-primary-foreground/20 flex items-center justify-center mr-2">
                        <Trophy className="h-3 w-3 text-yellow-400" />
                      </div>
                      <p className="text-xs font-medium text-white">
                        Nível 2 alcançado!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-full w-full rounded-xl bg-white/10 p-6 backdrop-blur-md animate-pulse-soft">
                  <div className="space-y-4">
                    <div className="h-5 w-4/5 rounded-md bg-white/20"></div>
                    <div className="h-5 w-3/5 rounded-md bg-white/20"></div>
                    <div className="h-20 w-full rounded-md bg-white/10"></div>
                    <div className="space-y-2">
                      <div className="h-10 w-full rounded-md bg-white/15"></div>
                      <div className="h-10 w-full rounded-md bg-white/15"></div>
                      <div className="h-10 w-full rounded-md bg-white/15"></div>
                    </div>
                    <div className="flex justify-end">
                      <div className="h-10 w-24 rounded-full bg-white/20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

// Needed but wasn't imported
const Check = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Trophy = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);
