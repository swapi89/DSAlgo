class LinkedList{
    constructor() {
        this.list = null;
    }
    /* 
        This function is used for adding node to the linked list.
        num is the value to be added and index is the position where node needs to be inserted.
        If index is undefined, we add Node at the end of the Linked List.
    */
    addNode = (num, index) => {
        const node = {
            value: num,
            link: null
        }
        if(this.list === null){
            this.list = node;
            if(typeof index !== "undefined")
                console.log("The list is empty. Initializing the list with the node");
        }
        else {
            let pointer = this.list;
            let count = 1;
            if(typeof index !==  "undefined" && count === index){
                node.link = {...this.list};
                this.list = node;
            }
            else {
                while(pointer.link !== null){
                    if(typeof index!== "undefined"  && count+1 === index){
                        const rest = {...pointer.link};
                        node.link = rest;
                        pointer.link = node;
                        break;
                    }
                    else {
                        count++;
                        pointer =  pointer.link;
                    }
                }
                if(typeof index === "undefined")
                    pointer.link = node;
            }
            
        }
    }
    deleteNode = index => {
        if(typeof index === "undefined" || index<1){
            console.log("Incorrect index");
        }
        else if(this.list === null){
            console.log("The list is empty");
        }
        else {
            let count = 1;
            let pointer = this.list;
            let flag = false;
            if(index === 1){
                if(pointer.link === null){
                    this.list= null;
                    flag= true;
                }
                else{
                    this.list = this.list.link;
                    flag=true;
                }    
            }
            
            else{
                while(pointer.link !== null){
                    if(count+1 === index){
                        pointer.link = pointer.link.link;
                        flag=true;
                        break;
                    }
                    count++;
                    pointer= pointer.link;
                }
            }
            if(count <= index && flag === false)
                console.log(`The number of items in the linked list are lesser than ${index}`);
        }

    }
}