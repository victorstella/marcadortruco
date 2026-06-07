# Marcador de Truco

Marcador de placar para partidas de Truco, feito com Next.js 15, React 19 e Tailwind CSS. Funciona no celular e no desktop — sem instalação, sem cadastro e sem coleta de dados.

## Como usar

### Placar

O placar fica no centro da tela. À esquerda está **Nós**, à direita **Eles**. O jogo vai de 0 a 12 pontos.

| Botão            | O que faz                                    |
| ---------------- | -------------------------------------------- |
| **Rodada Nossa** | Adiciona os pontos da rodada atual para Nós  |
| **Rodada Deles** | Adiciona os pontos da rodada atual para Eles |
| **Zerar**        | Reseta o placar completamente                |

### Truco

Os dois botões de truco ficam na parte inferior — um para cada lado. Quem quer trucar clica no seu botão. O sistema garante que o truco seja alternado: quem trucou deve esperar o adversário aumentar para poder aumentar também.

| Sequência | Pontos em jogo |
| --------- | -------------- |
| TRUCO!    | 3              |
| SEIS!     | 6              |
| NOVE!     | 9              |
| DOZE!     | 12             |

Depois que alguém truca, aparece o botão **Correr** para o adversário. Se correr, quem trucou leva os pontos da aposta anterior.

### Mão de 11

Se um time chega a 11 pontos e o adversário vence a rodada, o adversário leva **3 pontos** em vez de 1. Regra aplicada automaticamente.

### Fim de jogo

Ao chegar em 12 pontos, um modal aparece anunciando o vencedor. Feche o modal para começar uma nova partida com o placar zerado.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Stack

- [Next.js 15](https://nextjs.org/) — framework
- [React 19](https://react.dev/) — UI
- [Tailwind CSS 4](https://tailwindcss.com/) — estilo
- [shadcn/ui](https://ui.shadcn.com/) — componentes
- [Lucide React](https://lucide.dev/) — ícones
