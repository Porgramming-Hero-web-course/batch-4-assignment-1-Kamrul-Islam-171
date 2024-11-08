{
    //

    const sumArray = (arr: number[]) : number => {
        const sum : number =  arr.reduce((acc, curr) => {
            return acc + curr;
        }, 0)
        return sum;
    } 


    const res : number = sumArray([1,2,3,4]);
    console.log(res)
    //
 }