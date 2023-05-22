/* RICHIESTA
Rifare l’esercizio della to do list.
Questa volta però ogni elemento della todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del task
- done, un booleano (true/false) che indica se il task è stato fatto oppure no

MILESTONE 1
Stampare all’interno di una lista HTML un item per ogni task.
Se la proprietà done è uguale a true, visualizzare il testo del task sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item una “x”: cliccando su di essa, il task viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo task, che quindi viene aggiunto alla lista dei task esistenti.

Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il task alla lista
2- cliccando sul testo dell’item, invertire il valore della proprietà done del task corrispondente (se done era uguale a false, impostare true e viceversa)
*/

const {createApp} = Vue;

createApp({
    data(){
        return{
            percorsoLogo: "img/logo.png",       // Percorso immagine logo
            newTask: "",                        // newTask = vuoto (default)
            errore: false,                      // errore NON presente (default)
            tasks: [
                {
                    text: "Seguire il recap dei Massimi",
                    done: true
                },
                {
                    text: "Completare l'esercizio",
                    done: false
                },
                {
                    text: "Aprire un ticket",
                    done: false
                },
                {
                    text: "Fare PUSH",
                    done: true
                },
            ]
        }
    },
    methods: {
        rimuoviItem(indice) {
            this.tasks.splice(indice, 1);       /* rimuovo UN solo elemento (1) in posizione x (INDICE) */
        },
        aggiungiTask() {
            // SE è stato inserito qualcosa in input E la lunghezza (in caratteri) è maggiore/uguale a 5
            if (this.newTask !== "" && this.newTask.length >= 5) {          
                this.tasks.unshift({            /* inserisci (unshift = push, ma all'inizio) */
                    text: this.newTask,         /* in chiave TEXT = valore preso da INPUT */
                    done: false                 /* FATTO = FALSO (default) */
                });
                this.errore = false;            /* Errore = NO */
            } else {                            /* ALTRIMENTI */
                this.errore = true;             /* Errore = SI */
            }
            this.newTask = "";                  /* Pulisci comunque input */
        },
        cambiaStato(item) {                     /* Cambio stato DONE/UNDONE */
            item.done = !item.done;             /* Setto che se DONE diventa UNDONE, viceversa */
        }
    }
}).mount("#app")                                /* Monto in ID app nel DOM */