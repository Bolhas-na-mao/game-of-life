# ⬜ Game of Life

> Languages: [Português (BR)](README.md) | **English**

The **Game of Life** isn't really a game, nobody wins, nobody loses, and you don't even directly control the pieces. It's a **simulation** created by mathematician **[John Horton Conway](https://en.wikipedia.org/wiki/John_Horton_Conway)** in 1970.

## How does it work?

The world is a grid of little squares (the "cells").

Each cell can be in one of two states:

- **Alive** → a lit square.
- **Dead** → a dark square.

Time passes in **rounds** (or "generations"). Each round, all cells are updated according to the same rules.

## The rules

Updates happen **simultaneously** for all cells each generation, considering the **8 surrounding neighbors** (Moore neighborhood).

1. A living cell with fewer than **2 living neighbors** dies (isolation).
2. A living cell with more than **3 living neighbors** dies (overpopulation).
3. A living cell with **2 or 3 living neighbors** stays alive.
4. A dead cell with exactly **3 living neighbors** becomes alive (birth).

## What you can do

- **Draw patterns** on the grid by clicking to turn on living cells.
- **Hit play** and watch how the population evolves.
- **Test weird combinations**, some become stable, others explode into chaos.

## Some classics to test

- **Block** → a 2x2 square that never changes. [(LifeWiki: Block)](https://conwaylife.com/wiki/Block)
- **Blinker** → three cells in a line that oscillate forever. [(LifeWiki: Blinker)](https://conwaylife.com/wiki/Blinker)
- **Glider** → a pattern that "walks" across the screen. [(LifeWiki: Glider)](https://conwaylife.com/wiki/Glider)

## To learn more

- [Conway's Game of Life - Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
- [LifeWiki - Pattern Encyclopedia](https://conwaylife.com/wiki/)
- [Conway's original article](https://web.stanford.edu/class/sts145/Library/life.pdf)

_"The universe is not only queerer than we suppose, but queerer than we can suppose."_ - J.B.S. Haldane
