# Lecture 5

## Pro tips

- As step one concludes, consider how important writing docs might be. If we use LLMs to assist in coding, eventually, clear plans and docs are going to be integral to our
success
- Computer Science = Perfections
- Engineers = Satisfies our current solution
  - Captures our assumptions

### Exploratory coding
- Explain a problem to an LLM for ideas and how to do it
>[!WARNING] Exploratory work is not meant to be adopted as production code. You are
encouraged to keep it separate from what you build or even get rid of it.

## General
- MERMAID: Markdown diagram tool
  - Sometimes as code developes, developers do not necessairly update their readme
  - Mermaid uses your code as you update it.

## Server

Client Side:
- i.e. Chrome
- Fast
- Unsafe
- Uncontrollable

Network
- 

Server Side
- i.e. Node.Js
- Import vs Require
  - Cannot run requre on the clientside
  - Need to refactor 
- Slow
- Safe
- Controllable

Types of Models
- Thin Client Model:
  - Collects and displays data
  - Server side heavy
  - Slow
- Fat Client Model:
  - A lot of code running on browser, local system
  - Fast
  - Cannot rely on code working

## Dependencies

- Dev Dependencies are dev tools
  - Dangerous
- Regular Dependencies: Used as a tool and as well as regular code
  - Very Dangerous
  - Things going into your code
  - If hacks codebase / alters. Will alter your code directly

## ADR Structure
- MADR format
- Many templates
- Caputre big decisions and show your work
- i.e. client vs server app ran using ______ for reasons
> ADRs should be written before we work and not afterward as some justification of our choices. In academic settings that require ADRs, we would check to make sure they are present in a repo before coding

> SWE practices cosplay is strictly not allowed and will result in a zero on the
step if seen.