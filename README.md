Vite Rick & Morty  
===
**Descrizione**  
Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout del tipo di quello visto in classe.  

Al caricamento della pagina, effettuate una chiamata ajax all’API di Rick & Morty: https://rickandmortyapi.com/api/character e con i dati restituiti, stampate una card per ogni carta.  
Per i dati da stampare per ogni carta fare riferimento allo screenshot allegato

Documentazione:  
https://rickandmortyapi.com/documentation  

**Descrizione 2**  
Nell’header o in un componente dedicato (es SearchBar.vue) mettente un campo di ricerca per nome. 

ATTENZIONE! Per evitare inutili complicazioni il componente che contienete la barra di ricerca deve essere figlio diretto di App.vue    
All’invio della ricerca verranno configurati i criteri di ricerca presenti nello store, generato un $emit che invocherà una nuova chiamata API in App.vue 

**Bonus**  
1. Aggiungere la ricerca per status  
2. Aggiungere la ricerca per species  
3. Aggiungere un componente che si occupa della paginazione  
4. Far generare dinamicamente gli status e le species per le option di ricerca  
