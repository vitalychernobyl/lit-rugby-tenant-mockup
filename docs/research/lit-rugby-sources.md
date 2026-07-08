# Global Rugby Directory Research Notes

Research dates: 2026-07-07 and 2026-07-08.

## Product direction

- The current mockup has been reframed from a LIT-only sevens tenant into a MiGente-like rugby community directory.
- LIT7s remains a featured operator/event family inside the broader product, not the whole product.
- "Every tournament in the world" is modeled as a product architecture: official feeds, federation links, organizer submissions, community corrections, source labels, and owner review. The static demo uses a broad seed set rather than claiming live exhaustive coverage.
- Both rugby 7s and 15s are first-class fields throughout search, event cards, team pages, tickets, registration, and submission flows.

## Official global sources checked

- `https://www.world.rugby/tournaments/fixtures-results?lang=en`
  - Used as the official fixture/result source anchor for men's and women's 15s and sevens international tournament coverage.
  - Rechecked with a 200 response on July 8, 2026.
- `https://www.svns.com/`
  - Used as the official HSBC SVNS destination and series source anchor.
  - Rechecked with a 200 response on July 8, 2026.
- `https://nationschampionshiprugby.com/`
  - Used as the official Nations Championship source anchor.
  - Rechecked with a 200 response on July 8, 2026.
- `https://usaclub.rugby/`
  - Used as the official USA Club Rugby source anchor for 7s and 15s club pathways.
  - Rechecked with a 200 response on July 8, 2026.

## Competition seed coverage

- International 15s: Men's Rugby World Cup, Women's Rugby World Cup, Six Nations, Women's Six Nations, Rugby Championship, Nations Championship, Pacific Nations Cup, WXV, Rugby Europe Championship, Asia Rugby Championship, Rugby Africa Cup, Sudamerica Rugby Championship, U20 Championship.
- Sevens: HSBC SVNS, Olympic Rugby Sevens, Rugby World Cup Sevens, Dubai 7s, LIT 7s London, LIT Super 7s Series, USA Club 7s National Championships.
- Club and provincial 15s: EPCR Champions Cup, EPCR Challenge Cup, United Rugby Championship, Premiership Rugby, Top 14, Super Rugby Pacific, Japan Rugby League One, Major League Rugby, Currie Cup, New Zealand NPC, Farah Palmer Cup, Shute Shield, USA Club Rugby XVs National Championships.
- Community and youth: Bingham Cup, Sanix World Rugby Youth Tournament, local/community clubs, organizer submissions, team profiles, and player/coach profiles.

## LIT7s sources retained

- `https://www.lit7s.com/`
  - Used for LIT operator context and public event-family positioning.
- `https://www.lit7s.com/lit-7s-london7s/`
  - Used for the LIT 7s London event route.
- `https://ticketpass.org/event/EWDVGH/lit-super-sevens-series-2026-team-entry`
  - Used as a public ticket/team-entry handoff for the LIT event family.
- `https://www.super7sseries.com`
  - Used as the LIT Super 7s Series source handoff.

## Extrapolated tenant assumptions

- Mobilis context maps to tenant operations: routing, source labels, review states, event intake, registration state, future database, and provider handoffs.
- MiGente context maps to community discovery: profiles, teams, groups, media, social proof, questions, member submissions, and persistent event memory.
- No live payment, email, database, auth, or messaging writes are enabled in this mockup.
