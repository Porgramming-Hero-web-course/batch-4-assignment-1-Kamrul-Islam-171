{
    //


 
    const removeDuplicates = (arr : number[]) : number[] => {
        return [...new Set(arr)];
    }


    const res : number[] = removeDuplicates([1,2,3,1,2,3]);
    console.log(res);

    //
}