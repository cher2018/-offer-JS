// 二维数组中的查找

function Find(target, array)
{
    var lenY = array.length;
    var lenX = array[0].length;
    for( var i = lenX-1, j=0; i>=0 && j<lenY; ) {
        if ( target > array[j][i] ) {
            j++;
        } else if ( target < array[j][i]) {
            i--;
        } else {
            return true;
        }
    }
    return false
}