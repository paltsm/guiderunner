# GuideRunner

# Leírás:

Egy NestJS-en alapuló akalmazás, amely egy TypeScripten elkészített alkalmazás dokumentálását hivatott bemutatni.




## Előfeltételek:
  * NodeJS 18.16 (LTS)
  * Telepített MySQL / MariaDB
  
###### Az alábbi parancsokat PowerShellba vagy Visual Studio Code Terminal-ba írjuk be.

#### A parancs letölti a legújabb nestjs cli-t, amely lehetővéteszi hogy létrehozzuk a  nestjs projektet.
      npm i -g @nestjs/cli   
#### A parancs létrehozza a nestjs mappádat a szükséges fájlokkal.
    nest new projekted_neve
#### A package mangernel pedig válasszuk az 'npm'-et.


#### A parancs letölti azta csomagot amely lehetővé teszi az SQL adatbázissal való integrációt.
    npm install --save @nestjs/typeorm typeorm mysql2
    
   
   
   
   
#### A következő parancsok az alkalmazás hitelesítést fogja segíteni'?'
   ###### Ez a modul lehetővé teszi a HTTP-kérések hitelesítését vivőjogkivonatokkal
    npm i --save  passport passport-http-bearer
    
   ###### Ez a modul lehetővé teszi a felhasználónévvel és jelszóval történő hitelesítést.
    npm i --save-dev @types/passport-local
    
   ###### Ez a csomag, lehetővé teszi bármilyen strategy használatát passport-ból Nest.js-ig.
    npm i --save @nestjs/passport
    
# Az alkalmazás futtatása:

    # Hagyományos módban
    npm run start

    # Fejlesztői módban
    npm run start:debug

    # Production módban
    npm run start:prod
    
# Egységtesztek futtatása:  
    npm run test
   
# Végpontok:
## Accounts:
    # Regisztráció(POST):
    http://localhost:3000/accounts
    # Beviteli formátum:    
    {
     "username": "felhasználónév",
     "email": "emailcím@example.com",
     "password": "jelszó"
    }
    
    Bejelentkezés(POST):   
    http://localhost:3000/auth/login
    # Beviteli formátum: 
    {
     "email": "emailcím@example.com",
     "password": "jelszó"
    }
    
    Adatok szerkesztése(PUT):
    http://localhost:3000/accounts
    # Beviteli formátum:    
    {
     "username": "felhasználónév",
     "email": "emailcím@example.com",
     "password": "jelszó"
    }
    
    Adatok szerkesztése(PATCH):
    http://localhost:3000/accounts
    # Beviteli formátum:    
    {
     "username": "felhasználónév",
     "email": "emailcím@example.com",
     "password": "jelszó"
    }
    
    Kijelentkezés(DELETE):
    Auth - bearer(token beillesztése) - http://localhost:3000/auth/logout
    
    Törlés(DELETE):
    Auth - bearer(token beillesztése) - http://localhost:3000/account/delete

## Records:

    Record feltöltése(POST):
    http://localhost:3000/records
    # Beviteli formátum:     
    {
     "username":"felhasználónév",
     "gamename":"játéknev",
     "time":"10:10:10",
     "platform":"PC",
     "difficulty":"Normal",
     "youtubelink":"https://youtube.com"
    }
    
    Összes Lekérés(GET):    
    http://localhost:3000/records
 
    Csak egy Lekérés(GET):    
    http://localhost:3000/records/id
    
    Rekord Törlése 'id'-val(DELETE):
    http://localhost:3000/records/id
    
### Felhasznált metódusok leírása:

| Metódus  | Leírás |
| ------------- | ------------- |

| GET  | A GET-et arra használják, hogy adatokat kérjenek egy megadott erőforrásból |
| POST  | A POST arra szolgál, hogy adatokat küldjön a szervernek az erőforrás létrehozása/frissítése céljából | 
| PUT  | PUT is used to send data to a server to create/update a resource.  | 
| password  | Felhasználó által megadott jelszó  | 
| password  | Felhasználó által megadott jelszó  | 
   
### Beviteli adatok leírása:
    
| Bevitelimező  | Leírás | Típus |
| ------------- | ------------- | ------------- |
| username  | Felhasználó által adott speciális név | String |
| email  | Felhasználó által megadott email cím  | String |
| password  | Felhasználó által megadott jelszó  | String |







