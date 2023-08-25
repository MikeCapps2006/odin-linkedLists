import Node from './node.js';

export default class LinkedList {
    constructor () {
        this.listHead = null;
    }

    append (value) {
        //adds a new node containing 'value' to the end of the list
        if (this.listHead == null) {
            this.prepend(value);
        } else {
            let tmp = this.listHead;
            while (tmp.nextNode != null){
                tmp = tmp.nextNode;
            }
            tmp.nextNode = new Node(value);
        }
    }

    prepend (value) {
        //adds a new node containing 'value' to the start of the list
        let tmp = null;
        if (this.listHead !== null){
            tmp = this.listHead;
        }
        this.listHead = new Node(value);
        this.listHead.nextNode = tmp;
    }

    size () {
        //returns the total number of nodes in the list
        let count = 0;
        let tmp = this.listHead;
        while(tmp != null){
            count ++;
            tmp = tmp.nextNode;
        }

        return count;

    }

    head () {
        //returns the first node in the list
        return this.listHead;
    }

    tail () {
        //returns the last node in the list
        let tmp = this.listHead;
        while(tmp.nextNode != null) {
            tmp = tmp.nextNode;
        }
        return tmp;
    }

    at (index) {
        //returns the node at the given 'index'
        let tmp = this.listHead;
        for(let i = 0; i < index; i++){
            tmp = tmp.nextNode;
            if (tmp == null) return 'There is no entry at this index';
        }
        return tmp;
    }

    pop () {
        //removes the last element from the list
        let cur = this.listHead;
        let prev = null;
        while(cur.nextNode != null){
            prev = cur;
            cur = cur.nextNode
        }
        prev.nextNode = null;
    }

    contains (value) {
        //returns true if the passed in 'value' is in the list and otherwise returns false.
        let tmp = this.listHead;
        while(tmp != null){
            if(tmp.value == value) return true;
            tmp = tmp.nextNode;
        }
        return false;
    }

    find (value) {
        //returns the index of the node containing 'value', or null if not found
        let tmp = this.listHead;
        let index = 0;
        while(tmp != null){
            if(tmp.value == value) return index;
            index ++;
            tmp = tmp.nextNode;
        }
        return null;
    }

    toString () {
        //represents your Linked Lists objects as strings, so you can print them out and preview them in the console. Format should be ( value ) -> (value) -> (value) -> null
        let tmp = this.listHead;
        let strOutput = '';
        while (tmp != null){
            strOutput += `( ${tmp.value} ) => `;
            tmp = tmp.nextNode;
        }
        strOutput += 'null';
        return strOutput;
    }

    insertAt (value, index) {
        //inserts the new node with the provided 'value' at the given index 
        if (this.listHead == null) return this.prepend(value);
        let curr = this.listHead;
        let prev = null;
        for(let i = 0; i < index; i++){
            prev = curr;
            curr = curr.nextNode;
            if(curr == null) {
                return this.append(value);
            }
        }
        let tmp = new Node(value);
        tmp.nextNode = curr;
        prev != null ? prev.nextNode = tmp : this.listHead = tmp;
        return 'Node inserted';
    }

    removeAt (index) {
        //removes the node at the given index
        if (this.listHead == null) return 'This list is empty';
        let tmp = this.listHead;
        let prev = null;
        if (index == 0) {
            if(tmp.nextNode != null){
                this.listHead = tmp.nextNode;
            } else {
                this.listHead = null;
            }
        }
        for (let i = 0; i < index; i++){
            if (tmp.nextNode == null) {
                return 'There is no entry at that index';
            }
            prev = tmp;
            tmp = tmp.nextNode;
        }
        prev.nextNode = tmp.nextNode;
        


    }
}