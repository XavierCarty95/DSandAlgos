function findClosestBST(tree,target,closest){
	
	if(tree === null){
		return closest
	}
	
	if(Math.abs(target - closest) > Math.abs(target - tree.value)){
		  closest = tree.value
	}
	
	if(target < tree.value ){
		return findClosestBST(tree.left, target, closest)
	} else if (target > tree.value){
		return findClosestBST(tree.right, target, closest)
	} else {
		return closest;
	}
}
