const app = Vue.createApp({
    data() {
        return {
            cart: 1,
            product: ' Select Team Fitted Hats',
            brand: 'New Era',
            description: '$75.99 + FREE SHIPPING ',
            image: './assets/images/hat_blue.jpg',
       
            inventory: 100,
            onSale: false,
            details: ['Select Team New Era Authentic Collection On Field Low Profile Game 59FIFTY Fitted Hat'],
            variants: [
                { id: 2234, color: 'red', image: './assets/images/hat_red.jpg', quantity: 50},
                { id: 2235, color: 'navy', image: './assets/images/hat_blue.jpg', quantity: 50},
                { id: 2236, color: 'yellow', image: './assets/images/hat_yellow.jpg', quantity: 50},
                { id: 2237, color: 'teal', image: './assets/images/hat_green.jpg', quantity: 50},
            ],
            sizes: ['Yankees, Red Sox, Padres, Mariners']
        }
    },
    methods: {
        addToCart(){
            this.cart += 1;
        },
        updateImage(variantImage) {
            this.image = variantImage;
        },
    },
        computed: {
            title() {
                return this.brand + '' + this.product
            },
            isActive(){
                return this.inventory > 0;
            },
            inStock() {
                return this.inventory > 0;
            }
        }
})






document.addEventListener("DOMContentLoaded", function() {
    const reviewForm = document.getElementById('review-form');
  
    reviewForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const formData = new FormData(reviewForm);
      const reviewData = {};
  
      formData.forEach((value, key) => {
        reviewData[key] = value;
      });
  
      console.log('Review Data:', reviewData);
      alert('Thank you for your review!');
      reviewForm.reset();
    });
  });