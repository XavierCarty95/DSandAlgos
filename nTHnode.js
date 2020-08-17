function findNth(list, n) {
    let nthNode = null;
    let length = 0;
    let tempNode = list.getHead();
    while (tempNode != null) {
      tempNode = tempNode.nextElement;
      length++;
    }
    let nthPos = length - n;
    if (nthPos < 0 || nthPos > length) {
      return null;
    }
    nthNode = list.getHead();
    for (var i = 0; i < nthPos; i++) {
      nthNode = nthNode.nextElement;
    }
    return nthNode;
  }
  