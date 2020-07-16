const data = [4, 0, 1, -2, 3];

function mutateTheArray(arr) {
    const result = [];
    const sum = (a,b,c) => a + b + c;

    for (let i = 0; i < arr.length; i++) {
        switch (i) {
            case 0: {
                result.push(sum(0,arr[i],arr[i+1]));
                break;
            } case arr.length - 1: {
                result.push(sum(arr[i-1],arr[i],0));
                break;
            } default: {
                result.push(sum(arr[i-1],arr[i],arr[i+1]));
                break;
            }
        }
    }

    return result;
}

console.log(mutateTheArray(data));
