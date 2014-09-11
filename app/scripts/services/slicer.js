'use strict';

myApp.service('slicer', [function () {
    this.slicePost = function (post, postId, sliceValue) {
        if (post != undefined) {
            if (post.length >= sliceValue) {
                return post.slice(0, sliceValue) + "...";
            } else {
                return post;
            }
        } else {
            return 'No text';
        }
    };
}]);