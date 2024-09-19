import { Node } from './node';


class Double_Linked_List{
    private head : Node | null = null;
    private tail : Node | null = null;
    private size : number = 0;

    constructor(){

    }

    public getHead(): Node | null {
        return this.head;
    }

    public getTail(): Node | null {
        return this.tail;
    }

    public printHeadAndTail(): void {
        if (this.head) {
            console.log('Head Data:', this.head.getdata());
        }
        if (this.tail) {
            console.log('Tail Data:', this.tail.getdata());
        } 
    }



    public isempty() : boolean{
        return this.size == 0;
    }

    public append(data : number): void{
        const newnode = new Node(data)
        if (this.isempty()){
            this.head = newnode;
            this.tail = newnode;
        }else{
            this.tail?.setnext(newnode);
            newnode.setprev(this.tail);
            this.tail = newnode 
        }
        this.size++
    }

    public printList(): void {
        let currentNode = this.head;
    
        while (currentNode !== null) {
            if (currentNode.getdata() % 2 == 0) {
                console.log(currentNode.getdata()); // Imprime el dato del nodo actual
            }
                currentNode = currentNode.getnext(); // Mueve al siguiente nodo
        }
    }


}

const list = new Double_Linked_List();

// Agregar algunos nodos
list.append(5);
list.append(10);
list.append(15);
list.append(11);
list.append(12);
list.append(113);



// Imprimir la lista
list.printList();

list.printHeadAndTail();
