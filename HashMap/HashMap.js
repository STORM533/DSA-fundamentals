function HashMap () {
    let loadFactor = 0.75;
    let capacity = 16;
    let bucket = new Array(capacity);
    function hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode%capacity;
        }
        return hashCode;
    }
     function resize () {
        
    }
    function set(key,value) {
        const Index = hash(key);
        if (Index < 0 || Index >= bucket.length) {
            throw new Error("Trying to access index out of bounds");
        }
        
        if(!bucket[Index]) {
            bucket[Index] = [];
        }
        for(let pair of bucket[Index]) {
            if(pair[0] === key) {
                pair[1] = value;
                return;
            }
        }
        bucket[Index].push([key,value]);
    }  
    function get(key) {
    const Index = hash(key);
        if (Index < 0 || Index >= bucket.length) {
            throw new Error("Trying to access index out of bounds");
        }
        for(let pair of bucket[Index]) {
            if(pair[0] === key) {
                return pair[1];
            }
        }
        return null;
    }
    function has(key) {
        const Index = hash(key) 
        if (Index < 0 || Index >= bucket.length) {
            throw new Error("Trying to access index out of bounds");
        }
        for(let pair of bucket[Index]) {
            if(pair[0] === key) {
                return true;
            }
        }
        return false;
    }
    function remove(key) {
        const Index = hash(key) 
        if (Index < 0 || Index >= bucket.length) {
            throw new Error("Trying to access index out of bounds");
        }
        for (let i = 0;i<bucket[Index].length;i++){
            if(bucket[Index][i][0]===key){
                bucket[Index].splice(bucket[Index][i]);
                return true;
            }
        }
        return false;
    }
    function length() {
        let count = 0;
        for(let i=0;i<bucket.length;i++) {
            if(!bucket[i]) continue;
            count = count + bucket[i].length;
        }
        return count;
    }
    function clear() {
        return bucket = new Array(capacity);
    }
    function keys() {
        let arr = [];
        for(let i = 0;i<bucket.length;i++) {
            if(!(bucket[i] === undefined)) {
                for(let pair of bucket[i]){
                    arr.push(pair[0]);
                }
            }
            
        }
        return arr;
    }
    function values () {
        let arr = [];
        for(let i = 0;i<bucket.length;i++) {
            if(!(bucket[i] === undefined)) {
                for(let pair of bucket[i]){
                    arr.push(pair[1]);
                }
            }
            
        }
        return arr;
    }
    function entries() {
        let arr = [];
        for(let i = 0;i<bucket.length;i++) {
            if(!(bucket[i] === undefined)) {
                for(let pair of bucket[i]){
                    arr.push(pair);
                }
            }
            
        }
        return arr;
    }
    return {
        hash,
        set,
        get,
        has,
        remove,
        length,
        clear,
        keys,
        values,
        entries,
    }

}
export{HashMap};