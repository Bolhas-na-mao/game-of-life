# ⬜ Jogo da Vida

> Línguas: **Português (BR)** | [English](README.en.md)

O **Jogo da Vida** não é bem um jogo, ninguém ganha, ninguém perde, e você nem controla diretamente as peças. Ele é uma **simulação** criada pelo matemático **[John Horton Conway](https://pt.wikipedia.org/wiki/John_Horton_Conway)** em 1970.

## Como funciona?

O mundo é uma grade de quadradinhos (as "células").

Cada célula pode estar em um de dois estados:

- **Viva** → um quadrado aceso.
- **Morta** → um quadrado apagado.

O tempo passa em **rodadas** (ou "gerações"). A cada rodada, todas as células são atualizadas de acordo com as mesmas regras.

## As regras

As atualizações acontecem **simultaneamente** para todas as células a cada geração, considerando as **8 vizinhas ao redor** (vizinhança de Moore).

1. Uma célula viva com menos de **2 vizinhas vivas** morre (isolada).
2. Uma célula viva com mais de **3 vizinhas vivas** morre (superlotada).
3. Uma célula viva com **2 ou 3 vizinhas vivas** continua viva.
4. Uma célula morta com exatamente **3 vizinhas vivas** se torna viva (nasce).

## Padrões clássicos pra testar

- **Bloco** → um quadrado 2x2 que nunca muda. [(LifeWiki: Block)](https://conwaylife.com/wiki/Block)
- **Blinker** → três células em linha que oscilam pra sempre. [(LifeWiki: Blinker)](https://conwaylife.com/wiki/Blinker)
- **Glider** → um padrão que "caminha" pela tela. [(LifeWiki: Glider)](https://conwaylife.com/wiki/Glider)

## Por que brincar com isso?

Porque é viciante ver ordem surgir do caos. Porque dá pra entender conceitos de **sistemas complexos, autômatos celulares e até biologia**. E porque, sinceramente, é divertido perder alguns minutos vendo um monte de quadradinhos dançando.

## Para saber mais

- [Conway's Game of Life - Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
- [LifeWiki - Enciclopédia de padrões](https://conwaylife.com/wiki/)
- [Artigo original de Conway](https://web.stanford.edu/class/sts145/Library/life.pdf)

_"O universo é não apenas mais estranho do que imaginamos, mas mais estranho do que podemos imaginar."_ - J.B.S. Haldane
