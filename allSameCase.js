

function allSameCase(word) {
	if(word.toUpperCase() === word){
        return true;
    }else if(word.toLowerCase() === word){
        return true;
    }else{
        return false;
    }
}

/*  OR  */

function allSameCase(word) {
    return /^[a-z]+$/.test(word) || /^[A-Z]+$/.test(word);
}



/*  وصف التحدي
قم بكتابة دالة function تستقبل نص من نوع string ، تقوم الدالة function بالتأكد من الكلمة المدخلة هل جميع أحرفها نفس الحالة (Case sensitivity) أم لا . ثم تقوم الدالة بإرجاع النتيجة من نوع boolean.  */
