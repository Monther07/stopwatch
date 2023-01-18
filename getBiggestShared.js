
function getBiggestShared(a, b) {
    // write your code here
   let common = a.filter(value => b.includes(value)); // => function arrow 
  		if (common.length === 0) return null;
  		return Math.max(...common); // we ues ... becuase the common is an array Becuase when we use Math.max should be like Math.max(5,6,7), but here it was inside an array Math.max(...[common])
 
}

/*
وصف التحدي
قم بكتابة دالة function تستقبل مصفوفتين وتقوم الدالة بإرجاع أكبر رقم تتقاطع المصفوفتين فيه

المخرجات المتوقعة
الاختبار 1

المدخلات (Inputs)
a = [1,2,4,5]
b = [3,4,7,11]
المخرجات (Outputs)
4
الاختبار 2

المدخلات (Inputs)
a = [0]
b = [0]
المخرجات (Outputs)
0
الاختبار 3

المدخلات (Inputs)
a = [90,95]
b = [90,95]
المخرجات (Outputs)
95
الاختبار 4

المدخلات (Inputs)
a = [10,2,3,12,3]
b = [54,12,33,1]
المخرجات (Outputs)
12
*/
