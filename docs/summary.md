# Projekta kopsavilkums

Šajā projektā izveidoju Node.js/Express projekta skeletu un sākotnējo serveri ar maršrutu **GET /health**.  
Konfigurēju **.env** un pievienoju MySQL savienojumu ar **mysql2/promise**, izveidojot shēmu tabulai **users**.  
Realizēju pamata funkcijas lietotāju izveidei un saraksta iegūšanai no datubāzes.  
Ieviesu datu validāciju un izveidoju **POST /users** ar kļūdu apstrādi (t.sk. e-pasta dublikāti).  
Pievienoju **GET /users** ar filtrēšanu pēc e-pasta un pagināciju, kā arī vienotu kļūdu formātu.  
Uzrakstīju vienību testus ar **Jest** validācijas funkcijai un minimālus API testus ar **Supertest**.  
Sagatavoju iesniedzamos artefaktus: Postman kolekciju, DB shēmu/seed un testēšanas pārskatu.