// 数组中的重复数字

// 这个方法是剑指offer里面的方法，不过在牛客里会超时
function duplicate (numbers, duplication) {
  // 先判断数组是否为空
  if (numbers.length <= 0) {
    return false
  }
  for (let i = 0; i < numbers.length; i++) {
    // 当有一个数字超出范围返回false
    if (numbers[i] < 0 || numbers[i] >= numbers.length) {
      return false
    } else {
      // 当前这个数字与其的下标不对应的情况下，判断该数字与这以这数字的下标的内容是否相同，比如说数字为2时，判断下标为2的那个地方的数字是否也为2，是的话这个就是重复数字了
      while (numbers[i] !== i) {
        if (numbers[i] === numbers[numbers[i]]) {
          duplication[0] = numbers[i]
          return true
        }
        // 如果不是，就交换位置
        [numbers[i], numbers[numbers[i]]] = [numbers[numbers[i]], numbers[i]]
      }  
    }
  }
  return false
}

// 不超时的方法，但占用内存
function duplicate (numbers, duplication) {
  // 数组是否为空
  if (numbers === null) {
    return false
  }
  // 数组长度为1的时候
  if (numbers.length === 1) {
    return false
  }
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = numbers.length - 1; j > i; j--) {
      if (numbers[i] === numbers[j]) {
        duplication[0] = numbers[i]
        return true
      }
    }
  }
  return false
}

// 不超时的方法，但别人不占用内存，但我实际运行起来还是占的
function duplicate (numbers, duplication) {
  if (numbers === null) {
    return false
  }
  // 数组长度为1的时候
  if (numbers.length === 1) {
    return false
  }
  let obj = {}
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] in obj) {
      duplication[0] = numbers[i]
      return true
    } else {
      obj[numbers[i]] = 1
    }
  }
  return false
}