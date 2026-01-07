# Testing Report

## Izmantotie rīki
- **Jest** – vienību (unit) testi
- **Supertest** – API / integrācijas testi (minimālā līmenī)

## Kā palaist testus
```bash
npm test
```
## Kopsavilkums
- **Testu komplekti (test suites):** 2 passed / 2 total  
- **Testi:** 6 passed / 6 total  
- **Rezultāts:** visi testi izpildīti veiksmīgi  

## Testu tabula

| Tests | Sagaidāms | Rezultāts |
|------|-----------|----------|
| validateUser: pareizi dati (vārds ≥ 2, derīgs e-pasts, parole ≥ 6) | Atgriež `valid: true` | OK |
| validateUser: īss vārds | Atgriež `valid: false` | OK |
| validateUser: nederīgs e-pasts | Atgriež `valid: false` | OK |
| validateUser: īsa parole | Atgriež `valid: false` | OK |
| GET `/users` | Atgriež **200** un JSON ar `data` masīvu | OK |
| POST `/users` (nekorekti dati) | Atgriež **400** | OK |

## Piezīmes
- API testi veikti minimālā apjomā, pārbaudot statusa kodus un atbildes struktūru.
- Servera palaišana testu laikā tika sakārtota tā, lai testi neuzturētu atvērtu TCP savienojumu.