# Testing Strategy

## Mērķis
Šī dokumenta mērķis ir definēt testēšanas pieeju projektam, lai nodrošinātu koda kvalitāti, pareizu funkcionalitāti un stabilu lietotnes darbību.

---

## Testu veidi

### Unit testi
**Apraksts:**  
Vienību testi pārbauda atsevišķas funkcijas vai metodes izolācijā.

**Piemērs:**  
- Lietotāja datu validācijas funkcija
- Paroles garuma pārbaude

**Rīki:**  
- Jest

---

### Integrācijas testi
**Apraksts:**  
Integrācijas testi pārbauda vairāku komponentu savstarpējo darbību (piemēram, API + datubāze).

**Piemērs:**  
- Lietotāja reģistrācija ar datu saglabāšanu datubāzē
- Ziņas izveide un tās atgriešana API atbildē

**Rīki:**  
- Jest
- Supertest

---

### Funkcionālie testi
**Apraksts:**  
Funkcionālie testi pārbauda sistēmas funkcionalitāti no lietotāja skatpunkta.

**Piemērs:**  
- Reģistrācija ar derīgiem datiem
- Kļūdas ziņojums, ja e-pasts ir tukšs

**Rīki:**  
- Postman

---

### End-to-End (E2E) testi
**Apraksts:**  
End-to-end testi pārbauda visu lietotnes darbības plūsmu no sākuma līdz beigām.

**Piemērs:**  
- Lietotājs reģistrējas, pieslēdzas un pievieno ziņu

**Rīki:**  
- (Plānots nākotnē, piemēram, Cypress)

---

## Testēšanas stratēģija

Projektā tiks izmantota sekojoša testēšanas pieeja:
- Unit testi biznesa loģikai un validācijai
- Integrācijas testi API galapunktiem
- Funkcionālie testi galvenajām lietotāja darbībām

**Mērķa pārklājums:**  
- Unit testi: vismaz 70% no biznesa loģikas
- Integrācijas testi: visi galvenie API endpointi

---

## Testu plāns

| Funkcionalitāte | Testa gadījums | Sagaidāmais rezultāts | Atbildīgais |
|-----------------|----------------|-----------------------|-------------|
| Reģistrācija | Derīgi dati | Lietotājs tiek izveidots | Izstrādātājs |
| Reģistrācija | Tukšs e-pasts | VALIDATION_ERROR | Izstrādātājs |
| Reģistrācija | Parole < 6 simboli | VALIDATION_ERROR | Izstrādātājs |
| Ziņas pievienošana | Derīgi dati | Ziņa saglabāta | Izstrādātājs |
| Ziņas pievienošana | Tukšs nosaukums | VALIDATION_ERROR | Izstrādātājs |
| Ziņu saraksts | Pieprasījums bez kļūdām | Ziņu saraksts atgriezts | Izstrādātājs |

---

## Secinājums
Šī testēšanas stratēģija palīdz nodrošināt koda kvalitāti, samazināt kļūdu skaitu un garantēt stabilu lietotnes darbību dažādos lietošanas scenārijos.
