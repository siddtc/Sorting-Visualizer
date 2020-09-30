

/* Merge Sort Starts */

function getMergeSortAnimations(array) {
    let animations = [];
   mergeSort(array, animations,0,array.length-1);
    return [animations,array];
}
function mergeSort(array,animations,s,e)
{
   if(s===e)
   return;
    let m=s+Math.floor((e-s)/2);
    mergeSort(array,animations,s,m);
    mergeSort(array,animations,m+1,e);
    merge(array,animations,s,e);
}

function merge(array,animations,s,e)
{
    const m=s+Math.floor((e-s)/2);
    let i=s,j=m+1;
    const sortedArray=[];
    const ob={
        s:s,
        e:e,
        animation:[]
    }
    const animation=ob.animation;
    let k=0;
    while(i<=m&&j<=e)
    {
        animation.push(['comparison1',i,j]);
        
        if(array[i]<=array[j])
        sortedArray.push(array[i++]);
        else
        sortedArray.push(array[j++]);
        animation.push(['nheight',s+k,sortedArray[k]]);
        k++;
    }
    while(i<=m)
    {
        animation.push(['comparison1',i,i]);
        sortedArray.push(array[i++]);
        animation.push(['nheight',s+k,sortedArray[k]]);
        k++;
    }
    while(j<=e)
    {
        animation.push(['comparison1',j,j]);
        sortedArray.push(array[j++]);
        animation.push(['nheight',s+k,sortedArray[k]]);
        k++;
    }
    for(let i=s;i<=e;i++){
        array[i]=sortedArray[i-s];
    }
    animation.push(['exit',0,0]);
    animations.push(ob);
}

/* Merge Sort Ends here */




/* QuickSort Begins */

function getQuickSortAnimations(array)
{
    const animations=[];
    quickSort(array,animations,0,array.length-1);
    return [animations,array];
}
function pivot(array,animations,s,e)
{
    let i=s-1;
    let j=s;
    while(j<e)
    {
        animations.push(['comp1',j,e]);
        if(array[j]<=array[e])
        {
            i++;
            animations.push(['swap1',i,j]);
            animations.push(['swap2',i,j,array[i],array[j]]);
            animations.push(['swap3',i,j]);
            [array[i],array[j]]=[array[j],array[i]];
        }
        animations.push(['comp2',j,e]);
        j++;
    }
    return i+1;
}

function quickSort(array,animations,s,e)
{
    if(s>=e)
    return;
    animations.push(['p1',e]);
    let p=pivot(array,animations,s,e);
    animations.push(['p2',p,e,array[p],array[e]]);
    [array[p],array[e]]=[array[e],array[p]]
    quickSort(array,animations,s,p-1);
    quickSort(array,animations,p+1,e);
}


/* Quick Sort Ends here */



/* Bubble Sort begins */


function getBubbleSortAnimations(array){
    const animations=[];
    bubbleSort(array,animations);
    return [animations,array];
}

function bubbleSort(array,animations)
{
    for(let i=array.length-1;i>=0;i--)
    {
        for(let j=0;j<=i-1;j++)
        {
            animations.push(['comp1',j]);
            const k=j+1;
            if(array[j]>array[j+1])
            {
                animations.push(['swap1',j]);
                animations.push(['swap2',j,array[j],array[k]]);
                animations.push(['swap3',j]);
                [array[j],array[j+1]]=[array[j+1],array[j]];
            }
            animations.push(['comp2',j]);
         }
        animations.push(['last',i]);
    }
}







function  getInsertionSortAnimations(array)
{
    const animations=[];
    insertionSort(array,animations);
    return [animations,array];
}
function insertionSort(array,animations)
{
    for(let i=0;i<array.length;i++)
    {
       let j=i;
       while(j>=1)
       {
        animations.push(['comp1',j,j-1]);
        if(array[j-1]<=array[j])
        {
            animations.push(['comp2',j,j-1]);
            break;
        }
        else
        {
            animations.push(['swap1',j]);
            animations.push(['swap2',j,array[j],array[j-1]]);
            animations.push(['swap3',j]);
            [array[j],array[j-1]]=[array[j-1],array[j]];
        }
        animations.push(['comp2',j]);
        j--;
       }
    }
}


export {
    getMergeSortAnimations,
    getQuickSortAnimations,
    getBubbleSortAnimations,
    getInsertionSortAnimations
  }

