/* A western man is trying to find gold in a river. To do that, he passes a bucket through the river's 
soil and then checks if it contains any gold. However, he could be more productive if he wrote an algorithm 
to do the job for him.

So, you need to check if there is gold in the bucket, and if so, return True/true. If not, return False/false.
*/

//Short solution with 'indexOf' method
const checkTheBucket = bucket => bucket.indexOf('gold') !== -1;   //Negative index means that 'gold' isn't present in the array.

//Shorter solution
const checkTheBucket = arr => arr.includes('gold');
