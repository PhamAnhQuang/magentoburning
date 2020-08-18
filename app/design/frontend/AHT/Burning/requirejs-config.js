/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

// var config = {
//     paths: {
//         owlCarousel:'js/owl.carousel'
//     },
//     shim: {
//         owlCarousel: {
//             deps: ['jquery']
//         }
//     }
// };

//slick
var config = {
    paths: {
        owlCarousel:'js/owl.carousel',
        owlcarouseldemo:'js/owl.carousel',
        slick:'js/slick.min'
    },
    shim: {
        owlCarousel: {
            deps: ['jquery']
        },
        owlcarouseldemo: {
            deps: ['jquery']
        },
        slick: {
            deps: ['jquery']
        }
    }
};