# Projekta prasības

## Projekta mērķis

Izveidot vienkāršu tīmekļa lietotni ar lietotāju reģistrāciju, autentifikāciju (login/logout) un satura (ziņu/ierakstu) pievienošanu un skatīšanu. Sistēmai jābūt saprotamai lietotājam un viegli uzturamai no administratora puses.

---

## Galvenās funkcionalitātes

* Lietotāju reģistrācija
* Lietotāju autentifikācija (ielogoties / izlogoties)
* Ziņu (posts) pievienošana
* Ziņu saraksta skatīšana
* Pamata validācija un kļūdu apstrāde
* Administratora pamata darbības (skatīt lietotājus, dzēst saturu)

---

## Lietotāja stāsti (User Stories)

### Lietotājs

* Kā lietotājs es vēlos reģistrēties sistēmā, lai varētu izveidot savu kontu.
* Kā lietotājs es vēlos ielogoties sistēmā, lai piekļūtu savam kontam.
* Kā lietotājs es vēlos izlogoties, lai aizsargātu savu kontu.
* Kā lietotājs es vēlos pievienot jaunu ziņu, lai dalītos ar informāciju.
* Kā lietotājs es vēlos redzēt visu ziņu sarakstu, lai varētu tās lasīt.

### Administrators

* Kā administrators es vēlos redzēt visu lietotāju sarakstu, lai pārvaldītu sistēmu.
* Kā administrators es vēlos dzēst neatbilstošas ziņas, lai uzturētu satura kvalitāti.

---

## Aktori

* Lietotājs
* Administrators

---

## Use Case saraksts

### Lietotājs

* Reģistrēties
* Ielogoties
* Izlogoties
* Pievienot ziņu
* Skatīt ziņas

### Administrators

* Skatīt lietotājus
* Dzēst ziņas

---

## Piezīmes

* Lietotāju dati tiek glabāti datubāzē
* Paroles tiek glabātas drošā veidā (hash)
* Sistēmai jānodrošina korekta kļūdu apstrāde un validācija
