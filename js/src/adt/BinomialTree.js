

var __BinomialTree__ = function ( predicate ) {

	var BinomialTree = function ( value, children ) {
		this.value = value;
		this.children = children;
	};

	/**
	 * /!\ Can only be used to merge two trees of the same rank.
	 * /!\ Modifies both trees
	 */

	BinomialTree.prototype.merge = function ( other ) {

		if ( predicate( this.value, other.value ) <= 0 ) {
			this.children = this.children.concat( other );
			return this;
		}

		else {
			other.children = other.children.concat( this );
			return other;
		}

	};

	/**
	 * Method used to reset a tree element in order to reuse it
	 * somewhere else, e.g. insert it back in the same or a new
	 * heap.
	 */

	BinomialTree.prototype.detach = function () {
		this.children.splice( 0 );
		return this;
	};

	return BinomialTree;

};

exports.__BinomialTree__ = __BinomialTree__;
