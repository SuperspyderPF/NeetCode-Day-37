minEatingSpeed = (p, h,m = Math.max(...p),l = 1, r = m,min = m) => { while (l <= r) { k = (l + r) >> 1; h1 = p.reduce((acc, cur) => { acc += Math.ceil(cur/k);  return acc },0); if (h1 <= h) { min = Math.min(min, k), r = k - 1 } else if (h1 > h)  l = k + 1; } return min }
    

     
         
         
            
            
        
          
            
            
         
    
    
