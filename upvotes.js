function  getVoteCount(params) {

return params.upvotes - params.downvotes
}


console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));
console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));