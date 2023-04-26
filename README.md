# GuideRunner

# Leírás:

Egy NestJS-en alapuló akalmazás, amely egy TypeScripten elkészített alkalmazás dokumentálását hivatott bemutatni.


## Előfeltételek:
  * NodeJS 18.16 (LTS)
  * Telepített MySQL / MariaDB
  
##### Az alábbi parancsokat PowerShellba vagy Visual Studio Code Terminal-ba írjuk be.

###### A parancs letölti a legújabb nestjs cli-t, amely lehetővéteszi hogy létrehozzuk a  nestjs projektet.
      npm i -g @nestjs/cli   
###### A parancs létrehozza a nestjs mappádat a szükséges fájlokkal.
###### A package mangernel pedig válasszuk az 'npm'-et.
    nest new projekted_neve



###### A parancs letölti azta csomagot amely lehetővé teszi az SQL adatbázissal való integrációt.
    npm install --save @nestjs/typeorm typeorm mysql2
    
   
   
   
   
#### A következő parancsok az alkalmazás hitelesítést fogja segíteni:
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
    
    # Watch módban
    npm run start:dev
    
# Egységtesztek futtatása:  
    npm run test
##### Tesztesetek a tests/thunderclient mappában találhatók
   
# Végpontok:
## Accounts:
    Regisztráció(POST):
    http://localhost:3000/accounts
    Beviteli formátum:    
    {
     "username":"TEST",
     "email":"TEST@gmail.com",
     "password":"TESTTEST"
    }
    
    Bejelentkezés(POST):   
    http://localhost:3000/auth/login
    Beviteli formátum: 
    {
     "email":"TEST@gmail.com",
     "password":"TESTTEST"
    }
    
    Adatok szerkesztése(PUT):
    http://localhost:3000/accounts/id
    Beviteli formátum:    
    {
     "username":"TEST",
     "email":"TEST@gmail.com",
     "password":"TESTTEST"
    }
    
    Adatok szerkesztése(PATCH):
    http://localhost:3000/accounts/id
    Beviteli formátum:    
    {
     "username":"TEST",
     "email":"TEST@gmail.com",
     "password":"TESTTEST
    }
    
    Kijelentkezés(DELETE):
    Auth - bearer(token beillesztése) - http://localhost:3000/auth/logout
    
    Törlés(DELETE):
    Auth - bearer(token beillesztése) - http://localhost:3000/account/delete

## Records:

    Record feltöltése(POST):
    http://localhost:3000/records
    Beviteli formátum:     
    {
     "username":"Gabe",
     "gamename":"Hades",
     "time":"10:10:10",
     "platform":"PC",
     "difficulty":"Normal",
     "youtubelink":"https://youtube.com"
    }
    
    Record szerkesztése(PUT):
    http://localhost:3000/records/id
    Beviteli formátum:     
    {
     "username":"Gabe",
     "gamename":"Hades",
     "time":"10:10:10",
     "platform":"PC",
     "difficulty":"Normal",
     "youtubelink":"https://youtube.com"
     }
    
    Record szerkesztése(PATCH):
    http://localhost:3000/records/id
    Beviteli formátum:     
    {
     "username":"Gabe",
     "gamename":"Hades",
     "time":"10:10:10",
     "platform":"PC",
     "difficulty":"Normal",
     "youtubelink":"https://youtube.com"
    }
    
    Összes Lekérés(GET):    
    http://localhost:3000/records
 
    Csak egy Lekérés(GET):    
    http://localhost:3000/records/id
    
    Törlése 'id'-val(DELETE):
    http://localhost:3000/records/id
  
## News:
    News feltöltése(POST):
    http://localhost:3000/news
    Beviteli formátum:     
    {
     "gamename":"Resident Evil 4 Remake",
     "title":"The Best",
     "content":"Re4 remake is the best remake ever!",
     "source":"IGN",
     "date":"2023-04-16"
    }
    
    News szerkesztése(PUT):
    http://localhost:3000/news/id
    Beviteli formátum:     
    {
     "gamename":"Resident Evil 4 Remake",
     "title":"The Best",
     "content":"Re4 remake is the best remake ever!",
     "source":"IGN",
     "date":"2023-04-16"
    }
    
    News szerkesztése(PATCH):
    http://localhost:3000/news/id
    Beviteli formátum:     
    {
     "gamename":"Resident Evil 4 Remake",
     "title":"The Best",
     "content":"Re4 remake is the best remake ever!",
     "source":"IGN",
     "date":"2023-04-16"
    }
    
    Összes Lekérés(GET):    
    http://localhost:3000/news
 
    Csak egy Lekérés(GET):    
    http://localhost:3000/news/id
    
    Törlése 'id'-val(DELETE):
    http://localhost:3000/news/id
    
## Games:
 
    Games feltöltése(POST):
    http://localhost:3000/games
    Beviteli formátum:     
    {
     "gamename":"Hades",
     "release":"2020",
     "genre":"RougeLike",
     "platform":"PC",
     "developer":"Normal",
     "description":"Hades is a god-like rogue-like dungeon crawler"
    }
    
    Games szerkesztése(PUT):
    http://localhost:3000/games/id
    Beviteli formátum:     
    {
     "gamename":"Hades",
     "release":"2020",
     "genre":"RougeLike",
     "platform":"PC",
     "developer":"Normal",
     "description":"Hades is a god-like rogue-like dungeon crawler"
    }
    
    Games szerkesztése(PATCH):
    http://localhost:3000/games/id
    Beviteli formátum:     
    {
     "gamename":"Hades",
     "release":"2020",
     "genre":"RougeLike",
     "platform":"PC",
     "developer":"Normal",
     "description":"Hades is a god-like rogue-like dungeon crawler"
    }
    
    Összes Lekérés(GET):    
    http://localhost:3000/games
 
    Csak egy Lekérés(GET):    
    http://localhost:3000/games/id
    
    Törlése 'id'-val(DELETE):
    http://localhost:3000/games/id
    
### Felhasznált metódusok leírása:

| Metódus  | Leírás | Egyéb megjegyzések |
| ------------- | ------------- | ------------- |
| `GET `  | Adatokat kér ki egy megadott erőforrásból. | ------------- |
| `POST`  | Adatokat küld a szervernek az erőforrás létrehozása/frissítése céljából. | A többszöri kérésnél ugyanazt az erőforrást  többször is létrehozza. |
| `PUT`  | Adatokat küld a szervernek az erőforrás létrehozása/frissítése céljából. | Többszöri kérésnél mindig ugyanaz az eredmény. |
| `PATCH`  | Az erőforrás részleges módosításainak alkalmazására szolgál. | ------------- |
| `DELETE`  | Törli a megadott erőforrást. | ------------- |


### Beviteli adatok leírása:
    
| Bevitelimező  | Leírás | Típus |
| ------------- | ------------- | ------------- |
| content  | A News oldal fő tartalma | string |
| date  | A News oldal hírének feltöltésénak ideje  | string |
| description  | A megjelenített játék leírása | string |
| developer  | A megjelenített játék fejlesztő csapata  | string |
| difficulty | Speedrun-oló játék nehézségét jelenti | string |
| email | Regisztrációhoz vagy bejelentkezéshez használt email cím | string |
| gamename | Speedrun(i) hozzáadásához vagy Game-hez(ii) használt játék neve | string |
| genre  |  A megjelenített játék műfaja | string |
| image  | A megjelenített játék képe  | string |
| password | Regisztrációhoz vagy bejelentkezéshez használt jelszó  | string |
| platform | A megjelenítendő Game vagy Speedrun hozzáadásának platformja(iii) | string |
| release  | A megjelenített játék megjelenésének ideje | number |
| source  | A News oldal hírének forrása  | string |
| time | Speedrun hozzáadásához használt idő | string |
| title  | A News(iv) oldal fő szalagcíme | string |
| username | Regisztrációhoz vagy Speedrun hozzáadásához használt speciális felhasználónév | string |
| youtubelink | Felhasználó által elvégzett Speedrun igazoló videója | string |

  * 1. felhasználói oldal, Speedrun = egy videojáték vagy egy játékszint lehető leggyorsabb befejezése
  * 2. fejlesztői oldal,felhasználó nem szerkesztheti
  * 3. platform = a játék ezekre az eszözökre jelent meg
  * 4. híreket megjelenítő oldal
  
### Felhasznált class-validator-ok:

| Validátorok | Leírás |
| ------------- | ------------- |
| IsNotEmpty  | A mező nem maradhat üresen | 
| IsString  | A mezőnek stringnek kell lennie("") |
| IsUrl  | A mezőnek url-nek kell lennie |
| MinLength  | A mező minimum karaktertartalma  |
| MaxLength  | A mező maximum karaktertartalma  |









