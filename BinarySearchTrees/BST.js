class node {
    constructor(value = null) {
        this.value = value;
        this.leftRef = null;
        this.rightRef  = null;
    }
}
function Tree(arr) {
    const root = buildTree(arr);
    function buildTree(arr) {
        if (!Array.isArray(arr) || arr.length === 0) {
            return null;
        }
        


    }
    return {
        root,
    }
}
export {Tree};