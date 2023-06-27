function Search(arr,item){
    let i,j,mid;
    i=0;
    j=arr.length-1;
   
    while(i<=j){
       mid=Math.floor((i+j)/2)
       if(arr[mid]===item){
           console.log(`${item} found at ${mid} as ${arr[mid]}`)
           break;
       }
       else if(arr[mid]<item){
           i=mid+1
       }
       else{
           j=mid-1;
       }
    }
    if(i>j){
       console.log("item not found")
    }
   }
   
   Search([1,2,3,4,6,7,8,10,15],6)