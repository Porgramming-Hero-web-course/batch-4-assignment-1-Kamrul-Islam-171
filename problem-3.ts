{
    //



    const countWordOccurrences = (str: string, serachWord: string): number => {
        const regex = new RegExp(`\\b${serachWord}\\b`, 'gi');
        const res = str.match(regex);
        return res ? res.length : 0;
    }

    

    const count : number = countWordOccurrences("I love Typescript! typescript", "typescript");

    console.log(count); 

    //
}