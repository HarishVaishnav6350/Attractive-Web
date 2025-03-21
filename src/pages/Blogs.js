import React from 'react'

const Blogs = () => {
  // remove duplicate and bubble sort
  function RemoveDuplicate(arr){
    let res =[];
    let n = arr.length
    for(let i=0; i<n;i++){
      let j;
       for(j=0;j<i;j++)
         if(arr[i]===arr[j]) break;
         if (i===j) res.push(arr[i])
       
    }
    function Sort(res){
     
      let m = res.length
      for(let i =0;i<m-1;i++){
        for(let j=0;j<m-1-i;j++){
          if (res[j]>res[j+1]){
            let temp=res[j]
            res[j]=res[j+1]
            res[j+1]=temp
          }
        }
      } return res
    }return Sort(res)
  }
 console.log(RemoveDuplicate([1,2,3,4,5,6,7,8,9,0,1,2,3,6,5,4,7,8,9,5,4,1,2,1,4,0,1,5,5]))
  
  return (
    <div>
      blog
    </div>
  )
}

export default Blogs
// longest and smallest string
let Str = "GeeksforGeeks a computer science portal.";
function maya(str){
 let words= str.split(' ')
 let n = words.length
 if (words.length===0) return {smallest:'',largest:''}
 let smallest =words[0]
 let largest =words[0]
 for (let i =0;i<n;i++){
   let res = words[i]
   if(res.length>largest.length){
     largest = res
   }
   if(res.length<smallest.length){
     smallest=res
   }
 }
  return [smallest,largest]
}
console.log(maya(Str))