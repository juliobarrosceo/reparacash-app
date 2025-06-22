
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const fakeExtrato = [
  { id: 1, descricao: "+ R$ 20,00 - Compra no Mercado São José", data: "20/06/2025" },
  { id: 2, descricao: "- R$ 8,00 - Serviço técnico: Máquina de Lavar", data: "21/06/2025" },
  { id: 3, descricao: "+ R$ 12,00 - Compra no Mercado Esperança", data: "22/06/2025" },
];

const fakeNotas = [
  { id: 1, nota: "NF-001", valor: 100 },
  { id: 2, nota: "NF-002", valor: 120 },
];

export default function AppReparaCashFake() {
  const [saldo, setSaldo] = useState(32);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">ReparaCash</h1>

      <Tabs defaultValue="inicio" className="w-full">
        <TabsList className="grid grid-cols-5 mb-4 text-xs">
          <TabsTrigger value="inicio">Início</TabsTrigger>
          <TabsTrigger value="catalogo">Serviços</TabsTrigger>
          <TabsTrigger value="tecnico">Técnico</TabsTrigger>
          <TabsTrigger value="beneficios">Benefícios</TabsTrigger>
          <TabsTrigger value="conta">Conta</TabsTrigger>
        </TabsList>

        <TabsContent value="inicio">
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-xl">Seu saldo:</p>
              <p className="text-3xl font-bold text-green-600">R$ {saldo.toFixed(2)}</p>
              <Button className="mt-4 w-full">Solicitar Conserto</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="catalogo">
          <div className="space-y-2">
            <Button variant="outline" className="w-full">Máquina de Lavar</Button>
            <Button variant="outline" className="w-full">Geladeira</Button>
            <Button variant="outline" className="w-full">Micro-ondas</Button>
            <Button className="w-full mt-2">Ver Técnicos Próximos</Button>
          </div>
        </TabsContent>

        <TabsContent value="tecnico">
          <Card>
            <CardContent className="p-4">
              <img src="https://via.placeholder.com/150" alt="Técnico" className="rounded-xl mb-4" />
              <h2 className="text-xl font-bold">Carlos Técnico</h2>
              <p>Nota: ⭐ 4.8</p>
              <p>Preço: R$ 80,00</p>
              <div className="flex gap-2 mt-4">
                <Button className="w-full">Agendar Visita</Button>
                <Button variant="outline" className="w-full" onClick={() => setSaldo(saldo - 8)}>Pagar com ReparaCash</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="beneficios">
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <p className="font-bold">Cupom:</p>
                <p>10% off em panos na Loja X</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <p className="font-bold">Parceiros:</p>
                <p>Drogaria Y, Magazine Z</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="conta">
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold mb-2">Extrato de ReparaCash</h3>
                <ul className="text-sm space-y-1">
                  {fakeExtrato.map((item) => (
                    <li key={item.id}>{item.data} — {item.descricao}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold mb-2">Minhas Notas Fiscais</h3>
                <ul className="text-sm">
                  {fakeNotas.map((nf) => (
                    <li key={nf.id}>{nf.nota} - R$ {nf.valor},00</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-bold mb-2">Suporte</h3>
                <p className="text-sm">Fale com a gente no WhatsApp: (11) 91234-5678</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
