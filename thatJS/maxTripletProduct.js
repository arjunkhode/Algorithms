function nismo(arr){arr.sort(); let min1=arr[0]; let min2=arr[1]; let max1=arr[arr.length-1]; let max2=arr[arr.length-2]; let max3=arr[arr.length-3];let pug =  (min1*min2*max1)>(max1*max2*max3)?min1*min2*max1:max1*max2*max3; let min3 = arr[2]; return pug>min1*min2*min3?pug:min1*min2*min3;}