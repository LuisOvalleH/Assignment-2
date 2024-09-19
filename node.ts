export class Node{
    private data : number;
    private next : Node | null;
    private prev : Node | null;

    constructor(data : number){
        this.data = data;
        this.next = null;
        this.prev = null;

    }

    public getdata() : number {
        return this.data;
    }
    public getnext() : Node | null {
        return this.next;
    }

    public getprev() : Node | null{
        return this.prev;
    }
    public setdata(newdata:number): void{
        this.data = newdata;
    }
    public setnext(newnext: Node | null): void{
        this.next = newnext;
    }
    public setprev(newprev: Node | null): void{
        this.prev = newprev;
    }



}