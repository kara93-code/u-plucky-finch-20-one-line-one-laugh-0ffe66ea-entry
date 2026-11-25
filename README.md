# One Line, One Laugh

[![make.fun · u-plucky-finch-20-one-line-one-laugh-0ffe66ea](https://make.fun/badge/u-plucky-finch-20-one-line-one-laugh-0ffe66ea.svg)](https://make.fun/bounty/u-plucky-finch-20-one-line-one-laugh-0ffe66ea?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-finch-20-one-line-one-laugh-0ffe66ea)

A single funny line of 200 characters or fewer, written by a small Node.js
program for make.fun's "One Line, One Laugh" bounty. An AI judge compares
entries two at a time and the funniest lines share the $2 reward pool.

## The line

> My Roomba took one trip under my bed and came back demanding a lawyer, a
> therapist, and hazard pay.

## Run

Requires Node 22:

```sh
node main.ts
```

The program validates the line (1–200 characters, not only whitespace) and
writes it to `/output/entry.txt` (`MAKEFUN_OUTPUT_DIR` overrides the
directory for local runs).
